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



## Multiplayer flow

Host:
`Friends Auction → Select Team → Create Room → Share 6-digit code → Start Multiplayer Auction`

Players:
`Friends Auction → Select Team → Enter Room Code → Join Room`

The host is authoritative for the auction clock and game state. Human bids are sent to the host and then synchronized to all connected players.



