// Step-by-step drill diagrams. Each drill: list of frames; each frame = caption + elements (+ optional full court).
// Half court (feet): x 0–50, y 0–47, basket (25,5.25), blocks ~(15.5,8)/(34.5,8), elbows (17,19)/(33,19),
// wings (8,22)/(42,22), slots (18,29)/(32,29), top (25,29), corners (3,4)/(47,4). Full court: x 0–94, y 0–50.
(function(){
const P={}; window.PLAYS=P;
const O=(x,y,l="")=>["o",x,y,l], X=(x,y,l="")=>["x",x,y,l], C=(x,y)=>["c",x,y], K=(x,y)=>["k",x,y], B=(x,y)=>["b",x,y];
const OB=(x,y,l="")=>[O(x,y,l),B(x+1.6,y+1.6)], G=(x,y)=>["g",x,y];
const Q=(x,y,dx,dy,n)=>["q",x,y,dx,dy,n], M=(...p)=>["m",p], D=(...p)=>["d",p], PS=(...p)=>["p",p], S=(...p)=>["s",p], SH=(x,y)=>["sh",[x,y]], T=(x,y,t)=>["t",x,y,t];
const F=(c,e,full)=>({c,e,full:!!full});
const def=(n,...fr)=>{P[n]=fr};
// ---------- reusable layouts ----------
const spread=(balls=1,coach=true,extra=[])=>{const a=[];[[12,27],[25,27],[38,27],[12,35],[25,35],[38,35],[12,43],[25,43],[38,43]].forEach(([x,y])=>{a.push(O(x,y));if(balls>0)a.push(B(x+1.6,y+1.6));if(balls>1)a.push(B(x-1.6,y+1.6))});if(coach)a.push(C(25,18));return a.concat(extra)};
const spreadX=(extra=[])=>{const a=[];[[12,27],[25,27],[38,27],[12,35],[25,35],[38,35],[12,43],[25,43],[38,43]].forEach(([x,y])=>a.push(X(x,y)));a.push(C(25,18));return a.concat(extra)};
const lanes=(ys,x1,x2,opt={})=>{const a=[];ys.forEach(y=>{a.push(O(x1,y));if(opt.ball)a.push(B(x1+1.6,y+1.6));a.push(Q(x1-3,y,0,0,1));if(x2!=null)a.push(opt.drib?D(x1+2,y,x2,y):M(x1+2,y,x2,y))});return a};
const circle=(n,cx,cy,r,lab)=>{const a=[];for(let i=0;i<n;i++){const t=i/n*Math.PI*2-Math.PI/2;a.push(O(cx+r*Math.cos(t),cy+r*Math.sin(t),lab?String(i+1):""))}return a};
const pairs=(kind)=>{const a=[];[[22],[34]].forEach(([y])=>{[[8,21],[29,42]].forEach(([x1,x2])=>{a.push(O(x1,y,"1"),O(x2,y,"2"),B(x1+1.6,y+1.6));
  if(kind==="bounce")a.push(PS(x1+2,y,(x1+x2)/2,y+3.5,x2-2,y));else if(kind==="over")a.push(PS(x1+2,y-0.5,(x1+x2)/2,y-4,x2-2,y-0.5));else a.push(PS(x1+2,y,x2-2,y))})});return a};
const ftLine=()=>[OB(25,19,"1"),SH(25,17),Q(25,22.5,0,2.4,5)];
const spotsMarks=()=>[K(3,6),K(9,23.5),K(25,31),K(41,23.5),K(47,6)];
// ======================================================= WARM-UP
def("Dynamic Line Warm-up",
 F("Four lines on the baseline · first player goes to half court",lanes([10,20,30,40],2,44),1),
 F("Jog back on the outside · next movement starts",[O(46,10),O(46,20),O(46,30),O(46,40),M(46,7.5,47,2,4,2),M(46,42.5,47,48,4,48),T(70,25,"High knees · butt kicks · karaoke · lunges · backpedal · slides")],1));
def("Ball Slaps & Wraps",F("Spread out with a ball, eyes on the coach",spread(1)));
def("Partner Mirror",
 F("Leader (L) moves: slide, sprint, backpedal",[O(12,22,"L"),O(12,30,"F"),O(36,22,"L"),O(36,30,"F"),M(13.5,22,20,22),M(13.5,30,20,30),M(37.5,22,44,22),M(37.5,30,44,30),T(25,40,"Follower mirrors every move")]),
 F("Switch leader every 20 seconds",[O(12,22,"F"),O(12,30,"L"),O(36,22,"F"),O(36,30,"L"),M(12,28.5,12,24.5),T(25,40,"Low stance, never cross feet")]));
def("Everybody's It",
 F("Everyone dribbles inside the box and tries to tag",[K(6,18),K(44,18),K(6,45),K(44,45),...OB(14,24),...OB(30,26),...OB(20,36),...OB(36,38),...OB(11,40),D(14,24,20,28),D(30,26,35,31),D(20,36,15,33)]),
 F("Tagged or lost the ball: 5 crossovers outside, then back in",[K(6,18),K(44,18),K(6,45),K(44,45),...OB(14,24),...OB(30,26),...OB(36,38),...OB(48,30),M(48,32,42,36),T(25,12,"Shrink the box each minute")]));
def("Jump Rope Footwork",F("Spread out with a rope each · 30s per variation",spread(0)));
def("Jog & Stretch Circle",
 F("Two easy laps around the court",[O(4,4),O(8,4),O(12,4),M(16,3,90,3,91,47,3,47,3,8)],1),
 F("Circle at center court · captain leads stretches",[...circle(10,47,25,9),C(47,25)],1));
def("Layup Lines Warm-up",
 F("Shooter dribbles in for a right-hand layup · rebounder crashes",[...OB(38,28,"S"),Q(39.5,31,1.5,2.2,3),D(37,26,33,16,29.5,9),SH(29,8.5),O(12,28,"R"),Q(10.5,31,-1.5,2.2,3),M(13,26,21,10)]),
 F("Rebounder passes to the next shooter · both switch lines",[O(21,8.5,"R"),B(22.6,10.1),O(29,8,"S"),O(38,28,""),Q(39.5,31,1.5,2.2,2),Q(10.5,31,-1.5,2.2,3),PS(23,10,36.5,27),M(28,10,12,33),M(21,10.5,40,36)]));
def("Partner Passing Warm-up",F("Chest, bounce, overhead, one-hand push · 10 each",pairs("chest")),F("Bounce passes: bounce two thirds of the way",pairs("bounce")));
def("Fast Feet & Sprints",
 F("Fast feet on the baseline · on the clap, sprint to the FT line",lanes([12,25,38],2,18),1),
 F("Back to the baseline, then half court, then full court",[...lanes([12,25,38],2,null),M(4,10,46,10),M(4,23,92,23),T(47,46,"Explode on the clap")],1));
// ======================================================= BALL HANDLING
def("Stationary Pound Series",F("Rows facing the coach · pound at ankle, knee, waist height",spread(1)));
def("Two-Ball Dribbling",F("Two balls each · together, alternating, high-low",spread(2)),F("Walk forward and back while dribbling both",[...spread(2,false),M(12,25,12,19),M(25,25,25,19),M(38,25,38,19)]));
def("Cone Weave",
 F("Weave through the cones using the outside hand",[K(15,42),K(15,36),K(15,30),K(15,24),K(15,18),...OB(15,47),D(15,45,18,39,12,33,18,27,12,21,15,15),K(35,42),K(35,36),K(35,30),K(35,24),K(35,18),...OB(35,47),D(35,45,38,39,32,33,38,27,32,21,35,15)]),
 F("Come back with a crossover at every cone",[K(15,42),K(15,36),K(15,30),K(15,24),K(15,18),...OB(15,13),D(15,15,12,21,18,27,12,33,18,39,15,45),K(35,42),K(35,36),K(35,30),K(35,24),K(35,18),...OB(35,13),D(35,15,32,21,38,27,32,33,38,39,35,45)]));
const zz=[K(16,8),K(32,42),K(48,8),K(64,42),K(80,8)];
def("Zig-Zag Crossovers",
 F("Dribble at an angle to the first cone",[...zz,...OB(2,25),D(4,24,15,10)],1),
 F("Cross over at each cone and change direction",[...zz,O(16,10),D(17,11,31,40,47,10,63,40,79,10,91,24)],1),
 F("Come back with a different move",[...zz,O(91,25),D(89,25,80,12,64,40,48,10,32,40,16,10,3,25),T(47,47,"Between the legs or behind the back")],1));
def("Full-Court Combo Moves",
 F("Cone 1 (FT line): crossover",[K(19,25),K(47,25),K(75,25),...OB(2,25),D(4,25,17,25),M(19,23.5,22,19,28,20)],1),
 F("Cone 2 (half court): between the legs",[K(19,25),K(47,25),K(75,25),O(28,21),D(30,21,45,25),M(47,23.5,50,29,56,29)],1),
 F("Cone 3: behind the back, finish at the far hoop",[K(19,25),K(47,25),K(75,25),O(56,29),D(58,29,73,25),M(75,23.5,78,21,86,24),SH(86,24)],1));
def("Spider Dribble",F("Wide stance, ball between the feet · front-front-back-back",spread(1)));
def("Tennis Ball Toss Dribble",F("Dribble one hand, toss and catch the tennis ball with the other",spread(1)),F("Partner version: dribble and play catch",[...pairs("over"),T(25,44,"Dashed line = tennis ball toss")]));
def("Change of Pace (Hesi)",
 F("Speed dribble to the FT line",lanes([12,25,38],2,17,{ball:1,drib:1}),1),
 F("Hesitate: chest up, feet chopping · then explode",[O(19,12),O(19,25),O(19,38),T(19,6,"hesi"),D(21,12,45,12),D(21,25,45,25),D(21,38,45,38)],1),
 F("Repeat at half court and the far FT line",[O(47,12),O(47,25),O(47,38),D(49,12,73,12),D(49,25,73,25),D(49,38,73,38),T(75,6,"hesi")],1));
def("Pressure Dribble",F("Dribbler keeps it alive in the lane for 20s · defender bumps",[...OB(25,12,"O"),X(27.5,15.5,"D"),D(24,13,21,15,24,17),T(25,25,"Switch roles after each round")]));
def("Dribble Simon Says",F("Coach calls moves · only move when Simon says",spread(1)));
def("Red Light Green Light Dribble",
 F("Green light: dribble toward the coach",[...lanes([8,18,28,38],2,20,{ball:1,drib:1}),C(47,25)],1),
 F("Red light: jump stop · moving sends you back",[O(22,8),O(24,18),O(21,28),O(18,38),C(47,25),M(22,30,4,30),T(22,46,"Moved on red → back to the start")],1));
def("Retreat Dribble vs Trap",
 F("Dribbler attacks the sideline",[...OB(30,34,"O"),X(38,28),X(46,40),D(32,33,43,30)]),
 F("Two defenders trap",[...OB(43,30,"O"),X(41,26.5),X(46.5,34),M(38,28,41,27),M(46,40,46.5,35.5)]),
 F("Retreat two dribbles, then split or attack the high side",[...OB(43,30,"O"),X(41,26.5),X(46.5,34),D(42,32,38,38),D(38,38,34,30,30,22),T(20,42,"Retreat straight back, then attack")]));
def("Attack Moves at a Cone",
 F("Dribble at the cone from half court",[Q(25,49,0,1.8,2),...OB(25,45),K(25,26),D(25,43,25,28.5)]),
 F("Make a move one step from the cone, finish",[K(25,26),O(25,28.5),D(27,27,31,22,27.5,9),SH(27,8),T(38,27,"crossover · in-and-out · spin")]),
 F("Rebound, pass back, join the line",[K(25,26),O(26,8),B(27.6,9.6),PS(26,10,25,44),M(24,9,22,47),Q(25,47,0,1.8,2)]));
def("Speed Dribble Relay",
 F("Speed dribble to half court and back",[...lanes([10,25,40],2,45,{ball:1,drib:1}),M(45,12,4,12)],1),
 F("Hand off to the next player · first team done sits",[O(4,10),O(4,25),O(4,40),Q(1,10,-0,0,1),PS(5,11.5,2,12)],1));
def("Blind Dribble",F("Eyes closed · 20s each hand, then crossovers",spread(1)));
def("Two-Ball Full Court",
 F("Walk to half court with two balls",lanes([12,25,38],2,45,{ball:1,drib:1}),1),
 F("Jog to the far baseline, alternate dribble coming back",[O(47,12),O(47,25),O(47,38),D(49,12,92,12),D(49,25,92,25),D(49,38,92,38)],1));
def("Dribble Knockout",
 F("Everyone dribbles in the half court · knock other balls out",[...OB(12,24),...OB(28,22),...OB(38,32),...OB(18,36),...OB(30,40),D(28,22,34,26),D(18,36,24,33),T(25,13,"Protect yours, knock theirs")]),
 F("Knocked out: 10 crossovers outside, rejoin (or wait in finals)",[...OB(12,24),...OB(38,32),...OB(18,36),...OB(52,30),T(25,13,"Last dribbler standing wins")]));
// ======================================================= SHOOTING
def("Form Shooting",F("3 feet out, shooting hand only · 10 makes",[O(21,10),O(29,10),O(25,12.5),O(19,6),O(31,6),SH(21,9),SH(29,9),SH(25,11)]));
def("Close-Range Form Ladder",
 F("Make 3 in a row from the block",[...OB(30,8),SH(29,8)]),
 F("Move to mid-lane",[...OB(30,13),SH(29,12),G(30,8)]),
 F("Then the FT line · a miss sends you back one spot",[...OB(25,19),SH(25,17),G(30,13),G(30,8)]));
const atw=[[15,6],[12,14],[17,19.5],[25,20],[33,19.5],[38,14],[35,6]];
def("Around the World",
 F("Seven spots around the key · start on the left block",[...atw.map(([x,y])=>K(x,y+2.2)),...OB(15,6,"1"),SH(16,6)]),
 F("Make it: move to the next spot",[...atw.map(([x,y])=>K(x,y+2.2)),O(12,14,"1"),M(14.5,7.5,12.5,12),SH(13,13)]),
 F("First around and back wins",[...atw.map(([x,y])=>K(x,y+2.2)),M(15,6,12,14,17,19.5,25,20,33,19.5,38,14,35,6)]));
def("5-Spot Shooting",
 F("5 shots at each spot · rebounder passes",[...spotsMarks(),O(3,4,"S"),O(25,8,"R"),B(26.6,9.6),PS(24,9,4.5,5),SH(4.5,4.5)]),
 F("Move to the next spot · switch after all 5",[...spotsMarks(),O(9,21,"S"),G(3,4),M(4,6,8,19),O(25,8,"R"),PS(24,10,10.5,20),SH(10,20)]));
def("Partner Shooting (1 Minute)",
 F("Shooter shoots for 1 minute · rebounder counts",[...OB(41,21,"S"),SH(40,20),O(26,8,"R")]),
 F("Rebounder passes back · shooter moves to a new spot",[O(33,27,"S"),G(41,21),M(40,23,34.5,26.5),O(26,8,"R"),B(27.6,9.6),PS(27,10,32.5,25.5)]));
def("Catch & Shoot",
 F("Shooter shows hands and calls ball",[...OB(25,8,"P"),O(46,4,"S"),M(46,6,41,19),PS(26,10,39.5,19),Q(47,26,0,1.8,3)]),
 F("Catch ready, shoot in one motion · follow your shot, become the passer",[O(41,20,"S"),SH(40,19),M(39,19,27,9),O(25,8,"P"),M(24,9.5,46,25)]));
def("Pull-up Jumper",
 F("Dribble hard at the cone",[Q(25,49,0,1.8,2),...OB(25,45),K(25,26),D(25,43,26,29)]),
 F("Pull up off two feet",[K(25,26),O(27,27.5),SH(26.5,26)]),
 F("Rebound, pass to the next player",[K(25,26),O(25,8),B(26.6,9.6),PS(25,10,25,44),Q(25,46,0,1.8,2)]));
def("Free Throw Pressure",F("Each player shoots 2 · team needs its target",ftLine()),F("Miss the target: sideline sprint together",[...circle(6,25,32,0.1).slice(0,0),O(2,20),O(2,28),O(2,36),M(4,20,46,20),M(4,28,46,28),M(4,36,46,36)]));
def("Beat the Pro",F("Make = 1 point for you · miss = 2 for the pro · first to 11",[...OB(41,21),SH(40,20),T(25,35,"Pick game spots")]));
def("3-Man Shooting",
 F("Shooter (S) shoots · passer (P) feeds the second ball",[O(41,21,"S"),SH(40,20),...OB(30,14,"P"),PS(31.5,15.5,39.5,20.5),O(24,7,"R")]),
 F("Rebounder becomes passer · rotate after 1 minute",[O(41,21,"S"),O(30,14,"P"),O(24,7,"R"),B(25.6,8.6),M(25,9,29,12),M(31,14,40,19),M(39,22,26,9)]));
def("Elbow Curl Shooting",
 F("Walk your defender down to the block",[K(33,19),...OB(25,32,"P"),O(32,10,"S"),M(32,12,33,9,36,8)]),
 F("Curl tight around the screen, catch and shoot",[K(33,19),O(25,32,"P"),B(26.6,33.6),O(36,8,"S"),M(36,10,37,17,34,22,30,21),PS(25,30,29.5,22)]),
 F("Tight trail: curl all the way to the rim",[K(33,19),O(30,21,"S"),M(30,19,27,9),SH(27,9)]));
def("Hot Shot",F("60 seconds · score from any spot · no repeats",[K(25,10),T(28,10,"1"),K(17,20),K(33,20),T(17,23.5,"2"),T(33,23.5,"2"),K(8,23),K(42,23),T(8,26.5,"3"),T(42,26.5,"3"),K(3,5),K(47,5),T(3,9,"5"),T(47,9,"5"),...OB(17,20)]));
def("Make It Rain",F("Team goal: makes in 2 minutes at every hoop",[...OB(18,12),...OB(32,12),...OB(25,19),O(14,6),O(36,6),O(25,8),SH(18,11),SH(32,11),SH(25,17)]));
def("Pass & Follow Shooting",
 F("Pass to the wing and follow your pass",[...OB(25,29,"1"),Q(25,32,0,2,3),O(42,22,"2"),PS(26.5,28,40.5,23),M(27,30,40,26)]),
 F("Wing shoots, rebounds, goes to the back",[O(42,22,"2"),SH(41,21),O(40,26,"1"),M(40,20,28,8,25,40)]));
def("Free Throw Routine Builder",F("Same routine every shot · 10 attempts",ftLine()));
def("Knockout",
 F("Two balls · first two players shoot",[O(25,19,"1"),O(25,22,"2"),B(26.6,20.6),B(26.6,23.6),Q(25,25,0,2.2,5),SH(25,17)]),
 F("Miss: rebound and score fast · if #2 scores first, #1 is out",[O(24,8,"1"),O(25,19,"2"),SH(25,17),SH(24.5,7.5),T(36,26,"Make it → pass to next in line")]));
def("P-I-G / H-O-R-S-E",F("Call your shot and make it",[...OB(42,21,"1"),SH(41,20),O(23,30,"2"),O(29,32,"3")]),F("Everyone copies · miss = a letter",[O(42,21,"2"),SH(41,20),G(23,30)]));
def("21",F("Make from the arc = 2 · then free throws",[...OB(25,29),SH(25,27),O(14,10),O(36,10),M(25,27,25,21)]),F("Miss = live rebound · everyone for themselves",[O(25,19),SH(25,17),O(19,9),O(31,9),O(25,11),T(25,32,"Exactly 21 · go over → back to 13")]));
// ======================================================= FINISHING
def("Mikan Drill",
 F("Right-hand layup off the left foot from the right side",[...OB(30,7),SH(27,6)]),
 F("Catch out of the net, step across, left-hand layup",[O(20,7),G(30,7),M(29,8.5,25,10,21,8.5),SH(23,6),T(25,16,"Ball never drops below the shoulders")]));
def("Reverse Mikan",
 F("Start under, facing the court · reverse layup on the right",[...OB(28,4),SH(27,5)]),
 F("Catch and step left · reverse on the left",[O(22,4),G(28,4),M(27,2.5,25,1.5,23,2.5),SH(23,5)]));
def("Two-Line Layups",
 F("Right wing dribbles in · left wing crashes to rebound",[...OB(42,22,"S"),Q(44,25,1.8,1.8,3),D(41,20,35,13,29,8),SH(28,7.5),O(8,22,"R"),Q(6,25,-1.8,1.8,3),M(9,20,21,9)]),
 F("Rebounder passes to the next shooter · switch lines",[O(21,8,"R"),B(22.6,9.6),O(42,22),PS(23,9.5,40,21),M(28,9,8,24),M(21,10,44,28)]));
def("Step, Step, Up",
 F("No ball: big step, little step, up",[O(40,16),K(35,13),K(31,10),M(40,14.5,35.5,12.5,31.5,9.5),T(36,20,"right foot · left foot · jump")]),
 F("Add the ball, then one dribble before the steps",[...OB(42,20),D(41,19,38,15),M(38,15,34,12,31,9.5),SH(30,8)]));
def("Power Layups",
 F("Dribble from the wing to the block",[...OB(42,22),D(41,20,34,10)]),
 F("Two-foot jump stop, ball chinned, power up",[O(33,9),SH(27,6),T(38,16,"Shoulders square to the baseline")]));
def("Full-Court Speed Layups",
 F("Speed dribble the sideline · 4–5 dribbles",[...OB(2,3),Q(-1,3,0,0,1),D(4,3,50,4,80,14,85,21),SH(87,24)],1),
 F("Rebound, join the line at that end · next player goes",[O(87,23),M(88,21,92,47),...OB(2,47),D(4,47,50,46,80,36,85,29)],1));
def("Euro Step Cones",
 F("Drive at the cone",[...OB(42,24),K(34,16),D(41,22,35.5,17.5)]),
 F("Long step one way, then step across and finish",[K(34,16),O(35,17),M(35,15.5,38,12),M(38,12,31,9),SH(29,8)]));
def("Contact Finishing",
 F("Drive to the rim",[...OB(25,30),X(20,13,"P"),D(25,28,25,15)]),
 F("Pad bumps on the gather · finish through it",[O(25,13),X(22,12.5,"P"),M(20,13,22.5,12.5),SH(25,11)]));
def("Weak Hand Layup Circuit",
 F("Left wing: left-hand layups",[...OB(8,22),D(9,20,15,13,21,8),SH(22,7)]),
 F("Then from the left baseline",[...OB(8,4),D(10,4.5,19,6),SH(22,6)]),
 F("Then from the top",[...OB(25,30),D(24,28,21,9),SH(23,7)]));
def("Floater Series",
 F("Drive into the lane",[...OB(25,30),D(25,28,25,16)]),
 F("Gather off one foot and float it over the pad",[O(25,15),C(25,9),SH(25,13),T(37,14,"High arc, early release")]));
def("Chase-Down Layups",
 F("Offense starts at half court · defender 2 steps behind",[...OB(23,44,"O"),X(29,47.5,"D")]),
 F("Race to the rim · defender contests from behind",[O(25,10,"O"),G(23,44),D(23,42,25,12),X(27,13,"D"),M(29,46,27,15)]));
// ======================================================= PASSING
def("Partner Passing Series",F("Chest pass · step to your target",pairs("chest")),F("Bounce pass · bounce two thirds of the way",pairs("bounce")),F("Overhead pass",pairs("over")));
def("Monkey in the Middle",
 F("Two passers, one defender in the middle",[...OB(12,30,"1"),O(38,30,"2"),X(25,30),PS(13.5,32,25,35,36.5,32)]),
 F("Pivot and fake to create the passing lane",[O(12,30,"1"),O(38,30,"2"),B(39.6,31.6),X(25,30),PS(36.5,28,25,24,13.5,28),T(25,40,"Deflection → defender swaps with passer")]));
def("3-Man Weave",
 F("Middle (2) passes to a wing (3) and runs behind that player",[O(3,12,"1"),...OB(3,25,"2"),O(3,38,"3"),PS(5,24.5,18,35.5),M(5,26.5,22,45),M(5,38,17,37),M(5,13,24,22)],1),
 F("3 passes to 1 cutting to the middle, then runs behind 1",[O(19,37,"3"),B(20.6,38.6),O(24,22,"1"),O(22,45,"2"),PS(21,36,24,24),M(21,39,44,8),M(26,22,40,28),M(24,45,44,36)],1),
 F("Keep weaving · finish with a layup, no dribbles",[O(42,28,"1"),B(43.6,29.6),O(44,8,"3"),O(46,36,"2"),PS(44,28,60,34),M(46,8,70,14,84,22),PS(62,33,82,23),SH(86,24)],1));
const star=[0,1,2,3,4].map(i=>{const t=i/5*Math.PI*2-Math.PI/2;return[25+13*Math.cos(t),30+13*Math.sin(t)]});
def("Star Passing",
 F("Pass across the star, two spots away · follow your pass",[...star.flatMap(([x,y])=>[K(x,y+2.4),O(x,y)]),B(star[0][0]+1.6,star[0][1]+1.6),PS(star[0][0]+1,star[0][1]+1.5,star[2][0]-1,star[2][1]-1.5),M(star[0][0]-1.5,star[0][1]+1,star[2][0]-2.5,star[2][1]-2)]),
 F("Keep the pattern going · add a second ball",[...star.flatMap(([x,y])=>[K(x,y+2.4),O(x,y)]),B(star[2][0]+1.6,star[2][1]+1.6),B(star[3][0]+1.6,star[3][1]+1.6),PS(star[2][0]-1.5,star[2][1]-1,star[4][0]+1.5,star[4][1]),PS(star[3][0]+1,star[3][1]-1.5,star[0][0]-0.5,star[0][1]+1.8)]));
def("Pepper Drill",F("Front player passes down the line · second ball comes back at the same time",[...OB(25,18,"1"),O(12,32,"2"),O(20.5,32,"3"),O(29.5,32,"4"),O(38,32,"5"),B(22.1,33.6),PS(24,19.5,13,30),PS(21.5,30.5,24.5,20)]));
def("Two-Ball Partner Passing",F("One chest, one bounce, at the same time",[O(8,25,"1"),O(21,25,"2"),B(9.6,26.6),B(19.4,26.6),PS(10,24.5,19,24.5),PS(19,26,14.5,29,10,26),O(29,25,"1"),O(42,25,"2"),PS(31,24.5,40,24.5),PS(40,26,35.5,29,31,26)]));
def("Pass & Follow Square",
 F("Pass to the next corner and follow your pass",[K(12,21),K(38,21),K(38,43),K(12,43),...OB(12,18.5),O(38,18.5),O(38,40.5),O(12,40.5),PS(14,18.5,36,18.5),M(14,21,35,21.5)]),
 F("Switch direction after 1 minute",[K(12,21),K(38,21),K(38,43),K(12,43),...OB(38,18.5),O(12,18.5),O(38,40.5),O(12,40.5),PS(36,18.5,14,18.5),M(36,21,15,21.5)]));
def("Outlet Passing",
 F("Coach shoots · rebounder grabs it high",[C(25,26),SH(25,24),O(22,8,"R"),O(46,18,"O")]),
 F("Pivot to the outside and throw the outlet",[O(24,8,"R"),B(25.6,6.4),O(46,18,"O"),PS(26,8,44.5,17),T(16,26,"Outlet calls ball, back to the sideline")]));
def("Skip & Swing",
 F("Swing the ball around the perimeter",[O(3,4,"5"),O(8,22,"4"),...OB(25,29,"1"),O(42,22,"2"),O(47,4,"3"),PS(23.5,28,9.5,23),PS(9,20,4,6)]),
 F("Coach calls skip: overhead pass across the floor",[O(3,4,"5"),...OB(8,22,"4"),O(25,29,"1"),O(42,22,"2"),O(47,4,"3"),PS(9.5,21,25,15,40.5,21),SH(41,20)]));
def("Bull in the Ring",F("Move it around the circle · no passing to your neighbor",[...circle(7,25,29,11,1),X(25,29),B(26.6,19.6),PS(25,19.5,34.5,34),PS(34,36,15,34.5)]));
def("Hot Potato",F("Pass fast · whoever has it on stop does 5 jumping jacks",[...circle(8,25,30,10),B(26.6,21.6),C(25,30),PS(26,20.5,32,23),PS(33,24,35.5,30)]));
def("5-Pass Game",F("5 passes in a row = 1 point · no dribbling",[...OB(10,20,"1"),O(22,30,"2"),O(38,22,"3"),O(30,10,"4"),X(13,23),X(24,27),X(36,25),X(28,13),PS(12,20,20.5,29),PS(23.5,29,36.5,23),PS(38,20.5,31,12),T(25,42,"Interception = change of possession")]));
// ======================================================= REBOUNDING
def("Box-Out Circle",
 F("Ball in the middle · defense inside, facing out",[B(25,30),...circle(4,25,30,4).map(e=>["x",e[1],e[2],""]),...circle(4,25,30,9)]),
 F("On the whistle: turn, find, hit, hold 3–5 seconds",[B(25,30),...circle(4,25,30,6).map(e=>["x",e[1],e[2],""]),...circle(4,25,30,8.5),T(25,44,"Offense tries to touch the ball")]));
def("Rebound & Outlet",
 F("Coach misses · rebounder goes up high",[C(25,26),SH(25,24),O(30,12,"R"),M(29,11,27,8)]),
 F("Land wide, chin it, outlet to the wing",[O(27,8,"R"),B(28.6,6.4),O(46,18),PS(29,8,44.5,17)]));
def("Superman Drill",
 F("Toss off the glass so it lands outside the other lane line",[...OB(15,8),PS(16,7,25,3,34,9)]),
 F("Sprint across and catch it before it bounces · back and forth",[O(35,8),G(15,8),M(17,8,33,8),PS(34,7,25,3,16,9)]));
def("Rebound War",
 F("Coach shoots · defense boxes out",[C(25,27),SH(25,25),O(12,13,"1"),O(38,13,"2"),O(25,19,"3"),X(15,10),X(35,10),X(25,15)]),
 F("Battle for it · defense 1 point, offense 2",[O(14,12,"1"),O(36,12,"2"),O(25,17,"3"),X(16,9.5),X(34,9.5),X(25,13.5),T(25,30,"First to 5, rotate")]));
def("Tip Drill",F("Tip it off the glass, next player tips, last one tips it in",[O(32,6,"1"),Q(35,8,2,1.8,4),M(32,8,35,14,38,12),PS(31,5,26,4)]));
def("Crash the Boards",
 F("Coach shoots from the top",[C(25,32),SH(25,30),O(8,22),O(18,29),O(32,29),O(42,22),X(10,19),X(19,25),X(31,25),X(40,19)]),
 F("Defenders hit and box out · offense crashes",[O(11,16),O(21,21),O(29,21),O(39,16),X(13,13),X(22,16),X(28,16),X(37,13),T(25,36,"1 point per defensive rebound")]));
def("Toss-Back Rip",F("Partner tosses high · grab, land wide, rip hip to hip, chin",[O(14,24,"1"),O(14,34,"2"),B(14,19.5),PS(14,32,16,26,14,21),O(36,24,"1"),O(36,34,"2"),PS(36,32,38,26,36,21)]));
// ======================================================= DEFENSE
def("Defensive Slides",F("Lane line to lane line, 30s on, 15s off",[X(17,8),X(17,13),X(17,18),M(19,8,31,8),M(31,10,19,10),M(19,13,31,13),M(19,18,31,18)]));
def("Zig-Zag Defense",
 F("Defender stays in front as the dribbler zig-zags",[...OB(3,8,"O"),X(6,10,"D"),D(5,7,16,15,28,4),M(8,11,17,17,28,7)],1),
 F("On each change of direction: drop step, turn the hips",[O(28,4,"O"),X(30,6.5,"D"),D(30,4,42,15,54,4),M(32,8,43,17,54,7),T(47,40,"Switch roles at the far baseline")],1));
def("Closeouts",
 F("Defender passes out and sprints to the wing",[X(25,7),B(23,8.5),O(41,21),PS(26,8,39.5,19.5),M(26,8.5,36,16.5)]),
 F("Chop the feet, high hand · react to the jab",[O(41,21),B(42.6,22.6),X(38.5,18.5),M(41,23,44,26),T(25,32,"Sprint, then short choppy steps")]));
def("Shell Drill",
 F("Ball at the top: on ball, deny one pass away, help two away",[O(8,22,"4"),...OB(18,29,"1"),O(32,29,"2"),O(42,22,"3"),X(18.5,25.5,"1"),X(29,25,"2"),X(37,19,"3"),X(14,17,"4")]),
 F("Pass to the wing: everyone jumps to the ball",[O(8,22,"4"),O(18,29,"1"),O(32,29,"2"),...OB(42,22,"3"),PS(33.5,28,40.5,23),X(21.5,24,"1"),X(31,24.5,"2"),X(39.5,19.5,"3"),X(19,12,"4"),M(29,25,30.5,24.5),M(14,17,18.5,12.5)]),
 F("Wing drives baseline: help stops it, everyone rotates",[O(8,22,"4"),O(18,29,"1"),O(32,29,"2"),O(42,22,"3"),B(43.6,23.6),D(42,20,38,8),X(39.5,19.5,"3"),M(19,12,33,9),M(21.5,24,16,18),T(25,38,"Help the helper")]));
def("1v1 From the Wing",
 F("Pass to the wing and close out",[X(25,7),B(23,8.5),O(41,21),PS(26,8,39.5,19.5),M(26,8.5,37,17)]),
 F("Live 1v1 · 3 dribbles max",[O(41,21),B(42.6,22.6),X(38.5,18.5),D(40,19,34,9),M(37,17,32,10),T(25,32,"Chest in front · contest without fouling")]));
def("Help & Recover 2v2",
 F("Ball drives baseline · help defender stops the ball",[...OB(41,21,"1"),O(9,21,"2"),X(38.5,18.5,"1"),X(16,15,"2"),D(41,19,36,8),M(17,14,31,8)]),
 F("Kick out · help recovers with high hands",[O(35,7,"1"),O(9,21,"2"),X(36,9,"1"),X(31,8,"2"),PS(34,6,10.5,19.5),M(30,9.5,12,18.5)]));
def("Taking a Charge",
 F("Dribbler walks into the defender",[...OB(33,19),X(27,9),D(32,17,28,11.5),T(40,9,"Feet set, chest square")]),
 F("Fall back safely: butt, back, roll",[O(28,11),X(26,8.5),M(26,7,26,3.5),T(25,26,"Tuck the chin, arms in front")]));
def("Deny the Wing",
 F("Defender denies: ear in chest, hand in the lane",[C(25,29),B(26.6,30.6),O(42,20,"O"),X(38.5,20,"D"),M(42,18,40,23)]),
 F("Overplayed: offense goes backdoor, defender opens and turns",[C(25,29),O(40,23,"O"),X(37.5,21,"D"),M(41,22,44,18,31,7),M(36,19,30,10),PS(24,27,31,9)]));
def("Mass Defensive Stance",F("Coach points: slide, close out, drop",spreadX()));
def("Contest the Shot",
 F("Pass out and sprint to contest",[X(25,7),B(23,8.5),O(41,21),PS(26,8,39.5,19.5),M(26,8.5,38,18)]),
 F("High hand on the shot, then box out",[O(41,21),X(38.5,18.5),SH(40,20),M(38.5,17,40,19.5)]));
def("Pick & Roll Defense",
 F("Screen comes: call it early",[...OB(23,31,"1"),X(23,28,"1"),O(30,22,"5"),X(31,19,"5"),S(30,23.5,25.5,28.5)]),
 F("Big shows, guard fights over, both recover",[O(31,28,"1"),B(32.6,29.6),X(28.5,27,"1"),X(31.5,25,"5"),O(27,13,"5"),M(23,28,28,27),M(31,19,32,24.5),M(32,24,28,15)]));
def("Defensive Wave",F("Coach waves a direction · slide fast",spreadX()));
// ======================================================= FOOTWORK
def("Jump Stop & Pivot",
 F("Jog and jump stop on the whistle",lanes([10,20,30,40],2,18),1),
 F("Front pivot 4, reverse pivot 4, continue",[O(20,10),O(20,20),O(20,30),O(20,40),T(20,4,"pivot"),M(22,10,34,10),M(22,20,34,20),M(22,30,34,30),M(22,40,34,40)],1));
def("Triple Threat Series",F("Triple threat: jab, jab-shot, jab-drive, rip through",spread(1)));
def("Agility Ladder",F("Two feet in each box, in-and-out, lateral, Ickey shuffle",[["L",21,14,8,24],O(25,42),Q(25,45,0,1.8,2),M(25,40,25,12)]));
def("Sprint & Stop",F("Sprint on the whistle",lanes([10,20,30,40],2,20),1),F("Jump stop on the next whistle, hold 2 seconds",[O(22,10),O(22,20),O(22,30),O(22,40),M(24,10,44,10),M(24,20,44,20),M(24,30,44,30),M(24,40,44,40)],1));
def("Inside Pivot Catch",
 F("Cut from the elbow to the wing for the pass",[...OB(25,32,"P"),O(32,19,"S"),M(33,20,39,22),PS(26.5,31,38,23.5)]),
 F("Land inside foot first, pivot, square up, shoot",[O(39,22,"S"),SH(38,21),T(25,34,"Inside foot = pivot foot")]));
def("Drop Step Series",
 F("Entry pass to the post",[O(34,9,"5"),X(32,7),...OB(44,19,"2"),PS(42.5,18,35.5,10.5)]),
 F("Feel the defender · drop step baseline, power dribble, finish",[O(34,9,"5"),B(35.6,10.6),X(32,7),M(34,7.5,31,4),SH(28,5)]));
// ======================================================= POST
def("Up & Under",
 F("Catch on the block, pivot and face",[O(34,9,"5"),X(32,10),B(35.6,10.6),T(25,24,"Face up")]),
 F("Hard shot fake · defender jumps · step through and finish",[O(34,9,"5"),X(32,10),M(33,8,28,6),SH(27,6)]));
def("Post Entry Passing",
 F("Post seals the defender",[O(34,9,"5"),X(32.5,11),...OB(44,19,"2"),T(25,26,"Target hand away from the defense")]),
 F("Pass away from the defense",[O(34,9,"5"),X(32.5,11),O(44,19,"2"),PS(42.5,18,36,8)]));
def("Sealing Drill",
 F("Defender plays 3/4 front",[O(33,9,"5"),X(35,11.5),...OB(44,20,"2")]),
 F("Post seals with body and arm bar · catch",[O(33,9,"5"),X(35,11.5),O(44,20,"2"),PS(42.5,19,33.5,7),T(25,26,"Wide base, sit on the defender")]));
def("Hook Shot Series",F("Step across the lane",[...OB(34,8),M(32,8,27,9)]),F("Hook with the far hand · repeat other side",[O(27,9),SH(26,7),T(25,22,"Shoulder points at the rim")]));
def("Face-up Series",F("Catch and face up",[O(34,9),B(35.6,10.6),X(32,11)]),F("Jab · shoot or drive",[O(34,9),X(32,11),M(34,7,30,4),SH(28,5),T(25,24,"Jab-shot · jab-drive · jab-cross")]));
// ======================================================= TEAM OFFENSE
def("Give & Go",
 F("Pass to the wing, step away",[...OB(25,29,"1"),O(42,22,"2"),PS(26.5,28,40.5,23),M(24,29,20,27)]),
 F("Cut hard to the rim · return pass for the layup",[O(20,27,"1"),O(42,22,"2"),B(43.6,23.6),M(21,26,27,9),PS(40.5,21,28,10),SH(26,7)]));
def("Backdoor Cuts",
 F("Walk the defender up toward the arc",[...OB(25,30,"P"),O(42,20,"C"),X(39,20),M(42,22,42,26)]),
 F("Overplayed: plant and cut backdoor · bounce pass",[O(25,30,"P"),O(42,26,"C"),X(39.5,23.5),M(43,25,35,12,30,7),PS(24,28,26,20,30,9)]));
def("Pick & Roll Basics",
 F("Screener sets the pick",[...OB(23,31,"1"),O(31,21,"5"),S(31,22.5,26,29)]),
 F("Use it tight · screener rolls",[O(26,29,"5"),O(23,31,"1"),B(24.6,32.6),D(24.5,31,32,30,35,22),M(26,27,26,9)]),
 F("Pass to the roller or score",[O(35,22,"1"),O(26,9,"5"),PS(34,20.5,27,10.5),SH(25,7)]));
def("Pass & Screen Away",
 F("Pass to one wing",[...OB(25,29,"1"),O(8,22,"2"),O(42,22,"3"),PS(23.5,28,9.5,23)]),
 F("Passer screens away for the other wing",[O(8,22,"2"),B(9.6,23.6),O(25,29,"1"),O(42,22,"3"),S(26.5,28.5,38,23.5)]),
 F("Wing curls or pops off the screen · pass",[O(8,22,"2"),O(38,23.5,"1"),O(42,22,"3"),M(42,20,37,19,28,25),PS(10,22,26.5,25),M(37,25,40,28)]));
def("5-Out Screen Away",
 F("5-out spacing · 1 passes to the wing (2)",[...OB(25,30,"1"),O(8,23,"2"),O(42,23,"3"),O(3,4,"4"),O(47,4,"5"),PS(23.5,29,9.5,24)]),
 F("1 screens away for the opposite wing (3)",[O(8,23,"2"),B(9.6,24.6),O(25,30,"1"),O(42,23,"3"),O(3,4,"4"),O(47,4,"5"),S(26.5,29.5,38.5,25)]),
 F("3 reads the defender: curl to the rim, or pop to the top if they go under",[O(8,23,"2"),B(9.6,24.6),O(38,25,"1"),O(42,23,"3"),X(43,20,"3"),O(3,4,"4"),O(47,4,"5"),M(41,21,36,20,30,13,27,8),M(40,25.5,34,31,28,33),PS(10,22,26,10),T(32,38,"curl ↑ · pop ↓")]),
 F("Refill: 5 lifts to the wing, 3 fills the corner, 1 pops back to the top",[O(8,23,"2"),B(9.6,24.6),O(38,25,"1"),O(27,8,"3"),O(3,4,"4"),O(47,4,"5"),M(46.5,6,43,20),M(29,8,45,4),M(36.5,26,27,30)]),
 F("Same rules on every pass · then play it 5v5 live",[O(25,30,"1"),O(8,23,"2"),B(9.6,24.6),O(43,21,"5"),O(3,4,"4"),O(47,4,"3"),X(10,20),X(25,26),X(39,18),X(6,8),X(42,8),T(25,40,"5v0 → shadow D → live")]));
def("Drive & Kick",
 F("Drive into the lane to draw help",[...OB(25,30,"1"),O(3,4,"2"),O(47,4,"3"),X(14,12),D(25,28,26,16),M(14,12,21,14)]),
 F("Kick to the open corner · catch ready, shoot",[O(26,16,"1"),O(3,4,"2"),O(47,4,"3"),X(21,14),PS(27.5,15,45.5,5),SH(46,5)]));
def("5-Out Motion",
 F("Pass and basket cut",[O(3,4,"5"),O(8,22,"4"),...OB(25,29,"1"),O(42,22,"2"),O(47,4,"3"),PS(26.5,28,40.5,23),M(25,27,26,8)]),
 F("Everyone fills the open spot",[O(3,4,"5"),O(8,22,"4"),O(26,8,"1"),O(42,22,"2"),B(43.6,23.6),O(47,4,"3"),M(9,24,23,29),M(4.5,5,8,20),M(26,8,3,5)]));
def("Fill the Spot",F("A player cuts · next player fills the empty spot",[K(3,6),K(8,24),K(25,31),K(42,24),K(47,6),O(3,4),O(8,22),...OB(25,29),O(42,22),O(47,4),M(42,20,30,8),M(46,6,42,20)]));
def("Inbounds Play: Box",
 F("Box set: four players around the lane",[...OB(31,-2,"1"),O(19,8,"4"),O(31,8,"5"),O(19,18,"2"),O(31,18,"3")]),
 F("Top players screen down",[O(31,-2,"1"),O(19,8,"4"),O(31,8,"5"),O(19,18,"2"),O(31,18,"3"),S(19,16.5,19,10.5),S(31,16.5,31,10.5)]),
 F("Bottom players pop to the corner and wing · inbound to the open shooter",[O(31,-2,"1"),B(33,-2.5),O(19,10.5,"2"),O(31,10.5,"3"),O(4,5,"4"),O(44,20,"5"),M(18,8,12,6,6,5),M(32,8,40,14,43,18.5),PS(32,0,42.5,18.5),SH(43,19)]));
def("Press Break",
 F("Inbound to a guard · middle player flashes",[...OB(95,30,"1"),O(84,18,"2"),O(84,34,"3"),O(60,25,"4"),O(45,12,"5"),X(78,18),X(78,34),X(60,15),X(60,35),X(32,25),PS(94,29,85.5,19.5),M(60,25,72,25)],1),
 F("Hit the middle · attack up the floor",[O(84,18,"2"),O(72,25,"4"),O(45,12,"5"),O(84,34,"3"),PS(82.5,19,73.5,24),PS(70.5,24,47,13.5),M(84,36,60,44,30,40)],1));
def("3v3 Cutthroat",
 F("Team A (O) vs team B (X) · team C waits",[O(10,18,"A"),...OB(25,28,"A"),O(40,18,"A"),X(13,16),X(25,25),X(37,16),Q(4,47,2.5,0,3),T(12,44,"Team C")]),
 F("Score: A stays on · B off · C comes in on defense",[O(10,18,"A"),O(25,28,"A"),O(40,18,"A"),Q(4,47,2.5,0,3),M(4,45,12,20),M(9,45,22,28),M(14,45,34,20),T(36,44,"Play to 7")]));
// ======================================================= TRANSITION
def("3-on-2, 2-on-1",
 F("Three attack two",[...OB(62,25,"1"),O(66,10,"2"),O(66,40,"3"),X(22,25),X(9,20),D(60,25,24,25),M(64,10,12,11),M(64,40,12,39)],1),
 F("The two defenders + shooter go 2-on-1 the other way",[O(10,20,"A"),B(11.6,21.6),O(20,26,"B"),X(8,30,"1"),D(12,20,80,18),M(22,27,82,32),M(10,31,72,26)],1));
def("11-Man Break",
 F("Three attack two",[...OB(62,25),O(66,10),O(66,40),X(22,25),X(9,20),O(30,1),O(30,49),D(60,25,24,25),M(64,10,12,11),M(64,40,12,39)],1),
 F("Defender rebounds, outlets to the sideline · new three attack",[X(8,22),B(9.6,23.6),O(30,1),O(30,49),PS(10,21,29,2.5),M(30,3,70,10),M(30,47,70,40),M(10,24,60,25),X(75,25),X(85,20)],1));
def("2v1 Full Court",F("Two attack one",[...OB(60,18,"1"),O(60,32,"2"),X(25,25),D(58,18,26,20),M(58,32,14,32)],1),F("Defender commits · pass for the layup",[O(24,20,"1"),O(14,30,"2"),X(21,22),PS(22,21,15,28.5),SH(8,26)],1));
def("Sprint Back Transition",
 F("Coach passes to one team",[C(47,2),O(30,10),O(30,20),O(30,30),O(30,40),X(34,10),X(34,20),X(34,30),X(34,40),PS(45,3,32,9)],1),
 F("Other team sprints back to the paint first",[O(40,10),O(44,20),O(44,30),O(42,40),B(41.6,11.6),M(34,20,12,24),M(34,30,14,28),M(34,10,22,14),M(34,40,22,36)],1));
def("3-Lane Fill",
 F("Outlet to the wing · all three sprint wide lanes",[O(3,25,"1"),B(4.6,26.6),O(8,8,"2"),O(8,42,"3"),PS(5,24,8,10),M(10,8,70,8),M(10,42,70,42),M(5,26,20,25)],1),
 F("Middle stops at the FT line, passes for the layup",[O(75,25,"1"),B(73.4,26.6),O(70,8,"2"),O(70,42,"3"),M(72,8,86,20),PS(77,24,85,21),SH(87,24)],1));
def("2v1 Rapid",
 F("On go: run your lanes · offense sprint the outside lanes to half court, defender sprints the middle to the circle",[["L2",16.7,0,16.7,47],["L2",33.3,0,33.3,47],...OB(42,1,"O"),O(8,1,"O"),X(25,1,"D"),Q(8,-3.5,0,0,1),Q(25,-3.5,0,0,1),Q(42,-3.5,0,0,1),M(8,3,8,44.5),D(42,3,42,44.5),M(25,3,25,39)]),
 F("Offense turn at half court and attack 2-on-1 · defender closes out",[...OB(42,46,"O"),O(8,46,"O"),X(25,41,"D"),D(41,44,33,27),M(8,44,10,24),M(26,39.5,30,29)]),
 F("Read it: shoot, drive, or draw and kick",[O(32,26,"O"),B(33.6,27.6),O(11,23,"O"),X(30,23,"D"),PS(30.5,25.5,12.5,23.5),SH(12,21.5),T(25,36,"Defender steps up → kick for the open shot")]),
 F("Make it harder: at least 1 pass before a shot",[...OB(32,26,"O"),O(11,23,"O"),X(27,21,"D"),PS(30.5,25,12.5,22.5),D(12,21,18,9),SH(20,7)]),
 F("Race: one team at each end · first to 10 makes wins · run your lanes",[["L2",0,16.7,94,16.7],["L2",0,33.3,94,33.3],O(1,8,"A"),X(1,25,"A"),O(1,42,"A"),Q(-2.5,8,0,0,1),Q(-2.5,25,0,0,1),Q(-2.5,42,0,0,1),M(3,8,46,8),M(3,25,40,25),M(3,42,46,42),O(93,8,"B"),X(93,25,"B"),O(93,42,"B"),Q(96.5,8,0,0,1),Q(96.5,25,0,0,1),Q(96.5,42,0,0,1),M(91,8,48,8),M(91,25,54,25),M(91,42,48,42),T(23,48,"Team A: 0–10"),T(71,48,"Team B: 0–10")],1));
def("5-Man Weave into 3v2",
 F("Five lines on the baseline · middle (3) passes to 2 and goes behind 2 and 1",[O(2,5,"1"),O(2,15,"2"),...OB(2,25,"3"),O(2,35,"4"),O(2,45,"5"),Q(-1.5,5,0,0,1),Q(-1.5,15,0,0,1),Q(-1.5,25,0,0,1),Q(-1.5,35,0,0,1),Q(-1.5,45,0,0,1),PS(4,24,12.5,16),M(4,26.5,10,22,14,10,20,2.5),M(4,5,16,5),M(4,15,12,15),M(4,35,16,35),M(4,45,16,45)],1),
 F("2 passes to 4 and goes behind 4 and 5 · keep weaving to the far end",[O(20,2,"3"),O(17,6,"1"),O(14,15,"2"),B(15.6,16.6),O(18,35,"4"),O(17,45,"5"),M(20,35,26,33),PS(16,16.5,25,32),M(15,17,22,30,30,44,36,48),M(19,6,30,7),M(22,2,34,3),M(19,45,30,42)],1),
 F("Finish with a layup at the far end, no dribbles",[O(78,36,"A"),B(79.6,37.6),O(82,26,"S"),O(70,10),O(68,42),O(66,25),PS(79,34.5,83.5,27),SH(87,25),T(74,46,"S = shooter · A = assister")],1),
 F("Shooter and assister sprint back on D · the other three attack 3-on-2",[X(86,26,"S"),X(80,36,"A"),O(70,10),...OB(66,25),O(68,42),M(84,27,22,25),M(78,37,10,28),D(64,25,30,25),M(68,10,14,10),M(66,42,14,40)],1),
 F("Talk tax: Ball · Basket · Help · Gap · Split",[X(22,25,"S"),X(9,26,"A"),...OB(28,25),O(15,8),O(15,42),T(22,20.5,"BALL!"),T(9,21.5,"BASKET!"),T(17,15,"HELP / GAP"),T(32,31.5,"SPLIT?"),T(70,25,"Go quiet = you pay")],1));
// ======================================================= CONDITIONING
def("Line Sprints",F("FT line and back, half and back, far FT and back, full and back",[...lanes([25],2,null),M(4,9,19,9),M(19,11,4,11),M(4,19,47,19),M(47,21,4,21),M(4,29,75,29),M(75,31,4,31),M(4,39,92,39),M(92,41,4,41)],1));
def("17s",F("Sideline to sideline 17 times in a minute",[O(25,1),O(30,1),O(35,1),M(25,3,25,48),M(27,48,27,3),T(47,25,"17 touches · 1 minute")],1));
def("Layup Race",F("Team goal: makes in 2 minutes at both ends",[...OB(20,10),...OB(74,40),D(22,10,82,22),D(72,40,12,28),SH(87,24),SH(7,26)],1));
def("Minute Drills",F("30s slides lane line to lane line",[X(17,8),X(17,13),M(19,8,31,8),M(31,10,19,10)]),F("30s sprints, 30s rest",lanes([10,20,30],2,92),1));
def("Partner Chase",F("Front player sprints · partner chases to tag",[O(10,12,"1"),O(4,12,"2"),M(12,12,88,12),M(6,14,85,14),O(10,32,"1"),O(4,32,"2"),M(12,32,88,32),M(6,34,85,34)],1));
// ======================================================= GAMES
def("Sharks & Minnows",
 F("Minnows dribble from the baseline · sharks wait at half court",[...lanes([8,18,28,38,46],2,null,{ball:1}),X(47,15,"S"),X(47,35,"S")],1),
 F("Dribble to the far end · caught minnows become sharks",[...[8,18,28,38].map(y=>D(4,y,90,y)),X(47,15,"S"),X(47,35,"S"),M(47,17,58,24),M(47,33,60,30)],1));
def("Steal the Bacon",
 F("Coach rolls the ball out and calls a number",[O(1,12,"1"),O(1,20,"2"),O(1,28,"3"),O(1,36,"4"),X(49,12,"1"),X(49,20,"2"),X(49,28,"3"),X(49,36,"4"),B(25,30),C(25,44)]),
 F("Both #3s race for it · play 1v1 to score",[O(1,12,"1"),O(1,20,"2"),O(22,29,"3"),O(1,36,"4"),X(49,12,"1"),X(49,20,"2"),X(28,29,"3"),X(49,36,"4"),B(23.6,30.6),D(22,27,24,9)]));
def("Treasure Hunt",
 F("Balls in the center · one player per team at a time",[B(23,28),B(25,30),B(27,28),B(25,26),K(3,3),K(47,3),K(3,44),K(47,44),O(5,5),O(45,5),O(5,42),O(45,42),M(7,7,22,26),D(43,7,28,26)]),
 F("Center empty: take from other bases",[K(3,3),K(47,3),K(3,44),K(47,44),B(4,5),B(46,43),O(10,10),O(40,38),D(12,10,44,40),T(25,25,"Most balls at the whistle wins")]));
def("King of the Court",F("1v1 or 2v2 to 3 · winner stays",[...OB(25,28,"O"),X(25,24.5),Q(3,46,2.5,0,4),T(15,43,"Challengers")]));
def("Scrimmage with Rules",F("Normal game + today's rule",[O(30,10),O(30,40),...OB(20,25),O(12,13),O(10,36),X(26,12),X(26,38),X(16,25),X(9,16),X(8,33),T(65,25,"e.g. 3 passes before a shot")],1));
def("1v1 Battle Ladder",F("1v1 to 2 · winner moves up a hoop, loser moves down",[...OB(25,28,"O"),X(25,24.5),T(25,40,"Hoop 1 → Hoop 2 → Hoop 3 …")]));
def("Relay Races",F("Dribble to the cone and back, hand off",[K(12,12),K(25,12),K(38,12),...[12,25,38].flatMap(x=>[...OB(x,44),Q(x,47,0,1.8,2),D(x,42,x+2,14),M(x-2,14,x-2,40)])]));
def("Spot-Up Team Battle",F("Each player shoots from a spot · first team to 15",[...spotsMarks(),...OB(3,4),...OB(9,21),...OB(25,29),SH(4,5),SH(10,20),SH(25,27)]));
// ======================================================= COOL-DOWN
def("Static Stretch & Huddle",F("Circle at center court · hold each stretch 20s",[...circle(10,25,40,6.5),C(25,40)]));
def("Free Throw Cool-Down",F("10 free throws each · stretch between shots",ftLine()));
def("Shot of the Day",F("Coach picks a shot · one attempt each",[...OB(25,45),SH(25,43),Q(10,46,2,0,4)]));
def("Team Huddle & Shout-outs",F("Key point · shout-outs · team break",[...circle(10,25,40,6.5),C(25,40)]));
// ======================================================= REP / ELITE
def("Movement Prep & Activation",F("Band walks and mobility on the baseline",lanes([12,25,38],2,14),1),F("Skips and build-up sprints to half court",lanes([12,25,38],2,45),1));
def("Shooting Ramp",
 F("Form: 10 makes inside 5 feet",[...OB(30,9,"S"),SH(29,8),O(22,7,"R")]),
 F("Mid-range: 5 spots, 2 makes each",[K(10,12),K(17,19),K(25,21),K(33,19),K(40,12),O(33,19,"S"),SH(32,17),O(25,8,"R"),PS(26.5,9,32,17.5)]),
 F("Threes: 5 spots, 2 makes each",[...spotsMarks(),O(42,22,"S"),SH(41,21),O(25,8,"R"),PS(26.5,9,40.5,21)]),
 F("Finish with 5 free throws · make 4",ftLine()));
def("Two-Ball Full-Court Finishing",F("Speed dribble the sideline · called finish",[...OB(2,3),...OB(92,47),D(4,3,60,5,85,20),D(90,47,34,45,9,30),SH(87,24),SH(7,26)],1),F("Rebound and join the line at that end",[O(86,22),O(8,28),M(88,22,92,46),M(6,28,2,4)],1));
def("Gauntlet",
 F("Defender 1 plays live in the first third",[X(18,25,"1"),X(47,25,"2"),X(76,25,"3"),...OB(2,25),D(4,25,14,16,24,30),["L2",31,0,31,50],["L2",63,0,63,50]],1),
 F("Beat each defender in their third",[X(18,25,"1"),X(47,25,"2"),X(76,25,"3"),O(28,28),D(30,28,42,18,54,32),D(66,30,74,16,90,25),["L2",31,0,31,50],["L2",63,0,63,50]],1));
def("Elite Combo Series",F("Cone as the defender · snatchback, hesi, shift combos",spread(1,true,[K(12,24.5),K(25,24.5),K(38,24.5)])));
def("Handle into Reads",
 F("Attack the coach with a live dribble",[Q(25,49,0,1.8,2),...OB(25,45),C(30,20),D(25,43,25,26)]),
 F("Read the cue: drive, pull-up, or kick",[O(25,26),C(30,20),M(25,24,28,10),SH(25,24),PS(24,25,4,6),O(3,4),T(40,28,"hands up · down · point")]));
def("1v2 Pressure Breaker",
 F("Two defenders try to trap in the backcourt",[...OB(4,25),X(12,18),X(12,32),D(6,25,12,24)],1),
 F("Retreat dribble, then split or attack the high side",[O(12,24),X(15,20),X(15,29),D(10,25,6,28),D(6,28,20,26,46,24),T(47,46,"8 seconds to cross half court")],1));
def("Transition Threes",
 F("Outlet, sprint the lane to the far corner",[O(3,6,"S"),Q(0,6,0,0,1),...OB(18,14,"P"),M(5,6,45,4,78,4,90,3),PS(19.5,15,88,4.5)],1),
 F("Catch and shoot the corner three · rebound, outlet, sprint back",[O(90,3,"S"),SH(89,4),M(88,5,86,22),PS(86,24,75,40),M(84,25,20,45)],1));
def("Make 100",
 F("Shooter (S), rebounder (R), passer (P) · two balls",[O(42,22,"S"),SH(41,21),...OB(25,19,"P"),O(26,7,"R"),B(27.6,8.6),PS(26.5,19,40.5,21.5)]),
 F("Relocate after every shot · rotate on makes",[O(32,29,"S"),G(42,22),M(41,24,33.5,27.5),O(25,19,"P"),O(26,7,"R"),PS(27.5,8,25.5,17),PS(26,20.5,31,28)]));
def("Movement Shooting Reads",
 F("Defender trails: curl to the rim",[...OB(25,32,"P"),O(33,19,"S"),K(33,15),X(36,12),M(33,17,29,11,27,8),G(36,10)]),
 F("Defender cheats under: flare or fade to the corner",[O(25,32,"P"),B(26.6,33.6),O(42,14,"S"),K(33,15),X(30,12),M(34,13,42,14),PS(26,30,41,15.5),SH(41,13.5)]),
 F("Defender goes over: pop for the catch-and-shoot",[O(25,32,"P"),B(26.6,33.6),O(33,22,"S"),K(33,15),X(34,17),M(33,17,33,21),PS(26,30.5,32,22.5),SH(32,20)]));
def("Off-the-Dribble Series",
 F("One-dribble pull-up both ways",[...OB(41,22),D(39.5,21,35,19),SH(34,18)]),
 F("Side-step three · step-back from the wing",[...OB(41,22),D(40,21,38,21),M(38,23,44,24),SH(43,23),T(25,32,"Step-back distance comes from the plant foot")]));
def("Closeout Attack Reads",
 F("Short or late closeout: shoot it",[O(42,22),B(43.6,23.6),X(35,15),M(27,8,35,15),SH(41,21)]),
 F("Flying closeout: one hard dribble pull-up",[O(42,22),X(41,20),D(40,22.5,36,22),SH(35,21)]),
 F("Balanced closeout: rip through and drive",[O(42,22),X(40,19.5),D(42.5,20,40,10,32,7),SH(30,6),T(25,30,"2 dribbles max")]));
def("25-Spot Challenge",F("5 spots × 5 shot types · catch, fake-one, side-step, pull-up, free",[...spotsMarks(),...OB(3,4),SH(4,5),O(25,8,"R")]));
def("Pressure Free Throws",F("Sprint baseline to baseline twice",[...lanes([25],2,92),M(92,27,4,27)],1),F("Straight to the line for a one-and-one",ftLine()));
def("Beat the Clock Threes",F("2 minutes · 5 spots around the arc · 50% to finish",[...spotsMarks(),O(42,22,"S"),SH(41,21),O(25,8,"R"),M(41,24,33,30,9,24)]));
def("Finishing Gauntlet",F("Drive into the lane",[...OB(25,32),X(19.5,14,"P"),X(30.5,14,"P"),D(25,30,25,17)]),F("Both pads bump on the gather · finish",[O(25,14),X(22,14,"P"),X(28,14,"P"),SH(25,12)]));
def("Bump Euro Finish",
 F("Drive hard from the wing at the pad",[...OB(43,25),X(31,14,"P"),D(42,23,35,17.5)]),
 F("First euro step: plant into the pad and bump with your shoulder",[O(34,16.5),B(35.2,14.6),X(31.5,14,"P"),M(35.5,18.5,33,16),T(40,13,"BUMP")]),
 F("Step across away from the pad, finish with the outside hand",[G(34,16.5),O(37,10),X(31.5,14,"P"),M(35,15,38,11.5),SH(35,8.5),T(25,26,"Long step · quick step · finish high")]));
def("Inside / Outside Hand Reads",
 F("Defender on your hip: inside hand off the glass",[O(32,14),B(33.6,15.6),X(35,15),D(32,12,29,8),SH(27,6)]),
 F("Defender ahead of you: outside hand, extend away",[O(34,14),X(30,10),D(35,12,32,6),SH(28,5.5)]),
 F("Defender inside: reverse layup, use the rim",[O(34,12),X(28,9),D(35,10,30,3),SH(24,4.5)]));
def("Two-Foot Gather Series",F("Drive and jump stop in the lane",[...OB(33,19),D(32,17,28,12)]),F("Pivot, up-fake, finish · or spin to the reverse",[O(28,11),X(25,8.5),M(27,10,24,7),SH(25,6)]));
def("Rim Protector Reads",
 F("Big stays home: floater",[...OB(25,28,"1"),X(25,9,"5"),O(36,3,"5"),D(25,26,25,16),SH(25,14)]),
 F("Big steps up: drop-off or lob to the dunker spot",[O(25,16,"1"),B(26.6,17.6),X(26,12,"5"),O(36,3,"5"),PS(27,15,35,4.5)]),
 F("Help from the corner: kick out for three",[O(25,16,"1"),X(26,12,"5"),X(40,8),O(47,4,"3"),M(46,6,42,9),PS(27,16,45.5,5),SH(46,5)]));
def("Advantage Finishing",F("Attacker at full speed · defender trails",[...OB(23,44,"O"),X(29,47.5,"D"),D(23,42,25,12),M(29,46,27,15)]),F("Wall off the trailing defender · finish early",[O(25,11),X(27,13.5),SH(25,9)]));
def("Spin & Counter Finish",F("Drive at the cone",[...OB(25,30),K(26,16),D(25,28,25.5,18)]),F("Spin away at the cone · reverse or counter floater",[K(26,16),O(25.5,18),M(24,17,21,14,23,10),SH(24,8)]));
def("Pocket & Lob Reads 2v1",
 F("Big hedges high: pocket pass to the roller",[O(31,27,"1"),B(32.6,28.6),X(33,29,"5"),O(27,14,"5"),PS(31,25.5,27,16)]),
 F("Big drops: pull-up jumper",[O(31,25,"1"),X(27,14,"5"),SH(30,23)]),
 F("Big stays in the middle: lob to the roller",[O(32,26,"1"),X(28,17,"5"),O(26,8,"5"),PS(31,24,29,14,26.5,9.5)]));
def("Get Open vs Denial",
 F("V-cut: walk in, plant, come out hard",[...OB(25,30,"P"),O(39,14,"R"),X(38,18),M(39,12,34,10,42,21),PS(26.5,29,40.5,22)]),
 F("Denied 2 seconds: go backdoor",[O(25,30,"P"),B(26.6,31.6),O(41,22,"R"),X(40,19.5),M(42,20,32,7),PS(24,28,31,9)]));
def("Drive, Draw, Dish",
 F("Drive to draw a defender",[...OB(25,30,"1"),O(5,14,"2"),O(45,14,"3"),X(15,14),X(35,14),D(25,28,26,17),M(35,14,29,16)]),
 F("Kick to the open shooter or dump to the big",[O(26,17,"1"),O(5,14,"2"),O(45,14,"3"),X(15,14),X(29,16),PS(28,16.5,43.5,14.5),SH(44,13)]));
def("Hit-Ahead Drill",
 F("Rebound and outlet",[O(8,25,"R"),B(9.6,26.6),O(18,6,"O"),O(14,44,"W"),O(30,25,"T"),PS(10,24,17,8)],1),
 F("Hit ahead to the wing",[O(18,6,"O"),B(19.6,7.6),O(60,44,"W"),O(50,25,"T"),PS(20,7,58,42),M(16,44,58,44),M(32,25,48,25)],1),
 F("Wing hits the rim runner · no dribbles",[O(60,44,"W"),O(80,25,"T"),PS(61,42,80,27),M(52,25,78,25),SH(87,25)],1));
def("4-Corner Full-Court Passing",
 F("Pass ahead and sprint after it",[O(2,2),O(92,2),O(92,48),O(2,48),B(3.6,3.6),PS(4,3,40,8),M(4,1.5,45,4)],1),
 F("Return pass at half court · pass to the next line",[O(45,5),O(40,8),B(41.6,9.6),PS(42,8,46.5,5),PS(47,4,90,2.5)],1));
def("One-Touch Passing Circle",F("Catch and pass without holding · defender tries to deflect",[...circle(7,25,29,11,1),X(25,29),B(26.6,19.6),PS(25,19.5,34.5,34),PS(34,36,15,34.5)]));
def("Shell Rebounding",F("Coach shoots",[C(25,32),SH(25,30),O(8,22),O(18,29),O(32,29),O(42,22),X(10,19),X(19,25),X(31,25),X(40,19)]),F("Box out · 3 straight rebounds to rotate off",[O(11,16),O(21,21),O(29,21),O(39,16),X(13,13),X(22,16),X(28,16),X(37,13)]));
def("Offensive Rebound Pursuit",F("Coach shoots · defender boxes out",[C(25,30),SH(25,28),O(40,16),X(37,13)]),F("Swim, spin or tap-out to get around · put it back",[O(40,16),X(37,13),M(41,14,40,9,33,7),SH(28,6)]));
def("Circle Box-Out War",F("Defender boxes the offense off the ball for 5 seconds",[B(25,30),...circle(4,25,30,6).map(e=>["x",e[1],e[2],""]),...circle(4,25,30,8.5)]));
def("Shell Drill: Rotations",
 F("Drive: help stops it, helper's man is covered",[O(8,22,"4"),O(18,29,"1"),O(32,29,"2"),...OB(42,22,"3"),X(21.5,24,"1"),X(31,24.5,"2"),X(39.5,19.5,"3"),X(19,12,"4"),D(42,20,38,8),M(19,12,33,9),M(21.5,24,15,17)]),
 F("Skip pass: sprint to close out",[...OB(8,22,"4"),O(18,29,"1"),O(32,29,"2"),O(42,22,"3"),PS(40.5,21,25,15,9.5,21),X(15,17,"1"),M(15,17,10,20)]));
def("Ball Screen Coverages",
 F("ICE: force the handler away from the screen, big drops to the baseline",[...OB(41,24,"1"),X(40,27,"1"),O(37,27,"5"),X(36,15,"5"),S(36,20,37,25.5),D(42,22,44,12),T(25,38,"Guard jumps to the screen side")]),
 F("DROP: guard fights over, big sits in the paint",[...OB(25,30,"1"),X(25,27,"1"),O(30,27,"5"),X(30,14,"5"),D(26,29,33,27,33,21),M(25,27,30,26),T(25,40,"Give up the pull-up, take away the rim")]),
 F("HEDGE: big jumps out high, then recovers to the roller",[O(32,28,"1"),B(33.6,29.6),X(34,29.5,"5"),O(28,13,"5"),X(29,27,"1"),M(34,28,30,16),M(28,13,27,9)]),
 F("SWITCH: defenders swap assignments",[O(32,28,"1"),B(33.6,29.6),O(28,22,"5"),X(30.5,26,"5"),X(27,24,"1"),M(31,24,32,26),M(25,25,27,22.5),T(25,40,"Call it loud, switch early")]));
def("Closeout 1v1: 3 Stops",F("Pass, closeout, play live · 3-dribble limit",[X(25,7),B(23,8.5),O(41,21),PS(26,8,39.5,19.5),M(26,8.5,37,17)]),F("3 straight stops to rotate · a score resets",[O(41,21),B(42.6,22.6),X(38.5,18.5),D(40,19,34,9),M(37,17,32,10)]));
def("X-Out Scramble",
 F("Coach skips the ball to the far wing",[C(25,30),O(8,22,"1"),O(42,22,"2"),O(47,4,"3"),X(20,20,"1"),X(34,19,"2"),X(40,7,"3"),PS(23.5,29,9.5,23)]),
 F("Farthest defender sprints to the ball · others rotate to open players",[C(25,30),O(8,22,"1"),B(9.6,23.6),O(42,22,"2"),O(47,4,"3"),M(34,19,11,21),M(20,20,40,21),M(40,7,45,5),T(25,40,"Talk: I've got ball!")]));
def("Defensive Transition: Tag-Up & Load",
 F("Shot goes up at the far end",[O(80,15),O(78,35),O(70,25),X(84,18),X(82,32),X(66,25),SH(86,24)],1),
 F("Sprint back · first defender to the rim, others load to the ball",[X(10,25),X(18,18),X(18,32),O(40,20),B(41.6,21.6),M(66,25,12,25),M(84,18,20,18),M(82,32,20,32),T(47,46,"Sprint to the paint first")],1));
def("Post Defense",
 F("Front the post",[O(33,9,"5"),X(34,12),...OB(44,20,"2"),X(41,18)]),
 F("3/4 deny from the high side",[O(33,9,"5"),X(35.5,10.5),O(44,20,"2"),B(45.6,21.6)]),
 F("Behind when the ball goes lower · weak side helps on the lob",[O(33,9,"5"),X(31,7),O(46,8,"2"),B(47.6,9.6),X(20,10),M(20,10,28,9)]));
def("Zone Slides: 2-3",
 F("Ball at the top",[...OB(25,30),O(8,22),O(42,22),O(3,4),O(47,4),X(19,22),X(31,22),X(12,10),X(25,8),X(38,10)]),
 F("Ball on the wing: guard takes it, forward shades the corner",[O(25,30),...OB(42,22),O(8,22),O(3,4),O(47,4),X(38,20),X(26,18),X(40,9),X(31,8),X(17,9),PS(26.5,29,40.5,23)]),
 F("Ball in the corner: forward closes out, center fronts the block",[O(25,30),O(42,22),O(8,22),O(3,4),...OB(47,4),X(39,15),X(25,15),X(44,6),X(34,8),X(20,8),PS(42,20,46,6)]));
def("2-2-1 Press Trap Reads",
 F("2-2-1 alignment against the inbound",[...OB(95,30,"1"),O(84,18),O(84,34),O(60,25),O(45,12),X(78,18),X(78,34),X(60,13),X(60,37),X(32,25)],1),
 F("Trap the sideline after the first pass · others rotate",[O(84,9),B(85.6,10.6),O(84,34),O(60,25),O(45,12),X(81,12),X(78,7),X(68,25),X(56,22),X(40,15),M(78,18,81,13),M(60,13,77,8),M(78,34,68,26),M(60,37,56,24),M(32,25,40,16)],1));
def("Shot Prep Footwork",F("Catch, pivot, rip · square up",[...OB(41,22),T(25,30,"Turn and face")]),F("Jab series: jab-shot, jab-drive",[O(41,22),M(39.5,21,37,20),SH(40,21),D(40,20,32,10)]));
def("Plyometric Circuit",F("40s work · 20s rest · rotate stations",[["R",3,14,20,13,"Box jumps"],["R",27,14,20,13,"Lateral bounds"],["R",3,31,20,13,"Depth jumps"],["R",27,31,20,13,"Broad jumps"],M(23,20,27,20),M(37,27,37,31),M(27,37,23,37),M(13,31,13,27)]));
def("Post Seal & Duck-in",F("Seal on the block",[O(33,9,"5"),X(35,11),...OB(44,20,"2"),O(25,30,"1")]),F("Ball reverses · duck into the lane, catch, finish",[O(28,10,"5"),X(32,10),O(44,20,"2"),...OB(25,30,"1"),PS(42.5,20,26.5,28.5),M(33,9,28,10),PS(24,28,27.5,12),SH(26,7)]));
def("High-Low Entry 2v2",F("High post catches",[...OB(25,19,"4"),O(33,9,"5"),X(25,22.5),X(31,11)]),F("Low post seals · lob or bounce in",[O(25,19,"4"),B(26.6,20.6),O(30,7,"5"),X(32,10),X(25,22.5),PS(25,17,28,12,30,8.5),SH(27,6)]));
def("Pick & Roll Reads vs Coverage",
 F("Drop: pull-up jumper",[...OB(25,30,"1"),X(25,28,"1"),O(30,27,"5"),X(30,14,"5"),D(26,29,33,23),SH(33,21)]),
 F("Hedge: split, or pocket pass to the roller",[O(32,28,"1"),B(33.6,29.6),X(34,29.5,"5"),O(28,15,"5"),PS(31,26.5,28.5,17)]),
 F("Switch: attack the big",[O(32,28,"1"),B(33.6,29.6),X(30,25.5,"5"),D(33,26,38,14,31,8),SH(29,7)]));
def("Advantage 4v3",F("Drive draws a defender",[...OB(25,30,"1"),O(5,14,"2"),O(45,14,"3"),O(36,4,"4"),X(15,14),X(35,14),X(28,8),D(25,28,25,17),M(35,14,28,16)]),F("Kick · make the extra pass",[O(25,17,"1"),O(5,14,"2"),O(45,14,"3"),X(28,16),M(15,14,40,15),PS(27,17,43.5,14.5),PS(44,12,37,5.5),SH(36,5)]));
def("Horns Set & Counters",
 F("Horns: bigs at the elbows, shooters in the corners",[...OB(25,32,"1"),O(17,19,"4"),O(33,19,"5"),O(3,4,"2"),O(47,4,"3")]),
 F("Ball screen: 5 rolls, 4 pops",[O(25,32,"1"),B(26.6,33.6),O(17,19,"4"),O(33,19,"5"),O(3,4,"2"),O(47,4,"3"),S(33,20.5,28,29),D(26.5,31,35,28,38,20),M(28,28,27,9),M(17,20.5,15,27)]),
 F("Counter: elbow hand-off and backdoor",[...OB(33,19,"5"),O(25,32,"1"),O(47,4,"3"),O(17,19,"4"),O(3,4,"2"),M(25,30,33,21),M(45,6,40,16,30,6)]));
def("Dribble Hand-off Series",
 F("KEEP: defender jumps the hand-off, keep it and attack",[...OB(34,27,"5"),O(42,20,"2"),X(38,22),D(33,25,30,10)]),
 F("REJECT: defender cheats over the top, go backdoor",[...OB(34,27,"5"),O(42,20,"2"),X(38,24),M(41,18,31,7),PS(33,25,31,9)]),
 F("TURN-DOWN: screener keeps it and goes to the rim",[...OB(34,27,"5"),O(42,22,"2"),X(36,25),D(32,26,27,10),SH(26,8)]));
def("Zone Offense vs 2-3",F("Attack the gaps between defenders",[...OB(25,30),O(8,22),O(42,22),O(3,4),O(47,4),X(19,22),X(31,22),X(12,10),X(25,8),X(38,10),D(25,28,25,23)]),F("Short corner and high post options",[O(25,23),B(26.6,24.6),O(8,22),O(42,22),O(13,4),O(25,17),X(19,20),X(31,20),X(12,10),X(25,8),X(38,10),PS(24,21.5,14,6),PS(26,22,25.5,18.5)]));
def("Late-Game Situations",F("6 seconds, down 2 · side out of bounds",[...OB(51,24,"1"),O(33,19,"5"),O(25,29,"2"),O(8,22,"3"),O(41,4,"4"),X(31,21),X(25,26),X(10,20),X(40,7),S(33,21,30,27),M(25,27,34,27,43,26),PS(49,24,42,26)]),F("Catch and score · or foul up 3",[O(42,26,"2"),SH(41,24),T(25,40,"Know the clock, the score and the fouls")]));
def("Read & React 5v0",F("Pass and cut · fill open spots · no dribbles",[O(3,4,"5"),O(8,22,"4"),...OB(25,29,"1"),O(42,22,"2"),O(47,4,"3"),PS(26.5,28,40.5,23),M(25,27,26,8),M(9,24,23,29)]));
def("Make/Miss Transition 5v5",F("Make: inbound and push",[O(93,25),B(94.6,26.6),O(82,15),O(80,35),O(70,10),O(70,40),PS(92,24,83,16),M(70,10,30,8),M(70,40,30,42)],1),F("Miss: rebound, outlet, run",[O(86,24),B(87.6,25.6),O(78,8),O(75,42),O(70,25),O(60,10),PS(85,23,79,9.5),M(60,10,20,10),M(70,25,30,25)],1));
def("4v3 Continuous",F("Four attack three",[...OB(62,25),O(66,8),O(66,42),O(72,30),X(20,25),X(10,18),X(10,32),D(60,25,24,25),M(64,8,14,10),M(64,42,14,40)],1),F("Three defenders + one new player attack back",[X(10,22),B(11.6,23.6),O(30,48),M(12,22,80,22),M(30,46,80,36),T(47,4,"Continuous")],1));
def("Numbers Defense: Tandem",F("Top defender stops the ball",[...OB(60,25,"1"),O(62,8,"2"),O(62,42,"3"),X(22,25,"T"),X(10,25,"B"),D(58,25,26,25),M(22,25,24,25)],1),F("First pass: bottom takes it, top drops to the rim",[O(24,25,"1"),O(16,8,"2"),O(62,42,"3"),PS(22,24,17,10),X(14,12,"B"),X(10,24,"T"),M(10,22,14,14),M(22,25,10,24)],1));
def("Defensive Slide Ladder",F("Lane line to lane line · 5 × 30s",[X(17,8),X(17,13),X(17,18),M(19,8,31,8),M(31,10,19,10),M(19,13,31,13),M(19,18,31,18)]));
def("Sideline Sprints + Free Throws",F("Sideline to sideline 4 times",[O(25,1),O(30,1),M(25,3,25,48),M(27,48,27,3)],1),F("Then 2 free throws · repeat 5 times",ftLine()));
def("Weave into Layup Race",F("3-man weave: pass and go behind",[O(3,12,"1"),...OB(3,25,"2"),O(3,38,"3"),PS(5,24.5,18,35.5),M(5,26.5,22,45),M(5,38,17,37),M(5,13,24,22)],1),F("Finish, then 2-on-1 back · team target in 2 minutes",[O(84,25),O(80,15),X(78,35),SH(87,25),M(80,15,20,18),M(84,27,22,30)],1));
def("3 Stops Drill",F("Defense needs 3 straight stops to rotate to offense",[O(8,22),...OB(18,29),O(32,29),O(42,22),X(18.5,25.5),X(29,25),X(37,19),X(14,17),T(25,40,"A score resets the count")]));
def("Advantage / Disadvantage",F("Start 2v2 · coach adds a player to one team",[...OB(18,28),O(32,28),X(19,24.5),X(31,24.5),C(48,30),O(48,40),M(46,40,38,22)]));
def("Situational 5v5",F("Coach sets the score and clock",[O(30,10),O(30,40),...OB(20,25),O(12,13),O(10,36),X(26,12),X(26,38),X(16,25),X(9,16),X(8,33),T(65,25,"Up 1 · 30 seconds · our ball")],1));
def("Kill Scrimmage",F("Stop = 1 point · 3 straight stops = a kill (3 points)",[O(30,10),O(30,40),...OB(20,25),O(12,13),O(10,36),X(26,12),X(26,38),X(16,25),X(9,16),X(8,33),T(65,25,"Play to 10")],1));
})();
