# SCHEMA_CONTRACT_v1

All sections marked "Frozen" are immutable once accepted. Backend is the source of truth.

---

## 1. PRODUCT SCHEMA (Frozen)  
Purpose: display + stock control

Product (document)
- `id` — string (doc id)
- `slug` — string (URL-safe, unique)
- `name` — string
- `description` — string
- `price` — number (minor units; decision is frozen, e.g., cents)
- `currency` — string (`"KRW" | "USD" | "PLN"`)
- `category` — enum (see Category enum)
- `stock` — integer (≥ 0)
- `isActive` — boolean
- `imageUrls` — `string[]`
- `createdAt` — timestamp
- `updatedAt` — timestamp

Category enum (freeze once)
- Example values: `outerwear`, `tops`, `bottoms`, `accessories`  
Frontend may filter by these values; never invent new categories on the client.

---

## 2. ORDER SCHEMA (Frozen)  
Purpose: transactional truth

Order
- `id` — string
- `userId` — string (nullable if guest allowed)
- `items` — array of:
    - `productId` — string
    - `name` — string (snapshot)
    - `price` — number (snapshot, minor units)
    - `quantity` — integer
- `totalAmount` — number (calculated server-side)
- `currency` — string
- `status` — enum (see Order Status enum)
- `paymentProvider` — `"stripe" | "toss"`
- `paymentIntentId` — string
- `createdAt` — timestamp
- `updatedAt` — timestamp

Note: Prices in items are snapshots, not references.

---

## 3. ORDER STATUS ENUM (Frozen)  
Non-negotiable once frozen.

Values:
- `pending` — order created, payment not confirmed
- `paid` — payment confirmed via webhook
- `failed` — payment failed or expired
- `cancelled` — admin or system cancel

Rules:
- Only backend changes status.
- No skipping states.
- No `refunded` state in this version.

---

## 4. TRANSACTION SCHEMA (Optional but Recommended)  
Purpose: audit trail & debugging

Transaction
- `id` — string
- `orderId` — string
- `paymentIntentId` — string
- `provider` — string
- `status` — `initiated | succeeded | failed`
- `rawPayload` — object (webhook snapshot)
- `createdAt` — timestamp

Frontend never writes/changes this.

---

## 5. LANGUAGE KEYS FORMAT (Frozen)  
Dev B owns content; format is shared.

Pattern:
- `domain.section.key`

Examples:
- `checkout.out_of_stock`
- `checkout.payment_failed`
- `order.status.pending`
- `order.status.paid`

Backend returns keys; frontend translates.

---

## 6. GLOBAL RULES (Frozen)
- Stock lives only in `products.stock`.
- Frontend never calculates totals.
- Payment confirmation only via webhook.
- Backend is the single source of truth.

---

## Purchase Flow (v1)
Step 1. Client reques purchase, sends: 
- productID
- quantity
Step 2:
- product exists ?
- stock >= quantity ?
- if NO -> checkout.out_of_stock
Step 3 if YES:
- Re-check stock
- reduce stock
- status = pending
Step 4: 
- Order exists
- Stock already reserved
- User redirected to payment
Step 5 Webhook confirms payment:
- Verify signature
- Find order
- Mark order → paid
Step 6 Failure handling
- If payment fails:
- Set order → failed
- Restore stock

--- 

## Firestore Collections (v1)

### users
**Purpose**
- Stores user profile data linked to Firebase Authentication
- Acts as the ownership anchor for orders

**Read access**
- User: read own document only
- Backend services: read all users

**Write access**
- User: limited (non-critical profile fields only)
- Backend services: full access

**Critical rules**
- Document ID must equal Firebase Auth UID
- Roles and permissions are never writable from client
- Authentication is the single source of truth for identity


### products
**Purpose**
- Source of truth for product data, pricing, and stock levels

**Read access**
- Public (all clients)

**Write access**
- Backend services / admin only

**Critical rules**
- Stock can only be modified inside backend transactions
- Product price is authoritative only at purchase time
- Products are global shared resources (not user-owned)


### orders
**Purpose**
- Represents purchase intent and order lifecycle
- Drives UI state (pending / paid / failed)

**Read access**
- User: read own orders only
- Backend services: read all orders

**Write access**
- Backend services only

**Critical rules**
- Order is created before payment
- Order contains a snapshot of product data (price, name)
- Order status lifecycle is strictly:
  pending → paid | failed
- Orders are never deleted (audit safety)


### transactions
**Purpose**
- Stores payment gateway confirmations and metadata
- Enables reconciliation, auditing, and idempotency

**Read access**
- Backend services only

**Write access**
- Backend services only (webhooks, server logic)

**Critical rules**
- Each transaction references exactly one order
- Webhook handling must be idempotent
- Transaction records are immutable once written

---

## Security Rules Principles (v1)

- The client is always treated as untrusted.
- Only authenticated users may read their own user data.
- Users may never modify roles, permissions, or system fields.
- Product data is publicly readable but never writable from the client.
- Product stock can only be modified by backend services inside transactions.
- Orders can only be created and updated by backend services.
- Users may read only their own orders.
- Order status cannot be changed by the client under any circumstances.
- Transactions are backend-only readable and writable.
- Payment confirmation is accepted only via verified webhooks.
- Backend logic must be idempotent to handle repeated events safely.

---
Version: SCHEMA_CONTRACT_v1