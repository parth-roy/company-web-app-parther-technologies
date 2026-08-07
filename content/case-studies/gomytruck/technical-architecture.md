# GoMyTruck Technical Architecture

## System Design Philosophy
GoMyTruck is engineered as a **Modular Monolith**. This deliberate design choice avoids the operational overhead of microservices while maintaining strict logical separation of domains. The application logic is divided into 31 distinct modules (e.g., auth, booking, marketplace, tracking).

## Core Backend Stack
- **Runtime:** Node.js + TypeScript (Express v5)
- **Database:** PostgreSQL hosted on DigitalOcean, accessed via Prisma v5.22. Includes `pg_trgm` extension for optimized text search.
- **Caching & Async Queues:** Upstash Redis (IORedis v5) and BullMQ v5 for reliable background job execution.

## Real-Time Infrastructure (WebSockets)
Real-time communication is critical for logistics. GoMyTruck utilizes Socket.io v4.8, segmented into three specialized gateways:
1.  `tracking.gateway.ts`: Processes high-frequency GPS telemetry.
2.  `workforce.gateway.ts`: Handles dispatch events and status updates for gig workers.
3.  `marketplace.gateway.ts`: Manages the live bidding engine, broadcasting bid revisions and negotiation messages.

## Asynchronous Processing & Background Jobs
Background tasks are coordinated using node-cron v4 and BullMQ:
-   `startEngagementJobs()`: Manages user engagement triggers.
-   `startCleanupJobs()`: Handles data retention and system maintenance.
-   `startMarketplaceJobs()`: Evaluates bid windows, expires stale bids, and manages auction state transitions.

## Payment & Financial Architecture
The system employs a sophisticated double-entry ledger spanning four wallet types (Customer, Driver, Fleet, Worker).
-   **Float Model:** Driver wallets can maintain a negative balance to account for platform commissions on cash trips. Strict debt limits trigger notifications and account suspension logic.
-   **Inbound Payments:** Razorpay integration for customer top-ups.
-   **Automated Payouts:** RazorpayX handles outbound IMPS/NEFT transfers. Safety mechanisms include Penny Drop (FAV) verification, idempotent webhook processing via the `ProcessedWebhook` table, and optimistic locking (`SELECT FOR UPDATE`) to prevent race conditions during withdrawals.

## Security & Compliance Layers
-   **Authentication:** JWT with Argon2id hashing and Redis-backed OTPs.
-   **Rate Limiting:** Tiered limits implemented at the gateway (e.g., 100 req/15 min global; 10 req/15 min for Auth endpoints).
-   **Government Integration (ULIP):** Direct API integration with SARATHI (Driving License) and VAHAN (Vehicle RC). All responses are stored immutably in `VerificationLog`.
-   **DigiLocker KYC:** Implements full PKCE OAuth 2.0 flow for secure worker onboarding.

## Client Applications
-   **Mobile:** Three distinct Flutter applications (Customer, Driver, Workforce) leveraging `flutter_riverpod` for state management, Mapbox for navigation, and Firebase Cloud Messaging for push notifications.
-   **Admin Panel:** Built with React, Vite, TypeScript, and TanStack Router, providing a comprehensive dashboard for operations, finance, and compliance.
