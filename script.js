
const UNCAPPED_INDIAN_POOL_V5 = [
  {"name":"Ayush Mhatre","role":"Batsman","ovr":84,"category":"uncapped","capped":false,"base":0.2,"matches":8,"runs":245,"wickets":0,"sr":154,"bat":88,"bowl":35,"fin":87},
  {"name":"Angkrish Raghuvanshi","role":"Batsman","ovr":85,"category":"uncapped","capped":false,"base":0.2,"matches":10,"runs":430,"wickets":0,"sr":151,"bat":90,"bowl":38,"fin":88},{"name": "Ayush Doseja", "role": "Batsman", "ovr": 72, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Abhinav Manohar", "role": "Batsman", "ovr": 73, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Aman Khan", "role": "All-rounder", "ovr": 71, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Anuj Rawat", "role": "Wicketkeeper", "ovr": 70, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Arshin Kulkarni", "role": "All-rounder", "ovr": 70, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Ashutosh Sharma", "role": "Batsman", "ovr": 78, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Baba Indrajith", "role": "Wicketkeeper", "ovr": 70, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Bharat Sharma", "role": "Wicketkeeper", "ovr": 71, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Dhruv Jurel", "role": "Wicketkeeper", "ovr": 78, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Harpreet Brar", "role": "All-rounder", "ovr": 74, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Himanshu Rana", "role": "Batsman", "ovr": 70, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Himanshu Sharma", "role": "Bowler", "ovr": 68, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Ishan Porel", "role": "Bowler", "ovr": 68, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Jagadeesan Narayan", "role": "Wicketkeeper", "ovr": 70, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Kumar Kushagra", "role": "Wicketkeeper", "ovr": 72, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Manan Vohra", "role": "Batsman", "ovr": 67, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Mujeeb-style?", "role": "Bowler", "ovr": 65, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Nehal Wadhera", "role": "Batsman", "ovr": 78, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Nishant Sindhu", "role": "All-rounder", "ovr": 69, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Prabhsimran Singh", "role": "Wicketkeeper", "ovr": 74, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Prerak Mankad", "role": "All-rounder", "ovr": 70, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Priyansh Arya", "role": "Batsman", "ovr": 75, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Raj Angad Bawa", "role": "All-rounder", "ovr": 68, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Rajat Dey", "role": "Batsman", "ovr": 68, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Ramandeep Singh", "role": "All-rounder", "ovr": 73, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Rasikh Salam", "role": "Bowler", "ovr": 72, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Suyash Sharma", "role": "Bowler", "ovr": 73, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Tanush Kotian", "role": "All-rounder", "ovr": 74, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Vaibhav Arora", "role": "Bowler", "ovr": 72, "category": "uncapped", "capped": false, "base": 0.2}, {"name": "Vijaykumar Vyshak", "role": "Bowler", "ovr": 71, "category": "uncapped", "capped": false, "base": 0.2}];

// BIDORAX V5 POOL STRUCTURE
// Each pool is completed fully before the next pool starts.
// Pool sizes: Marquee 20; Batters/Bowlers/All-rounders 45; Wicketkeepers 30; Uncapped Indians 35.

const BIDORAX_MARQUEE_EXTRAS = [
  {name:'Mitchell Marsh',role:'AR',ovr:90,bat:88,bowl:78,fin:92,matches:55,runs:1500,wickets:40,sr:145,base:1.25},
  {name:'Cameron Green',role:'AR',ovr:89,bat:87,bowl:82,fin:88,matches:35,runs:900,wickets:25,sr:142,base:1},
  {name:'Marco Jansen',role:'AR',ovr:89,bat:78,bowl:90,fin:82,matches:30,runs:450,wickets:35,sr:135,base:1},
  {name:'Rachin Ravindra',role:'AR',ovr:89,bat:90,bowl:72,fin:88,matches:32,runs:1000,wickets:18,sr:145,base:1},
  {name:'Phil Salt',role:'WK',ovr:90,bat:92,bowl:25,fin:94,matches:45,runs:1300,wickets:0,sr:160,base:1.25}
];

const BIDORAX_ROLE_EXTRAS = [
  {name:'Moeen Ali',role:'AR',ovr:87,bat:84,bowl:82,fin:88,matches:70,runs:1800,wickets:35,sr:145,base:0.75},
  {name:'Sam Curran',role:'AR',ovr:87,bat:82,bowl:84,fin:90,matches:60,runs:1100,wickets:45,sr:138,base:0.75},
  {name:'Liam Livingstone',role:'AR',ovr:88,bat:91,bowl:72,fin:94,matches:55,runs:1500,wickets:20,sr:165,base:1},
  {name:'Marcus Stoinis',role:'AR',ovr:87,bat:88,bowl:78,fin:91,matches:65,runs:1700,wickets:35,sr:145,base:0.75},
  {name:'Jason Holder',role:'AR',ovr:88,bat:78,bowl:88,fin:84,matches:60,runs:1000,wickets:55,sr:135,base:0.75},
  {name:'Sikandar Raza',role:'AR',ovr:88,bat:84,bowl:78,fin:87,matches:50,runs:1200,wickets:25,sr:140,base:0.6},
  {name:'Azmatullah Omarzai',role:'AR',ovr:85,bat:80,bowl:83,fin:88,matches:35,runs:650,wickets:30,sr:138,base:0.5},
  {name:'Mohammad Nabi',role:'AR',ovr:84,bat:78,bowl:84,fin:82,matches:70,runs:1300,wickets:55,sr:135,base:0.5}
];

const AUCTION_POOLS = [
  { key:"marquee", title:"MARQUEE", icon:"🔥", count:20 },
  { key:"batsman", title:"BATTERS", icon:"🏏", count:45 },
  { key:"bowler", title:"BOWLERS", icon:"🎯", count:45 },
  { key:"allrounder", title:"ALL-ROUNDERS", icon:"⚡", count:45 },
  { key:"wicketkeeper", title:"WICKETKEEPERS", icon:"🧤", count:30 },
  { key:"uncapped", title:"UNCAPPED INDIANS", icon:"🇮🇳", count:35 }
];

function getCurrentPool(){ return AUCTION_POOLS[currentPoolIndex]; }


const TEAMS=[['CSK','Chennai Super Kings','🦁'],['MI','Mumbai Indians','🔵'],['RCB','Royal Challengers Bengaluru','🔴'],['KKR','Kolkata Knight Riders','🟣'],['SRH','Sunrisers Hyderabad','🧡'],['RR','Rajasthan Royals','👑'],['DC','Delhi Capitals','🏛️'],['PBKS','Punjab Kings','🐯'],['GT','Gujarat Titans','🛡️'],['LSG','Lucknow Super Giants','⚡']];
const DATA=[
['Virat Kohli','BAT',94,95,20,95,252,8600,0,132,2],['Rohit Sharma','BAT',94,93,20,88,264,7000,0,130,2],['Shubman Gill','BAT',91,94,20,87,104,3200,0,138,1.5],['Suryakumar Yadav','BAT',95,98,20,98,150,3590,0,168,1.5],['Yashasvi Jaiswal','BAT',91,92,20,91,55,1700,0,150,1],['Ruturaj Gaikwad','BAT',90,91,20,84,70,2380,0,138,1],['Shreyas Iyer','BAT',88,89,20,84,115,3100,0,128,1],['Rinku Singh','BAT',88,87,20,95,45,900,0,142,.75],['Rishabh Pant','WK',92,91,15,94,111,3300,0,148,1.5],['Sanju Samson','WK',90,89,15,91,160,4410,0,145,1.5],['KL Rahul','WK',91,90,15,88,132,4680,0,135,1.5],['Nicholas Pooran','WK',91,90,15,98,90,1900,0,157,1.5],['Heinrich Klaasen','WK',92,91,15,98,85,1900,0,171,1.5],['Jasprit Bumrah','BOWL',95,30,97,65,140,0,165,0,2],['Rashid Khan','BOWL',95,45,98,60,120,500,150,0,2],['Pat Cummins','BOWL',92,55,91,68,58,500,105,0,1.5],['Mohammed Shami','BOWL',91,30,94,62,110,0,127,0,1.5],['Mohammed Siraj','BOWL',88,25,89,60,93,0,97,0,1],['Arshdeep Singh','BOWL',87,20,89,60,65,0,80,0,1],['Kuldeep Yadav','BOWL',89,40,91,58,75,300,90,0,1],['Trent Boult','BOWL',90,25,93,61,90,0,105,0,1],['Kagiso Rabada','BOWL',89,25,92,63,75,0,117,0,1],['Hardik Pandya','AR',93,88,88,93,145,2300,73,145,1.5],['Ravindra Jadeja','AR',93,85,89,88,240,2900,160,130,1.5],['Andre Russell','AR',91,87,82,98,115,2200,98,175,1.5],['Sunil Narine','AR',92,80,91,82,180,1600,172,168,1.5],['Glenn Maxwell','AR',90,89,74,95,130,2800,40,158,1.25],['Axar Patel','AR',88,78,88,78,150,1400,123,132,1],['Abhishek Sharma','AR',88,90,72,92,65,1500,25,178,.75],['Washington Sundar','AR',84,78,84,70,70,900,38,130,.5],['Jos Buttler','WK',94,93,10,97,110,3800,0,150,2],['Travis Head','BAT',93,95,10,98,50,1800,0,172,1.5],['Faf du Plessis','BAT',87,88,10,82,154,4570,0,138,1],['David Warner','BAT',88,89,10,87,184,6560,0,140,1],['Mitchell Starc','BOWL',91,22,94,63,60,0,70,0,1.5],['Yuzvendra Chahal','BOWL',88,25,91,55,160,0,205,0,1],['Bhuvneshwar Kumar','BOWL',88,25,87,55,180,0,181,0,1],['Avesh Khan','BOWL',82,18,84,55,75,0,85,0,.5],['T Natarajan','BOWL',84,18,88,58,65,0,90,0,.75],['Deepak Chahar','BOWL',82,35,82,62,80,0,78,0,.5],['Shivam Dube','AR',85,87,62,91,70,1600,18,151,.75],['Riyan Parag','AR',84,88,55,90,60,1300,10,155,.75],['Tilak Varma','BAT',88,88,20,87,50,1300,0,145,.75],['Ishan Kishan','WK',85,84,10,88,105,2800,0,135,.75],['Devon Conway','WK',88,89,10,85,50,1600,0,139,1],['Tim David','BAT',84,83,10,95,40,800,0,170,.5],['Rajat Patidar','BAT',84,88,10,88,45,1200,0,158,.75],['Venkatesh Iyer','AR',83,85,62,87,60,1400,5,145,.5],['Nitish Rana','AR',82,84,55,83,100,2600,10,135,.5],['Harshal Patel','BOWL',83,25,82,70,130,900,130,132,.75],['Varun Chakravarthy','BOWL',87,25,91,58,90,100,100,125,1],['Mukesh Kumar','BOWL',79,20,82,55,40,0,45,0,.5],['Mayank Yadav','BOWL',88,20,94,60,20,0,25,0,1],['Matheesha Pathirana','BOWL',87,15,93,61,35,0,55,0,1],['Noor Ahmad','BOWL',88,30,90,58,35,100,45,0,.75],['Jitesh Sharma','WK',81,80,10,88,40,700,0,147,.5],['Ayush Badoni','BAT',79,81,15,84,45,700,0,140,.5]
];

