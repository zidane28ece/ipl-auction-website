# BIDORAX — Online Multiplayer Setup

This version uses **Supabase Realtime Broadcast** for room creation, joining, live bids, auction state, and the shared auction timer. No server code is required for the frontend.

## 1. Create a Supabase project

1. Open https://supabase.com/
2. Create/sign in to your account.
3. Create a new project.
4. Wait until the project is ready.

## 2. Copy the browser credentials

In Supabase open **Project Settings → API**.

Copy:
- **Project URL**
- **Publishable key / anon key** (use the browser-safe key, NOT `service_role`)

## 3. Put the values in this project

Open:

`supabase-config.js`

Change:

```js
window.SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_PROJECT_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

to your real values.

Example shape only:

```js
window.SUPABASE_CONFIG = {
  url: 'https://xxxxxxxxxxxx.supabase.co',
  anonKey: 'eyJhbGciOi...'
};
```

Do not use a `service_role` key in this file.

## 4. Re-upload to GitHub

Replace the old `supabase-config.js` with the configured file and commit the change.

Vercel will automatically redeploy the connected GitHub repository.

## 5. Test multiplayer

Use two browser windows/devices:

### Host
1. Open the Vercel website.
2. Select **Friends Auction**.
3. Select a team.
4. Click **CREATE ROOM**.
5. Copy the 6-digit room code.
6. Wait for friends to join.
7. Click **START MULTIPLAYER AUCTION**.

### Player 2
1. Open the same Vercel URL.
2. Select **Friends Auction**.
3. Select a different team.
4. Enter the 6-digit code.
5. Click **JOIN ROOM**.
6. Wait for the host to start.

The host is authoritative for the auction timer and state. Human bids from other players are sent to the host and then broadcast to everyone.

## Fast Forward behavior

**FAST FORWARD is AI mode only.** It toggles the current auction between normal speed and **3× speed**.

It does NOT:
- skip the current player
- mark a player unsold
- jump to the next pool
- force a result

The existing expert-bot bidding logic continues to decide whether an AI team bids. If no AI team wants the player, the normal timer can expire and the player can become unsold according to the existing auction logic.
