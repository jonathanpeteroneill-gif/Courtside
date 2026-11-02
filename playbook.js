// Playbook: Spectres plays (from the coach's training sheets), full-court presses, press breaks, links to set plays.
// Full court diagrams: offense inbounds from the RIGHT baseline (x≈95) and attacks the LEFT basket.
// Backcourt FT line x=75, halfway x=47. Half court: basket at top (25,5.25).
(function(){
const O=(x,y,l="")=>["o",x,y,l], X=(x,y,l="")=>["x",x,y,l], B=(x,y)=>["b",x,y], OB=(x,y,l="")=>[O(x,y,l),B(x+1.6,y+1.6)];
const M=(...p)=>["m",p], D=(...p)=>["d",p], PS=(...p)=>["p",p], S=(...p)=>["s",p], SH=(x,y)=>["sh",[x,y]], T=(x,y,t)=>["t",x,y,t], L2=(a,b,c,d)=>["L2",a,b,c,d];
const F=(c,e,full)=>({c,e,full:!!full});
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
  situations:[["Made basket","Inbound vs their press: run DRAGON"],["Sideline out","Run GHOST"],["Baseline out","Run BOX"],["Half court","5-Out motion vs man-to-man"],["Our defence","1-3-1 in the backcourt, MATCH at halfway, then man-to-man"]],
  calls:["DRAGON RIGHT","DRAGON LEFT","GHOST","BOX","TRAP","BALL","MATCH"],
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
  F("Ball crosses halfway: call MATCH, pick up the nearest, then find your own",[...OB(42,40),O(40,10),O(30,25),O(20,12),O(20,38),X(44,37),X(42,12),X(32,23),X(22,14),X(22,36),L2(47,0,47,50),T(70,25,"MATCH!")],1)]);

add({n:"Dragon (Spectres press break)",sec:"spectres",type:"break",call:"DRAGON RIGHT · DRAGON LEFT",
 when:"Every made basket when they press. Works against zone presses that trap (1-3-1, 2-2-1, 1-2-1-1).",
 s:"2 inbounds · 1 and 3 stack at the free-throw line · 4 and 5 just over halfway on each sideline.",
 d:"On the call the stack splits: 1 breaks one way, 3 breaks the other and meets the pass|Inbounder steps in and sprints up the middle as the safety valve|Trapped? Pivot, protect the ball, pass back to the inbounder. Never dribble into the corner|No trap? Dribble hard up the sideline and hit the big at halfway|Give and go: cut straight to the rim, the big hands it back for the layup|Big covered? Look to the inbounder in the middle",
 counters:"They deny the stack: inbounder fakes, stack players go hard to the ball, never drift away|They trap the catch: pass back to the inbounder and reverse|They take away the sideline: hit the inbounder sprinting the middle",
 k:"Meet the pass, don't wait for it|Pass out of the trap, never dribble into the corner|Inbounder sprints the middle every time",
 links:["Pass & Follow Square","Get Open vs Denial","Give & Go"]},
 [F("Setup: 2 inbounds, 1 and 3 stack at the FT line, 4 and 5 just over halfway on each sideline",[...OB(95.5,25,"2"),O(75,23,"1"),O(75,27,"3"),O(44,4,"4"),O(44,46,"5"),L2(47,0,47,50),T(66,48,"DRAGON RIGHT · DRAGON LEFT")],1),
  F("On the call the stack splits: 1 breaks one way, 3 breaks the other and meets the pass",[O(95.5,25,"2"),B(97.1,26.6),O(75,23,"1"),O(75,27,"3"),O(44,4,"4"),O(44,46,"5"),M(75,21,82,8),M(75,29,82,41),PS(94,26.5,81,40)],1),
  F("Inbounder steps in and sprints up the middle as the safety valve",[O(95.5,25,"2"),O(82,42,"3"),B(83.6,43.6),O(82,8,"1"),O(44,4,"4"),O(44,46,"5"),M(94,25,80,25,64,25)],1),
  F("Trapped? Pivot, protect it, pass back to the inbounder in the middle. Never dribble into the corner",[O(82,42,"3"),B(83.6,43.6),X(86,45),X(79,46.5),O(64,25,"2"),O(82,8,"1"),O(44,4,"4"),O(44,46,"5"),PS(81,40.5,65.5,26.5),T(84,36,"TRAP")],1),
  F("No trap? Dribble hard up the sideline and hit the big at halfway",[...OB(82,42,"3"),O(64,25,"2"),O(82,8,"1"),O(44,4,"4"),O(44,46,"5"),D(80,42,58,43),PS(57,43,45.5,45.5)],1),
  F("Give and go: cut straight to the rim, the big hands it back for the layup",[O(57,43,"3"),O(44,46,"5"),B(45.6,47.6),O(64,25,"2"),M(55,42,32,36,10,27),PS(43,45,12,28.5),SH(9,26)],1),
  F("Big covered? Look to the inbounder in the middle",[...OB(57,43,"3"),O(44,46,"5"),X(43,43),O(62,25,"2"),PS(56,41.5,60.5,26.5),D(60,25,32,25)],1)]);