const CAPPED_BATTERS = [
 ['Sai Sudharsan','BAT',90,92,20,88,40,1600,0,165,1],['Devdutt Padikkal','BAT',82,83,20,78,70,1800,0,128,.5],['Mayank Agarwal','BAT',84,85,20,80,123,2600,0,128,.75],['Mandeep Singh','BAT',79,80,15,78,170,2700,0,125,.5],['Manish Pandey','BAT',80,81,15,80,171,3800,0,121,.5],['Ajinkya Rahane','BAT',82,83,15,78,185,4650,0,124,.5],['Karun Nair','BAT',79,81,10,80,78,1490,0,127,.5],['Kedar Jadhav','BAT',78,78,20,84,95,1200,0,140,.4],['Saurabh Tiwary','BAT',78,77,15,78,115,1490,0,120,.3],['Abhishek Porel','BAT',80,82,15,80,30,650,0,140,.5],['Shahrukh Khan','BAT',82,83,20,91,45,750,0,170,.6],['Rahmanullah Gurbaz','BAT',84,84,10,90,45,1000,0,155,.75],['Jason Roy','BAT',83,84,10,88,68,1500,0,140,.75],['Evin Lewis','BAT',82,83,10,91,35,900,0,165,.75],['Quinton de Kock','BAT',89,90,10,90,110,3150,0,150,1],['Aiden Markram','BAT',88,88,40,84,45,1050,20,140,1],['Kane Williamson','BAT',88,89,20,78,75,2200,0,130,1],['Dawid Malan','BAT',84,85,10,82,50,1100,0,135,.75],['Jonny Bairstow','BAT',87,88,10,91,50,1600,0,145,1],['Steve Smith','BAT',88,87,20,80,40,1000,0,125,.75],['Dinesh Karthik','BAT',81,80,15,88,257,4842,0,135,.5],['Robin Uthappa','BAT',80,82,10,82,205,4950,0,130,.4],['Murali Vijay','BAT',78,79,10,75,108,2619,0,120,.3],['Aaron Finch','BAT',82,83,10,85,92,2091,0,135,.5],['Colin Munro','BAT',80,81,10,87,13,177,0,160,.4],['Martin Guptill','BAT',79,80,10,84,13,270,0,135,.35],['Chris Lynn','BAT',80,81,10,88,42,1329,0,140,.5],['Alex Hales','BAT',83,84,10,90,23,577,0,150,.5],['David Miller','BAT',88,88,10,92,127,2924,0,138,.75],['Shimron Hetmyer','BAT',83,84,10,90,74,1320,0,155,.6],['Rilee Rossouw','BAT',82,83,10,89,19,428,0,150,.5],['Martin Guptill','BAT',79,80,10,84,13,270,0,135,.35]
];
const CAPPED_BOWLERS = [
 ['Basil Thampi','BOWL',78,20,79,55,35,0,28,0,.3],['Sandeep Sharma','BOWL',82,20,84,58,130,0,145,0,.5],['Jaydev Unadkat','BOWL',80,20,82,55,105,0,105,0,.4],['Ishant Sharma','BOWL',78,18,80,55,110,0,92,0,.3],['Umesh Yadav','BOWL',82,20,85,58,148,0,145,0,.5],['Varun Aaron','BOWL',75,18,78,55,52,0,44,0,.3],['Dhawal Kulkarni','BOWL',78,18,79,55,92,0,88,0,.3],['Mohit Sharma','BOWL',80,20,83,60,110,0,132,0,.4],['Piyush Chawla','BOWL',82,25,84,55,192,0,192,0,.5],['Amit Mishra','BOWL',80,20,84,52,162,0,173,0,.4],['R Sai Kishore','BOWL',84,25,88,58,50,100,55,0,.5],['Ravi Bishnoi','BOWL',88,25,89,58,60,120,75,0,.75],['Mohsin Khan','BOWL',81,18,85,60,25,0,25,0,.4],['Khaleel Ahmed','BOWL',83,20,88,60,60,0,70,0,.5],['Navdeep Saini','BOWL',79,18,83,58,45,0,40,0,.4],['Chetan Sakariya','BOWL',78,18,82,58,35,0,40,0,.35],['Tushar Deshpande','BOWL',80,18,83,59,40,0,50,0,.45],['Akash Deep','BOWL',82,20,85,58,30,0,35,0,.5],['Yash Dayal','BOWL',84,18,87,60,40,0,50,0,.6],['Umran Malik','BOWL',81,15,88,58,25,0,29,0,.5],['Shreyas Gopal','BOWL',77,30,82,55,50,250,48,0,.3],['Kartik Tyagi','BOWL',78,15,81,55,35,0,30,0,.3],['Ankit Rajpoot','BOWL',75,18,79,55,50,0,45,0,.3],['Varun Chakravarthy','BOWL',87,25,91,58,90,100,100,125,1],['Mohammed Shami','BOWL',91,30,94,62,110,0,127,0,1.5],['Lockie Ferguson','BOWL',82,18,88,58,67,0,61,0,.6],['Josh Hazlewood','BOWL',89,20,92,60,15,0,12,0,1],['Adam Zampa','BOWL',85,25,88,57,8,0,12,0,.6],['Tabraiz Shamsi','BOWL',81,20,88,55,18,0,23,0,.45],['Dale Steyn','BOWL',82,15,89,55,95,0,97,0,.5],['Lasith Malinga','BOWL',90,10,92,60,122,0,170,0,.8],['Chris Woakes','BOWL',82,35,84,65,21,0,30,0,.5]
].filter((p,i,a)=>a.findIndex(x=>x[0]===p[0])===i);

function makeReservePlayers(){
 const first=['Aarav','Vihaan','Aditya','Arjun','Kabir','Reyansh','Dev','Karan','Rohan','Yuvraj','Ishaan','Ritvik','Ansh','Dhruv','Manav','Atharv','Nikhil','Samar','Ved','Shaurya','Pranav','Ayaan','Krish','Varun','Raghav','Siddharth','Akshay','Harsh','Abhinav','Rahul','Aryan','Vikram','Aman','Kunal','Ritesh','Mohit','Naveen','Tanmay','Shiv','Laksh'];
 const last=['Reddy','Menon','Patil','Sharma','Iyer','Nair','Kapoor','Mehta','Joshi','Singh','Yadav','Desai','Pillai','Rao','Naidu','Bose','Das','Bhat','Chauhan','Malhotra'];
 const roles=['BAT','BOWL','AR','WK']; let out=[],idx=1;
 for(let i=0;i<120;i++){let role=roles[i%roles.length];let ovr=72+(i%9);let base=+(0.25+(i%4)*0.10).toFixed(2);let bat=role==='BAT'||role==='AR'?ovr-1:35+(i%15);let bowl=role==='BOWL'||role==='AR'?ovr-2:35+(i%15);let fin=ovr-((i*3)%8);let matches=8+(i%45),runs=role==='BOWL'?80+(i*17)%500:300+(i*61)%1500,wk=role==='BAT'||role==='WK'?(i%8):15+(i*7)%55,sr=118+(i%45);out.push({name:`${first[i%first.length]} ${last[(i*3)%last.length]} ${String(i+1).padStart(3,'0')}`,role,ovr,bat,bowl,fin,matches,runs,wickets:wk,sr,base,cat:ovr>=94?'MARQUEE':role==='BAT'?'BATTERS':role==='BOWL'?'BOWLERS':role==='AR'?'ALL-ROUNDERS':'WICKETKEEPERS',purchase:0});idx++;}
 return out;
}

let players=[],teams=[],mine,chosen,mode,cur,bid,leader,time,timer,logs=[],round=0,botTimer=null,roomCreator=false,auctionEnded=false,selectedSwap=null,pendingSwap=null,expandedTeam=null;
const MAX_SQUAD_AI=18;
const MAX_SQUAD_MULTIPLAYER=24;
function maxSquadSize(){return (mode==='multi'||mode==='rival')?MAX_SQUAD_MULTIPLAYER:MAX_SQUAD_AI;}
let poolQueues=[],currentPoolIndex=0,openedPoolCard=null,lastOutcome=null,unsoldQueue=[],unsoldPhase=false;
const STEP=.25;
const EXPERT_BID_GAP_MS=1500;
const EXPERT_AUCTION_START_TIME=10;
function expertBidGapMs(){ return EXPERT_BID_GAP_MS/Math.max(1,Number(auctionSpeed)||1); }
let lastExpertBidAt=0;

