# GoMyTruck Feature Breakdown

| Feature | Primary User Role(s) | Technical Component / Module | Description |
| :--- | :--- | :--- | :--- |
| **Instant Booking (Auto-Dispatch)** | Customer, Driver | `booking`, `dispatch` | Automated assignment of nearby trucks based on predefined pricing rules. |
| **Marketplace Bidding** | Customer, Driver, Fleet Owner | `marketplace`, `marketplace.gateway.ts` | Real-time auction system (`BidWindow`, `MarketplaceBid`) with live negotiation. |
| **Live GPS Tracking** | Customer, Admin | `tracking`, `tracking.gateway.ts`, Mapbox | Real-time vehicle telemetry and location history logging. |
| **Dynamic Pricing Engine** | Admin, System | `pricing`, `VehicleTypePricing` | Configurable matrix for base fare, distance, time, and surcharges. Immutable audit log. |
| **Multi-Tier Wallet System** | All Roles | `wallet`, `driver-wallet`, `fleet-wallet` | Ledger system supporting cash float models and automated reconciliation. |
| **Automated Bank Payouts** | Driver, Fleet Owner, Worker | `payment`, RazorpayX | Scheduled or instant withdrawals with pre-verification (Penny Drop). |
| **ULIP Verification** | Driver, Fleet Owner, Admin | `ulip`, `compliance` | Automated verification of DL (SARATHI) and RC (VAHAN) with immutable audit trails. |
| **DigiLocker KYC** | Worker | `auth`, `workforce` | Secure Aadhaar/PAN verification via PKCE OAuth 2.0 flow. |
| **Fleet Management** | Fleet Owner, Admin | `fleet`, `fleet-owner` | Management of multiple vehicles, drivers, compliance documents, and bulk payments. |
| **Workforce Gamification** | Worker | `gamification`, `Badge` | Tiered progression system awarding points and badges based on performance metrics. |
| **Enterprise B2B Domains** | B2B Customer | `organization` | Feature-flagged module for managing corporate branches, departments, and teams. |
| **Admin Control Center** | Admin | Admin React App, `reports` | Comprehensive dashboard for dispatch, finance oversight, compliance, and user management. |
| **OTP-Based Proof of Delivery** | Driver, Customer | `booking`, `notifications` | Secure delivery verification utilizing Redis TTL for OTP management. |
| **In-App Messaging & Notifications** | All Roles | `notifications`, Firebase Cloud Messaging | Contextual push notifications and internal messaging for bids and support. |