add({n:"Ghost (Spectres SLOB)",sec:"spectres",type:"inbound",call:"GHOST",
 when:"Every sideline out of bounds in the frontcourt.",
 s:"Big at the ball-side elbow · guard on the ball-side block · 3rd player on the weak-side wing · 4th at the top as the safety.",
 d:"On the slap: the big sets a down screen on the guard's defender|The guard waits for it, then comes off shoulder to shoulder to the ball|The screener is the 2nd option: after the screen he seals his man and steps to the rim. If they switch, he's open|The safety drifts toward the ball if both are covered. Weak-side wing holds|Inbounder reads: guard, screener, safety. Counts to 5 out loud. Bounce or chest pass only, no lobs|After the catch: straight into 5-Out spots",
 counters:"They switch the screen: hit the screener stepping to the rim|They top-lock the guard: guard goes backdoor to the rim|Everyone denied: the safety comes to the ball",
 k:"Screen: still, wide base, arms in|Wait for the screen, then come off shoulder to shoulder|Inbounder counts to 5 out loud, no lobs",
 links:["Pass & Screen Away","5-Out Screen Away","Get Open vs Denial"]},
 [F("Setup: big at the ball-side elbow, guard on the ball-side block, weak-side wing, safety at the top",[...OB(51.5,24,"I"),O(33,19,"5"),O(34,8,"1"),O(8,22,"3"),O(25,30,"4"),T(25,42,"GHOST")]),
  F("On the slap: the big down screens for the guard · guard waits, then comes off to the ball",[O(51.5,24,"I"),B(53.1,25.6),O(33,19,"5"),O(34,8,"1"),O(8,22,"3"),O(25,30,"4"),S(33,17.5,33.5,10.5),M(35.5,8.5,38,14,42,20)]),
  F("Screener seals and steps to the rim · safety drifts toward the ball",[O(51.5,24,"I"),B(53.1,25.6),O(33.5,11,"5"),O(42,20,"1"),O(8,22,"3"),O(25,30,"4"),M(32.5,9.5,28,6),M(27,30,34,29)]),
  F("Inbounder reads: guard, screener, safety · bounce or chest, then into 5-Out spots",[O(51.5,24,"I"),B(53.1,25.6),O(28,6,"5"),O(42,20,"1"),O(8,22,"3"),O(34,29,"4"),PS(50,23.5,43.5,21),T(25,42,"Count to 5 out loud")])]);

add({n:"Box (Spectres BLOB)",sec:"spectres",type:"inbound",call:"BOX",
 when:"Every baseline out of bounds under our basket.",
 s:"Box around the key: big at the ball-side elbow · guard on the ball-side block · guard at the weak-side elbow · big on the weak-side block.",
 d:"On the slap: the big down screens for the guard on the block|The guard waits, then pops to the ball-side corner for a safe catch|The screener seals his man and steps to the rim. Wide open? Hit him for the layup|The weak-side elbow guard runs to the top as the safety. The weak-side big holds and seals|Inbounder reads: corner (safe), screener at the rim, safety at the top. Counts to 5. No lobs|After the catch: inbounder steps in, straight into 5-Out spots",
 counters:"They switch: the screener is open at the rim|They deny the corner: the safety at the top|Weak-side big sealed with his man behind him: quick bounce pass",
 k:"Wait for the screen|Screener: seal and step to the rim|No lobs, count to 5",
 links:["Inbounds Play: Box","Pass & Screen Away"]},
 [F("Setup: box around the key",[...OB(36,-2,"I"),O(33,19,"5"),O(33,8,"2"),O(17,19,"1"),O(17,8,"4"),T(25,40,"BOX")]),
  F("On the slap: the big down screens · the guard pops to the ball-side corner",[O(36,-2,"I"),B(37.6,-0.4),O(33,19,"5"),O(33,8,"2"),O(17,19,"1"),O(17,8,"4"),S(33,17.5,33,10.5),M(34.5,8,40,5,46,4)]),
  F("Screener seals and steps to the rim · weak elbow guard runs to the top as the safety",[O(36,-2,"I"),B(37.6,-0.4),O(33,11,"5"),O(46,4,"2"),O(17,19,"1"),O(17,8,"4"),M(32,9.5,28,5.5),M(18,20.5,25,29)]),
  F("Inbounder reads: corner (safe), screener, safety · then everyone into 5-Out spots",[O(36,-2,"I"),B(37.6,-0.4),O(28,5.5,"5"),O(46,4,"2"),O(25,29,"1"),O(17,8,"4"),PS(37.5,-0.5,44.5,3.5),T(25,40,"Count to 5 · no lobs")])]);