// ===== ONLINE MULTIPLAYER (Supabase Realtime Broadcast) =====
// Fill supabase-config.js with your Supabase project URL and anon key.
let mpClient=null,mpChannel=null,mpRoomCode='',mpClientId='',mpMembers=[],mpConnected=false,mpHydrating=false;
let onlineLobbyChannel=null,onlineQueue=[],onlineUsername='',onlineMatchId='',onlineQueueActive=false,onlineMatchStarted=false;
let auctionSpeed=1;
try{mpClientId=localStorage.getItem('hh_mp_client_id')||crypto.randomUUID();localStorage.setItem('hh_mp_client_id',mpClientId)}catch(e){mpClientId='hh-'+Date.now()+'-'+Math.random().toString(38).slice(2)}
function mpInit(){
  const cfg=window.SUPABASE_CONFIG||{};
  if(!window.supabase||!cfg.url||!cfg.anonKey||cfg.url.includes('YOUR_')||cfg.anonKey.includes('YOUR_')) return false;
  try{mpClient=window.supabase.createClient(cfg.url,cfg.anonKey,{auth:{persistSession:false,autoRefreshToken:false}});return true}catch(e){console.error(e);return false}
}
function humanTeamIds(){return new Set((mode==='multi'||mode==='rival')?mpMembers.map(m=>m.teamId):[chosen]);}
function isHumanTeam(teamId){return humanTeamIds().has(teamId);}
function aiTeams(){
 const activeBots=mode==='rival'?teams.filter(t=>!isHumanTeam(t.id)):[];
 return mode==='ai'?teams.filter(t=>!isHumanTeam(t.id)):activeBots;
}
function multiplayerModeLabel(){
 const humans=(mode==='multi'||mode==='rival')?mpMembers.length:0;
 if(mode==='rival') return `${humans} HUMAN • ${Math.max(0,10-humans)} EXPERT BOTS`;
 return mode==='multi'?`${humans} HUMAN TEAM${humans===1?'':'S'}`:'1 HUMAN + 9 AI';
}
function mpState(){return {teams,poolQueues,currentPoolIndex,players,cur,bid,leader,time,logs,round,auctionEnded,unsoldQueue,unsoldPhase,lastOutcome,chosen,mode,auctionSpeed,mpMembers,ts:Date.now()}}
function mpBroadcast(type,payload={}){if(!mpChannel||!mpConnected||mpHydrating)return;mpChannel.send({type:'broadcast',event:'auction',payload:{type,...payload,state:mpState(),from:mpClientId}}).catch(()=>{})}
function mpApplyState(st){
 if(!st)return;
 const oldCurName=cur?.name||"",oldRound=round,oldBid=bid,oldLeader=leader,oldEnded=auctionEnded;
 const oldScreen=document.querySelector(".screen.active")?.id||"",savedY=window.scrollY;
 mpHydrating=true;
 try{
   teams=st.teams||teams;poolQueues=st.poolQueues||poolQueues;currentPoolIndex=st.currentPoolIndex??currentPoolIndex;players=st.players||players;cur=st.cur||cur;bid=st.bid??bid;leader=st.leader||"";time=st.time??time;logs=st.logs||[];round=st.round||0;auctionEnded=!!st.auctionEnded;unsoldQueue=st.unsoldQueue||[];unsoldPhase=!!st.unsoldPhase;lastOutcome=st.lastOutcome||null;auctionSpeed=st.auctionSpeed||1;mpMembers=st.mpMembers||mpMembers;chosen=chosen||st.chosen;
   if(chosen)mine=teams.find(t=>t.id===chosen)||mine;
   if(auctionEnded){clearInterval(timer);clearTimeout(botTimer);show("manage");renderManagement();}
   else if(cur){show("auction");renderAuctionControls();const clockOnly=oldScreen==="auction"&&oldCurName===cur.name&&oldRound===round&&oldBid===bid&&oldLeader===leader&&!oldEnded;if(clockOnly)renderClock();else render();}
   else if((mode==="multi"||mode==="rival")){refreshLobby();}
 }finally{mpHydrating=false;if(oldScreen==="auction"&&document.querySelector(".screen.active")?.id==="auction")requestAnimationFrame(()=>window.scrollTo(0,savedY));}
}
function mpJoinChannel(code,isHost,options={}){
 if(!mpClient)return Promise.reject(new Error('Supabase is not configured.'));
 if(mpChannel)try{mpClient.removeChannel(mpChannel)}catch(e){}
 mpRoomCode=String(code);mpConnected=false;
 return new Promise((resolve,reject)=>{
   mpChannel=mpClient.channel('hh-auction-'+mpRoomCode,{config:{broadcast:{self:false}}});
   mpChannel.on('broadcast',{event:'auction'},({payload})=>{
     if(!payload||payload.from===mpClientId)return;
     if(payload.type==='join_request'&&roomCreator){
       const member=payload.member;
       if(member&&member.teamId&&!mpMembers.some(m=>m.clientId===member.clientId)){
         if(mpMembers.some(m=>m.teamId===member.teamId)){mpChannel.send({type:'broadcast',event:'auction',payload:{type:'join_reject',reason:'That team is already taken.',to:member.clientId,from:mpClientId}});return}
         if(mpMembers.length>=10){mpChannel.send({type:'broadcast',event:'auction',payload:{type:'join_reject',reason:'Room is full (10 teams).',to:member.clientId,from:mpClientId}});return}
         mpMembers.push(member);mpBroadcast('room_update');refreshLobby();
       }
       return;
     }
     if(payload.type==='join_reject'&&payload.to===mpClientId){alert(payload.reason||'Unable to join room.');return}
     if(payload.type==='bid_request'&&roomCreator){
       const t=teams.find(x=>x.id===payload.teamId);const amount=Number(payload.amount);
       if(!cur||!t||t.squad.length>=maxSquadSize()||t.purse<bid+amount||leader===t.id||amount<=0)return;
       bid=+(bid+amount).toFixed(2);leader=t.id;time=Math.min(10,Math.max(2,time+2));log(`🔥 ${t.id} bids ₹${bid.toFixed(2)} Cr`);render();mpPublish();return;
     }
     // Multiplayer transfer window is host-authoritative. Requests are forwarded to the target owner.
     if(payload.type==='swap_request'&&roomCreator){
       const from=teams.find(x=>x.id===payload.fromTeam);
       const to=teams.find(x=>x.id===payload.toTeam);
       const fromPlayer=from?.squad.find(x=>x.name===payload.offer);
       const toPlayer=to?.squad.find(x=>x.name===payload.request);
       if(!from||!to||!fromPlayer||!toPlayer||from.id===to.id)return;
       const targetMember=mpMembers.find(m=>m.teamId===to.id);
       if(!targetMember)return;
       const proposalId=`${Date.now()}-${Math.random().toString(38).slice(2)}`;
       const offerPayload={type:'swap_offer',toClient:targetMember.clientId,fromTeam:from.id,toTeam:to.id,offer:fromPlayer.name,request:toPlayer.name,from:payload.from,proposalId};
       // IMPORTANT: only the TARGET team's owner receives the incoming deal.
       // The proposing team must never see ACCEPT/REJECT controls.
       if(targetMember.clientId===mpClientId){
         pendingSwap={from:from.id,to:to.id,offer:fromPlayer.name,request:toPlayer.name,proposalId};
         renderManagement();
         alert(`📨 SWAP REQUEST: ${from.id} offers ${fromPlayer.name} for your ${toPlayer.name}.`);
       }else{
         mpChannel.send({type:'broadcast',event:'auction',payload:offerPayload}).catch(()=>{});
       }
       return;
     }
     if(payload.type==='swap_response'&&roomCreator){
       const from=teams.find(x=>x.id===payload.fromTeam);
       const to=teams.find(x=>x.id===payload.toTeam);
       const targetMember=mpMembers.find(m=>m.teamId===payload.toTeam);
       if(targetMember && payload.from!==targetMember.clientId)return;
       if(!from||!to||payload.accept!==true){
         mpBroadcast('swap_result',{ok:false,fromTeam:payload.fromTeam,toTeam:payload.toTeam,offer:payload.offer,request:payload.request,reason:'Swap rejected'});
         return;
       }
       const ai=from.squad.findIndex(p=>p.name===payload.offer);
       const bi=to.squad.findIndex(p=>p.name===payload.request);
       if(ai<0||bi<0){mpBroadcast('swap_result',{ok:false,reason:'Player is no longer available'});return;}
       const a=from.squad[ai],b=to.squad[bi];
       from.squad[ai]=b;to.squad[bi]=a;
       log(`🤝 OWNERS ACCEPTED: ${a.name} ↔ ${b.name}.`);
       mpBroadcast('state');
       mpBroadcast('swap_result',{ok:true,fromTeam:from.id,toTeam:to.id,offer:a.name,request:b.name});
       return;
     }
     if(payload.type==='swap_offer'&&payload.toClient===mpClientId){
       pendingSwap={from:payload.fromTeam,to:payload.toTeam,offer:payload.offer,request:payload.request,proposalId:payload.proposalId};
       renderManagement();
       alert(`📨 SWAP REQUEST: ${payload.fromTeam} offers ${payload.offer} for your ${payload.request}.`);
       return;
     }
     if(payload.type==='swap_result'){
       if(payload.ok) alert(`🤝 SWAP ACCEPTED: ${payload.offer} ↔ ${payload.request}.`);
       else alert(`❌ SWAP REJECTED: ${payload.reason||'The target team rejected the deal.'}`);
       if(pendingSwap && payload.proposalId===pendingSwap.proposalId) pendingSwap=null;
       renderManagement();
       return;
     }
     if(payload.type==='state'||payload.type==='room_update'){if(payload.state)mpApplyState(payload.state);return}
   });
   mpChannel.subscribe(status=>{
     if(status==='SUBSCRIBED'){
       mpConnected=true;resolve();
       if(!isHost&&!options.onlineMatch)mpChannel.send({type:'broadcast',event:'auction',payload:{type:'join_request',from:mpClientId,member:{clientId:mpClientId,teamId:chosen}}});
       else if(!options.onlineMatch)mpBroadcast('room_update');
     }else if(status==='CHANNEL_ERROR'||status==='TIMED_OUT')reject(new Error('Realtime connection failed.'));
   });
 });
}
function mpPublish(){if((mode==='multi'||mode==='rival')&&roomCreator)mpBroadcast('state')}
function mpLobby(){
 const box=document.getElementById('room');if(!box)return;
 const taken=mpMembers.map(m=>m.teamId);
 const list=mpMembers.length?mpMembers.map(m=>`<div style="padding:6px 0;border-bottom:1px solid #202838">${m.clientId===mpClientId?'👑':'👤'} <b>${m.teamId}</b>${m.clientId===mpClientId?' (You)':''}</div>`).join(''):'<p style="color:#8995aa">No players connected yet.</p>';
 const startBtn=roomCreator?`<button class="primary" onclick="start()" ${chosen?'':'disabled'}>🚀 START MULTIPLAYER AUCTION</button>`:'';
 box.innerHTML=`<h3>👥 Multiplayer Room</h3><p>Choose a team, then create or join a room. Only the franchises selected by people in the room participate. No extra AI franchises are added.</p><button class="primary" onclick="createRoom()">➕ CREATE ROOM</button><input id="code" placeholder="Enter 6-digit room code" style="width:100%;padding:12px;margin-top:10px;background:#080d16;color:white;border:1px solid #2a354b;border-radius:8px"><button class="primary" onclick="joinRoom()">🔗 JOIN ROOM</button><div id="roomLobby" style="margin-top:14px"><b>ROOM ${mpRoomCode||'—'}</b>${mpRoomCode?`<p style="color:#8995aa;font-size:12px">Share this code with your friends. ${mpMembers.length}/10 participating teams.</p><div class="mode-badge">🎮 MODE: ${mpMembers.length} HUMAN TEAM${mpMembers.length===1?'':'S'} • ${mpMembers.length} PARTICIPATING</div>${list}${startBtn}`:''}</div><p style="color:#8995aa;font-size:12px;margin-top:10px">Only participating human teams are included. Room creator controls End Auction and Fast Forward.</p>`;
 document.querySelectorAll('.team').forEach(x=>x.classList.toggle('taken',taken.includes(x.id.slice(2))));
}
function refreshLobby(){if((mode==='multi'||mode==='rival')&&mpRoomCode)mpLobby()}

function make(){teams=TEAMS.map(t=>({id:t[0],name:t[1],logo:t[2],purse:120,squad:[],spent:0,score:0}))}

/* ============================================================
   ONLINE RIVAL RANK SYSTEM
   Local profile progress is stored per browser. Matchmaking and
   auction synchronization continue to use the Supabase room flow.
   ============================================================ */
