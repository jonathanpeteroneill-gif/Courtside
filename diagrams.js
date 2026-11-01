// Court diagrams. Half court: x 0–50 ft, y 0–47 ft, basket at top (25, 5.25).
// Full court: x 0–94, y 0–50, baskets at (5.25, 25) and (88.75, 25).
// Elements: o offense [x,y,label] · x defense · c coach · k cone · b ball · q queue [x,y,dx,dy,n]
// Paths: m cut/run · d dribble · p pass · s screen · sh shot · t text [x,y,txt]
(function(){
const R=[25,5.25], RL=[5.25,25], RR=[88.75,25];
const T = {
lines:{full:1,e:[["q",1,10,-0.0,0,1],["o",2,10,""],["o",2,20,""],["o",2,30,""],["o",2,40,""],["q",-2.5,10,0,0,1],["q",-2.5,20,0,0,1],["q",-2.5,30,0,0,1],["q",-2.5,40,0,0,1],
  ["m",[4,10,45,10]],["m",[4,20,45,20]],["m",[4,30,45,30]],["m",[4,40,45,40]],["m",[45,12,6,12]],["t",47,47,"Half court and back"]]},
spread:{e:[["c",25,18],["o",12,27,""],["o",25,27,""],["o",38,27,""],["o",12,35,""],["o",25,35,""],["o",38,35,""],["o",12,43,""],["o",25,43,""],["o",38,43,""],
  ["b",13.8,28.8],["b",26.8,28.8],["b",39.8,28.8],["b",13.8,36.8],["b",26.8,36.8],["b",39.8,36.8],["b",13.8,44.8],["b",26.8,44.8],["b",39.8,44.8],["t",25,13.5,"Eyes on coach"]]},
circle:{e:(()=>{const a=[];for(let i=0;i<8;i++){const t=i/8*Math.PI*2;a.push(["o",25+10*Math.cos(t),30+10*Math.sin(t),""])}a.push(["c",25,30]);return a})()},
circleX:{e:(()=>{const a=[];for(let i=0;i<7;i++){const t=i/7*Math.PI*2-Math.PI/2;a.push(["o",25+11*Math.cos(t),29+11*Math.sin(t),String(i+1)])}a.push(["b",26.8,16.2],["x",25,29,""],["p",[25,18.5,34.5,34]],["p",[34,36,15,34.5]]);return a})()},
pairs:{e:[["o",8,22,"1"],["o",21,22,"2"],["o",29,22,"1"],["o",42,22,"2"],["o",8,36,"1"],["o",21,36,"2"],["o",29,36,"1"],["o",42,36,"2"],["b",9.8,23.8],["b",30.8,23.8],["b",9.8,37.8],["b",30.8,37.8],
  ["p",[10,21,19,21]],["p",[19,23.5,10,23.5]],["p",[31,35,40,35]],["p",[40,37.5,31,37.5]],["t",25,45,"Step back after 5 good passes"]]},
box:{e:[["k",6,18],["k",44,18],["k",6,45],["k",44,45],["o",14,24,""],["o",30,26,""],["o",20,36,""],["o",36,38,""],["o",11,40,""],["x",25,31,""],["x",38,22,""],
  ["d",[14,24,20,28]],["d",[30,26,36,30]],["d",[20,36,14,33]],["m",[25,31,22,35]],["t",25,15,"Stay inside the cones"]]},
layup:{e:[["o",42,22,"1"],["q",44,25,1.8,1.8,3],["b",43.8,20.2],["d",[41,21,35,14,29,7.5]],["sh",[29,7.5]],["o",9,22,"R"],["q",7,25,-1.8,1.8,2],["m",[9,20,21,8]],["p",[21,8,39,20]],["m",[29,8,8,21]],["t",25,30,"Shoot, then switch lines"]]},
step:{e:[["o",40,16,""],["q",42,18,1.8,1.8,3],["k",35,13],["k",31,10],["m",[40,15,35.5,12.5,31.5,9.5]],["sh",[31,9]],["t",36,19,"big step · little step · up"]]},
weave:{e:[["k",15,44],["k",15,38],["k",15,32],["k",15,26],["k",15,20],["o",15,48.5,""],["d",[15,47,18,41,12,35,18,29,12,23,15,17]],["k",35,44],["k",35,38],["k",35,32],["k",35,26],["k",35,20],["o",35,48.5,""],["d",[35,47,38,41,32,35,38,29,32,23,35,17]]]},
attack:{e:[["q",25,49,0,1.8,2],["o",25,46,""],["b",26.8,44.2],["k",25,26],["d",[25,44,25,28.5]],["d",[27,27,31,23,27.5,9]],["sh",[27,8]],["t",36,27,"Move at the cone"]]},
reads:{e:[["q",25,49,0,1.8,2],["o",25,46,""],["b",26.8,44.2],["c",31,19],["d",[25,44,25,24]],["m",[25,24,28,11]],["sh",[25,22]],["p",[24,23,5,6]],["o",4,4,""],["t",38,23,"Read the cue"]]},
form:{e:[["o",21,10,""],["o",29,10,""],["o",25,12.5,""],["o",19,6,""],["o",31,6,""],["sh",[21,9]],["sh",[29,9]],["sh",[25,11]],["t",25,18,"3 feet out, one hand"]]},
mikan:{e:[["o",21,6,""],["b",19.5,4.5],["m",[21,7.5,25,9,29,7.5]],["m",[29,6,25,3,21.5,5]],["sh",[23,5]],["sh",[27,5]],["t",25,14,"Never let it touch the floor"]]},
ft:{e:[["o",25,19,"1"],["b",25,16.8],["sh",[25,17]],["q",25,22.5,0,2.4,5],["t",34,24,"Line at the FT line"]]},
spots:{e:[["k",4,4],["k",9,21],["k",25,28.5],["k",41,21],["k",46,4],["o",9,21,"S"],["o",25,8,"R"],["b",26.8,9.8],["p",[24,10,10,19.5]],["sh",[10,19.5]],["m",[11,22,23,28]],["m",[27,28,39,22]],["t",25,35,"5 spots · move after every shot"]]},
catch:{e:[["o",25,8,"P"],["b",26.8,9.8],["o",46,4,"S"],["m",[46,6,41,18]],["p",[26,10,39.5,17]],["sh",[40,17]],["q",47,26,0,1.8,3],["t",33,30,"Shooter follows shot, becomes passer"]]},
curl:{e:[["o",31,9,"1"],["k",33,19],["o",25,32,"2"],["b",26.8,33.8],["m",[31,10.5,36,15,36,21,31,23,28,20]],["p",[25,30,28,21.5]],["sh",[28,19]],["t",40,26,"Curl tight or pop"]]},
closeout:{e:[["x",25,7,""],["b",23,8.5],["o",41,21,""],["p",[26,8,39.5,19.5]],["m",[26,8.5,38,18.5]],["t",34,28,"Sprint, chop, high hand"]]},
contact:{e:[["o",25,32,""],["b",26.8,33.8],["d",[25,30,25,10]],["x",19.5,14,"P"],["x",30.5,14,"P"],["sh",[25,9]],["t",25,40,"Pads bump on the gather"]]},
chase:{e:[["o",23,44,"O"],["b",24.8,45.8],["x",29,47.5,"D"],["d",[23,42,25,10]],["m",[29,46,26.5,11]],["sh",[25,9]],["t",38,40,"Defender starts 2 steps back"]]},
fullLayup:{full:1,e:[["o",2,2,""],["q",-1,2,0,0,1],["o",2,48,""],["q",-1,48,0,0,1],["b",3.8,3.8],["b",3.8,49.8],["d",[4,3,60,8,85,20]],["d",[4,47,60,42,85,30]],["sh",[88,24]],["t",47,28,"4–5 dribbles end to end"]]},
monkey:{e:[["o",12,30,"1"],["o",38,30,"2"],["x",25,30,""],["b",13.8,31.8],["p",[13.5,32,25,35,36.5,32]],["p",[36.5,28,25,24,13.5,28]],["t",25,40,"Fake a pass to make a pass"]]},
weave3:{full:1,e:[["o",2,12,"1"],["o",2,25,"2"],["o",2,38,"3"],["b",3.8,26.8],["p",[4,25,22,12]],["p",[24,13,42,37]],["p",[44,37,62,13]],["p",[64,13,82,30]],["m",[4,25,26,38,44,14,66,36]],["m",[4,12,22,12,46,38,62,14]],["sh",[88,25]],["t",47,47,"Pass and go behind"]]},
star:{e:(()=>{const a=[],P=[];for(let i=0;i<5;i++){const t=i/5*Math.PI*2-Math.PI/2;P.push([25+13*Math.cos(t),30+13*Math.sin(t)])}P.forEach(p=>{a.push(["k",p[0],p[1]+2.4],["o",p[0],p[1],""])});for(let i=0;i<5;i++){const A=P[i],B=P[(i+2)%5];a.push(["p",[A[0]+(B[0]-A[0])*.12,A[1]+(B[1]-A[1])*.12,A[0]+(B[0]-A[0])*.85,A[1]+(B[1]-A[1])*.85]])}a.push(["b",P[0][0]+1.8,P[0][1]+1.8]);return a})()},
square:{e:[["k",12,20],["k",38,20],["k",38,42],["k",12,42],["o",12,17.5,""],["o",38,17.5,""],["o",38,39.5,""],["o",12,39.5,""],["b",13.8,19.3],["p",[14,17.5,36,17.5]],["m",[14,20.5,35,21]],["p",[38,19.5,38,37.5]],["t",25,31,"Pass and follow"]]},
pepper:{e:[["o",25,18,"1"],["b",26.8,16.2],["o",12,32,"2"],["o",20.5,32,"3"],["o",29.5,32,"4"],["o",38,32,"5"],["b",13.8,33.8],["p",[24,19.5,13,30]],["p",[13.5,30.5,23.5,20]],["p",[26,19.5,29,30]],["t",25,40,"Two balls going at once"]]},
outlet:{e:[["c",25,25],["sh",[25,23]],["o",22,7,"R"],["o",46,18,"O"],["o",40,44,"W"],["p",[23.5,8,44.5,17]],["p",[46,19.5,41,42]],["t",9,28,"Pivot to the outside"]]},
perim:{e:[["o",4,4,"5"],["o",9,21,"4"],["o",25,28.5,"1"],["o",41,21,"2"],["o",46,4,"3"],["b",26.8,30.3],["p",[25,27,39.5,21.5]],["p",[41,19.5,45,6]],["p",[45,5,10.5,20]],["m",[25,26.5,26,9]],["t",25,37,"Pass · cut · fill the spot"]]},
shell:{e:[["o",9,21,"4"],["o",19,29,"1"],["o",31,29,"2"],["o",41,21,"3"],["b",20.8,30.8],["x",19.5,25.5,"1"],["x",28,23,"2"],["x",33,12,"3"],["x",15,15,"4"],["p",[20.5,29,29.5,29]],["t",25,40,"On ball · deny · help"]]},
rebound:{e:[["c",25,27],["sh",[25,25]],["o",11,12,"1"],["o",39,12,"2"],["o",25,19,"3"],["x",14,9.5,""],["x",36,9.5,""],["x",25,15,""],["t",25,34,"Hit first, then go get it"]]},
help:{e:[["o",41,21,"1"],["b",42.8,22.8],["o",9,21,"2"],["x",38.5,18.5,"1"],["x",14,17,"2"],["d",[41,19,37,8]],["m",[15,16,28,9]],["p",[35.5,7.5,10.5,19.5]],["m",[27,10,12,18.5]],["t",25,30,"Help, then recover"]]},
charge:{e:[["o",33,19,""],["b",34.8,20.8],["d",[32,17.5,28,11]],["x",26.5,9,""],["t",38,8,"Feet set, chest square"]]},
deny:{e:[["c",25,29],["b",26.8,30.8],["o",42,20,"1"],["x",38.5,19,""],["m",[42,21.5,44,25,31,7]],["p",[25,27,31,9]],["t",14,30,"Overplayed? Go backdoor"]]},
pnr:{e:[["o",22,31,"1"],["b",20.2,32.8],["x",22,27.5,"1"],["o",29.5,22,"5"],["s",[29.5,23.5,25.5,28]],["d",[23.5,31,31,30,35,22]],["m",[26,27,26,9]],["x",31,19,"5"],["p",[35,20,27,10]],["t",40,33,"Roll · pop · pocket"]]},
post:{e:[["o",33,10,"5"],["x",31,7,""],["o",44,19,"2"],["b",45.8,20.8],["p",[42.5,18,34.5,11]],["m",[33,8.5,29,5]],["sh",[27,5.5]],["t",25,28,"Seal, catch, drop step"]]},
highlow:{e:[["o",25,19,"4"],["b",26.8,20.8],["o",32,9,"5"],["x",30,10.5,""],["x",25,22.5,""],["p",[25,17,31,7]],["t",38,22,"Lob or bounce off the read"]]},
screenAway:{e:[["o",25,28.5,"1"],["b",26.8,30.3],["o",9,21,"2"],["o",41,21,"3"],["p",[23.5,27.5,10.5,22]],["s",[26.5,28,37.5,22]],["m",[41,19,37,16,29,21,26,26]],["t",25,37,"Screen away, curl or pop"]]},
blob:{e:[["o",31,-2,"1"],["b",33,-2.5],["o",19,8,"4"],["o",31,8,"5"],["o",19,18,"2"],["o",31,18,"3"],["s",[19,16.5,19,10.5]],["s",[31,16.5,31,10.5]],["m",[19,9.5,15,14,10,22]],["m",[31,9.5,40,14,44,5]],["p",[33,-1,43,4]],["t",25,30,"Down screens, shooters pop"]]},
horns:{e:[["o",25,32,"1"],["b",26.8,33.8],["o",17,19,"4"],["o",33,19,"5"],["o",4,4,"2"],["o",46,4,"3"],["s",[33,20.5,28,29]],["d",[26.5,31,35,28,38,19]],["m",[28,28,27,9]],["m",[17,20.5,15,27]],["t",25,41,"Horns: ball screen, roll + pop"]]},
zone:{e:[["x",19,20,""],["x",31,20,""],["x",10,10,""],["x",25,8,""],["x",40,10,""],["o",4,4,""],["o",9,24,""],["o",25,31,""],["o",41,24,""],["o",46,4,""],["b",26.8,32.8],["p",[26.5,30,39.5,24.5]],["m",[41,23,46,6]],["t",25,40,"Attack the gaps"]]},
press:{full:1,e:[["o",95.5,30,"1"],["b",96,27.5],["o",84,18,"2"],["o",84,34,"3"],["o",60,25,"4"],["o",45,12,"5"],["x",74,18,""],["x",74,34,""],["x",55,15,""],["x",55,35,""],["x",30,25,""],["p",[94,29,85.5,19.5]],["p",[82.5,19,61.5,24]],["p",[58.5,25,46.5,13.5]],["t",47,47,"Middle flash breaks the trap"]]},
trans:{full:1,e:[["o",62,25,"1"],["b",60.2,26.8],["o",66,10,"2"],["o",66,40,"3"],["x",22,25,""],["x",9,20,""],["d",[60,25,24,25]],["m",[64,10,12,11]],["m",[64,40,12,39]],["sh",[8,24]],["m",[22,27,60,40]],["t",47,47,"3 on 2, then 2 on 1 back"]]},
transThree:{full:1,e:[["o",2,6,"S"],["q",-1,6,0,0,1],["o",20,14,"P"],["b",21.8,15.8],["m",[4,6,40,4,78,5,90,3]],["p",[21.5,13,88,4.5]],["sh",[87,5]],["t",47,46,"Outlet, sprint, corner three"]]},
cut:{e:[["o",10,18,"1"],["o",25,28,"2"],["o",40,18,"3"],["x",13,16,""],["x",25,25,""],["x",37,16,""],["b",26.8,29.8],["q",4,46,2,0,3],["t",12,42,"Next team"],["t",38,42,"Score and stay on"]]},
ladder:{e:[["L",21,14,8,24],["o",25,42,""],["q",25,45,0,1.8,2],["m",[25,40,25,12]],["t",25,9,"Quick feet, light on toes"]]},
slides:{e:[["o",17,8,""],["o",17,13,""],["o",17,18,""],["m",[19,8,31,8]],["m",[31,10,19,10]],["m",[19,13,31,13]],["m",[19,18,31,18]],["t",25,26,"Lane line to lane line · never cross feet"]]},
offDrib:{e:[["o",41,22,""],["b",42.8,23.8],["d",[39.5,21,35,19]],["sh",[34,18]],["m",[41,20,43,17]],["t",30,30,"Pull-up · side-step · step-back"]]},
bacon:{e:[["o",1,12,"1"],["o",1,20,"2"],["o",1,28,"3"],["o",1,36,"4"],["x",49,12,"1"],["x",49,20,"2"],["x",49,28,"3"],["x",49,36,"4"],["b",25,30],["c",25,44],["m",[3,28,23,29.5]],["m",[47,28,27,29.5]],["t",25,40,"Coach calls a number"]]},
zigFull:{full:1,e:[["k",15,10],["k",30,40],["k",45,10],["k",60,40],["k",75,10],["o",2,25,""],["b",3.8,26.8],["d",[4,24,15,12,30,38,45,12,60,38,75,12,88,25]],["t",47,48,"Change direction at every cone"]]},
gauntlet:{full:1,e:[["x",20,25,"1"],["x",47,25,"2"],["x",74,25,"3"],["o",2,25,""],["b",3.8,26.8],["d",[4,25,16,16,24,34,44,18,52,32,70,18,80,30,90,25]],["t",47,48,"Defender live in each third"]]},
pressure:{e:[["o",25,13,"O"],["b",23.2,14.8],["x",27,16.5,"D"],["t",25,23,"Stay alive inside the lane"],["o",44,34,"O"],["x",40,30,""],["x",46,39,""],["d",[43,35,38,42]],["t",33,46,"Retreat vs trap"]]},
huddle:{e:(()=>{const a=[];for(let i=0;i<10;i++){const t=i/10*Math.PI*2;a.push(["o",25+6*Math.cos(t),40+6*Math.sin(t),""])}a.push(["c",25,40]);return a})()},
stations:{e:[["R",3,14,20,13,"Box jumps"],["R",27,14,20,13,"Lateral bounds"],["R",3,31,20,13,"Depth jumps"],["R",27,31,20,13,"Broad jumps"],["m",[23,20,27,20]],["m",[37,27,37,31]],["m",[27,37,23,37]],["t",25,49,"40s work · 20s rest · rotate"]]},
scrim:{full:1,e:[["o",30,10,""],["o",30,40,""],["o",20,25,""],["o",12,13,""],["o",10,36,""],["x",26,12,""],["x",26,38,""],["x",15,25,""],["x",9,16,""],["x",8,33,""],["b",21.8,26.8],["t",62,25,"5 v 5"]]}
};
const BY_NAME = {
"Dynamic Line Warm-up":"lines","Ball Slaps & Wraps":"spread","Partner Mirror":"pairs","Everybody's It":"box","Jump Rope Footwork":"spread","Jog & Stretch Circle":"circle","Layup Lines Warm-up":"layup","Partner Passing Warm-up":"pairs","Fast Feet & Sprints":"lines",
"Stationary Pound Series":"spread","Two-Ball Dribbling":"spread","Cone Weave":"weave","Zig-Zag Crossovers":"zigFull","Full-Court Combo Moves":"zigFull","Spider Dribble":"spread","Tennis Ball Toss Dribble":"spread","Change of Pace (Hesi)":"zigFull","Pressure Dribble":"pressure","Dribble Simon Says":"spread","Red Light Green Light Dribble":"lines","Retreat Dribble vs Trap":"pressure","Attack Moves at a Cone":"attack","Speed Dribble Relay":"weave","Blind Dribble":"spread","Two-Ball Full Court":"zigFull","Dribble Knockout":"box",
"Form Shooting":"form","Close-Range Form Ladder":"form","Around the World":"spots","5-Spot Shooting":"spots","Partner Shooting (1 Minute)":"spots","Catch & Shoot":"catch","Pull-up Jumper":"attack","Free Throw Pressure":"ft","Beat the Pro":"spots","3-Man Shooting":"catch","Elbow Curl Shooting":"curl","Hot Shot":"spots","Make It Rain":"spots","Pass & Follow Shooting":"catch","Free Throw Routine Builder":"ft","Knockout":"ft","P-I-G / H-O-R-S-E":"spots","21":"rebound",
"Mikan Drill":"mikan","Reverse Mikan":"mikan","Two-Line Layups":"layup","Step, Step, Up":"step","Power Layups":"contact","Full-Court Speed Layups":"fullLayup","Euro Step Cones":"attack","Contact Finishing":"contact","Weak Hand Layup Circuit":"layup","Floater Series":"attack","Chase-Down Layups":"chase",
"Partner Passing Series":"pairs","Monkey in the Middle":"monkey","3-Man Weave":"weave3","Star Passing":"star","Pepper Drill":"pepper","Two-Ball Partner Passing":"pairs","Pass & Follow Square":"square","Outlet Passing":"outlet","Skip & Swing":"perim","Bull in the Ring":"circleX","Hot Potato":"circle","5-Pass Game":"box",
"Box-Out Circle":"circle","Rebound & Outlet":"outlet","Superman Drill":"mikan","Rebound War":"rebound","Tip Drill":"form","Crash the Boards":"shell","Toss-Back Rip":"pairs",
"Defensive Slides":"slides","Zig-Zag Defense":"zigFull","Closeouts":"closeout","Shell Drill":"shell","1v1 From the Wing":"closeout","Help & Recover 2v2":"help","Taking a Charge":"charge","Deny the Wing":"deny","Mass Defensive Stance":"spread","Contest the Shot":"closeout","Pick & Roll Defense":"pnr","Defensive Wave":"spread",
"Jump Stop & Pivot":"lines","Triple Threat Series":"spread","Agility Ladder":"ladder","Sprint & Stop":"lines","Inside Pivot Catch":"curl","Drop Step Series":"post",
"Up & Under":"post","Post Entry Passing":"post","Sealing Drill":"post","Hook Shot Series":"post","Face-up Series":"post",
"Give & Go":"deny","Backdoor Cuts":"deny","Pick & Roll Basics":"pnr","Pass & Screen Away":"screenAway","Drive & Kick":"help","5-Out Motion":"perim","Fill the Spot":"perim","Inbounds Play: Box":"blob","Press Break":"press","3v3 Cutthroat":"cut",
"3-on-2, 2-on-1":"trans","11-Man Break":"trans","2v1 Full Court":"trans","Sprint Back Transition":"trans","3-Lane Fill":"weave3",
"Line Sprints":"lines","17s":"lines","Layup Race":"fullLayup","Minute Drills":"slides","Partner Chase":"lines",
"Sharks & Minnows":"zigFull","Steal the Bacon":"bacon","Treasure Hunt":"box","King of the Court":"cut","Scrimmage with Rules":"scrim","1v1 Battle Ladder":"cut","Relay Races":"weave","Spot-Up Team Battle":"spots",
"Static Stretch & Huddle":"huddle","Free Throw Cool-Down":"ft","Shot of the Day":"ft","Team Huddle & Shout-outs":"huddle",
"Movement Prep & Activation":"lines","Shooting Ramp":"spots","Two-Ball Full-Court Finishing":"fullLayup","Gauntlet":"gauntlet","Elite Combo Series":"spread","Handle into Reads":"reads","1v2 Pressure Breaker":"gauntlet",
"Transition Threes":"transThree","Make 100":"catch","Movement Shooting Reads":"curl","Off-the-Dribble Series":"offDrib","Closeout Attack Reads":"closeout","25-Spot Challenge":"spots","Pressure Free Throws":"ft","Beat the Clock Threes":"spots",
"Finishing Gauntlet":"contact","Inside / Outside Hand Reads":"chase","Two-Foot Gather Series":"attack","Rim Protector Reads":"pnr","Advantage Finishing":"chase","Spin & Counter Finish":"attack",
"Pocket & Lob Reads 2v1":"pnr","Get Open vs Denial":"deny","Drive, Draw, Dish":"help","Hit-Ahead Drill":"outlet","4-Corner Full-Court Passing":"square","One-Touch Passing Circle":"circleX",
"Shell Rebounding":"shell","Offensive Rebound Pursuit":"rebound","Circle Box-Out War":"circle",
"Shell Drill: Rotations":"shell","Ball Screen Coverages":"pnr","Closeout 1v1: 3 Stops":"closeout","X-Out Scramble":"help","Defensive Transition: Tag-Up & Load":"trans","Post Defense":"post","Zone Slides: 2-3":"zone","2-2-1 Press Trap Reads":"press",
"Shot Prep Footwork":"offDrib","Plyometric Circuit":"stations","Post Seal & Duck-in":"post","High-Low Entry 2v2":"highlow",
"Pick & Roll Reads vs Coverage":"pnr","Advantage 4v3":"help","Horns Set & Counters":"horns","Dribble Hand-off Series":"pnr","Zone Offense vs 2-3":"zone","Late-Game Situations":"blob","Read & React 5v0":"perim",
"Make/Miss Transition 5v5":"scrim","4v3 Continuous":"trans","Numbers Defense: Tandem":"trans","Defensive Slide Ladder":"slides","Sideline Sprints + Free Throws":"ft","Weave into Layup Race":"weave3",
"3 Stops Drill":"shell","Advantage / Disadvantage":"cut","Situational 5v5":"scrim","Kill Scrimmage":"scrim"
};
const BY_CAT={warm:"lines",handle:"spread",shoot:"spots",finish:"layup",pass:"pairs",rebound:"rebound",defense:"shell",foot:"spread",post:"post",offense:"perim",transition:"trans",condition:"lines",games:"cut",cool:"huddle"};

const f=n=>+n.toFixed(2);
function zig(pts){ // dribble squiggle
  let out=[], first=true;
  for(let i=0;i<pts.length-2;i+=2){
    const [x1,y1,x2,y2]=[pts[i],pts[i+1],pts[i+2],pts[i+3]];
    const L=Math.hypot(x2-x1,y2-y1), ux=(x2-x1)/L, uy=(y2-y1)/L, nx=-uy, ny=ux;
    const last=i===pts.length-4, run=last?Math.max(0,L-2):L, step=0.9;
    if(first){out.push(`M${f(x1)},${f(y1)}`);first=false}
    let s=0,k=0; while(s+step<run){s+=step;k++;const a=(k%2?0.7:-0.7);out.push(`L${f(x1+ux*s+nx*a)},${f(y1+uy*s+ny*a)}`)}
    out.push(`L${f(x2)},${f(y2)}`);
  }
  return out.join("");
}
const poly=p=>"M"+p.reduce((a,v,i)=>a+(i%2?",":(i?" L":""))+f(v),"");
function courtSVG(full){
  if(full) return `<rect x="0" y="0" width="94" height="50" class="dg-floor"/><g class="dg-court"><rect x="0" y="0" width="94" height="50"/><line x1="47" y1="0" x2="47" y2="50"/><circle cx="47" cy="25" r="6"/>
  <rect x="0" y="17" width="19" height="16"/><rect x="75" y="17" width="19" height="16"/><circle cx="19" cy="25" r="6"/><circle cx="75" cy="25" r="6"/>
  <path d="M0,3 L14.2,3 A23.75,23.75 0 0 1 14.2,47 L0,47"/><path d="M94,3 L79.8,3 A23.75,23.75 0 0 0 79.8,47 L94,47"/>
  <line x1="4" y1="22" x2="4" y2="28"/><line x1="90" y1="22" x2="90" y2="28"/></g><circle cx="5.25" cy="25" r=".9" class="dg-rim"/><circle cx="88.75" cy="25" r=".9" class="dg-rim"/>`;
  return `<rect x="0" y="0" width="50" height="47" class="dg-floor"/><g class="dg-court"><rect x="0" y="0" width="50" height="47"/><rect x="17" y="0" width="16" height="19"/><circle cx="25" cy="19" r="6"/>
  <path d="M3,0 L3,14.2 A23.75,23.75 0 0 0 47,14.2 L47,0"/><path d="M19,47 A6,6 0 0 1 31,47"/><line x1="22" y1="4" x2="28" y2="4"/></g><circle cx="25" cy="5.25" r=".9" class="dg-rim"/>`;
}
function el(e,full){
  const [k]=e;
  if(k==="o") return `<g class="dg-o"><circle cx="${f(e[1])}" cy="${f(e[2])}" r="1.7"/>${e[3]?`<text x="${f(e[1])}" y="${f(e[2])}">${e[3]}</text>`:""}</g>`;
  if(k==="x") return `<g class="dg-x"><path d="M${f(e[1]-1.2)},${f(e[2]-1.2)} L${f(e[1]+1.2)},${f(e[2]+1.2)} M${f(e[1]+1.2)},${f(e[2]-1.2)} L${f(e[1]-1.2)},${f(e[2]+1.2)}"/>${e[3]?`<text x="${f(e[1]+1.9)}" y="${f(e[2]+1.4)}">${e[3]}</text>`:""}</g>`;
  if(k==="c") return `<g class="dg-c"><rect x="${f(e[1]-1.7)}" y="${f(e[2]-1.7)}" width="3.4" height="3.4" rx=".4"/><text x="${f(e[1])}" y="${f(e[2])}">C</text></g>`;
  if(k==="k") return `<path class="dg-k" d="M${f(e[1])},${f(e[2]-1.1)} L${f(e[1]+1)},${f(e[2]+0.8)} L${f(e[1]-1)},${f(e[2]+0.8)}Z"/>`;
  if(k==="b") return `<circle class="dg-b" cx="${f(e[1])}" cy="${f(e[2])}" r=".8"/>`;
  if(k==="q"){let s="";for(let i=0;i<e[5];i++)s+=`<circle class="dg-qd" cx="${f(e[1]+e[3]*i)}" cy="${f(e[2]+e[4]*i)}" r="1.1"/>`;return s}
  if(k==="m") return `<path class="dg-m" d="${poly(e[1])}" marker-end="url(#dgA)"/>`;
  if(k==="p") return `<path class="dg-p" d="${poly(e[1])}" marker-end="url(#dgA)"/>`;
  if(k==="d") return `<path class="dg-m" d="${zig(e[1])}" marker-end="url(#dgA)"/>`;
  if(k==="s"){const p=e[1],n=p.length,x1=p[n-4],y1=p[n-3],x2=p[n-2],y2=p[n-1],L=Math.hypot(x2-x1,y2-y1),nx=-(y2-y1)/L*1.5,ny=(x2-x1)/L*1.5;
    return `<path class="dg-m" d="${poly(p)} M${f(x2+nx)},${f(y2+ny)} L${f(x2-nx)},${f(y2-ny)}"/>`}
  if(k==="sh"){const r=full?(e[1][0]>47?RR:RL):R;return `<path class="dg-sh" d="M${f(e[1][0])},${f(e[1][1])} L${r[0]},${r[1]}" marker-end="url(#dgA)"/>`}
  if(k==="g") return `<circle class="dg-g" cx="${f(e[1])}" cy="${f(e[2])}" r="1.5"/>`;
  if(k==="L2") return `<line class="dg-court" stroke-dasharray="1 1" x1="${e[1]}" y1="${e[2]}" x2="${e[3]}" y2="${e[4]}"/>`;
  if(k==="t") return `<text class="dg-t" x="${f(e[1])}" y="${f(e[2])}">${e[3]}</text>`;
  if(k==="L"){let s=`<rect class="dg-court" x="${e[1]}" y="${e[2]}" width="${e[3]}" height="${e[4]}"/>`;for(let y=e[2]+3;y<e[2]+e[4];y+=3)s+=`<line class="dg-court" x1="${e[1]}" y1="${y}" x2="${e[1]+e[3]}" y2="${y}"/>`;return s}
  if(k==="R") return `<rect class="dg-court" x="${e[1]}" y="${e[2]}" width="${e[3]}" height="${e[4]}" rx="1"/><text class="dg-t" x="${e[1]+e[3]/2}" y="${e[2]+e[4]/2}">${e[5]}</text>`;
  return "";
}
const flat=els=>els.flatMap(x=>Array.isArray(x[0])?x:[x]);
function svg(els,full,label){
  const vb=full?"-4 -4 102 58":"-4 -5 58 56";
  return `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label.replace(/"/g,"")}"><defs><marker id="dgA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10Z" class="dg-ah"/></marker></defs>${courtSVG(full)}${flat(els).map(e=>el(e,full)).join("")}</svg>`;
}
// Frames for a drill: [{svg, cap}]
window.drillFrames=function(d){
  const fr=(window.PLAYS||{})[d.n];
  if(fr&&fr.length) return fr.map((f,i)=>({svg:svg(f.e,f.full,`${d.n} step ${i+1}`),cap:f.c}));
  const t=T[BY_NAME[d.n]||BY_CAT[d.c]]||T.spread;
  return [{svg:svg(t.e,!!t.full,d.n),cap:""}];
};
window.drawDiagram=function(d){return window.drillFrames(d)[0].svg};
// Swipeable step viewer
window.drawCarousel=function(d){
  const f=window.drillFrames(d), n=f.length;
  const slides=f.map((x,i)=>`<figure class="dgc-slide"><div class="dg-wrap">${x.svg}</div><figcaption>${n>1?`<b>Step ${i+1} of ${n}</b>`:""}${x.cap?`<span>${x.cap}</span>`:""}</figcaption></figure>`).join("");
  if(n<2) return `<div class="dgc single">${slides}</div>`;
  return `<div class="dgc"><div class="dgc-track">${slides}</div><div class="dgc-nav"><button type="button" class="dgc-btn" data-dgc="-1" aria-label="Previous step">‹</button><span class="dgc-dots">${f.map((_,i)=>`<i${i?"":' class="on"'}></i>`).join("")}</span><button type="button" class="dgc-btn" data-dgc="1" aria-label="Next step">›</button></div><div class="dgc-hint">Swipe for each step</div></div>`;
};
document.addEventListener("click",e=>{const b=e.target.closest("[data-dgc]");if(!b)return;const tr=b.closest(".dgc").querySelector(".dgc-track");tr.scrollBy({left:tr.clientWidth*(+b.dataset.dgc),behavior:"smooth"})});
document.addEventListener("scroll",e=>{const tr=e.target;if(!tr.classList||!tr.classList.contains("dgc-track"))return;const i=Math.round(tr.scrollLeft/tr.clientWidth);tr.parentNode.querySelectorAll(".dgc-dots i").forEach((d,k)=>d.classList.toggle("on",k===i))},true);
})();
