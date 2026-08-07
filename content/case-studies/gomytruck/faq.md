# GoMyTruck — Frequently Asked Questions

## For Prospects, CTOs & Enterprise Decision Makers

---

### 1. What is GoMyTruck?

GoMyTruck is a production-grade digital freight marketplace built by Parther Technologies for intra-city and inter-city commercial logistics in West Bengal, India. It replaces traditional phone-based, broker-mediated truck booking with a transparent, real-time platform supporting instant dispatch and competitive private bidding.

---

### 2. What was the core technical challenge in building GoMyTruck?

The fundamental challenge was orchestrating five stakeholder types (customers, drivers, fleet owners, gig workers, admins) across three mobile apps, a web admin panel, and a backend with 31 modules — while keeping real-time tracking, live bidding, and financial reconciliation working simultaneously without race conditions or data inconsistencies.

---

### 3. Why did Parther Technologies choose a Modular Monolith over microservices?

The architecture specification explicitly states "You do NOT need microservices now. Use Modular Monolith Architecture. BEST for startup." The 31 domain modules are cleanly separated but deployed as a single unit, avoiding the operational overhead of service discovery, distributed tracing, and inter-service authentication — while still enabling module-level extraction in the future.

---

### 4. How does GoMyTruck handle cash trips when drivers collect money directly?

GoMyTruck uses a float-based driver wallet model. When a driver completes a cash trip, the platform debits its commission from the driver's wallet — which can go negative. Debt is tracked in real time: at Rs 500, the driver gets a push notification; at Rs 2,000+ for over 24 hours, their status is set to BREAK and admin is notified. Debt is cleared via online payment, physical cash drop at office (recorded by admin), or offset from the next online trip's earnings.

---

### 5. How are driver and worker bank payouts automated?

Via RazorpayX. The flow is: (1) Create RazorpayX Contact (cached on entity record), (2) Penny Drop / Fund Account Verification of bank details, (3) Create Payout (IMPS for under Rs 2L, RTGS for above), (4) Webhook confirmation captures UTR number. Drivers choose their schedule: Instant (IMPS, Rs 5 fee), Daily (NEFT, free, midnight CRON), Weekly (free, every Sunday).

---

### 6. How does GoMyTruck prevent financial fraud (duplicate payouts, double debits, webhook replay)?

Seven independent safety mechanisms: unique `referenceId` index prevents double wallet credits; `ProcessedWebhook` table (immutable, never deleted) prevents webhook replay; server fetches payment amounts from Razorpay directly (client amounts never trusted); `X-Payout-Idempotency` header prevents duplicate RazorpayX payouts; `SELECT FOR UPDATE` prevents race conditions on concurrent wallet debits; Penny Drop validates bank account before first payout; bank details snapshotted in `WithdrawalRequest` at creation, immune to subsequent bank account changes.

---

### 7. How does GoMyTruck verify driver licenses and vehicle registrations?

Via ULIP (Unified Logistics Interface Platform), the Ministry of Road Transport's API gateway. SARATHI API verifies driving licenses against government records (DL number + DOB match, permit type validation). VAHAN API verifies vehicle registration certificates (RC number, chassis number, engine number cross-check). Every government API call is logged immutably in `VerificationLog` with the raw JSON response, creating an auditable legal trail.

---

### 8. How are gig workers (loading/unloading labor) verified?

Workers are verified via DigiLocker, India's official digital document repository. The system implements a full PKCE OAuth 2.0 flow to fetch Aadhaar and PAN documents from the government's DigiLocker. Only the last 4 digits of the Aadhaar number are stored. All ephemeral OAuth session fields are cleared immediately after verification completes.

---

### 9. What does the bidding engine look like technically?

The `MarketplaceBid` entity has an immutable linked-list of `BidRevision` records, each storing a complete pricing snapshot. Revisions are append-only; the previous revision is linked. `BidMessage` enables real-time chat between customer and bidder. `BidAward` captures the final selection with a payment deadline. A dedicated `marketplace.gateway.ts` WebSocket gateway broadcasts all events live. Background `startMarketplaceJobs()` handle window expiry and auto-close.