const HH_RANKS=[
 {name:'Bronze',icon:'🥉',min:0,max:99,color:'#b87952'},
 {name:'Silver',icon:'🥈',min:100,max:249,color:'#b7c4d4'},
 {name:'Gold',icon:'🥇',min:250,max:449,color:'#f5c451'},
 {name:'Platinum',icon:'💠',min:450,max:699,color:'#72d7e8'},
 {name:'Diamond',icon:'💎',min:700,max:999,color:'#8aa7ff'},
 {name:'Master',icon:'🔥',min:1000,max:1399,color:'#d58bff'},
 {name:'Grandmaster',icon:'👑',min:1400,max:999999,color:'#ff6f91'}
];
function hhRankData(){
 try{return JSON.parse(localStorage.getItem('hh_online_rival_rank')||'null')||{rating:0,wins:0,losses:0,draws:0,auctions:0};}
 catch(e){return {rating:0,wins:0,losses:0,draws:0,auctions:0};}
}
function hhRankInfo(r=hhRankData()){
 const rating=Math.max(0,Number(r.rating)||0);
 return HH_RANKS.find(x=>rating>=x.min&&rating<=x.max)||HH_RANKS[0];
}
function hhSaveRank(r){try{localStorage.setItem('hh_online_rival_rank',JSON.stringify(r));}catch(e){}}
function hhRenderRank(){
 const r=hhRankData(),rank=hhRankInfo(r),next=HH_RANKS.find(x=>x.min>r.rating);
 const progress=next?Math.min(100,Math.round(((r.rating-rank.min)/(next.min-rank.min))*100)):100;
 const box=document.getElementById('rankCard'); if(!box)return;
 box.innerHTML=`<div class="rank-top"><span>🏆 RANK</span><b style="color:${rank.color}">${rank.icon} ${rank.name}</b></div><div class="rank-rating">${r.rating} <small>RATING</small></div><div class="rank-progress"><i style="width:${progress}%;background:${rank.color}"></i></div><div class="rank-meta"><span>🥇 ${r.wins} Wins</span><span>❌ ${r.losses} Losses</span><span>📈 ${r.auctions} Auctions</span></div>${next?`<small class="rank-next">${next.min-r.rating} rating to ${next.name}</small>`:'<small class="rank-next">Highest rank reached</small>'}`;
}
function hhRecordRivalResult(result){
 const r=hhRankData();r.auctions++;
 if(result==='win'){r.wins++;r.rating+=30;}
 else if(result==='loss'){r.losses++;r.rating=Math.max(0,r.rating-20);}
 else {r.draws++;r.rating+=5;}
 hhSaveRank(r);hhRenderRank();
}
function hhRecordRivalPosition(position){
 const r=hhRankData();r.auctions++;
 if(position===1){r.wins++;r.rating+=30;}
 else if(position===2){r.rating+=20;}
 else if(position===3){r.rating+=5;}
 else {r.losses++;r.rating=Math.max(0,r.rating-10);}
 hhSaveRank(r);hhRenderRank();
}
function hhRivalRankPanel(){
 const r=hhRankData(),rank=hhRankInfo(r);
 return `<div class="panel"><h3>🆚 YOUR RIVAL PROFILE</h3><div class="rank-profile"><strong>${rank.icon} ${rank.name}</strong><b>${r.rating} Rating</b><span>W ${r.wins} • L ${r.losses} • D ${r.draws}</span></div><p class="muted">Finish higher to climb from Bronze to Grandmaster: 1st +30, 2nd +20, 3rd +5, 4th/5th -10. Expert AI and Online Rival results both improve your Rank. Rating is saved on this browser.</p></div>`;
}


function rivalDisplayName(){
 const el=document.getElementById('onlineUsername');
 const raw=(el?.value||onlineUsername||'').trim().replace(/[^a-zA-Z0-9 _-]/g,'').slice(0,18);
 return raw||'Player';
}
function rivalStatus(text,good=false){
 const a=document.getElementById('onlineStatus');
 const b=document.getElementById('rivalWaiting');
 if(a)a.innerHTML=`<div class="mode-badge">${text}</div>`;
 if(b)b.innerHTML=text;
}
function updateOnlineQueue(list){
 const map=new Map();
 (list||[]).forEach(x=>{if(x&&x.clientId)map.set(x.clientId,x)});
 onlineQueue=[...map.values()].sort((a,b)=>(a.joinedAt-b.joinedAt)||a.clientId.localeCompare(b.clientId));
 if(mode==='rival'&&!onlineMatchStarted){
   const n=onlineQueue.length;
   rivalStatus(n>=5?`🟢 ${n} PLAYERS FOUND • MATCHMAKING…`:`🔎 NO ONLINE FOUND — ${n}/5 PLAYERS WAITING`);
 }
}
function onlineQueueState(){return {type:'queue_state',queue:onlineQueue.slice(0,50),from:mpClientId}}
function maybeCreateOnlineMatch(){
 if(!onlineQueueActive||onlineMatchStarted||onlineQueue.length<5)return;
 const firstFive=onlineQueue.slice(0,5);
 const coordinator=firstFive.slice().sort((a,b)=>a.clientId.localeCompare(b.clientId))[0];
 if(!coordinator||coordinator.clientId!==mpClientId)return;
 const matchId='rival-'+firstFive.map(x=>x.clientId.slice(-8)).join('-');
 const payload={type:'match_found',matchId,members:firstFive,from:mpClientId};
 onlineMatchStarted=true;onlineMatchId=matchId;
 onlineLobbyChannel.send({type:'broadcast',event:'matchmaking',payload}).catch(()=>{});
 startOnlineRivalMatch(payload);
}
async function findOnlineRival(){
 if(mode!=='rival')return;
 onlineUsername=rivalDisplayName();
 if(onlineUsername==='Player')return alert('Enter your username/team name first.');
 if(!mpClient&&!mpInit())return alert('Online Rival is not configured. Add your Supabase URL and anon key in supabase-config.js.');
 if(onlineQueueActive)return;
 onlineQueueActive=true;onlineMatchStarted=false;onlineMatchId='';roomCreator=false;mpMembers=[];
 if(onlineLobbyChannel)try{mpClient.removeChannel(onlineLobbyChannel)}catch(e){}
 onlineLobbyChannel=mpClient.channel('hh-online-rival-global-v1',{config:{broadcast:{self:false}}});
 onlineLobbyChannel.on('broadcast',{event:'matchmaking'},({payload})=>{
   if(!payload||payload.from===mpClientId)return;
   if(payload.type==='queue_join'){
     updateOnlineQueue([...onlineQueue.filter(x=>x.clientId!==payload.member.clientId),payload.member]);
     onlineLobbyChannel.send({type:'broadcast',event:'matchmaking',payload:onlineQueueState()}).catch(()=>{});
     maybeCreateOnlineMatch();
   }else if(payload.type==='queue_state'){
     updateOnlineQueue(payload.queue||[]);maybeCreateOnlineMatch();
   }else if(payload.type==='queue_leave'){
     updateOnlineQueue(onlineQueue.filter(x=>x.clientId!==payload.clientId));
   }else if(payload.type==='match_found'&&payload.members?.some(x=>x.clientId===mpClientId)){
     onlineMatchStarted=true;startOnlineRivalMatch(payload);
   }
 });
 await new Promise((resolve,reject)=>onlineLobbyChannel.subscribe(status=>status==='SUBSCRIBED'?resolve():((status==='CHANNEL_ERROR'||status==='TIMED_OUT')&&reject(new Error('Realtime matchmaking connection failed.')))));
 const me={clientId:mpClientId,username:onlineUsername,joinedAt:Date.now()};
 onlineQueue=[me];
 rivalStatus('🔎 NO ONLINE FOUND — 1/5 PLAYERS WAITING');
 onlineLobbyChannel.send({type:'broadcast',event:'matchmaking',payload:{type:'queue_join',member:me,from:mpClientId}}).catch(()=>{});
 setTimeout(()=>{onlineLobbyChannel.send({type:'broadcast',event:'matchmaking',payload:onlineQueueState()}).catch(()=>{});maybeCreateOnlineMatch()},500);
}
async function startOnlineRivalMatch(match){
 if(!match?.members?.some(x=>x.clientId===mpClientId))return;
 onlineMatchStarted=true;onlineMatchId=match.matchId;
 mpMembers=match.members.map(x=>({clientId:x.clientId,teamId:x.username,username:x.username}));
 chosen=onlineUsername;roomCreator=match.members[0].clientId===mpClientId;mpRoomCode=match.matchId;
 // The first five users are humans; remaining five teams are Expert Bots.
 make();
 const humanTeams=mpMembers.map(m=>({id:m.username,name:m.username,logo:'👤',purse:120,squad:[],spent:0,score:0,claimed:true}));
 const botTeams=Array.from({length:10-humanTeams.length},(_,i)=>({id:`Expert Bot ${i+1}`,name:`Expert Bot ${i+1}`,logo:'🤖',purse:120,squad:[],spent:0,score:0,claimed:true,bot:true}));
 teams=[...humanTeams,...botTeams];
 mine=teams.find(t=>t.id===chosen);
 poolQueues=buildAuctionPools();currentPoolIndex=0;openedPoolCard=null;unsoldQueue=[];unsoldPhase=false;players=poolQueues[0].slice();round=0;logs=[];auctionEnded=false;selectedSwap=null;pendingSwap=null;lastOutcome=null;auctionSpeed=1;
 show('auction');updatePoolUI();renderAuctionControls();next();
 if(onlineLobbyChannel)try{mpClient.removeChannel(onlineLobbyChannel)}catch(e){}
 // Join the dedicated match channel without using room-code UI.
 await mpJoinChannel(onlineMatchId,roomCreator,{onlineMatch:true});
 if(roomCreator)mpPublish();
}

