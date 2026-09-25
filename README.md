# BIDORAX — Cricket Auction V10 Multiplayer

Online IPL-style cricket auction game built with HTML, CSS and JavaScript.

## Features
- 10 franchises
- ₹120 Cr purse per team
- 18-player maximum squad in Expert AI / 24-player maximum squad in multiplayer
- 11-player minimum before final results
- Marquee, Batter, Bowler, All-Rounder, Wicketkeeper and Uncapped pools
- Unsold re-auction
- Expert AI bidding using role need, purse reserves, player value and scarcity
- **AI Fast Forward = 3× speed only** — it never skips the current player or forces an unsold result
- Online Friends Auction rooms using Supabase Realtime Broadcast
- Creator-only End Auction and Skip Pool controls
- Vercel/GitHub Pages compatible

## Online multiplayer setup

1. Create a Supabase project.
2. Open `supabase-config.js`.
3. Enter your Supabase Project URL and browser-safe anon/publishable key.
4. Commit the changed file to GitHub.
5. Vercel automatically redeploys the connected repository.
6. Open the Vercel URL on two or more devices/browsers.

See **SUPABASE_SETUP.md** for the exact setup steps.

### Security note
Never put a Supabase `service_role` key in this frontend project. Only use the browser-safe publishable/anon key.

## Multiplayer flow

Host:
`Friends Auction → Select Team → Create Room → Share 6-digit code → Start Multiplayer Auction`

Players:
`Friends Auction → Select Team → Enter Room Code → Join Room`

The host is authoritative for the auction clock and game state. Human bids are sent to the host and then synchronized to all connected players.


## V20 Update
- First hero image replaced with the supplied trophy-winning cricket image.
- Hero caption: WIN THE BID • WIN THE AUCTION.
- Player swap AI OVR acceptance window changed from ±3 to ±4.
- Multiplayer swap routing strengthened so the target team owner receives the proposal and only that owner can accept it.
