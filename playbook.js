// Playbook: Spectres plays (from the coach's training sheets), full-court presses, press breaks, links to set plays.
// Full court diagrams: offense inbounds from the RIGHT baseline (x≈95) and attacks the LEFT basket.
// Backcourt FT line x=75, halfway x=47. Half court: basket at top (25,5.25).
(function(){
const O=(x,y,l="")=>["o",x,y,l], X=(x,y,l="")=>["x",x,y,l], B=(x,y)=>["b",x,y], OB=(x,y,l="")=>[O(x,y,l),B(x+1.6,y+1.6)];
const M=(...p)=>["m",p], D=(...p)=>["d",p], PS=(...p)=>["p",p], S=(...p)=>["s",p], SH=(x,y)=>["sh",[x,y]], T=(x,y,t)=>["t",x,y,t], L2=(a,b,c,d)=>["L2",a,b,c,d];
const F=(c,e,full)=>({c,e,full:!!full});
const OP=(...p)=>["op",p], OSH=(x,y)=>["osh",[x,y]], FL=(...p)=>["f",p];
window.PLAYS=window.PLAYS||{};
const P=window.PLAYS;

window.PLAYBOOK_SECTIONS=[
  {k:"spectres",label:"Spectres playbook"},
  {k:"press",label:"Full-court presses"},
  {k:"break",label:"Press breaks"},
  {k:"inbound",label:"Inbounds"},
  {k:"halfcourt",label:"Half-court & other"}
];

// Team sheet card (not a play)
window.SPECTRES_SHEET={
  team:"Nunawading Spectres Boys U12.5",
  motto:"We see everything, we strike hard & fast. Together, we're unstoppable.",
  chant:"What do we see? EVERYONE! · How do we move? AS ONE! · How do we play? TOGETHER!",
  rules:["Feet, not hands. Beat your player to the spot. Don't reach or swipe. Reaching gives them free throws.","Shot goes up, one goes back. Someone sprints back on defence straight away. No easy layups.","Everyone talks: BALL, HELP, SCREEN. Quiet on defence costs your team a point (talk tax).","Box out every shot. Find a body, hit it, then go get the ball."],
  situations:[["Made basket","Inbound vs their press: run DRAGON or V"],["Sideline out","Run GHOST"],["Baseline out","Run GRAVEYARD"],["Half court","5-Out motion vs man-to-man"],["Our defence","1-3-1 in the backcourt, MATCH at halfway, then man-to-man"]],
  calls:["DRAGON RIGHT","DRAGON LEFT","V","GHOST (SLOB)","GRAVEYARD (BLOB)","TRAP","BALL","MATCH"],
  note:"League rule: press in the backcourt only. Once the ball crosses halfway it's strict man-to-man."
};

const PB=[];
const add=(o,frames)=>{PB.push(o);if(frames)P[o.n]=frames};

// ============================== SPECTRES ==============================
add({n:"1-3-1 Press (Spectres)",sec:"spectres",type:"press",call:"TRAP · BALL · MATCH",
 when:"Our backcourt defence after a made basket or dead ball. Backcourt only, MATCH at halfway.",
 s:"Point on the inbounder · wings at the free-throw line extended · middle at the top of the key · safety at halfway.",
 d:"Point: on the inbounder, force the ball to the sideline|Wings: free-throw line extended, trap when the ball comes to your side|Middle: top of the key, steal the pass back to the middle|Safety: at halfway, take away the long sideline pass|Ball to the sideline: point and wing trap, middle shifts ball side, weak wing drops to the middle, safety slides ball side|Ball reversed: everyone slides back and traps the other side|Ball crosses halfway: call MATCH, pick up the nearest player, then find your own",
 counters:"They flash the middle: the middle defender must stop the flash|They throw long up the sideline: the safety never creeps up|They reverse through the inbounder: slide back together, trap the other side",
 k:"Trap with feet and chest, no reaching|The middle must stop the flash, the safety must stay deep. Those two beat Dragon-style breaks|Calls: TRAP when you trap, BALL on the ball, MATCH at halfway",
 links:["2-2-1 Press Trap Reads","Shell Drill","Closeouts"]},
 [F("Setup: point on the inbounder, wings at FT line extended, middle at the top of the key, safety at halfway",[...OB(95.5,25,"I"),O(82,10),O(82,40),O(62,25),X(89,25,"P"),X(75,8,"W"),X(75,42,"W"),X(68,25,"M"),X(49,25,"S"),L2(47,0,47,50),T(70,48,"Backcourt only · MATCH at halfway")],1),
  F("Ball to the sideline: TRAP with point and wing · middle shifts · weak wing drops · safety slides ball side",[O(95.5,25,"I"),...OB(84,8),O(82,40),O(62,25),PS(94,24,85,9),X(89,25,"P"),X(75,8,"W"),X(75,42,"W"),X(68,25,"M"),X(49,25,"S"),M(89,23,86,12),M(76,7,81,6),M(68,23,71,15),M(75,40,70,28),M(49,23,52,12),T(84,18,"TRAP!")],1),
  F("Ball reversed: everyone slides back and traps the other side",[O(90,25,"I"),O(84,8),B(85.6,9.6),O(84,42),X(86,12,"P"),X(81,6,"W"),X(71,15,"M"),X(70,28,"W"),X(52,12,"S"),PS(85,10,89,23),PS(91,26,85,40),M(86,14,86,38),M(70,30,79,45),M(71,17,71,35),M(81,8,72,23),M(52,14,52,38)],1),
  F("Ball crosses halfway: call MATCH, pick up the nearest, then find your own",[...OB(42,40),O(40,10),O(30,25),O(20,12),O(20,38),X(39,38.5),X(37.5,11),X(27.5,24.5),X(17.5,13),X(17.5,36.5),L2(47,0,47,50),T(70,25,"MATCH!"),T(70,30,"Ball side and basket side of your player")],1)]);

add({n:"Dragon (Spectres press break)",sec:"spectres",type:"break",call:"DRAGON RIGHT · DRAGON LEFT",
 when:"Every made basket when they press. Our break against the 2-2-1: get it in, beat the sideline trap, use the middle.",
 s:"2 inbounds from the baseline, left of the lane · stack in the lane: 1 at the free-throw line, 3 in the middle of the lane · 4 and 5 wide on each sideline.",
 d:"On the call the stack splits: 3 breaks to the ball-side corner, 1 breaks to the other block|2 inbounds to 3 and steps straight in|2 runs up the middle of the lane · 3 passes back to 2 at the top of the key before the trap|2 hits 4 on the sideline and keeps running the middle|4 takes a couple of dribbles up the sideline and hits 2 in the middle|5 sprints the far sideline to the rim · 1 and 3 run the floor|Safety steps up to 2? Hit 5 at the rim for the layup",
 counters:"They deny the pass back: 3 pivots and looks up the sideline to 4|4 is covered: 2 keeps running, swing it to 5 on the other side|They trap 3: pivot away, protect the ball, find 2 in the middle. Never dribble into the corner",
 k:"Meet the pass, don't wait for it|Pass back BEFORE the trap closes|2 never stops running the middle|Pass ahead, the ball moves faster than the press|5 sprints the lane every time",
 links:["Pass & Follow Square","Get Open vs Denial","Give & Go"]},
 [F("Setup vs their 2-2-1: 2 inbounds left of the lane, 1 and 3 stacked in the lane, 4 and 5 wide on each sideline",[...OB(95.5,33,"2"),O(73,25,"1"),O(83,25,"3"),O(52,46,"4"),O(52,4,"5"),X(78,35),X(78,15),X(55,39),X(55,11),X(30,25,"S"),L2(47,0,47,50),T(66,49,"DRAGON")],1),
  F("Stack splits: 3 breaks to the ball-side corner, 1 to the other block · 2 inbounds to 3",[O(95.5,33,"2"),B(97.1,34.6),O(73,25,"1"),O(83,25,"3"),O(52,46,"4"),O(52,4,"5"),X(78,35),X(78,15),X(55,39),X(55,11),X(30,25,"S"),M(84,27,88,32,89,38),M(74,23,84,16,89,13),PS(94,34.5,88,37.5),M(78,37,84,38)],1),
  F("2 runs up the middle of the lane · 3 passes back to 2 at the top of the key before the trap",[O(95.5,33,"2"),O(89,38,"3"),B(90.6,39.6),O(89,13,"1"),O(52,46,"4"),O(52,4,"5"),X(84,38),X(78,15),X(55,39),X(55,11),X(30,25,"S"),M(94,31,86,27,73,25),PS(88,36.5,74.5,26.5),M(84,40,88,41),M(78,17,76,22),T(86,48,"Pass back BEFORE the trap")],1),
  F("2 hits 4 on the sideline and keeps running the middle",[O(73,25,"2"),B(74.6,26.6),O(89,38,"3"),O(89,13,"1"),O(52,46,"4"),O(52,4,"5"),X(88,41),X(76,22),X(55,39),X(55,11),X(30,25,"S"),PS(71.5,26.5,53.5,44.5),M(71,25,55,25,42,25),M(55,37,51,42),M(55,13,48,19),M(90,36.5,70,44),M(89,15,70,10)],1),
  F("4 takes a couple of dribbles up the sideline and hits 2 in the middle · 5 sprints the far side to the rim",[O(52,46,"4"),B(53.6,47.6),O(42,25,"2"),O(70,44,"3"),O(70,10,"1"),O(52,4,"5"),X(51,42),X(48,19),X(30,25,"S"),D(50,46,42,46),PS(42,44.5,40,26.5),M(52,6,24,6,12,17),M(70,42,50,40,30,40),M(70,12,50,12,32,12),M(48,21,44,24)],1),
  F("Safety steps up to 2: hit 5 at the rim for the layup",[O(38,25,"2"),B(39.6,26.6),X(33,25,"S"),O(12,17,"5"),O(30,40,"3"),O(32,12,"1"),M(31,25,34,25),PS(36.5,24,13.5,18),SH(11,19),T(30,47,"5 sprints the lane every time")],1)]);

add({n:"V (Spectres press break)",sec:"spectres",type:"break",call:"V",
 when:"Our press break against the 1-3-1 or the 2-2-1. Dribble to the side to draw the trap, reverse it just before the trap closes, then hot-potato passes up the floor to 5 waiting on the left block.",
 s:"1-3-1 shape: 2 inbounds right of the basket · 1 in the lane · 3 on the left wing · 4 in the middle at the centre circle · 5 deep at the top of the key in the frontcourt.",
 d:"2 inbounds to 1 in the lane, then steps in and stays for the reversal|1 dribbles out to the right side and draws the trap|Just before the trap closes, 1 reverses it back to 2, then sprints up the right side to the 3-point line|Hot potato, quick passes and no dribbles: 2 to 3 on the left wing, 3 to 4 in the middle, 4 back to 1 at the 3-point line. 2 to 3, then 3 to 4 to 1, makes the letter V|After the pass, 2 sprints all the way up to the left corner|Pass and move: 3 passes to 4, then sprints up to the left wing|When 4 has the ball, 5 goes to the left block and waits for the pass from 1|After passing to 1, 4 takes the point|1 hits 5 on the left block: score. Their safety is on his own|Safety helps on 5? Kick it to 2 in the corner, or back out to 4 at the point, 1 on the right or 3 on the left wing|Nothing there? 5 pops out to the right corner and we are in 5-Out",
 counters:"Trap comes early: reverse it straight away, don't wait for the dribble|Middle denied: 3 skips it long to 5|Top denied: 4 turns and attacks, 5 cuts to the rim|Never dribble into the corner",
 k:"Draw the trap, then reverse it just before it closes|Hot potato: catch and pass, no dribbles|Catch facing up the floor|Pass, then sprint to your spot: 1 right wing, 2 left corner, 3 left wing, 4 point, 5 left block (pops to the right corner for 5-Out)",
 links:["3-on-2, 2-on-1","Hit-Ahead Drill","1-3-1 Press (Spectres)"]},
 [F("Setup vs their 1-3-1: 2 inbounds, 1 in the lane, 3 on the left wing, 4 in the middle, 5 deep at the top of the key",[...OB(95.5,17,"2"),O(86,21,"1"),O(63,38,"3"),O(48,25,"4"),O(30,25,"5"),X(90,18,"P"),X(75,8,"W"),X(75,42,"W"),X(68,25,"M"),X(43,27,"S"),L2(47,0,47,50),T(70,49,"V · works vs 1-3-1 and 2-2-1")],1),
  F("2 inbounds to 1, steps in and stays · 1 dribbles to the side and draws the trap",[...OB(95.5,17,"2"),O(86,21,"1"),O(63,38,"3"),O(48,25,"4"),O(30,25,"5"),X(90,18,"P"),X(75,8,"W"),X(75,42,"W"),X(68,25,"M"),X(43,27,"S"),PS(94,17.5,87.5,19.5),M(94,19.5,89,23,85.5,25),D(85,19.5,79,11,72,4),M(90,16.5,81,9,76,6.5),M(74,9,70,7),M(68,23,70,15),M(75,40,68,30),M(43,25.5,50,13),T(80,17,"TRAP")],1),
  F("Just before the trap closes: 1 reverses to 2 and sprints up the right · hot potato: 2 to 3, 3 to 4, 4 back to 1 · when 4 has it, 5 goes to the left block · 3 passes and moves to the left wing · 4 takes the point · 1 hits 5 · 2-3-4-1 makes the V",[O(72,4,"1"),B(73.6,5.6),O(85.5,25,"2"),O(63,38,"3"),O(48,25,"4"),O(30,25,"5"),X(76,6.5,"P"),X(70,7,"W"),X(70,15,"M"),X(68,30,"W"),X(50,13,"S"),PS(73,5.5,84,23.5),["mr",[72.5,5.5,58,2.5,40,3,22,8]],PS(84.5,26.5,64.5,36.5),["mr",[84,27.5,74,40,60,45,36,47,4,46]],PS(61.5,37,49.5,26.5),["mr",[62,40,48,41.5,30,41,21,40]],["mr",[28.5,26,18,30,9,32]],PS(46.5,23.5,23.5,9.5),["mr",[46,25,36,25,27,25]],PS(22,10,10,30),T(66,49,"Hot potato: quick, no dribbles")],1),
  F("5 catches on the left block: score · safety helps? kick to 2 in the corner, or 4 at the point, or 1 on the right · 3 is on the left wing",[...OB(9,32,"5"),O(4,46,"2"),O(22,8,"1"),O(27,25,"4"),O(21,40,"3"),X(50,13,"S"),M(48,14,30,20,13,29),PS(10.5,33.5,5.5,44.5),SH(5,45),OSH(9,31),OP(10.5,31,25.5,25),OP(10,30.5,20.5,9.5),T(60,46,"Their safety is on his own")],1),
  F("Nothing there? 5 kicks it out to 4 and pops to the right corner · 5-Out",[...OB(9,32,"5"),O(4,46,"2"),O(22,8,"1"),O(27,25,"4"),O(21,40,"3"),PS(10.5,31,25.5,26),M(8,30,5,18,4,5),T(60,46,"5-Out: 1 and 3 wings, 2 and 5 corners, 4 point")],1)]);

add({n:"Ghost (Spectres SLOB)",sec:"spectres",type:"inbound",call:"GHOST",
 when:"Every sideline out of bounds in the frontcourt.",
 s:"Inbounder on the sideline at the free-throw line extended · big at the ball-side elbow · guard at the weak-side elbow · safety at the top · big on the weak-side block.",
 d:"On the slap: the ball-side elbow screens across for the weak-side elbow|The cutter curls over the top of the screen and down the ball-side lane line to the rim|Inbounder hits the cutter going to the rim|Help comes from the weak-side block? Cutter dumps it to the block for the layup|Nothing there: safety at the top, straight into 5-Out spots|Inbounder counts to 5 out loud. Bounce or chest pass only, no lobs",
 counters:"They switch the screen: screener rolls to the rim|Cutter is denied: safety comes to the ball, reset into 5-Out|Weak-side defender helps on the cutter: block player is open",
 k:"Screen: still, wide base, arms in|Cutter waits for the screen, then curls tight over the top|Inbounder counts to 5 out loud, no lobs",
 links:["Pass & Screen Away","5-Out Screen Away","Get Open vs Denial"]},
 [F("Setup: inbounder on the sideline, players at both elbows, safety at the top, big on the weak-side block",[...OB(51.5,19,"I"),O(33,19,"4"),O(17,19,"2"),O(25,30,"1"),O(16,8,"5"),T(25,42,"GHOST")]),
  F("On the slap: the ball-side elbow screens across for the weak-side elbow",[O(51.5,19,"I"),B(53.1,20.6),O(33,19,"4"),O(17,19,"2"),O(25,30,"1"),O(16,8,"5"),S(31.5,19,20,19)]),
  F("The cutter curls over the top and down the ball-side lane line to the rim · inbounder hits him",[O(51.5,19,"I"),B(53.1,20.6),O(20,19,"4"),O(17,19,"2"),O(25,30,"1"),O(16,8,"5"),M(17,21,22,25,30,24,34,17,30,9),PS(50,18.5,31.5,10)]),
  F("Help comes from the block? Cutter dumps it to the weak-side block for the layup",[O(51.5,19,"I"),O(30,9,"2"),B(31.6,10.6),O(20,19,"4"),O(25,30,"1"),O(16,8,"5"),PS(28.5,9,17.5,8),SH(17,7),T(25,42,"Count to 5 · no lobs")])]);

add({n:"Graveyard (Spectres BLOB)",sec:"spectres",type:"inbound",call:"GRAVEYARD",
 when:"Baseline out of bounds under our basket when we want a quick score at the rim.",
 s:"Box set: bigs on both blocks, guards at both elbows. Inbounder on the baseline, right of the lane.",
 d:"On the slap: both block players set down screens for the elbows|Both elbow players wait for the screen, then curl tight around it into the lane to the rim|Inbounder hits the first open curler: ball side first, then the weak side at the front of the rim|Screeners pop back out as the safety outlets|Nothing there: hit a screener popping out, straight into 5-Out spots|Inbounder counts to 5 out loud. Bounce or chest pass only, no lobs",
 counters:"They switch the screens: screener seals his man and steps to the rim|They sag into the lane: hit the screener popping out for the shot|Both curls covered: safety pass to a popper and reset",
 k:"Screeners: still, wide base, arms in|Curlers wait for the screen, then curl tight, shoulder to hip|Hands up and ready when you come off the screen|Inbounder counts to 5 out loud, no lobs",
 links:["Pass & Screen Away","Elbow Curl Shooting","Get Open vs Denial"]},
 [F("Setup: box around the lane · bigs on the blocks, guards at the elbows",[...OB(36,-2,"I"),O(17,8,"4"),O(33,8,"5"),O(17,19,"2"),O(33,19,"3"),T(25,40,"GRAVEYARD")]),
  F("On the slap: both block players down screen for the elbows",[O(36,-2,"I"),B(37.6,-0.4),O(17,8,"4"),O(33,8,"5"),O(17,19,"2"),O(33,19,"3"),S(17,9.5,17,16.5),S(33,9.5,33,16.5)]),
  F("Both elbows curl tight around the screens into the lane to the rim",[O(36,-2,"I"),B(37.6,-0.4),O(17,16.5,"4"),O(33,16.5,"5"),O(17,19,"2"),O(33,19,"3"),M(15.5,20,11,15,14,10,21,8),M(34.5,20,39,15,36,10,29,8)]),
  F("Hit the first open curler: ball side first, then the weak side at the front of the rim · screeners pop out",[O(36,-2,"I"),B(37.6,-0.4),O(17,16.5,"4"),O(33,16.5,"5"),O(21,8,"2"),O(29,8,"3"),PS(35.5,-0.5,30,6.5),SH(28,7),M(34,17,41,21),M(16,17,9,21),T(25,40,"Count to 5 · no lobs")])]);

add({n:"Shell vs 5-Out (Spectres rules)",sec:"spectres",type:"defense",call:"BALL · HELP · SCREEN",
 when:"Our half-court man-to-man once the ball crosses halfway.",
 s:"Offense in 5-Out spots (top, two wings, two corners). Split line = imaginary line down the middle, basket to basket.",
 d:"On ball: arm's distance, stance, force to the sideline|One pass away: deny, hand in the passing lane|Two or more passes away: foot on the split line, see man and ball (pistols)|Ball at top: wing defenders deny, corner defenders sink to help|Ball on the wing: top and ball-side corner deny, weak wing on the split line, weak corner is the low man|Everyone moves while the ball is in the air|Cutter: bump the cut, stay between your player and the ball|Drive: help stops it, everyone rotates, recover",
 counters:"Progression: pass only, then pass and cut, then drives, then live",
 k:"Move while the ball is in the air|Talk tax: BALL, HELP, SCREEN or it costs a point|Freeze and check spots",
 links:["Shell Drill","Shell Drill: Rotations","Help & Recover 2v2","Closeouts"]},
 [F("Ball at the top: wings deny, corners sink to help",[...OB(25,30,"1"),O(8,22,"2"),O(42,22,"3"),O(3,4,"4"),O(47,4,"5"),X(25,26.5),X(11,20),X(39,20),X(10,9),X(40,9),L2(25,0,25,47)]),
  F("Ball on the wing: top and ball-side corner deny, weak wing on the split line, weak corner is the low man",[O(25,30,"1"),...OB(42,22,"3"),O(8,22,"2"),O(3,4,"4"),O(47,4,"5"),PS(26.5,29,40.5,23),X(39.5,19.5),X(25,26.5),X(40,9),X(11,20),X(10,9),M(25,26.5,30,27),M(11,20,24,16),M(10,9,21,7),M(40,9,44,7),L2(25,0,25,47)])]);

// ============================== FULL-COURT PRESSES ==============================
add({n:"2-2-1 Zone Press",sec:"press",type:"press",call:"2-2-1",
 when:"To slow a team down and make them use clock, protect a lead, or when your players aren't the quickest. Safe: it gives up the first pass but never the layup.",
 s:"Two at the free-throw line extended, two at halfway, one deep safety.",
 d:"Front two let the inbound pass happen, then force the ball to the sideline|After the first pass: front defender and wing trap the sideline|The other front defender takes the middle, the weak wing takes the long middle pass|Safety stays deep, protects the rim, steals the lob|Ball reversed: back off and reset, trap again on the next sideline catch",
 counters:"Their middle flash beats it: weak wing must jump the middle|Long diagonal pass: safety reads the passer's eyes",
 k:"No layups: the safety never leaves the paint area|Trap with chest and feet, hands high|Rotate on the pass, not the catch",
 links:["2-2-1 Press Trap Reads","Defensive Transition: Tag-Up & Load"]},
 [F("Setup: two at the FT line extended, two at halfway, one deep",[...OB(95.5,25,"I"),O(82,10),O(82,40),O(64,25),O(30,25),X(78,17),X(78,33),X(58,12),X(58,38),X(26,25,"S")],1),
  F("First pass to the side: front defender and wing trap, everyone shifts",[O(95.5,25,"I"),...OB(84,7),O(82,40),O(64,25),O(30,25),X(78,15),X(58,10),X(78,31),X(58,36),X(26,23),PS(94,24,85,8.5),M(78,15,83,10.5),M(58,10,78,5),M(78,31,70,21),M(58,36,57,24),M(26,23,34,15),T(70,46,"Safety stays deep")],1)]);

add({n:"1-2-1-1 Diamond Press",sec:"press",type:"press",call:"DIAMOND",
 when:"When you're behind and need turnovers fast, or the other team has one weak ball handler. Aggressive: traps the first catch but can give up layups.",
 s:"Point on the inbounder · two wings at the free-throw line extended near the sidelines · middle near halfway · safety deep.",
 d:"Point pressures the inbounder, take away the middle pass|First catch near the corner: point and wing trap immediately|Middle defender denies the sideline pass up the floor|Weak wing sprints to the middle to steal the pass out of the trap|Safety stays deep and reads the long pass",
 counters:"They catch high (not in the corner): wing still traps, middle denies the flash|They break it: everyone sprints back, no fouling",
 k:"Trap the first catch, every time|Turn the trapped player toward the sideline|Sprint back the moment it's broken",
 links:["2-2-1 Press Trap Reads","Defensive Transition: Tag-Up & Load"]},
 [F("Setup: point on the inbounder, wings at the FT line extended, middle, safety deep",[...OB(95.5,25,"I"),O(84,8),O(84,42),O(64,25),O(30,25),X(91,25,"P"),X(80,10),X(80,40),X(62,30),X(28,25,"S")],1),
  F("First catch near the corner: TRAP · middle denies the sideline · weak wing takes the middle",[O(95.5,25,"I"),...OB(88,6),O(84,42),O(64,25),O(30,25),X(91,23),X(80,8),X(62,28),X(80,38),X(28,23),PS(94,24,89,8),M(91,23,90,11),M(80,8,85,4.5),M(62,28,72,9),M(80,38,71,24),M(28,23,32,16),T(84,16,"TRAP!")],1)]);

add({n:"Man-to-Man Full-Court Denial",sec:"press",type:"press",call:"FIST (man up)",
 when:"End of a game when you must get the ball back, after a timeout, or when you're quicker than them. Takes away the inbound pass instead of trapping.",
 s:"Every defender faces up on their player, between the ball and the man. One defender on the inbounder.",
 d:"Deny every inbound pass: hand in the lane, see the ball|Inbounder's defender jumps around and blocks the view|Catch made: pressure the ball, force to the sideline, stop the middle|Everyone else drops to see man and ball|Lob over the top: the nearest defender sprints to help",
 counters:"They screen for the receiver: switch or fight over|They throw long: last defender stays a step deeper",
 k:"Ball, you, man: see both|No reaching on the catch|Count the 5 seconds out loud",
 links:["Deny the Wing","Zig-Zag Defense","Get Open vs Denial"]},
 [F("Setup: every defender denies, one on the inbounder",[...OB(95.5,25,"I"),X(92,25),O(80,10),X(83,12),O(80,40),X(83,38),O(64,20),X(67,21),O(55,35),X(58,34)],1),
  F("Catch made: pressure the ball to the sideline, everyone drops to see man and ball",[O(95.5,25,"I"),...OB(80,10),X(83,12),O(80,40),X(83,38),O(64,20),X(67,21),O(55,35),X(58,34),PS(94,24,81.5,11.5),M(83,14,79,13),M(83,36,72,30),M(67,23,64,23),M(58,32,58,26)],1)]);

add({n:"Run and Jump",sec:"press",type:"press",call:"JUMP",
 when:"Against teams that dribble with their head down. Man-to-man that surprises the dribbler with a switch or trap. Good when you're quick and talk well.",
 s:"Man-to-man full court, force the dribbler to the sideline.",
 d:"On-ball defender forces the dribbler up the sideline|The nearest defender leaves their player and jumps in front of the dribbler|The dribbler stops or picks up the ball: trap it, or switch|The original defender rotates to the player left open|Everyone else rotates one spot toward the ball",
 counters:"Dribbler keeps their head up and passes ahead: stay deep, don't jump too early|They reverse it: get back to man-to-man",
 k:"Jump on the call: JUMP!|Jump from the dribbler's blind side|Rotate, don't chase",
 links:["Zig-Zag Defense","X-Out Scramble","Help & Recover 2v2"]},
 [F("Force the dribbler up the sideline",[...OB(82,8),X(84,11),O(60,20),X(62,17),O(60,40),X(62,37),D(80,8,62,7)],1),
  F("JUMP: the nearest defender jumps the dribbler · the original defender rotates to the open player",[O(62,7),B(63.6,8.6),X(65,10),O(60,20),X(62,17),O(60,40),X(62,37),M(62,15,59,7),M(65,12,62,19),M(62,35,61,25),T(55,46,"JUMP!")],1)]);

add({n:"1-2-2 Half-Court Trap",sec:"press",type:"press",call:"1-2-2",
 when:"To save legs while still pressuring. Lets them bring it up, then traps at halfway where the sideline and halfway line act as extra defenders.",
 s:"Point at the backcourt free-throw line · two wings at halfway near the sidelines · two back defenders.",
 d:"Point turns the ball to one sideline|Ball crosses halfway on the sideline: point and wing trap in the halfway corner|Weak wing takes the middle|Back defenders slide ball side, one takes the rim|Pass out of the trap: rotate and match up",
 counters:"They split the trap: wing must close the gap|They reverse it before halfway: point stays between ball and middle",
 k:"Use the halfway line as a teammate|Trap with chest, no reaching|League note: some U12 comps don't allow traps past halfway",
 links:["2-2-1 Press Trap Reads","Zone Slides: 2-3"]},
 [F("Setup: point at the backcourt FT line, wings at halfway, two back",[...OB(75,25),O(62,8),O(62,42),O(40,20),O(30,35),X(70,25,"P"),X(50,9),X(50,41),X(32,17),X(32,33)],1),
  F("Ball crosses halfway on the sideline: TRAP in the halfway corner · everyone shifts",[O(48,6),B(49.6,7.6),O(62,42),O(40,20),O(30,35),X(70,25,"P"),X(50,9),X(50,41),X(32,17),X(32,33),M(70,23,52,8),M(50,11,46,8),M(50,39,42,26),M(32,19,36,10),M(32,31,24,24),T(50,16,"TRAP!")],1)]);

// ============================== PRESS BREAKS ==============================
PB.push({n:"Dragon (Spectres press break)",sec:"break",alias:true},{n:"V (Spectres press break)",sec:"break",alias:true});

add({n:"1-4 Flat vs Man Press",sec:"break",type:"break",call:"FLAT",
 when:"Against man-to-man full-court denial. Spreads the floor so your best ball handler can catch and beat their player 1v1.",
 s:"Inbounder on the baseline · four players across the free-throw line extended.",
 d:"Inside two set screens out for the wings|Wings curl hard to the ball and meet the pass|Screeners sprint long down the floor|Best ball handler catches, faces up and attacks 1v1|Everyone else clears ahead so the middle is open",
 counters:"Both wings denied: screener slips back to the ball|Made basket: the inbounder can run the baseline|They switch the screens: hit the screener going long",
 k:"Sprint to meet the pass|Clear out for the ball handler|Inbounder steps in as the safety",
 links:["Get Open vs Denial","Pass & Screen Away","Gauntlet"]},
 [F("Setup: four across the FT line extended",[...OB(95.5,25,"I"),O(75,5,"2"),O(75,18,"1"),O(75,32,"4"),O(75,45,"3"),X(77,6.5),X(77,19.5),X(77,33.5),X(77,43.5)],1),
  F("Inside two screen out for the wings · wings curl to the ball · screeners sprint long",[O(95.5,25,"I"),B(97.1,26.6),O(75,5,"2"),O(75,18,"1"),O(75,32,"4"),O(75,45,"3"),X(77,6.5),X(77,19.5),X(77,33.5),X(77,43.5),S(76,16.5,77,8.5),S(75,33,77,41.5),M(73,5,80,11,86,16),M(73,45,80,39,86,34),M(76,10,58,14,40,16),M(76,40,58,36,40,34),PS(94,24,87,17)],1),
  F("Catch, face up, attack 1v1 · everyone clears ahead",[...OB(86,16,"2"),X(84,18),O(40,16,"1"),O(40,34,"4"),O(86,34,"3"),O(92,25,"I"),D(86,14.5,56,22,40,24),M(86,32,60,40)],1)]);

add({n:"Middle Flash vs 2-2-1",sec:"break",type:"break",call:"FLASH",
 when:"Against 2-2-1 and other zone presses that let you inbound and trap the sideline.",
 s:"Inbounder · two guards near the corners · one player at halfway in the middle · one deep.",
 d:"Inbound to a guard before the trap arrives|The middle player flashes into the hole in the middle of the press|Hit the middle: catch, turn, look long|Trapped before the middle pass? Pass back to the inbounder who stepped in, and swing it|Opposite guard and deep player run their lanes",
 counters:"Middle denied: reverse through the inbounder|Safety cheats up: throw long to the deep player",
 k:"The middle is where presses die|Catch, turn, look long|Never dribble into a trap",
 links:["Hit-Ahead Drill","Outlet Passing","3-Lane Fill"]},
 [F("Setup: inbound to a guard, middle player at halfway, one deep",[...OB(95.5,25,"I"),O(84,8,"1"),O(84,42,"2"),O(56,25,"4"),O(25,25,"5"),X(78,17),X(78,33),X(58,12),X(58,38),X(27,22),PS(94,24,85,9.5)],1),
  F("The middle player flashes into the hole · hit the middle · catch, turn, look long",[...OB(84,8,"1"),O(95.5,25,"I"),O(84,42,"2"),O(56,25,"4"),O(25,25,"5"),X(82,12),X(80,5),X(72,23),X(58,38),X(27,22),M(58,25,68,24),PS(84,10,67,23),PS(66,25,27,25.5),M(84,40,50,42)],1),
  F("Trapped before the middle pass? Back to the inbounder and swing it",[O(84,8,"1"),B(85.6,9.6),O(90,25,"I"),O(84,42,"2"),X(82,12),X(80,5),PS(85,10,89,23),PS(91,26,84,40),T(80,48,"Swing it, then attack the other side")],1)]);

add({n:"Catch High vs 1-2-1-1",sec:"break",type:"break",call:"HIGH",
 when:"Against the diamond press that traps the first catch in the corner.",
 s:"Receivers start high at the free-throw line extended, not in the corners.",
 d:"Catch at the free-throw line extended, never in the corner|First look: the middle flash|Second look: the long sideline pass ahead of the trap|Third look: back to the inbounder and swing|Attack the numbers advantage once it's broken",
 counters:"They deny the high catch: back cut to the corner, then step up|Safety stays deep: middle flash and drive",
 k:"Catch high, stay away from the corner|Pass before the trap closes|Attack 4 on 3 once it's broken",
 links:["Hit-Ahead Drill","4v3 Continuous"]},
 [F("Catch high at the FT line extended, not in the corner",[...OB(95.5,25,"I"),O(80,10,"1"),O(80,40,"2"),O(64,25,"4"),O(40,8,"5"),X(91,25),X(84,8),X(84,42),X(62,30),X(28,25),PS(94,24,81.5,11.5)],1),
  F("First look the middle flash, second look the long sideline",[...OB(80,10,"1"),O(95.5,25,"I"),O(80,40,"2"),O(64,25,"4"),O(40,8,"5"),X(84,12),X(82,6),M(64,27,70,24),PS(81,11.5,69,23),OP(80,8,42,6.5),T(70,46,"middle first · then long")],1)]);

add({n:"Beat the Run and Jump",sec:"break",type:"break",call:"HEADS UP",
 when:"Against run and jump or any switching man press.",
 s:"Dribbler attacks up the floor with eyes up.",
 d:"Dribble with your head up, see the jumper coming|Pass ahead to the player the jumper left open|Receiver attacks immediately while the defense rotates|Never pick up your dribble near the sideline",
 counters:"Defender jumps early: crossover away and go|They trap: pass out of it to the middle",
 k:"Eyes up, pass ahead|The open player is the one the jumper left",
 links:["Handle into Reads","Change of Pace (Hesi)"]},
 [F("Dribbler sees the jump coming",[...OB(82,8),X(84,11),O(60,20),X(62,17),D(80,8,66,7),M(62,15,62,8)],1),
  F("Pass ahead to the player the jumper left · attack",[O(66,7),B(67.6,8.6),X(62,8),O(60,20),PS(66,9,61,18.5),D(58,20,30,22),T(55,46,"Eyes up · pass ahead")],1)]);

// ============================== HALF-COURT SETS ==============================
add({n:"Flex Offense",sec:"halfcourt",type:"offense",call:"FLEX",
 when:"Half-court offense against man-to-man when you want patience, screens and layups off cuts. A continuity: the same two screens on every ball reversal.",
 s:"1 (ball) and 2 at the top · 4 on the right block · 3 low on the right side near the sideline · 5 low on the left side near the sideline.",
 d:"Three things happen at once on the first reversal: 1 passes to 2, 4 flex screens for 3, and 1 screens down for 4|3 flex cuts baseline, across the lane, to the left block. Hit him for the layup|4 comes off 1's down screen and pops to the top|3 is now on the left block and becomes the next flex screener|Other way, again all at once: 2 passes to 4, 3 flex screens for 5, 5 cuts to the right block|2 (the passer) screens down for 3, who comes up off the screen to the top|1 is low on the right: the next flex cutter. Keep reversing",
 counters:"Defender cheats over the flex screen: cutter goes over the top of the screen instead|They switch the flex screen: screener seals and posts up|Top denied on reversal: back door to the rim, or dribble at the wing for a hand-off|Down screen defender sags: screener slips to the rim",
 k:"Patience: reverse the ball, make the defense move|Flex cutter waits for the screen, then cuts tight, hand up|Screeners: still, wide base, arms in|Every pass: two screens, two options",
 links:["Screening Fundamentals","Pass & Screen Away","5-Out Screen Away","Backdoor Cuts"]},
 [F("Flex set: 1 (ball) and 2 at the top, 4 on the right block, 3 low on the right, 5 low on the left",[...OB(34,29,"1"),O(16,29,"2"),O(34.5,8,"4"),O(46,8,"3"),O(4,8,"5"),T(25,40,"FLEX")]),
  F("All at once: 1 reverses to 2 · 4 flex screens for 3, 3 cuts baseline across the lane to the left block · 1 screens down for 4, 4 pops to the top",[...OB(34,29,"1"),O(16,29,"2"),O(34.5,8,"4"),O(46,8,"3"),O(4,8,"5"),PS(32.5,29,17.5,29),S(36,8,41,8),M(45,10,36,11,24,9,15,8),S(33.5,27.4,38.5,11.5),M(43,10,44,20,39,27.5)]),
  F("Other way, all at once: 2 reverses to 4 · 3 flex screens for 5, 5 cuts to the right block · 2 screens down for 3, 3 comes up to the top",[...OB(16,29,"2"),O(34,28,"4"),O(46,8,"1"),O(15.5,8,"3"),O(4,8,"5"),PS(17.5,29,32.5,28.5),S(13.5,8,8.5,8),M(5,10,14,11,26,9,34,8),S(16.5,27.4,11.5,11.5),M(7.5,10,7,19,15,27.5),T(25,40,"Reverse · flex cut · pop · repeat")])]);

// ============================== INBOUNDS (aliases) ==============================
// Inbound Playbook (from the coach's artifact): 3 BLOB and 4 SLOB
add({n:"Box Cross (BLOB)",sec:"inbound",type:"inbound",call:"BOX CROSS",
 when:"Normal baseline inbound against man. Run this first. Beats: Man-to-man.",
 s:"Box shape. 1 inbounds on the right. 2 and 3 on the elbows. 4 and 5 on the blocks. Defence: Man-to-man. 4 and 5 sit between their player and the ring. 1 has hands up on the ball.",
 d:"Cross screen: 4 runs across the lane and sets the screen on 5. 5 waits. Defence: 5 holds position. 4 trails 4 across the lane.|Cut and space: 5 cuts over the screen to the ball-side block. 2 pops to the corner. 3 goes to the top as the safety. Defence: 5 is caught on the screen. 4 switches onto 5. 2 chases the corner and 3 drops to the top of the key.|Seal and read: 4 turns, seals 5 on his back and rolls to the ring. 1 reads 5, 4, 2, then 3. Defence: 5 fights around 4. The switch has left 4 busy, so 4 is often open here.|Score: 1 hits 5 for the layup, then steps in for the rebound. Defence: 1 turns and follows 1. 4 contests the shot.",
 k:"The screen comes first|5 waits for 4 to get there",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: Box shape. 1 inbounds on the right. 2 and 3 on the elbows. 4 and 5 on the blocks.",[...OB(33.5,-2.3,"1"),O(33.0,19.0,"2"),O(17.0,19.0,"3"),O(31.9,7.5,"4"),O(18.1,7.5,"5"),X(33.5,2.0,"1"),X(30.9,15.7,"2"),X(19.1,15.7,"3"),X(28.3,6.6,"4"),X(20.7,5.6,"5")]),
  F("Cross screen: 4 runs across the lane and sets the screen on X5. 5 waits.",[...OB(33.5,-2.3,"1"),O(33.0,19.0,"2"),O(17.0,19.0,"3"),O(31.9,7.5,"4"),O(18.1,7.5,"5"),X(33.5,2.0,"1"),X(30.9,15.7,"2"),X(19.1,15.7,"3"),X(28.3,6.6,"4"),X(20.7,5.6,"5"),S(30.9,7.5,24.2,7.5),M(28.0,7.6,27.0,11.2)]),
  F("Cut and space: 5 cuts over the screen to the ball-side block. 2 pops to the corner. 3 goes to the top as the safety.",[...OB(33.5,-2.3,"1"),O(33.0,19.0,"2"),O(17.0,19.0,"3"),O(24.2,7.5,"4"),O(18.1,7.5,"5"),X(33.5,2.0,"1"),X(30.9,15.7,"2"),X(19.1,15.7,"3"),X(27.0,11.2,"4"),X(20.7,5.6,"5"),M(18.9,8.1,24.3,12.8,31.2,7.5),M(33.6,18.2,45.3,3.3),M(17.8,19.6,25.0,24.9),M(28.0,11.0,28.6,10.8),M(31.7,15.1,42.1,6.6),M(19.9,16.3,25.3,20.7)]),
  F("Seal and read: 4 turns, seals X5 on his back and rolls to the ring. 1 reads 5, 4, 2, then 3.",[...OB(33.5,-2.3,"1"),O(45.3,3.3,"2"),O(25.0,24.9,"3"),O(24.2,7.5,"4"),O(31.2,7.5,"5"),X(33.5,2.0,"1"),X(42.1,6.6,"2"),X(25.3,20.7,"3"),X(28.6,10.8,"4"),X(20.7,5.6,"5"),M(24.2,8.5,24.0,11.5),M(20.5,6.6,20.1,8.9),OP(33.2,-1.0,31.5,6.2),OP(32.8,-1.2,24.7,10.4),OP(34.7,-1.7,44.1,2.7),OP(33.1,-1.1,25.4,23.7)]),
  F("Score: 1 hits 5 for the layup, then steps in for the rebound.",[...OB(33.5,-2.3,"1"),O(45.3,3.3,"2"),O(25.0,24.9,"3"),O(24.0,11.5,"4"),O(31.2,7.5,"5"),X(33.5,2.0,"1"),X(42.1,6.6,"2"),X(25.3,20.7,"3"),X(28.6,10.8,"4"),X(20.1,8.9,"5"),PS(33.2,-1.0,31.5,6.2),SH(31.2,7.0),M(34.0,-1.4,36.5,2.6),M(28.9,9.8,28.9,9.8),M(33.9,2.9,35.8,6.6)])]);
add({n:"Stack Burst (BLOB)",sec:"inbound",type:"inbound",call:"STACK BURST",
 when:"Defence is denying the entry, or you lead late and need a safe inbound. Beats: Man-to-man, denying hard.",
 s:"Four in a line at the ball-side elbow. 5 is closest to the ring, then 4, 2 and 1. 3 inbounds. Defence: O-players sit tight to the stack, on the side of their player that takes away the easy cut.",
 d:"Burst: 3 slaps the ball. 5 dives to the rim, 4 cuts to the far block, 2 runs to the ball-side corner, 1 goes to the top. Defence: All four defenders have to turn and chase at the same time.|Read: 3 reads 5, 2, 4, then 1. With a late lead the order is 1 first. Defence: 3 jumps the first passing lane. Help comes from 4 if 5 is open at the rim.|Score: 3 hits 5 at the rim. 3 steps in for the rebound. Defence: 5 recovers to contest. 3 follows 3 in.",
 k:"All four go on the one call|Late with a lead, 1 at the top becomes the first read, then he gets fouled or pulls it out",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: Four in a line at the ball-side elbow. 5 is closest to the ring, then 4, 2 and 1. 3 inbounds.",[O(33.0,26.9,"1"),O(33.0,23.0,"2"),...OB(33.5,-2.3,"3"),O(33.0,19.0,"4"),O(33.0,15.1,"5"),X(36.5,26.2,"1"),X(36.5,22.3,"2"),X(33.5,2.0,"3"),X(29.6,18.4,"4"),X(29.6,14.1,"5")]),
  F("Burst: 3 slaps the ball. 5 dives to the rim, 4 cuts to the far block, 2 runs to the ball-side corner, 1 goes to the top.",[O(33.0,26.9,"1"),O(33.0,23.0,"2"),...OB(33.5,-2.3,"3"),O(33.0,19.0,"4"),O(33.0,15.1,"5"),X(36.5,26.2,"1"),X(36.5,22.3,"2"),X(33.5,2.0,"3"),X(29.6,18.4,"4"),X(29.6,14.1,"5"),M(32.6,14.2,29.6,8.2),M(32.1,18.7,22.4,15.1,18.4,7.5),M(33.7,22.3,41.4,14.8,45.3,3.3),M(32.0,26.7,25.0,25.6),M(29.0,13.3,28.0,12.1),M(28.9,17.7,21.1,10.5),M(36.8,21.4,42.1,6.9),M(35.6,25.8,27.6,22.6)]),
  F("Read: 3 reads 5, 2, 4, then 1. With a late lead the order is 1 first.",[O(25.0,25.6,"1"),O(45.3,3.3,"2"),...OB(33.5,-2.3,"3"),O(18.4,7.5,"4"),O(29.6,8.2,"5"),X(27.6,22.6,"1"),X(42.1,6.9,"2"),X(33.5,2.0,"3"),X(21.1,10.5,"4"),X(28.0,12.1,"5"),OP(33.0,-1.1,30.1,7.0),OP(34.7,-1.7,44.1,2.7),OP(32.4,-1.6,19.5,6.8),OP(33.1,-1.1,25.4,24.4)]),
  F("Score: 3 hits 5 at the rim. 3 steps in for the rebound.",[O(25.0,25.6,"1"),O(45.3,3.3,"2"),...OB(33.5,-2.3,"3"),O(18.4,7.5,"4"),O(29.6,8.2,"5"),X(27.6,22.6,"1"),X(42.1,6.9,"2"),X(33.5,2.0,"3"),X(21.1,10.5,"4"),X(28.0,12.1,"5"),PS(33.0,-1.1,30.1,7.0),SH(29.6,7.7),M(34.0,-1.4,36.2,2.6),M(27.6,11.2,27.6,11.2),M(33.9,2.9,35.5,6.6)])]);
add({n:"Step-In (BLOB)",sec:"inbound",type:"inbound",call:"STEP-IN",
 when:"Baseline inbound against a zone, or any defence that turns its head to follow the ball. Beats: 2-3 zone, or ball-watching defenders.",
 s:"Your best finisher, 3, inbounds. Shooters 1 and 2 in the corners. 4 and 5 on the lane lines. Defence: 2-3 zone. 1 and 2 up top. 3, 5 and 4 across the back.",
 d:"Pass to the corner: 3 passes to 1 in the corner. Defence: The zone shifts. 4 runs at 1, 5 slides ball side, 2 drops to the wing and 3 tucks into the lane.|Seal and step in: 4 drops down and pins 5 off the baseline. 3 steps onto the court behind the zone. Defence: Every defender is facing the ball. Nobody sees 3 come in.|Return pass and score: 1 passes back along the baseline to 3 for the layup. If 5 gets there, 4 rolls to the ring. Defence: 5 is stuck behind 4. 4 is out in the corner and too far away.",
 k:"The inbounder is the scorer|Sell the corner pass, then step in straight away",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: Your best finisher, 3, inbounds. Shooters 1 and 2 in the corners. 4 and 5 on the lane lines.",[O(45.7,3.3,"1"),O(4.3,3.3,"2"),...OB(31.2,-2.3,"3"),O(33.9,12.5,"4"),O(16.1,12.5,"5"),X(19.8,19.7,"1"),X(30.2,19.7,"2"),X(14.8,7.9,"3"),X(35.2,7.9,"4"),X(25.0,9.5,"5")]),
  F("Pass to the corner: 3 passes to 1 in the corner.",[O(45.7,3.3,"1"),O(4.3,3.3,"2"),...OB(31.2,-2.3,"3"),O(33.9,12.5,"4"),O(16.1,12.5,"5"),X(19.8,19.7,"1"),X(30.2,19.7,"2"),X(14.8,7.9,"3"),X(35.2,7.9,"4"),X(25.0,9.5,"5"),PS(32.4,-1.8,44.5,2.8),M(36.2,7.7,41.7,6.6),M(26.0,9.5,30.2,9.5),M(31.1,19.2,36.8,15.7),M(15.7,8.3,19.4,9.8),M(20.8,19.5,26.0,18.4)]),
  F("Seal and step in: 4 drops down and pins X5 off the baseline. 3 steps onto the court behind the zone.",[...OB(45.7,3.3,"1"),O(4.3,3.3,"2"),O(31.2,-2.3,"3"),O(33.9,12.5,"4"),O(16.1,12.5,"5"),X(26.0,18.4,"1"),X(36.8,15.7,"2"),X(19.4,9.8,"3"),X(41.7,6.6,"4"),X(30.2,9.5,"5"),S(33.8,11.5,33.2,6.6),M(32.1,-2.0,34.8,-1.0,35.2,2.0)]),
  F("Return pass and score: 1 passes back along the baseline to 3 for the layup. If X5 gets there, 4 rolls to the ring.",[...OB(45.7,3.3,"1"),O(4.3,3.3,"2"),O(35.2,2.0,"3"),O(33.2,6.6,"4"),O(16.1,12.5,"5"),X(26.0,18.4,"1"),X(36.8,15.7,"2"),X(19.4,9.8,"3"),X(41.7,6.6,"4"),X(30.2,9.5,"5"),PS(44.4,3.1,36.5,2.2),SH(35.2,1.5),OP(44.4,3.6,34.5,6.3)])]);
add({n:"Line Get (SLOB)",sec:"inbound",type:"inbound",call:"LINE GET",
 when:"Sideline inbound under pressure, or 3 to 4 seconds gone on the count. Beats: Man-to-man pressure.",
 s:"Four in a line in front of the inbounder: 1, 5, 2, 4. 3 inbounds on the right sideline. Defence: Each defender sits on the ring side of their player. 3 is up on the ball.",
 d:"Break the line: 1 sprints to the ball. 5 goes long to the rim. 2 runs to the corner. 4 goes to the top. Defence: Defenders turn and chase. 1 tries to deny the pass back towards halfway.|Entry pass: 3 hits 1. Take 5 only if his defender lost him. 2 is the third look. Defence: 3 jumps at the pass with arms up. 1 closes out on the catch.|Into offence: 3 steps in to the wing. 1 swings the ball to 4 at the top and you flow into your offence. Defence: Defenders fall back to their players and the half-court game starts.",
 k:"Go on the call, all together|In the backcourt, use the same action to beat a press",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: Four in a line in front of the inbounder: 1, 5, 2, 4. 3 inbounds on the right sideline.",[O(42.1,31.2,"1"),O(34.2,31.2,"2"),...OB(50.9,31.2,"3"),O(30.2,31.2,"4"),O(38.1,31.2,"5"),X(42.1,27.6,"1"),X(34.2,27.6,"2"),X(47.6,31.2,"3"),X(30.2,27.6,"4"),X(38.1,27.6,"5")]),
  F("Break the line: 1 sprints to the ball. 5 goes long to the rim. 2 runs to the corner. 4 goes to the top.",[O(42.1,31.2,"1"),O(34.2,31.2,"2"),...OB(50.9,31.2,"3"),O(30.2,31.2,"4"),O(38.1,31.2,"5"),X(42.1,27.6,"1"),X(34.2,27.6,"2"),X(47.6,31.2,"3"),X(30.2,27.6,"4"),X(38.1,27.6,"5"),M(42.6,32.1,45.7,37.1),M(37.8,30.2,34.8,19.7,28.9,9.2),M(34.8,30.4,43.4,18.0,45.7,3.9),M(29.3,30.7,25.0,28.2),M(42.2,28.6,42.7,34.8),M(37.6,26.7,31.2,14.1),M(34.6,26.7,42.1,8.5),M(29.5,26.9,27.3,24.9)]),
  F("Entry pass: 3 hits 1. Take 5 only if his defender lost him. 2 is the third look.",[O(45.7,37.1,"1"),O(45.7,3.9,"2"),...OB(50.9,31.2,"3"),O(25.0,28.2,"4"),O(28.9,9.2,"5"),X(42.7,34.8,"1"),X(42.1,8.5,"2"),X(47.6,31.2,"3"),X(27.3,24.9,"4"),X(31.2,14.1,"5"),PS(50.0,32.2,46.6,36.1),OP(50.0,30.3,29.8,10.1),OP(50.7,29.9,45.9,5.2)]),
  F("Into offence: 3 steps in to the wing. 1 swings the ball to 4 at the top and you flow into your offence.",[...OB(45.7,37.1,"1"),O(45.7,3.9,"2"),O(50.9,31.2,"3"),O(25.0,28.2,"4"),O(28.9,9.2,"5"),X(42.7,34.8,"1"),X(42.1,8.5,"2"),X(47.6,31.2,"3"),X(27.3,24.9,"4"),X(31.2,14.1,"5"),M(50.2,30.5,42.1,23.0),PS(44.5,36.6,26.2,28.7),M(47.0,30.4,39.8,20.7)])]);
add({n:"Back Cut (SLOB)",sec:"inbound",type:"inbound",call:"BACK CUT",
 when:"You need a quick basket and the wing defender is overplaying the pass. Beats: Man-to-man, overplaying the wing.",
 s:"3 inbounds. 2 on the ball-side wing. 5 on the ball-side elbow. 1 up top. 4 opposite as the safety. Defence: 2 overplays the wing and sits in the passing lane. 3 is on the ball.",
 d:"Back screen: 2 calls for the ball to sell the catch. 5 comes up and sets the screen on 2 from behind. Defence: 2 is watching the ball and cannot see the screen. 5 trails 5.|Cut and pop: 2 cuts off 5’s shoulder to the rim. 5 pops back to the ball as the safe pass. Defence: 2 runs into the screen. 5 has to choose: help on 2 or stay with 5.|Read and score: 3 leads 2 to the rim with a bounce pass or lob. If 5 helps, 3 hits 5 and you flow into offence. Defence: 5 helping leaves 5 open. 1 and 4 stay home on the safety players.",
 k:"2 sells the catch first|5 popping to the ball is the safe option every time",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: 3 inbounds. 2 on the ball-side wing. 5 on the ball-side elbow. 1 up top. 4 opposite as the safety.",[O(25.0,27.6,"1"),O(41.4,21.0,"2"),...OB(50.9,19.7,"3"),O(9.3,23.0,"4"),O(33.0,19.0,"5"),X(26.6,24.3,"1"),X(44.4,18.4,"2"),X(48.0,23.3,"3"),X(12.2,20.3,"4"),X(31.6,15.7,"5")]),
  F("Back screen: 2 calls for the ball to sell the catch. 5 comes up and sets the screen on X2 from behind.",[O(25.0,27.6,"1"),O(41.4,21.0,"2"),...OB(50.9,19.7,"3"),O(9.3,23.0,"4"),O(33.0,19.0,"5"),X(26.6,24.3,"1"),X(44.4,18.4,"2"),X(48.0,23.3,"3"),X(12.2,20.3,"4"),X(31.6,15.7,"5"),S(33.9,18.6,40.4,15.4),M(32.5,15.3,37.1,13.5)]),
  F("Cut and pop: 2 cuts off 5’s shoulder to the rim. 5 pops back to the ball as the safe pass.",[O(25.0,27.6,"1"),O(41.4,21.0,"2"),...OB(50.9,19.7,"3"),O(9.3,23.0,"4"),O(40.4,15.4,"5"),X(26.6,24.3,"1"),X(44.4,18.4,"2"),X(48.0,23.3,"3"),X(12.2,20.3,"4"),X(37.1,13.5,"5"),M(40.7,20.3,37.1,16.4,28.9,8.9),M(40.8,16.3,43.4,22.3),M(36.2,13.2,33.2,12.1)]),
  F("Read and score: 3 leads 2 to the rim with a bounce pass or lob. If X5 helps, 3 hits 5 and you flow into offence.",[O(25.0,27.6,"1"),O(28.9,8.9,"2"),...OB(50.9,19.7,"3"),O(9.3,23.0,"4"),O(43.4,22.3,"5"),X(26.6,24.3,"1"),X(44.4,18.4,"2"),X(48.0,23.3,"3"),X(12.2,20.3,"4"),X(33.2,12.1,"5"),PS(49.7,19.1,30.1,9.5),SH(28.9,8.4),OP(49.7,20.1,44.6,21.9),OP(49.7,20.1,26.2,27.2)])]);
add({n:"Screen the Screener (SLOB)",sec:"inbound",type:"inbound",call:"SCREEN THE SCREENER",
 when:"You need a basket. Good after a timeout, once the defence has seen your other plays. Beats: Man-to-man.",
 s:"3 inbounds. 2 on the ball-side elbow. 4 on the far elbow. 5 on the far block. 1 at the top. Defence: Man-to-man. 2 sits ring side of 2, ready to jump out to the wing.",
 d:"First screen: 4 runs over the top of 2 and screens 2 on the sideline side. Defence: 4 trails 4 over the top.|To the wing: 2 runs off the screen to the wing. Defence: 2 is held up by 4. 4 stays high, looking at the ball. This is where they relax.|Entry and second screen: 3 passes to 2. 5 sprints across and screens 4. Defence: 4 is watching the pass and does not see 5 coming. 5 trails.|Dive: 4 dives to the rim off 5’s shoulder. 3 steps in to the wing below 2. Defence: 4 runs into 5. 5 is the only one who can help, and he is a step behind.|Score: 2 passes inside to 4 for the layup. If 5 helps, 5 is open at the elbow. Defence: 5 steps across to contest.",
 k:"The first screen is the decoy|Defenders relax after it, and that is when 5 arrives",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: 3 inbounds. 2 on the ball-side elbow. 4 on the far elbow. 5 on the far block. 1 at the top.",[O(25.0,27.6,"1"),O(33.0,19.0,"2"),...OB(50.9,24.6,"3"),O(17.0,19.0,"4"),O(18.1,7.5,"5"),X(26.3,24.0,"1"),X(33.9,15.4,"2"),X(47.6,27.6,"3"),X(19.1,15.7,"4"),X(21.1,5.9,"5")]),
  F("First screen: 4 runs over the top of 2 and screens X2 on the sideline side.",[O(25.0,27.6,"1"),O(33.0,19.0,"2"),...OB(50.9,24.6,"3"),O(17.0,19.0,"4"),O(18.1,7.5,"5"),X(26.3,24.0,"1"),X(33.9,15.4,"2"),X(47.6,27.6,"3"),X(19.1,15.7,"4"),X(21.1,5.9,"5"),S(18.0,19.3,31.2,23.6,37.1,16.4),M(19.9,16.2,27.0,20.7,33.5,22.5)]),
  F("To the wing: 2 runs off the screen to the wing.",[O(25.0,27.6,"1"),O(33.0,19.0,"2"),...OB(50.9,24.6,"3"),O(37.1,16.4,"4"),O(18.1,7.5,"5"),X(26.3,24.0,"1"),X(33.9,15.4,"2"),X(47.6,27.6,"3"),X(33.5,22.5,"4"),X(21.1,5.9,"5"),M(34.0,19.3,37.1,20.3,42.1,24.0)]),
  F("Entry and second screen: 3 passes to 2. 5 sprints across and screens X4.",[O(25.0,27.6,"1"),O(42.1,24.0,"2"),...OB(50.9,24.6,"3"),O(37.1,16.4,"4"),O(18.1,7.5,"5"),X(26.3,24.0,"1"),X(33.9,15.4,"2"),X(47.6,27.6,"3"),X(33.5,22.5,"4"),X(21.1,5.9,"5"),PS(49.6,24.5,43.4,24.1),S(18.9,8.1,26.3,14.4,33.9,18.0),M(21.6,6.7,24.3,10.8,28.9,15.1),M(34.8,15.0,39.8,13.1,40.1,20.0)]),
  F("Dive: 4 dives to the rim off 5’s shoulder. 3 steps in to the wing below 2.",[O(25.0,27.6,"1"),...OB(42.1,24.0,"2"),O(50.9,24.6,"3"),O(37.1,16.4,"4"),O(33.9,18.0,"5"),X(26.3,24.0,"1"),X(40.1,20.0,"2"),X(47.6,27.6,"3"),X(33.5,22.5,"4"),X(28.9,15.1,"5"),M(36.8,15.5,35.5,12.1,28.9,9.2),M(50.5,23.7,46.7,16.1),M(47.2,26.7,44.0,19.0)]),
  F("Score: 2 passes inside to 4 for the layup. If X5 helps, 5 is open at the elbow.",[O(25.0,27.6,"1"),...OB(42.1,24.0,"2"),O(46.7,16.1,"3"),O(28.9,9.2,"4"),O(33.9,18.0,"5"),X(26.3,24.0,"1"),X(40.1,20.0,"2"),X(44.0,19.0,"3"),X(33.5,22.5,"4"),X(28.9,15.1,"5"),PS(41.2,23.0,29.8,10.2),SH(28.9,8.7),OP(41.1,23.2,34.9,18.8),M(28.6,14.1,28.3,13.1)])]);
add({n:"Clear (SLOB)",sec:"inbound",type:"inbound",call:"CLEAR",
 when:"Final shot with a few seconds left. Beats: Man-to-man.",
 s:"1 is your best decision-maker. 3 inbounds. 2, 4 and 5 start on the far side. Defence: Man-to-man. 1 is working to deny 1 the ball.",
 d:"Get open and clear: 1 cuts hard to the ball. 2, 4 and 5 clear to the far side. Defence: 1 chases. The other defenders follow their players, which takes help away.|Entry and safety: 3 hits 1 and steps in behind him as the safety. Defence: 1 stays between 1 and the ring. 3 drops off 3 to help.|Attack: 1 attacks the cleared side with the dribble. Defence: 1 slides with him. 5 is the only help and has to leave 5 to come across.|Finish or kick: 1 takes the layup. If 5 is there, he drops it to 5 or kicks to 2. Defence: 5 meets 1 at the rim. 2 stays on 2 in the corner.",
 k:"Simple on purpose|Back your best decision-maker, and start the drive with enough time to get a shot up",
 links:["Screening Fundamentals","Cutting Series: 6 Cuts"]},
 [F("Set up: 1 is your best decision-maker. 3 inbounds. 2, 4 and 5 start on the far side.",[O(36.8,28.2,"1"),O(17.0,19.0,"2"),...OB(50.9,32.8,"3"),O(19.8,27.6,"4"),O(18.1,7.5,"5"),X(38.8,25.3,"1"),X(19.1,15.7,"2"),X(47.6,36.4,"3"),X(21.7,24.3,"4"),X(21.1,5.9,"5")]),
  F("Get open and clear: 1 cuts hard to the ball. 2, 4 and 5 clear to the far side.",[O(36.8,28.2,"1"),O(17.0,19.0,"2"),...OB(50.9,32.8,"3"),O(19.8,27.6,"4"),O(18.1,7.5,"5"),X(38.8,25.3,"1"),X(19.1,15.7,"2"),X(47.6,36.4,"3"),X(21.7,24.3,"4"),X(21.1,5.9,"5"),M(37.6,28.7,43.4,32.5),M(16.4,18.2,4.3,3.9),M(18.9,27.2,7.9,22.3),M(17.4,8.3,16.1,9.8),M(39.2,26.2,40.7,29.5),M(18.3,15.1,7.6,6.6),M(20.8,23.9,10.6,20.0),M(20.5,6.7,19.4,7.9)]),
  F("Entry and safety: 3 hits 1 and steps in behind him as the safety.",[O(43.4,32.5,"1"),O(4.3,3.9,"2"),...OB(50.9,32.8,"3"),O(7.9,22.3,"4"),O(16.1,9.8,"5"),X(40.7,29.5,"1"),X(7.6,6.6,"2"),X(47.6,36.4,"3"),X(10.6,20.0,"4"),X(19.4,7.9,"5"),PS(49.6,32.7,44.7,32.6),M(50.0,33.2,40.1,38.1),M(46.6,36.2,37.8,34.5)]),
  F("Attack: 1 attacks the cleared side with the dribble.",[...OB(43.4,32.5,"1"),O(4.3,3.9,"2"),O(40.1,38.1,"3"),O(7.9,22.3,"4"),O(16.1,9.8,"5"),X(40.7,29.5,"1"),X(7.6,6.6,"2"),X(37.8,34.5,"3"),X(10.6,20.0,"4"),X(19.4,7.9,"5"),D(43.0,31.6,37.8,20.7,29.9,9.8),M(40.3,28.6,35.5,19.0,28.0,13.8),M(20.4,8.1,25.0,9.2)]),
  F("Finish or kick: 1 takes the layup. If X5 is there, he drops it to 5 or kicks to 2.",[...OB(29.9,9.8,"1"),O(4.3,3.9,"2"),O(40.1,38.1,"3"),O(7.9,22.3,"4"),O(16.1,9.8,"5"),X(28.0,13.8,"1"),X(7.6,6.6,"2"),X(37.8,34.5,"3"),X(10.6,20.0,"4"),X(25.0,9.2,"5"),SH(29.9,9.3),OP(28.6,9.8,17.4,9.8),OP(28.6,9.5,5.6,4.2)])]);
PB.push({n:"Ghost (Spectres SLOB)",sec:"inbound",alias:true},{n:"Graveyard (Spectres BLOB)",sec:"inbound",alias:true});

// links to drills for half-court sets etc.
window.PLAYBOOK_LINKS={
  halfcourt:["5-Out Motion","5-Out Screen Away","5-Out Hand-Off","Horns Set & Counters","Pick & Roll Reads vs Coverage","Dribble Hand-off Series","Zone Offense vs 2-3","Late-Game Situations"],
  inbound:[],
  break:["Press Break"],
  press:["2-2-1 Press Trap Reads"]
};
window.PLAYBOOK=PB;
})();