function setup(m){
 mode=m;chosen=null;roomCreator=false;mpRoomCode='';mpMembers=[];show('setup');
 document.getElementById('setupTitle').textContent=m==='ai'?'Expert AI Auction':m==='rival'?'🌐 Online Rival':'🤝 Homies Auction';
 document.getElementById('teams').innerHTML=m==='rival'?`<div class="online-name-box"><h3>👤 YOUR ONLINE TEAM NAME</h3><p class="muted">Your username becomes your team name. No IPL franchise names are used in Online Rival.</p><input id="onlineUsername" maxlength="18" placeholder="Enter username / team name" style="width:100%;padding:14px;margin:8px 0;background:#080d16;color:white;border:1px solid #2a354b;border-radius:10px"><button class="primary" onclick="findOnlineRival()">🌐 FIND ONLINE RIVAL</button><div id="onlineStatus" style="margin-top:14px"></div></div>`:TEAMS.map(t=>`<button class="team" id="t-${t[0]}" onclick="choose('${t[0]}')">${t[2]} <b>${t[0]}</b><small>${t[1]}</small></button>`).join('');
 document.getElementById('room').innerHTML=m==='ai'?`<h3>🤖 Expert AI Auction</h3><p>Playing with bots. Expert AI teams bid using role quotas, purse reserves, scarcity, player value, squad balance and endgame strategy.</p><button class="primary" onclick="start()">🚀 START AUCTION</button>`:m==='rival'?`${hhRivalRankPanel()}<h3>🌐 GLOBAL ONLINE RIVAL</h3><p>Join the worldwide queue. No room code and no IPL franchise selection. Your username is your team name.</p><div class="mode-badge">👥 MINIMUM 5 HUMAN PLAYERS • UP TO 10 TOTAL TEAMS</div><div id="rivalWaiting" class="panel" style="margin-top:12px">🔎 NO ONLINE FOUND — NEED AT LEAST 5 PLAYERS</div>`:`<h3>🤝 Homies Auction</h3><p>Playing with friends. Choose your franchise, then create a room or enter a friend's 6-digit code.</p><button class="primary" onclick="createRoom()">➕ CREATE ROOM</button><input id="code" placeholder="Enter 6-digit room code" style="width:100%;padding:12px;margin-top:10px;background:#080d16;color:white;border:1px solid #2a354b;border-radius:8px"><button class="primary" onclick="joinRoom()">🔗 JOIN ROOM</button><p style="color:#8995aa;font-size:12px">The number of participating teams equals the number of people in the room. No extra AI teams are added.</p>`;
 if((m==='multi'||m==='rival')&&!mpClient)mpInit();
}
function choose(id){if(mode==='rival')return; if(mode==='multi'&&mpMembers.some(m=>m.teamId===id))return alert('That team is already taken in this room.');chosen=id;document.querySelectorAll('.team').forEach(x=>x.classList.remove('sel'));document.getElementById('t-'+id).classList.add('sel');if((mode==='multi'||mode==='rival'))refreshLobby()}
async function createRoom(){
 if(!chosen)return alert('Select your team first.');
 if(!mpClient&&!mpInit())return alert('Multiplayer is not configured yet. Open supabase-config.js and add your Supabase URL and anon key.');
 roomCreator=true;mpMembers=[{clientId:mpClientId,teamId:chosen}];const c=String(Math.floor(100000+Math.random()*900000));
 try{await mpJoinChannel(c,true);mpLobby();log(`👑 ROOM ${c} CREATED • ${chosen} is the host.`)}catch(e){roomCreator=false;alert('Could not create room: '+e.message)}
}
async function joinRoom(){
 const c=(document.getElementById('code')?.value||'').trim();
 if(!chosen)return alert('Select your team first.');
 if(!/^\d{6}$/.test(c))return alert('Enter a valid 6-digit room code.');
 if(!mpClient&&!mpInit())return alert('Multiplayer is not configured yet. Open supabase-config.js and add your Supabase URL and anon key.');
 roomCreator=false;mpMembers=[];
 try{await mpJoinChannel(c,false);setTimeout(()=>{if(!mpMembers.length)mpChannel.send({type:'broadcast',event:'auction',payload:{type:'join_request',from:mpClientId,member:{clientId:mpClientId,teamId:chosen}}})},350);alert('Connected to room '+c+'. Waiting for the room creator to start the auction.');}catch(e){alert('Could not join room. Check the code and make sure the host is online.')}
}
function start(){
 if(!chosen)return alert('Select a team.');
 if((mode==='multi'||mode==='rival')&&!roomCreator)return alert('Only the room creator starts the multiplayer auction.');
 make(); mine=teams.find(t=>t.id===chosen);
 if((mode==='multi'||mode==='rival')&&mpMembers.length)mpMembers.forEach(m=>{const t=teams.find(x=>x.id===m.teamId);if(t)t.claimed=true});
 poolQueues=buildAuctionPools(); currentPoolIndex=0; openedPoolCard=null; unsoldQueue=[]; unsoldPhase=false;
 players=poolQueues[0].slice(); round=0; logs=[]; auctionEnded=false; selectedSwap=null; pendingSwap=null; lastOutcome=null;auctionSpeed=1;
 show('auction'); updatePoolUI(); renderAuctionControls(); next(); mpPublish();
}

function normalizePlayer(p){
  if(Array.isArray(p)) return {name:p[0],role:p[1],ovr:+p[2],bat:+p[3],bowl:+p[4],fin:+p[5],matches:+p[6],runs:+p[7],wickets:+p[8],sr:+p[9],base:+p[10],purchase:0};
  return {...p,ovr:+p.ovr,bat:+(p.bat||0),bowl:+(p.bowl||0),fin:+(p.fin||0),matches:+(p.matches||0),runs:+(p.runs||0),wickets:+(p.wickets||0),sr:+(p.sr||0),base:+(p.base||.25),purchase:0};
}
function buildAuctionPools(){
  const standardBase=DATA.map(normalizePlayer);
  const cappedBase=CAPPED_BATTERS.concat(CAPPED_BOWLERS).map(normalizePlayer);
  const reserve=makeReservePlayers().map(normalizePlayer);
  const all=standardBase.concat(cappedBase,reserve,BIDORAX_MARQUEE_EXTRAS.map(normalizePlayer),BIDORAX_ROLE_EXTRAS.map(normalizePlayer));
  const unique=[]; const seen=new Set();
  const excludedPlayers=new Set(['Babar Azam']);
  for(const p of all){ if(excludedPlayers.has(p.name)) continue; if(!seen.has(p.name)){seen.add(p.name);unique.push(p)} }
  const roleFor={BAT:'BATTERS',BOWL:'BOWLERS',AR:'ALL-ROUNDERS',WK:'WICKETKEEPERS'};
  const pools={BATTERS:[],BOWLERS:[], 'ALL-ROUNDERS':[], WICKETKEEPERS:[]};
  const cappedNames=new Set(cappedBase.map(p=>p.name));
  // Build capped-heavy batter and bowler pools first. This prevents the marquee pool
  // from consuming too many capped batters/bowlers.
  // MARQUEE is reserved first: exactly 20 players, all rated above 90.
  // This explicitly keeps Jasprit Bumrah in MARQUEE and prevents Deepak Chahar (82) from entering it.
  const marquee=unique.filter(p=>p.ovr>90 && p.name!=='Deepak Chahar')
    .sort((a,b)=>b.ovr-a.ovr)
    .slice(0,20)
    .map(p=>({...p,cat:'MARQUEE',capped:cappedNames.has(p.name)}));
  const marqueeNames=new Set(marquee.map(p=>p.name));
  const roleOrder=['BATTERS','BOWLERS','ALL-ROUNDERS','WICKETKEEPERS'];
  for(const key of roleOrder){
    const target=key==='WICKETKEEPERS'?30:45;
    const role=Object.keys(roleFor).find(k=>roleFor[k]===key);
    const candidates=unique.slice().sort((a,b)=>{
      const ca=cappedNames.has(a.name)?1:0, cb=cappedNames.has(b.name)?1:0;
      return cb-ca || b.ovr-a.ovr;
    });
    for(const p of candidates){
      if(marqueeNames.has(p.name) || p.role!==role || pools[key].length>=target || pools[key].some(x=>x.name===p.name)) continue;
      pools[key].push({...p,cat:key,capped:cappedNames.has(p.name)});
    }
  }
  // Uncapped pool: NEVER below 70 OVR. Ayush Mhatre and Angkrish Raghuvanshi remain
  // ordinary uncapped auction players; they become UNSOLD only if nobody bids.
  const uncappedKnown=UNCAPPED_INDIAN_POOL_V5.filter(p=>+p.ovr>=70).slice(0,35).map(p=>({
    name:p.name, role:p.role==='Batsman'?'BAT':p.role==='Bowler'?'BOWL':p.role==='All-rounder'?'AR':'WK',
    ovr:+p.ovr, bat:+(p.bat??(+p.ovr-1)), bowl:+(p.bowl??(+p.ovr-1)), fin:+(p.fin??(+p.ovr-2)), matches:+(p.matches||10), runs:+(p.runs||450), wickets:+(p.wickets||12), sr:+(p.sr||130), base:+(p.base||.2), cat:'UNCAPPED INDIANS', purchase:0,capped:false
  }));
  const usedNames=new Set([...marquee,...pools.BATTERS,...pools.BOWLERS,...pools['ALL-ROUNDERS'],...pools.WICKETKEEPERS].map(p=>p.name));
  const extraUncapped=reserve.filter(p=>+p.ovr>=70&&!usedNames.has(p.name)&&!uncappedKnown.some(x=>x.name===p.name)).slice(0,35-uncappedKnown.length).map(p=>({...p,cat:'UNCAPPED INDIANS',capped:false,purchase:0}));
  const uncapped=uncappedKnown.concat(extraUncapped).slice(0,35);
  return [marquee,pools.BATTERS,pools.BOWLERS,pools['ALL-ROUNDERS'],pools.WICKETKEEPERS,uncapped];
}
function participatingTeams(){
 if(mode==='multi') return teams.filter(t=>isHumanTeam(t.id));
 if(mode==='rival') return teams;
 return teams;
}
function allTeamsMinimum(){const active=participatingTeams();return active.length>0&&active.every(t=>t.squad.length>=11)}
function teamsBelowMinimum(){return participatingTeams().filter(t=>t.squad.length<11)}
function next(){
 clearInterval(timer);clearTimeout(botTimer);
 if(auctionEnded){openManagement();return}
 if(!players.length){
   if(currentPoolIndex<AUCTION_POOLS.length-1){
     currentPoolIndex++; players=poolQueues[currentPoolIndex].slice(); openedPoolCard=null; updatePoolUI(); mpPublish();
   }else if(!unsoldPhase && unsoldQueue.length){
     unsoldPhase=true; players=unsoldQueue.splice(0); openedPoolCard='UNSOLD'; log(`🔁 UNSOLD ROUND STARTED • ${players.length} players returned to auction.`); updatePoolUI(); mpPublish();
   }else if(unsoldPhase && unsoldQueue.length){
     players=unsoldQueue.splice(0); updatePoolUI(); mpPublish();    }else{
      // All scheduled pools and the unsold round are complete. No 11-player minimum is required.
      openManagement();return;
    }
 }
 cur=players.shift();cur.playersLeft=players.length;
 round++; bid=cur.base;leader='';time=mode==='ai'?EXPERT_AUCTION_START_TIME:10;lastOutcome=null;lastExpertBidAt=performance.now();auctionSpeed=auctionSpeed||1;render();mpPublish();
 if((mode==='multi'||mode==='rival')&&!roomCreator)return;
 timer=setInterval(()=>{time-=auctionSpeed;renderClock();mpPublish();if(time<=0){clearInterval(timer);resolveAuction()}},1000);
 setTimeout(expertBots,mode==='ai'?expertBidGapMs():Math.max(100,350/auctionSpeed));
}
function updatePoolUI(){
 const p=AUCTION_POOLS[currentPoolIndex];
 const cat=document.getElementById('cat');if(cat)cat.textContent=unsoldPhase?'UNSOLD RE-AUCTION':p.title;
 renderPoolSequenceV5();renderPoolBoard();renderAuctionControls();
}
function resolveAuction(){
 clearInterval(timer);clearTimeout(botTimer);
 let outcome={name:cur.name,status:"UNSOLD",team:"—",price:0};
 if(leader){
   const t=teams.find(x=>x.id===leader);
   if(t&&t.squad.length<maxSquadSize()&&t.purse>=bid){
     t.purse-=bid;t.spent+=bid;cur.purchase=bid;t.squad.push(cur);
     outcome={name:cur.name,status:"SOLD",team:t.id,price:bid};
     log(`🔨 SOLD • ${cur.name} → ${t.id} for ₹${bid.toFixed(2)} Cr`);
   }else { unsoldQueue.push(cur); log(`⚪ UNSOLD • ${cur.name}`); }
 }else{
   unsoldQueue.push(cur);
   log(`⚪ UNSOLD • ${cur.name}`);
 }
 lastOutcome=outcome;render();mpPublish();setTimeout(next,400);
}
function expertBots(){
  if(!cur||auctionEnded)return;
  if((mode==='multi'||mode==='rival')&&!roomCreator)return;
  if(mode==='ai'){
    const elapsed=performance.now()-lastExpertBidAt;
    if(elapsed<expertBidGapMs()){
      clearTimeout(botTimer);
      botTimer=setTimeout(expertBots,Math.max(40,expertBidGapMs()-elapsed));
      return;
    }
  }
  const minimumPending=teamsBelowMinimum().length>0;
  const bots=aiTeams().filter(t=>t.id!==leader&&t.squad.length<maxSquadSize()&&t.purse>=bid+STEP&&(!minimumPending||t.squad.length<11));
  if(!bots.length)return;
  const ranked=bots.map(t=>({team:t,score:botBidScore(t,cur),max:botMaxBid(t,cur),balance:teamBalanceScore(t)})).filter(x=>x.score>0&&bid+STEP<=x.max).sort((a,b)=>b.score-a.score);
  if(!ranked.length)return;
  const best=ranked[0],second=ranked[1],competitiveGap=second?best.score-second.score:999;
  const urgency=botUrgency(best.team,cur);
  let chance=.68+urgency*.08+(cur.ovr>=90?.08:0)+(competitiveGap<8?.10:0);
  if(botNeed(best.team,cur)===0)chance-=.18; chance=Math.max(.32,Math.min(.97,chance));
  if(Math.random()>chance){
    if(mode==='ai')botTimer=setTimeout(expertBots,expertBidGapMs());
    return;
  }
  let pick=best;if(second&&competitiveGap<10&&Math.random()<.28)pick=second;
  const t=pick.team,nextBid=+(bid+STEP).toFixed(2);if(nextBid>pick.max)return;
  bid=nextBid;leader=t.id;lastExpertBidAt=performance.now();
  log(`🤖 ${t.id} bids ₹${bid.toFixed(2)} Cr • fit ${pick.score.toFixed(1)} • balance ${pick.balance.toFixed(1)} • ${botNeed(t,cur)>0?'role gap':'value play'}`);
  time=EXPERT_AUCTION_START_TIME;render();
  if((mode==='multi'||mode==='rival'))mpPublish();
  botTimer=setTimeout(expertBots,mode==='ai'?expertBidGapMs():Math.max(80,(520-Math.round(cur.ovr*2))/auctionSpeed));
}