add({n:"Shell vs 5-Out (Spectres rules)",sec:"spectres",type:"defense",call:"BALL · HELP · SCREEN",
 when:"Our half-court man-to-man once the ball crosses halfway.",
 s:"Offense in 5-Out spots (top, two wings, two corners). Split line = imaginary line down the middle, basket to basket.",
 d:"On ball: arm's distance, stance, force to the sideline|One pass away: deny, hand in the passing lane|Two or more passes away: foot on the split line, see man and ball (pistols)|Ball at top: wing defenders deny, corner defenders sink to help|Ball on the wing: top and ball-side corner deny, weak wing on the split line, weak corner is the low man|Everyone moves while the ball is in the air|Cutter: bump the cut, stay between your player and the ball|Drive: help stops it, everyone rotates, recover",
 counters:"Progression: pass only, then pass and cut, then drives, then live",
 k:"Move while the ball is in the air|Talk tax: BALL, HELP, SCREEN or it costs a point|Freeze and check spots",
 links:["Shell Drill","Shell Drill: Rotations","Help & Recover 2v2","Closeouts"]},
 [F("Ball at the top: wings deny, corners sink to help",[...OB(25,30,"1"),O(8,22,"2"),O(42,22,"3"),O(3,4,"4"),O(47,4,"5"),X(25,26.5),X(11,20),X(39,20),X(10,9),X(40,9),L2(25,0,25,47)]),
  F("Ball on the wing: top and ball-side corner deny, weak wing on the split line, weak corner is the low man",[O(25,30,"1"),...OB(42,22,"3"),O(8,22,"2"),O(3,4,"4"),O(47,4,"5"),PS(26.5,29,40.5,23),X(39.5,19.5),X(30,27),X(44,7),X(24,16),X(21,7),M(25,26.5,30,27),M(11,20,24,16),M(10,9,21,7),M(40,9,44,7),L2(25,0,25,47)])]);

// ============================== FULL-COURT PRESSES ==============================
add({n:"2-2-1 Zone Press",sec:"press",type:"press",call:"2-2-1",
 when:"To slow a team down and make them use clock, protect a lead, or when your players aren't the quickest. Safe: it gives up the first pass but never the layup.",
 s:"Two at the free-throw line extended, two at halfway, one deep safety.",
 d:"Front two let the inbound pass happen, then force the ball to the sideline|After the first pass: front defender and wing trap the sideline|The other front defender takes the middle, the weak wing takes the long middle pass|Safety stays deep, protects the rim, steals the lob|Ball reversed: back off and reset, trap again on the next sideline catch",
 counters:"Their middle flash beats it: weak wing must jump the middle|Long diagonal pass: safety reads the passer's eyes",
 k:"No layups: the safety never leaves the paint area|Trap with chest and feet, hands high|Rotate on the pass, not the catch",
 links:["2-2-1 Press Trap Reads","Defensive Transition: Tag-Up & Load"]},
 [F("Setup: two at the FT line extended, two at halfway, one deep",[...OB(95.5,25,"I"),O(82,10),O(82,40),O(64,25),O(30,25),X(78,17),X(78,33),X(58,12),X(58,38),X(26,25,"S")],1),
  F("First pass to the side: front defender and wing trap, everyone shifts",[O(95.5,25,"I"),...OB(84,7),O(82,40),O(64,25),O(30,25),PS(94,24,85,8.5),M(78,15,83,10.5),M(58,10,78,5),M(78,31,70,21),M(58,36,57,24),M(26,23,34,15),T(70,46,"Safety stays deep")],1)]);

add({n:"1-2-1-1 Diamond Press",sec:"press",type:"press",call:"DIAMOND",
 when:"When you're behind and need turnovers fast, or the other team has one weak ball handler. Aggressive: traps the first catch but can give up layups.",
 s:"Point on the inbounder · two wings at the free-throw line extended near the sidelines · middle near halfway · safety deep.",
 d:"Point pressures the inbounder, take away the middle pass|First catch near the corner: point and wing trap immediately|Middle defender denies the sideline pass up the floor|Weak wing sprints to the middle to steal the pass out of the trap|Safety stays deep and reads the long pass",
 counters:"They catch high (not in the corner): wing still traps, middle denies the flash|They break it: everyone sprints back, no fouling",
 k:"Trap the first catch, every time|Turn the trapped player toward the sideline|Sprint back the moment it's broken",
 links:["2-2-1 Press Trap Reads","Defensive Transition: Tag-Up & Load"]},
 [F("Setup: point on the inbounder, wings at the FT line extended, middle, safety deep",[...OB(95.5,25,"I"),O(84,8),O(84,42),O(64,25),O(30,25),X(91,25,"P"),X(80,10),X(80,40),X(62,30),X(28,25,"S")],1),
  F("First catch near the corner: TRAP · middle denies the sideline · weak wing takes the middle",[O(95.5,25,"I"),...OB(88,6),O(84,42),O(64,25),O(30,25),PS(94,24,89,8),M(91,23,90,11),M(80,8,85,4.5),M(62,28,72,9),M(80,38,71,24),M(28,23,32,16),T(84,16,"TRAP!")],1)]);

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
PB.push({n:"Dragon (Spectres press break)",sec:"break",alias:true});