---

### 10. How is the pricing engine designed to be fair to drivers?

The `VehicleTypePricing` model includes a `tcoPerKm` field — the actual Total Cost of Ownership per kilometer for each vehicle type based on West Bengal 2026 economics. When a calculated fare would pay the driver below this floor, the platform compresses its commission to zero or subsidizes the trip. Every subsidy is recorded in `DriverPayoutSubsidy` for financial audit. The surge hard cap is set at 1.5x for intra-city trips, preventing predatory pricing.

---

### 11. How many mobile apps does GoMyTruck have, and why separate apps?

Three: Customer App, Driver + Fleet App, and Workforce App. The deliberate separation ensures each app's complexity stays bounded. The driver UI stays simple ("drivers use low-end phones, use app while driving, need operational simplicity" per architecture docs). Independent release cycles mean a Driver App fix doesn't require a Customer App update.

---

### 12. What does the admin panel cover?

The React + Vite admin panel has 39 route files covering: dashboard KPIs, bookings management, live GPS map of all vehicles, manual dispatch, driver/worker verification, fleet compliance and document expiry tracking, six finance modules (earnings, revenue, wallets, subscriptions, refunds, withdrawals), compliance + ULIP status, support ticketing, pricing configuration (no code deploys needed), gamification admin, training management, push notification broadcasting, and lead management.

---

### 13. Is there an enterprise B2B layer?

Yes. An Organization domain supports companies with branches, departments, teams, designations, and employment types (GIG_INDEPENDENT, FLEET_MANAGED_CONTRACTOR, THIRD_PARTY_AGENCY, FULL_TIME_EMPLOYEE, PART_TIME_EMPLOYEE). It is feature-flagged via `ORGANIZATION_DOMAIN_ENABLED` environment variable (default: off, fail-closed) and enables a B2B SaaS layer on top of the core logistics marketplace.

---

### 14. How is the GoMyTruck backend designed for operational resilience?

Graceful shutdown handlers (SIGTERM/SIGINT) close the HTTP server, disconnect Prisma, and quit Redis cleanly before exit. The `/health` endpoint performs deep PostgreSQL + Redis ping checks for UptimeRobot monitoring. BullMQ workers have retry semantics for failed jobs. Database migrations use a split URL strategy (pgBouncer for runtime, direct URL for migrations).

---

### 15. What is the Proof of Delivery (POD) mechanism?

Each `BookingStop` supports a `podPhotoUrl` field. Drivers capture a photo before completing the stop, uploaded to AWS S3. The `podVerifiedAt` timestamp records the exact delivery moment. For trip initiation, a 4-digit `pickupOtp` is shown to the customer and entered by the driver, preventing GPS-based false starts. Workforce job completion uses a separate `completionOtp` flow.

---

### 16. Can GoMyTruck scale to other geographies?

The `ServiceabilityConfig` model controls which geographic areas the platform serves at COUNTRY, STATE, CITY, PINCODE, or ZONE level — extensible without code changes. Currently configured for India (COUNTRY level). Future expansion to new states or cities requires only admin database entries, not code deployments.

---

### 17. What is the gamification system for workers?

Workers earn points on verified completion of specific metrics (total jobs, ratings, acceptance rate, on-time rate, earnings). Points accumulate toward configurable `Badge` achievements. Workers progress through Bronze, Silver, Gold, Platinum, and Diamond tiers, which are visible on their profile and used for trust signals in job matching. The admin panel's `platform.gamification.tsx` module (13.5KB) manages all badge configuration.

---

### 18. How does Parther Technologies approach the zero-hallucination engineering standard?

Every feature in GoMyTruck is traceable to verified source code, database schema models, route files, or architecture documentation. The schema's `PricingAuditLog`, `VerificationLog`, and `ProcessedWebhook` tables are explicitly marked as permanent (never to be deleted) in code comments, reflecting a design philosophy where audit integrity is a first-class engineering concern, not an afterthought.