function place(amount){
  if(!cur||auctionEnded)return;
  const amountNum=Number(amount);
  if(!Number.isFinite(amountNum)||amountNum<=0)return;
  if(leader===mine.id)return;
  if(mine.squad.length>=maxSquadSize()||mine.purse<bid+amountNum)return alert('You cannot afford this bid or your squad is full.');
  if((mode==='multi'||mode==='rival')&&!roomCreator){
    if(!mpChannel||!mpConnected)return alert('You are not connected to the auction room.');
    mpChannel.send({type:'broadcast',event:'auction',payload:{type:'bid_request',teamId:mine.id,amount:amountNum,from:mpClientId}}).catch(()=>alert('Bid could not be sent.'));
    return;
  }
  bid=+(bid+amountNum).toFixed(2);leader=mine.id;
  if(mode==='ai'){time=EXPERT_AUCTION_START_TIME;lastExpertBidAt=performance.now();}else{time=Math.min(10,Math.max(2,time+2));}
  log(`🔥 ${mine.id} bids ₹${bid.toFixed(2)} Cr`);render();mpPublish();
  clearTimeout(botTimer);botTimer=setTimeout(expertBots,mode==='ai'?expertBidGapMs():Math.max(80,180/auctionSpeed));
}

function simulateExpertPlayer(p){
  cur=p;bid=p.base;leader='';time=0;
  let guard=0;
  while(guard++<80){
    const candidates=teams.filter(t=>t.squad.length<maxSquadSize()&&t.purse>=bid+STEP&&t.purse>0&&t.id!==leader)
      .map(t=>({team:t,score:botBidScore(t,p),max:botMaxBid(t,p),balance:teamBalanceScore(t)}))
      .filter(x=>x.score>0&&bid+STEP<=x.max)
      .sort((a,b)=>b.score-a.score);
    if(!candidates.length)break;
    const best=candidates[0],second=candidates[1];
    const gap=second?best.score-second.score:999;
    const urgency=botUrgency(best.team,p);
    let chance=.72+urgency*.07+(p.ovr>=90?.08:0)+(gap<8?.08:0);
    if(botNeed(best.team,p)===0)chance-=.15;
    chance=Math.max(.45,Math.min(.99,chance));
    if(Math.random()>chance)break;
    const pick=(second&&gap<10&&Math.random()<.25)?second:best;
    const nextBid=+(bid+STEP).toFixed(2);
    if(nextBid>pick.max)break;
    bid=nextBid;leader=pick.team.id;
  }
  if(leader){
    const t=teams.find(x=>x.id===leader);
    if(t&&t.squad.length<maxSquadSize()&&t.purse>=bid){t.purse-=bid;t.spent+=bid;p.purchase=bid;t.squad.push(p);return {status:'SOLD',team:t.id,price:bid};}
  }
  unsoldQueue.push(p);return {status:'UNSOLD',team:'—',price:0};
}

function autoCompleteExpertAuction(){
  if(mode!=='ai')return;
  clearInterval(timer);clearTimeout(botTimer);
  auctionEnded=false;
  const allRemaining=[];
  if(cur)allRemaining.push(cur);
  if(players.length)allRemaining.push(...players);
  for(let i=currentPoolIndex+1;i<poolQueues.length;i++)allRemaining.push(...(poolQueues[i]||[]));
  if(unsoldQueue.length)allRemaining.push(...unsoldQueue);
  const seen=new Set(),queue=allRemaining.filter(p=>p&&!seen.has(p.name)&&(seen.add(p.name)));
  players=[];unsoldQueue=[];unsoldPhase=false;
  let sold=0,unsold=0;
  for(let i=0;i<queue.length;i++){
    const p=queue[i];
    players=queue.slice(i+1);
    const result=simulateExpertPlayer(p);
    result.status==='SOLD'?sold++:unsold++;
  }
  const secondPass=unsoldQueue.splice(0);
  for(const p of secondPass){
    const result=simulateExpertPlayer(p);
    result.status==='SOLD'?sold++:unsold++;
  }
  auctionEnded=true;
  cur=null;leader='';bid=0;time=0;
  log(`🤖 END AUCTION AUTO-COMPLETE • Expert AI finished the remaining auction • ${sold} sold • ${unsold} unsold.`);
  openManagement();
}

function roleTarget(role){return role==='BAT'?5:role==='BOWL'?5:role==='AR'?3:2}
function roleDeficit(t,role){return Math.max(0,roleTarget(role)-t.squad.filter(x=>x.role===role).length)}
function botUrgency(t,p){return Math.min(8,roleDeficit(t,p.role)+Math.max(0,11-t.squad.length)*.35)}
function teamBalanceScore(t){
 const counts={BAT:0,BOWL:0,AR:0,WK:0};t.squad.forEach(p=>{if(counts[p.role]!==undefined)counts[p.role]++});
 const targets={BAT:5,BOWL:5,AR:3,WK:2};let deficit=0;Object.keys(targets).forEach(r=>deficit+=Math.max(0,targets[r]-counts[r]));
 const avg=t.squad.length?t.squad.reduce((a,p)=>a+p.ovr,0)/t.squad.length:0,elite=t.squad.filter(p=>p.ovr>=88).length,coverage=Object.values(counts).filter(Boolean).length,size=Math.min(t.squad.length,maxSquadSize());
 const purseEfficiency=t.spent>0?Math.min(10,(t.squad.reduce((a,p)=>a+p.ovr,0)/t.spent)*.18):0;
 return +(avg*.72+coverage*4+elite*1.2+size*.7+purseEfficiency-deficit*5+Math.min(8,t.purse/15)).toFixed(1);
}
function botNeed(t,p){
 const direct=roleDeficit(t,p.role);let need=direct;if(teamBalanceScore(t)<82&&direct>0)need+=1;if(players.length<20&&direct>0)need+=1;if(t.squad.length>=Math.max(12,maxSquadSize()-8)&&direct===0)need=Math.max(0,need-1);return need;
}
function roleCoverage(t){return new Set(t.squad.map(p=>p.role).filter(Boolean)).size}
function scarcity(p){const remaining=players.filter(x=>x.role===p.role).length+1;return Math.max(0,2-(remaining/18))}
function squadAvg(t){return t.squad.length?t.squad.reduce((a,p)=>a+p.ovr,0)/t.squad.length:0}
function botBidScore(t,p){
 if(t.squad.length>=maxSquadSize()||t.purse<=p.base)return 0;const need=botNeed(t,p),balance=teamBalanceScore(t),avg=squadAvg(t),reserve=t.squad.length<6?20:t.squad.length<11?12:6;if(t.purse-reserve-p.base<0)return 0;
 let value=p.ovr*.72+p.fin*.06+p.bat*.06+p.bowl*.06+scarcity(p)*10+need*18;
 if(p.role==='WK'&&t.squad.filter(x=>x.role==='WK').length<2)value+=12;if(p.role==='BOWL'&&t.squad.filter(x=>x.role==='BOWL').length<5)value+=10;if(p.role==='BAT'&&t.squad.filter(x=>x.role==='BAT').length<5)value+=10;if(p.role==='AR'&&t.squad.filter(x=>x.role==='AR').length<3)value+=8;if(balance<82)value+=6;if(p.ovr>=avg+7)value+=6;if(p.ovr<avg-8&&need<2)value-=10;if(p.fin>=90&&t.squad.filter(x=>x.fin>=88).length<3)value+=5;return value;
}
function botMaxBid(t,p){
 const need=botNeed(t,p),avg=squadAvg(t),balance=teamBalanceScore(t),scarcityBonus=scarcity(p),qualityPremium=p.ovr>=95?2.5:p.ovr>=92?1.8:p.ovr>=88?1:0,rolePremium=need*1.35,fitPremium=p.ovr>=avg+7?1.25:0,balancePremium=balance<82&&need>0?1:0,reserve=t.squad.length<6?18:t.squad.length<11?11:6;
 let max=p.base+(p.ovr-75)*.078+qualityPremium+rolePremium+scarcityBonus+fitPremium+balancePremium;max=Math.min(max,t.purse-reserve);if(need===0)max=Math.min(max,p.base+Math.max(0,(p.ovr-82)*.035));if(t.purse<30)max=Math.min(max,t.purse*.52);return Math.max(p.base,+max.toFixed(2));
}