add({n:"1-4 Flat vs Man Press",sec:"break",type:"break",call:"FLAT",
 when:"Against man-to-man full-court denial. Spreads the floor so your best ball handler can catch and beat their player 1v1.",
 s:"Inbounder on the baseline · four players across the free-throw line extended.",
 d:"Inside two set screens out for the wings|Wings curl hard to the ball and meet the pass|Screeners sprint long down the floor|Best ball handler catches, faces up and attacks 1v1|Everyone else clears ahead so the middle is open",
 counters:"Both wings denied: screener slips back to the ball|Made basket: the inbounder can run the baseline|They switch the screens: hit the screener going long",
 k:"Sprint to meet the pass|Clear out for the ball handler|Inbounder steps in as the safety",
 links:["Get Open vs Denial","Pass & Screen Away","Gauntlet"]},
 [F("Setup: four across the FT line extended",[...OB(95.5,25,"I"),O(75,5,"2"),O(75,18,"1"),O(75,32,"4"),O(75,45,"3"),X(77,6.5),X(77,19.5),X(77,33.5),X(77,43.5)],1),
  F("Inside two screen out for the wings · wings curl to the ball · screeners sprint long",[O(95.5,25,"I"),B(97.1,26.6),O(75,5,"2"),O(75,18,"1"),O(75,32,"4"),O(75,45,"3"),X(77,6.5),X(77,19.5),X(77,33.5),X(77,43.5),S(76,16.5,77,8.5),S(76,33.5,77,41.5),M(73,5,80,11,86,16),M(73,45,80,39,86,34),M(74,19.5,40,16),M(74,30.5,40,34),PS(94,24,87,17)],1),
  F("Catch, face up, attack 1v1 · everyone clears ahead",[...OB(86,16,"2"),X(84,18),O(40,16,"1"),O(40,34,"4"),O(86,34,"3"),O(92,25,"I"),D(84,17,56,22,40,24),M(86,32,60,40)],1)]);

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
  F("First look the middle flash, second look the long sideline",[...OB(80,10,"1"),O(95.5,25,"I"),O(80,40,"2"),O(64,25,"4"),O(40,8,"5"),X(84,12),X(82,6),M(64,27,70,24),PS(81,11.5,69,23),PS(80,8,42,6.5),T(70,46,"middle first · then long")],1)]);

add({n:"Beat the Run and Jump",sec:"break",type:"break",call:"HEADS UP",
 when:"Against run and jump or any switching man press.",
 s:"Dribbler attacks up the floor with eyes up.",
 d:"Dribble with your head up, see the jumper coming|Pass ahead to the player the jumper left open|Receiver attacks immediately while the defense rotates|Never pick up your dribble near the sideline",
 counters:"Defender jumps early: crossover away and go|They trap: pass out of it to the middle",
 k:"Eyes up, pass ahead|The open player is the one the jumper left",
 links:["Handle into Reads","Change of Pace (Hesi)"]},
 [F("Dribbler sees the jump coming",[...OB(82,8),X(84,11),O(60,20),X(62,17),D(80,8,66,7),M(62,15,62,8)],1),
  F("Pass ahead to the player the jumper left · attack",[O(66,7),B(67.6,8.6),X(62,8),O(60,20),PS(66,9,61,18.5),D(58,20,30,22),T(55,46,"Eyes up · pass ahead")],1)]);

// ============================== INBOUNDS (aliases) ==============================
PB.push({n:"Ghost (Spectres SLOB)",sec:"inbound",alias:true},{n:"Box (Spectres BLOB)",sec:"inbound",alias:true});

// links to drills for half-court sets etc.
window.PLAYBOOK_LINKS={
  halfcourt:["5-Out Motion","5-Out Screen Away","5-Out Hand-Off","Horns Set & Counters","Pick & Roll Reads vs Coverage","Dribble Hand-off Series","Zone Offense vs 2-3","Late-Game Situations"],
  inbound:["Inbounds Play: Box"],
  break:["Press Break"],
  press:["2-2-1 Press Trap Reads"]
};
window.PLAYBOOK=PB;
})();