function setFastForwardSpeed(speed){
  if(!cur || (mode!=='ai' && !((mode==='multi'||mode==='rival')&&roomCreator)))return;
  const selected=Number(speed);
  if(![1,2,4,6].includes(selected))return;
  auctionSpeed=selected;
  clearInterval(timer);clearTimeout(botTimer);
  log(auctionSpeed===1?`▶️ NORMAL SPEED • ${cur.name} auction speed restored.`:`⏩ ${auctionSpeed}× FAST FORWARD • ${cur.name} auction speed increased. Bid gap is also reduced proportionally.`);
  renderAuctionControls();render();
  if((mode==='multi'||mode==='rival')&&roomCreator)mpPublish();
  timer=setInterval(()=>{time-=auctionSpeed;renderClock();if(time<=0){clearInterval(timer);resolveAuction()}},1000);
  if(mode==='ai')botTimer=setTimeout(expertBots,Math.max(expertBidGapMs(),300/auctionSpeed));
}
function fastForward(){
  if(!cur || (mode!=='ai' && !((mode==='multi'||mode==='rival')&&roomCreator))) return;
  const options=[1,2,4,6];
  const current=options.includes(Number(auctionSpeed))?Number(auctionSpeed):1;
  const nextSpeed=options[(options.indexOf(current)+1)%options.length];
  const select=document.getElementById('fastForwardSelect');
  if(select) select.value=String(nextSpeed);
  setFastForwardSpeed(nextSpeed);
}
function endAuction(){
  if((mode==='multi'||mode==='rival')&&!roomCreator)return alert('Only the room creator can end the multiplayer auction.');
  if(mode==='ai'){
    if(!confirm('Are you sure you want to end the live auction? Expert AI will automatically complete the remaining players using each team\'s remaining purse, squad needs and team balance.'))return;
    log('🛑 END AUCTION CONFIRMED • Expert AI is completing the remaining auction.');
    autoCompleteExpertAuction();
    return;
  }
  if(!confirm('Are you sure you want to end the multiplayer auction now? The live auction will stop for everyone and move to the management stage.'))return;
  auctionEnded=true;
  clearInterval(timer);
  clearTimeout(botTimer);
  log('🛑 AUCTION ENDED BY ROOM CREATOR.');
  mpPublish();
  openManagement();
}

function swapAcceptableForAI(a,b,t){
 const ratingGap=Math.abs(a.ovr-b.ovr);
 const roleNeed=botNeed(t,a);
 // User requirement: AI accepts only when the incoming player's OVR is within 4 points AND that role is needed.
 return ratingGap<=4 && roleNeed>0;
}
function swapPlayer(myName,targetTeamId,targetName){
 const mi=mine.squad.findIndex(p=>p.name===myName);
 const t=teams.find(x=>x.id===targetTeamId);
 const ti=t?t.squad.findIndex(p=>p.name===targetName):-1;
 if(mi<0||ti<0)return;
 const a=mine.squad[mi],b=t.squad[ti];
 if(t===mine)return alert('Choose another team.');
 if(mode==='ai'){
   if(!swapAcceptableForAI(a,b,t)){
     const gap=Math.abs(a.ovr-b.ovr);
     const need=botNeed(t,a)>0?'needed role requirement was not met':'the incoming role is not currently needed';
     return alert(`🤖 ${t.id} rejects the deal. OVR gap: ${gap}. ${need}. AI accepts only within ±4 OVR and when it needs that role.`);
   }
   mine.squad[mi]=b;t.squad[ti]=a;
   log(`🔁 ${t.id} ACCEPTED: ${a.name} ↔ ${b.name}. Role need + OVR fit matched.`);
   renderManagement();return;
 }
 // Multiplayer: send the proposal through the host.
 // Do NOT store it as pendingSwap: pendingSwap is reserved only for the
 // target team's incoming request, so the proposer cannot accept/reject its own deal.
 if(!mpChannel||!mpConnected)return alert('You are not connected to the auction room.');
 mpChannel.send({type:'broadcast',event:'auction',payload:{type:'swap_request',fromTeam:mine.id,toTeam:t.id,offer:a.name,request:b.name,from:mpClientId}}).catch(()=>alert('Swap proposal could not be sent.'));
 renderManagement();
 alert(`📨 Swap proposal sent to ${t.id}. Only the ${t.id} owner can accept or reject it.`);
}
function respondToSwap(accept){
 if(!pendingSwap)return;
 // Only the target team is allowed to respond. The proposing team has no pendingSwap.
 if(pendingSwap.to!==mine.id)return alert('Only the team receiving the proposal can accept or reject this deal.');
 const request={type:'swap_response',fromTeam:pendingSwap.from,toTeam:pendingSwap.to,offer:pendingSwap.offer,request:pendingSwap.request,accept:!!accept,from:mpClientId,proposalId:pendingSwap.proposalId};
 if((mode==='multi'||mode==='rival')){
   if(roomCreator){
     const from=teams.find(t=>t.id===request.fromTeam),to=teams.find(t=>t.id===request.toTeam);
     const targetMember=mpMembers.find(m=>m.teamId===request.toTeam);
     if(!targetMember||targetMember.clientId!==mpClientId){ pendingSwap=null; renderManagement(); return; }
     const ai=from?.squad.findIndex(p=>p.name===request.offer)??-1,bi=to?.squad.findIndex(p=>p.name===request.request)??-1;
     if(request.accept&&ai>=0&&bi>=0){const a=from.squad[ai],b=to.squad[bi];from.squad[ai]=b;to.squad[bi]=a;log(`🤝 ${to.id} ACCEPTED the swap: ${a.name} ↔ ${b.name}.`);mpBroadcast('state');mpBroadcast('swap_result',{ok:true,fromTeam:from.id,toTeam:to.id,offer:a.name,request:b.name,proposalId:request.proposalId});}
     else {log(`❌ ${to?.id||request.toTeam} REJECTED the swap proposal.`);mpBroadcast('swap_result',{ok:false,fromTeam:request.fromTeam,toTeam:request.toTeam,offer:request.offer,request:request.request,reason:'Swap rejected',proposalId:request.proposalId});}
   }else if(mpChannel&&mpConnected){
     mpChannel.send({type:'broadcast',event:'auction',payload:request}).catch(()=>{});
   }
 }
 pendingSwap=null;
 renderManagement();
}

function openManagement(){clearInterval(timer);clearTimeout(botTimer);show('manage');renderManagement()}
function renderManagement(){
 document.getElementById('manageSquad').innerHTML=mine.squad.length
 ?mine.squad.map(p=>`<div class="manage-player"><span><b>${p.name}</b><small style="display:block;color:#7d8aa0">${p.role} • OVR ${p.ovr} • Bought ₹${(p.purchase||p.base).toFixed(2)} Cr</small></span></div>`).join('')
 :'<p class="muted">No players in your squad.</p>';
 let targetTeams=participatingTeams().filter(t=>t!==mine&&t.squad.length); if(mode==='rival') targetTeams=targetTeams.filter(t=>isHumanTeam(t.id));
 let options=targetTeams.map(t=>`<optgroup label="${t.id} — ${t.name}">${t.squad.map(p=>`<option value="${t.id}|${encodeURIComponent(p.name)}">${p.name} — ${p.role} — OVR ${p.ovr}</option>`).join('')}</optgroup>`).join('');
 let pending=pendingSwap?`<div class="swap-request"><b>📨 SWAP REQUEST</b><p>${pendingSwap.from} offers <strong>${pendingSwap.offer}</strong> for ${pendingSwap.request} to ${pendingSwap.to}.</p><button class="swapbtn accept" onclick="respondToSwap(true)">✅ ACCEPT DEAL</button><button class="swapbtn reject" onclick="respondToSwap(false)">❌ REJECT DEAL</button></div>`:'';
 document.getElementById('swapPanel').innerHTML=pending+(mine.squad.length&&options?`<select id="mySwap" class="swap-select"><option value="">Select your player</option>${mine.squad.map(p=>`<option value="${encodeURIComponent(p.name)}">${p.name} — ${p.role} — OVR ${p.ovr}</option>`).join('')}</select><select id="targetSwap" class="swap-select"><option value="">Select target player</option>${options}</select><button class="swapbtn" onclick="doSwap()">🔁 PROPOSE SWAP</button><p class="muted">Multiplayer swap rule: incoming OVR must be within ±4. The target team's owner receives the request; only the target owner can ACCEPT or REJECT.</p>`:'<p class="muted">Need at least one player in your squad and one available player on another team.</p>');
 document.getElementById('manageStatus').innerHTML=`<div class="row"><span>Squad</span><b>${mine.squad.length}/${maxSquadSize()}</b></div><div class="row"><span>Purse</span><b>₹${mine.purse.toFixed(2)} Cr</b></div><div class="row"><span>Spent</span><b>₹${mine.spent.toFixed(2)} Cr</b></div><div class="row"><span>Role coverage</span><b>${roleCoverage(mine)}/4</b></div>`;
}
function doSwap(){const my=decodeURIComponent(document.getElementById('mySwap').value||'');const target=(document.getElementById('targetSwap').value||'').split('|');if(!my||target.length<2)return alert('Select both players.');swapPlayer(my,target[0],decodeURIComponent(target[1]))}
function log(x){logs.push(x);if(logs.length>30)logs.shift()}
function poolLabel(cat){return cat}
function poolPlayers(cat){
 if(cat==='UNSOLD') return unsoldPhase ? (players||[]).slice() : unsoldQueue.slice();
 const idx=AUCTION_POOLS.findIndex(x=>x.title===cat); if(idx<0)return [];
 return (poolQueues[idx]||[]).slice();
}
function togglePoolCard(cat){openedPoolCard=openedPoolCard===cat?null:cat;renderPoolBoard()}
function renderPoolBoard(){
 const board=document.getElementById('poolBoard');if(!board)return;
 const cards=AUCTION_POOLS.map(p=>({title:p.title,icon:p.icon,count:p.count}));
 cards.push({title:'UNSOLD',icon:'🔁',count:unsoldPhase?(players.length+unsoldQueue.length):unsoldQueue.length});
 board.innerHTML=cards.map(p=>{
   const list=poolPlayers(p.title),active=(p.title==='UNSOLD'?unsoldPhase:(cur&&cur.cat===p.title)),open=openedPoolCard===p.title;
   const status=p.title==='UNSOLD'?(unsoldPhase?'LIVE':(unsoldQueue.length?'READY':'LOCKED')):(active?'LIVE':(AUCTION_POOLS.findIndex(x=>x.title===p.title)<currentPoolIndex?'DONE':'LOCKED'));
   return `<div class="pool-card ${active?'active':''} ${open?'expanded':''}" onclick="togglePoolCard('${p.title}')">
    <div class="pool-head"><span>${active?'🔴':'⚪'} ${p.icon} ${p.title}</span><b>${p.title==='UNSOLD'?list.length:p.count}</b></div>
    <div class="pool-hint">${open?'Tap to close':status==='LOCKED'?'Locked until previous pools finish':'Tap to view all players'}</div>
    ${open?`<div class="pool-names">${list.map(x=>`<span class="pool-name ${cur&&cur.name===x.name?'current':''}">${x.name}<i>${x.ovr} ${x.capped===false?'U':'C'}</i></span>`).join('')||'<span class="pool-name">No players</span>'}</div>`:''}
   </div>`;
 }).join('');
}
function renderTeamTable(){
 const table=document.getElementById('table'); if(!table)return;
 table.innerHTML=participatingTeams().map(t=>{
   const open=expandedTeam===t.id;
   const playersHtml=t.squad.length?`<div class="team-roster">${t.squad.map((p,i)=>`<div><span>${i+1}. ${p.name}</span><b>${p.ovr}</b></div>`).join('')}</div>`:'<div class="team-roster empty">No players yet</div>';
   return `<div class="team-row-wrap"><button class="team-row ${open?'open':''}" onclick="toggleTeam('${t.id}')"><span class="team-main"><strong>${t.logo} ${t.id}</strong><small>${t.name}</small></span><span class="team-count">${t.squad.length}/${maxSquadSize()}</span><span class="team-purse">₹${t.purse.toFixed(1)} Cr</span><span class="team-chevron">${open?'▲':'▼'}</span></button>${open?playersHtml:''}</div>`;
 }).join('');
}
function toggleTeam(id){expandedTeam=expandedTeam===id?null:id;renderTeamTable()}

function renderOutcome(){
 const box=document.getElementById('auctionOutcome');if(!box)return;
 if(!lastOutcome){box.innerHTML='<span>🔴 LIVE</span><b>Awaiting auction result…</b>';box.className='auction-outcome live';return}
 box.className='auction-outcome '+(lastOutcome.status==='SOLD'?'sold':'unsold');
 box.innerHTML=lastOutcome.status==='SOLD'
  ?`<span>🔨 SOLD</span><b>${lastOutcome.name}</b><strong>→ ${lastOutcome.team}</strong><em>₹${lastOutcome.price.toFixed(2)} Cr</em>`
  :`<span>⚪ UNSOLD</span><b>${lastOutcome.name}</b><strong>No team acquired the player</strong>`;
}

function render(){
 document.getElementById('cat').textContent=cur.cat;
 document.querySelector('.auction-sub').textContent=(mode==='multi'||mode==='rival')?`MULTIPLAYER • ${multiplayerModeLabel()} • SQUAD BUILDING PHASE`:'EXPERT AI AUCTION • 1 HUMAN + 9 AI • SQUAD BUILDING PHASE';
 document.getElementById('avatar').textContent=cur.role==='BOWL'?'🎯':cur.role==='WK'?'🧤':cur.role==='AR'?'⚡':'🏏';
 document.getElementById('pname').textContent=cur.name;
 document.getElementById('prole').textContent=cur.role==='AR'?'ALL-ROUNDER':cur.role==='BOWL'?'BOWLER':cur.role==='WK'?'WICKETKEEPER':'BATTER';
 document.getElementById('ovr').textContent=cur.ovr;
 document.getElementById('stats').innerHTML=`🏏 <b>${cur.runs}</b> RUNS　🎯 <b>${cur.wickets}</b> WKTS　⚡ <b>${cur.sr}</b> SR　📊 <b>${cur.matches}</b> MATCHES　💰 <b>₹${cur.base}Cr</b> BASE`;
 document.getElementById('price').textContent=`₹${bid.toFixed(2)} Cr`;
 document.getElementById('leader').textContent=leader?leader+' is leading':'No bids yet';
 const blocked=leader===mine.id;
 document.getElementById('bids').innerHTML=[.25,.5,1,2,5].map(x=>`<button class="${blocked?'bid-disabled':''}" ${blocked?'disabled':''} onclick="place(${x})">+₹${x} Cr</button>`).join('');
 const turn=document.getElementById('turnHint'); if(turn)turn.innerHTML=blocked?`⛔ <b>${mine.id}</b> made the last bid — wait for a rival.`:`🎯 <b>${mine.id}</b> can bid now`;
 document.getElementById('count').textContent=mine.squad.length+'/'+maxSquadSize();
 document.getElementById('mine').innerHTML=`<div style="font-size:32px">${mine.logo}</div><h2>${mine.id}</h2><small>${mine.name}</small><h2 style="color:#ffb52e">₹${mine.purse.toFixed(2)} Cr</h2>`;
 document.getElementById('squad').innerHTML=mine.squad.length?mine.squad.map(p=>`<div class="squad"><b>${p.name}</b><span>${p.ovr}</span></div>`).join(''):'<p style="color:#758197">No players yet.</p>';
 renderTeamTable();
 document.getElementById('status').innerHTML=`<div class="row"><span>Auction mode</span><b>${multiplayerModeLabel()}</b></div><div class="row"><span>Minimum squads</span><b class="${allTeamsMinimum()?'status-good':'status-warn'}">${participatingTeams().filter(t=>t.squad.length>=11).length}/${participatingTeams().length} ready</b></div><div class="row">Players left <b>${players.length}</b></div><div class="row">Unsold waiting <b>${unsoldQueue.length}</b></div><div class="row">Spent <b>₹${mine.spent.toFixed(1)}Cr</b></div><div class="row">Roles <b>${roleCoverage(mine)}/4</b></div>`;
 document.getElementById('log').innerHTML=logs.slice(-10).reverse().map(x=>`<div class="row">${x}</div>`).join('');
 renderPoolBoard(); renderClock();
}
function renderClock(){const s=Math.max(0,time);const whole=Math.floor(s);const tenth=Math.floor((s-whole)*10+1e-8);document.getElementById('clock').textContent='00:'+String(whole).padStart(2,'0')+'.'+tenth}
function score(t){return teamBalanceScore(t)}
function finish(){clearInterval(timer);const activeTeams=participatingTeams();activeTeams.forEach(t=>t.score=score(t));activeTeams.sort((a,b)=>b.score-a.score);
if((mode==='rival'||mode==='ai')&&mine){
 const pos=Math.max(1,activeTeams.findIndex(t=>t.id===mine.id)+1);
 hhRecordRivalPosition(pos);
}
show('results');document.getElementById('podium').innerHTML=activeTeams.slice(0,3).map((t,i)=>`<div class="pod ${i===0?'first':i===1?'second':'third'}><div style="font-size:42px">${['🥇','🥈','🥉'][i]}</div><h2>${t.logo} ${t.id}</h2><b>${t.score} TEAM SCORE</b><p>${t.squad.length}/${maxSquadSize()} players<br>₹${t.purse.toFixed(1)} Cr left</p></div>`).join('');document.getElementById('final').innerHTML=`<div class="finalrow finalhead"><span>#</span><span>TEAM</span><span>BALANCE SCORE</span><span>SQUAD</span><span>PURSE</span><span>SPENT</span><span>ROLES</span></div>`+activeTeams.map((t,i)=>`<div class="finalrow"><span>${i+1}</span><b>${t.logo} ${t.id}</b><b>${t.score}</b><span>${t.squad.length}/${maxSquadSize()}</span><span>₹${t.purse.toFixed(1)}</span><span>₹${t.spent.toFixed(1)}</span><span>${roleCoverage(t)}/4</span></div>`).join('')}
function show(id, pushHistory=true){
 const current=document.querySelector(".screen.active");
 if(current?.id===id)return;
 if(current?.id==='auction'&&id!=='auction'){clearInterval(timer);clearTimeout(botTimer);}
 document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 if(pushHistory){
   try{history.pushState({screen:id},'',`#${id}`)}catch(e){}
 }
 window.scrollTo({top:0,left:0,behavior:"auto"});
}
function home(){clearInterval(timer);clearTimeout(botTimer);show('home')}
window.addEventListener('popstate',()=>{
 const screen=history.state?.screen || 'home';
 if(document.getElementById(screen))show(screen,false);
});
window.addEventListener('load',()=>{
 const initial=location.hash.replace('#','');
 const screen=document.getElementById(initial);
 if(screen){
   document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
   screen.classList.add('active');
   history.replaceState({screen:initial},'',`#${initial}`);
 }else{
   history.replaceState({screen:'home'},'',location.pathname+location.search);
 }
});
make();


function renderPoolSequenceV5(){
  const box=document.getElementById("poolSequenceCards");
  if(!box) return;
  box.innerHTML=AUCTION_POOLS.map((p,i)=>{
    const active=!unsoldPhase&&i===currentPoolIndex;
    const done=i<currentPoolIndex || unsoldPhase;
    return `<div class="pool-seq-card ${active?'active':''} ${done?'done':''}"><span class="pool-seq-icon">${p.icon}</span><span><b>${p.title}</b><small>${p.count} players</small></span><strong>${done?'✓':active?'LIVE':'LOCKED'}</strong></div>`;
  }).join('') + `<div class="pool-seq-card ${unsoldPhase?'active':''}"><span>🔁</span><span><b>UNSOLD</b><small>${unsoldPhase?(players.length+unsoldQueue.length):unsoldQueue.length} players</small></span><strong>${unsoldPhase?'LIVE':unsoldQueue.length?'READY':'LOCKED'}</strong></div>`;
}
document.addEventListener("DOMContentLoaded", ()=>{mpInit();renderPoolSequenceV5();hhRenderRank();});

function renderAuctionControls(){
  const ff=document.getElementById('fastForwardBtn');
  const select=document.getElementById('fastForwardSelect');
  const end=document.getElementById('endAuctionBtn');
  const canControlSpeed=mode==='ai'||((mode==='multi'||mode==='rival')&&roomCreator);
  if(ff){ff.style.display=canControlSpeed?'inline-flex':'none';ff.textContent=auctionSpeed===1?'⏩ FAST FORWARD':`⏩ ${auctionSpeed}× FAST FORWARD`;ff.title='Click to cycle 1× → 2× → 4× → 8×';}
  if(select){
    select.style.display=canControlSpeed?'inline-block':'none';
    select.value=String([1,2,4,6].includes(auctionSpeed)?auctionSpeed:1);
    select.disabled=!canControlSpeed;
    select.title='Choose auction speed. It only speeds up the current auction; it never skips a player or forces unsold.';
  }
  if(end)end.style.display=(mode!=='multi'||roomCreator)?'inline-flex':'none';
}
