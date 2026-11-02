// Animated move demos (workout-app style). A stick figure driven by joint angles.
// Angles in degrees: 0 = limb hangs straight down, 90 = points forward (side view) / to the right (front view), 180 = straight up.
// Pose: t torso lean (+ = forward), la/ra arms [upper, forearm], ll/rl legs [thigh, shin], y lift off floor, x shift,
// f floor height (standing on a box), b balls [[spec, z]], r rope (-1 over head … 1 under feet).
(function(){
const SIDE="side", FRONT="front";
const mir=p=>({...p,la:p.ra,ra:p.la,ll:p.rl,rl:p.ll});
const flipX=p=>({...p,la:p.ra.map(a=>-a),ra:p.la.map(a=>-a),ll:p.rl.map(a=>-a),rl:p.ll.map(a=>-a),x:-(p.x||0)});
const S=(o)=>Object.assign({t:0,la:[0,0],ra:[0,0],ll:[0,0],rl:[0,0],y:0,x:0,f:0},o);
// ---------- poses ----------
const runA=S({t:12,ll:[-30,-75],rl:[60,5],la:[45,130],ra:[-40,40],y:2});
const jogA=S({t:5,ll:[-20,-55],rl:[35,0],la:[30,110],ra:[-30,50],y:1});
const hkA=S({ll:[0,0],rl:[95,0],la:[35,125],ra:[-35,50],y:1});
const bkA=S({ll:[0,0],rl:[-8,-165],la:[30,115],ra:[-30,60],y:1});
const stanceF=S({ll:[-28,-6],rl:[28,6],la:[-55,-100],ra:[55,100]});
const squatF=S({ll:[-30,-5],rl:[30,5],la:[-30,-60],ra:[30,60]});
const tripleS=S({t:25,ll:[-18,-30],rl:[30,-8],la:[40,110],ra:[30,80]});
const M={
// ---- locomotion / warm-up (side view, facing right)
sprint:{v:SIDE,ms:170,dir:3,k:[runA,mir(runA)],cue:"Drive the arms, lean forward"},
jog:{v:SIDE,ms:260,dir:1.4,k:[jogA,mir(jogA)],cue:"Easy pace, relaxed shoulders"},
highKnees:{v:SIDE,ms:200,dir:.8,k:[hkA,mir(hkA)],cue:"Knees to hip height, stay on your toes"},
buttKicks:{v:SIDE,ms:200,dir:.8,k:[bkA,mir(bkA)],cue:"Heels to your butt, quick turnover"},
aSkip:{v:SIDE,ms:300,dir:1,k:[S({ll:[0,0],rl:[90,0],la:[45,140],ra:[-40,40],y:5}),S({ll:[0,0],rl:[0,0],la:[0,30],ra:[0,30]}),S({rl:[0,0],ll:[90,0],ra:[45,140],la:[-40,40],y:5}),S({})],cue:"Knee up, toe up, punch the ground"},
bSkip:{v:SIDE,ms:260,dir:1,k:[S({rl:[90,0],la:[40,130],ra:[-35,45],y:4}),S({rl:[85,80],la:[40,130],ra:[-35,45],y:4}),S({rl:[0,0]}),S({ll:[90,0],ra:[40,130],la:[-35,45],y:4}),S({ll:[85,80],ra:[40,130],la:[-35,45],y:4}),S({ll:[0,0]})],cue:"Knee up, kick out, paw it back"},
backpedal:{v:SIDE,ms:220,dir:-1.2,k:[S({t:18,ll:[25,-20],rl:[-25,-35],la:[30,90],ra:[-10,60]}),S({t:18,rl:[25,-20],ll:[-25,-35],ra:[30,90],la:[-10,60]})],cue:"Chest over toes, reach back with each step"},
lunge:{v:SIDE,ms:550,dir:.6,k:[S({la:[50,100],ra:[50,100]}),S({rl:[75,0],ll:[-12,-95],la:[60,95],ra:[60,95]}),S({la:[50,100],ra:[50,100]}),S({ll:[75,0],rl:[-12,-95],la:[60,95],ra:[60,95]})],cue:"Back knee kisses the floor, twist over the front leg"},
karaoke:{v:FRONT,ms:220,dir:1,k:[S({ll:[-12,-12],rl:[12,12],la:[-75,-90],ra:[75,90]}),S({ll:[22,15],rl:[8,8],la:[-75,-90],ra:[75,90]}),S({ll:[-12,-12],rl:[12,12],la:[-75,-90],ra:[75,90]}),S({ll:[18,10],rl:[10,10],la:[-75,-90],ra:[75,90],back:1})],cue:"Hips turn, trail leg crosses front then back"},
slide:{v:FRONT,ms:240,dir:1.1,k:[S({...stanceF}),S({...stanceF,rl:[48,22],ll:[-22,0]}),S({...stanceF,rl:[30,8],ll:[-18,2]})],cue:"Stay low, push off the trail foot, never cross your feet"},
stance:{v:FRONT,ms:500,k:[S({...stanceF}),S({...stanceF,ll:[-30,-4],rl:[30,4],y:1.5})],cue:"Butt down, chest up, hands active"},
closeout:{v:SIDE,ms:200,dir:2,k:[runA,mir(runA),S({t:15,ll:[-15,-30],rl:[25,-5],ra:[170,178],la:[30,70],y:1}),S({t:15,ll:[-10,-25],rl:[20,-10],ra:[170,178],la:[30,70]})],cue:"Sprint, then short choppy steps, high hand"},
jumpingJack:{v:FRONT,ms:300,k:[S({}),S({ll:[-22,-22],rl:[22,22],la:[-165,-172],ra:[165,172],y:3})],cue:"Arms all the way up, land soft"},
pogo:{v:FRONT,ms:180,k:[S({la:[-15,40],ra:[15,-40]}),S({la:[-15,40],ra:[15,-40],y:6})],cue:"Stiff ankles, bounce off the floor fast"},
fastFeet:{v:FRONT,ms:110,k:[S({...stanceF,ll:[-25,-25]}),S({...stanceF,rl:[25,25]})],cue:"Tiny quick steps, stay low"},
inOut:{v:FRONT,ms:180,k:[S({ll:[-6,-6],rl:[6,6],la:[-15,40],ra:[15,-40],y:1}),S({ll:[-24,-20],rl:[24,20],la:[-15,40],ra:[15,-40],y:1})],cue:"Two in, two out, light feet"},
jumpStop:{v:SIDE,ms:230,dir:1.4,k:[jogA,mir(jogA),S({t:10,ll:[10,-10],rl:[20,-5],la:[40,130],ra:[40,130],y:4}),S({t:22,ll:[30,-25],rl:[40,-20],la:[60,150],ra:[60,150],b:[["ch",1]]}),S({t:22,ll:[30,-25],rl:[40,-20],la:[60,150],ra:[60,150],b:[["ch",1]]})],cue:"Land on both feet at once, ball chinned"},
legSwings:{v:SIDE,ms:420,k:[S({rl:[55,55],la:[90,90],ra:[0,0]}),S({rl:[-35,-35],la:[90,90],ra:[0,0]})],cue:"Loose leg, swing through the full range"},
armCircles:{v:SIDE,ms:220,k:[0,60,120,180,240,300,360].map(a=>S({la:[a,a],ra:[a+180,a+180]})),cue:"Big circles, both directions"},
// ---- mobility / stretches
bandWalk:{v:FRONT,ms:320,dir:.6,band:1,k:[S({...squatF}),S({...squatF,rl:[42,15]}),S({...squatF,ll:[-20,0],rl:[32,6]})],cue:"Knees out against the band, small steps"},
hipAirplane:{v:SIDE,ms:900,k:[S({la:[80,90],ra:[80,90]}),S({t:80,ll:[0,0],rl:[-85,-88],la:[150,160],ra:[30,40]})],cue:"Hinge on one leg, open the hips"},
worldsGreatest:{v:SIDE,ms:900,k:[S({t:45,rl:[80,5],ll:[-55,-70],la:[35,25],ra:[35,25]}),S({t:45,rl:[80,5],ll:[-55,-70],la:[35,25],ra:[175,180]})],cue:"Deep lunge, elbow to instep, reach to the sky"},
hamstring:{v:SIDE,ms:1200,k:[S({t:45,rl:[28,28],ll:[-5,-15],la:[70,60],ra:[70,60]}),S({t:55,rl:[28,28],ll:[-5,-15],la:[75,65],ra:[75,65]})],cue:"Heel down, toe up, hinge at the hips"},
quad:{v:SIDE,ms:1200,k:[S({ll:[0,0],rl:[-5,-170],ra:[-25,-160],la:[80,90]}),S({ll:[0,0],rl:[-12,-172],ra:[-30,-162],la:[80,90]})],cue:"Knees together, hips forward"},
calf:{v:SIDE,ms:1200,k:[S({t:20,rl:[25,-5],ll:[-28,-28],la:[85,90],ra:[85,90]}),S({t:25,rl:[30,-10],ll:[-30,-30],la:[85,90],ra:[85,90]})],cue:"Back heel down, lean into it"},
// ---- jump rope (front)
ropeTwo:{v:FRONT,ms:220,k:[S({la:[-12,-50],ra:[12,50],r:-1}),S({la:[-12,-50],ra:[12,50],y:5,r:1})],cue:"Two feet, small jumps, wrists turn the rope"},
ropeAlt:{v:FRONT,ms:200,k:[S({la:[-12,-50],ra:[12,50],rl:[10,-60],r:-1}),S({la:[-12,-50],ra:[12,50],y:3,r:1}),S({la:[-12,-50],ra:[12,50],ll:[-10,60],r:-1}),S({la:[-12,-50],ra:[12,50],y:3,r:1})],cue:"Run in place over the rope"},
ropeSide:{v:FRONT,ms:220,k:[S({la:[-12,-50],ra:[12,50],x:-4,r:-1}),S({la:[-12,-50],ra:[12,50],x:0,y:5,r:1}),S({la:[-12,-50],ra:[12,50],x:4,r:-1}),S({la:[-12,-50],ra:[12,50],x:0,y:5,r:1})],cue:"Hop side to side, feet together"},
ropeSingle:{v:FRONT,ms:220,k:[S({la:[-12,-50],ra:[12,50],ll:[-8,-120],r:-1}),S({la:[-12,-50],ra:[12,50],ll:[-8,-120],y:5,r:1})],cue:"One leg, stay balanced"},
// ---- plyometrics
boxJump:{v:SIDE,ms:380,box:[8,26,14],k:[S({x:-14,la:[0,10],ra:[0,10]}),S({x:-14,t:35,ll:[35,-25],rl:[35,-25],la:[-50,-40],ra:[-50,-40]}),S({x:-4,y:22,ll:[70,-10],rl:[70,-10],la:[160,170],ra:[160,170]}),S({x:16,f:14,t:30,ll:[40,-25],rl:[40,-25],la:[70,80],ra:[70,80]}),S({x:16,f:14})],cue:"Swing the arms, land soft and quiet on the box"},
depthJump:{v:SIDE,ms:360,box:[-26,-8,14],k:[S({x:-16,f:14}),S({x:-6,y:4,f:14,rl:[40,10]}),S({x:2,t:35,ll:[40,-25],rl:[40,-25],la:[-40,-30],ra:[-40,-30]}),S({x:2,y:16,la:[165,172],ra:[165,172]}),S({x:2})],cue:"Step off, hit the ground and explode straight up"},
broadJump:{v:SIDE,ms:380,dir:0,k:[S({x:-16,t:40,ll:[35,-25],rl:[35,-25],la:[-60,-50],ra:[-60,-50]}),S({x:0,y:12,ll:[60,-20],rl:[60,-20],la:[150,160],ra:[150,160],t:10}),S({x:16,t:40,ll:[45,-20],rl:[45,-20],la:[80,90],ra:[80,90]}),S({x:16})],cue:"Arms back, jump out as far as you can, stick it"},
lateralBound:{v:FRONT,ms:340,k:[S({x:-14,ll:[-10,-15],rl:[-25,-110],la:[-30,20],ra:[40,80]}),S({x:0,y:8,ll:[10,10],rl:[10,10]}),S({x:14,rl:[10,15],ll:[25,110],ra:[30,-20],la:[-40,-80]}),S({x:0,y:8})],cue:"Push off one leg, stick the landing on the other"},
// ---- ball skills (front view unless noted)
pound:{v:FRONT,ms:180,k:[S({...stanceF,ra:[30,60],la:[-50,-100],b:[["rh",1]]}),S({...stanceF,ra:[35,15],la:[-50,-100],b:[[[9,-3],1]]})],cue:"Pound it hard, eyes up"},
crossover:{v:FRONT,ms:200,k:[S({...stanceF,ra:[30,40],la:[-30,-40],b:[["rh",1]]}),S({...stanceF,ra:[20,-10],la:[-30,-40],b:[[[0,-3],1]]}),S({...stanceF,ra:[30,40],la:[-30,-40],b:[["lh",1]]}),S({...stanceF,la:[-20,10],ra:[30,40],b:[[[0,-3],1]]})],cue:"Low and quick, below the knee"},
betweenLegs:{v:FRONT,ms:220,k:[S({ll:[-34,-10],rl:[34,10],ra:[30,40],la:[-30,-40],b:[["rh",1]]}),S({ll:[-34,-10],rl:[34,10],ra:[20,0],la:[-30,-40],b:[[[0,-2.5],-1]]}),S({ll:[-34,-10],rl:[34,10],ra:[30,40],la:[-30,-40],b:[["lh",1]]}),S({ll:[-34,-10],rl:[34,10],la:[-20,0],ra:[30,40],b:[[[0,-2.5],-1]]})],cue:"Wide stance, ball through the legs"},
behindBack:{v:FRONT,ms:240,k:[S({...stanceF,ra:[30,40],la:[-30,-40],b:[["rh",1]]}),S({...stanceF,ra:[10,-20],la:[-30,-40],b:[[[0,-6],-1]]}),S({...stanceF,ra:[30,40],la:[-30,-40],b:[["lh",1]]}),S({...stanceF,la:[-10,20],ra:[30,40],b:[[[0,-6],-1]]})],cue:"Wrap it around your back, catch it out front"},
wraps:{v:FRONT,ms:220,k:[S({la:[-20,40],ra:[20,-40],b:[[[9,-42],1]]}),S({la:[-10,60],ra:[10,-60],b:[[[0,-40],1]]}),S({la:[-20,40],ra:[20,-40],b:[[[-9,-42],1]]}),S({la:[-30,20],ra:[30,-20],b:[[[0,-44],-1]]})],cue:"Fingertips, around the waist, both directions"},
spider:{v:FRONT,ms:150,k:[S({ll:[-28,-12],rl:[28,12],t:0,ra:[15,10],la:[-15,-10],b:[[[0,-3],1]]}),S({ll:[-28,-12],rl:[28,12],ra:[10,0],la:[-10,0],b:[[[0,-1.5],1]]})],cue:"Front-front, back-back, quick taps"},
twoBall:{v:FRONT,ms:180,k:[S({...stanceF,ra:[30,60],la:[-30,-60],b:[["rh",1],["lh",1]]}),S({...stanceF,ra:[35,15],la:[-35,-15],b:[[[10,-3],1],[[-10,-3],1]]})],cue:"Weak hand sets the pace"},
slaps:{v:FRONT,ms:180,k:[S({la:[-40,40],ra:[40,-40],b:[["rh",1]]}),S({la:[-60,10],ra:[60,-10],b:[[[3,-46],1]]})],cue:"Slap the ball hard, both hands"},
jab:{v:SIDE,ms:380,k:[S({...tripleS,b:[["rh",1]]}),S({...tripleS,rl:[50,15],b:[["rh",1]]}),S({...tripleS,b:[["rh",1]]})],cue:"Ball on the hip, short sharp jab, stay balanced"},
bumpEuro:{v:SIDE,ms:340,dir:1,k:[S({...jogA,b:[["ch",1]]}),S({t:15,rl:[50,5],ll:[-25,-40],la:[55,140],ra:[55,140],b:[["ch",1]]}),S({t:-5,rl:[35,0],ll:[-20,-30],la:[60,150],ra:[40,110],b:[["ch",1]]}),S({t:10,ll:[45,0],rl:[-15,-45],la:[60,150],ra:[60,150],b:[["ch",1]]}),S({rl:[95,0],ll:[0,0],ra:[168,176],la:[120,160],y:7,b:[["rh",1]]})],cue:"Plant, bump with the shoulder, step across, finish high"},
shoot:{v:SIDE,ms:300,k:[S({ll:[25,-15],rl:[30,-15],ra:[40,160],la:[50,150],b:[["rh",1]]}),S({ra:[160,175],la:[150,170],y:2,b:[["rh",1]]}),S({ra:[165,205],la:[150,165],y:2,b:[[[16,-78],1]]}),S({ra:[160,205],la:[140,150],b:[[[26,-82],1]]})],cue:"Legs, elbow under, hold the follow-through"}
};
window.MOVES=M;
// ---------- drill → move list (move key, seconds) ----------
const L=(...a)=>a.map(x=>Array.isArray(x)?{k:x[0],s:x[1],n:x[2]}:{k:x,s:30});
window.DRILL_MOVES={
"Dynamic Line Warm-up":L(["highKnees",30,"High knees"],["buttKicks",30,"Butt kicks"],["karaoke",30,"Karaoke"],["lunge",30,"Walking lunge + twist"],["backpedal",30,"Backpedal"],["slide",30,"Defensive slides"]),
"Movement Prep & Activation":L(["bandWalk",40,"Band walks"],["hipAirplane",40,"Hip airplanes"],["worldsGreatest",40,"World's greatest stretch"],["aSkip",30,"A-skips"],["bSkip",30,"B-skips"],["karaoke",30,"Carioca"],["pogo",30,"Pogo jumps"],["sprint",20,"Build-up sprints"]),
"Jump Rope Footwork":L(["ropeTwo",30,"Two feet"],["ropeAlt",30,"Alternating feet"],["ropeSide",30,"Side to side"],["ropeSingle",30,"Single leg"],["ropeTwo",30,"Fast feet"]),
"Fast Feet & Sprints":L(["fastFeet",10,"Fast feet"],["sprint",10,"Sprint"],["fastFeet",10,"Fast feet"],["sprint",10,"Sprint"]),
"Jog & Stretch Circle":L(["jog",60,"Easy laps"],["armCircles",30,"Arm circles"],["legSwings",30,"Leg swings"],["worldsGreatest",40,"Hip opener"]),
"Ball Slaps & Wraps":L(["slaps",20,"Ball slaps"],["wraps",30,"Waist wraps"],["betweenLegs",30,"Figure 8 through the legs"]),
"Stationary Pound Series":L(["pound",40,"Pound dribble"],["crossover",30,"Crossovers"],["betweenLegs",30,"Between the legs"],["behindBack",30,"Behind the back"]),
"Two-Ball Dribbling":L(["twoBall",40,"Two-ball pound"]),
"Spider Dribble":L(["spider",30,"Spider dribble"]),
"Elite Combo Series":L(["crossover",30,"Snatchback into crossover"],["betweenLegs",30,"In-and-out into between"],["behindBack",30,"Between, behind, explode"],["pound",30,"Shift into crossover"]),
"Blind Dribble":L(["pound",20,"Eyes closed, right hand"],["pound",20,"Eyes closed, left hand"],["crossover",20,"Eyes closed crossovers"]),
"Dribble Simon Says":L(["pound",20,"Right hand"],["crossover",20,"Crossover"]),
"Tennis Ball Toss Dribble":L(["pound",30,"Dribble while tossing"]),
"Defensive Slides":L(["slide",30,"Slide"],["stance",15,"Rest in stance"],["slide",30,"Slide"]),
"Defensive Slide Ladder":L(["slide",30,"Slide"],["stance",15,"Rest"],["slide",30,"Slide"],["stance",15,"Rest"],["slide",30,"Slide"]),
"Minute Drills":L(["slide",30,"Slides"],["sprint",30,"Sprints"],["stance",30,"Rest"]),
"Mass Defensive Stance":L(["stance",20,"Stance"],["slide",20,"Slide on the point"],["closeout",15,"Close out"],["backpedal",15,"Drop"]),
"Defensive Wave":L(["stance",15,"Stance"],["slide",20,"Slide"],["closeout",15,"Closeout"]),
"Closeouts":L(["closeout",30,"Sprint, chop, high hand"]),
"Jump Stop & Pivot":L(["jumpStop",30,"Jog and jump stop"]),
"Sprint & Stop":L(["sprint",10,"Sprint"],["jumpStop",10,"Stop"]),
"Agility Ladder":L(["fastFeet",20,"Two feet in each box"],["inOut",20,"In and out"],["slide",20,"Lateral shuffle"],["inOut",20,"Ickey shuffle"]),
"Triple Threat Series":L(["jab",30,"Jab step"]),
"Shot Prep Footwork":L(["jab",30,"Jab series"]),
"Plyometric Circuit":L(["boxJump",40,"Box jumps"],["lateralBound",40,"Lateral bounds"],["depthJump",40,"Depth jumps"],["broadJump",40,"Broad jumps"]),
"Line Sprints":L(["sprint",30,"Line sprints"]),
"17s":L(["sprint",60,"Sideline to sideline"]),
"Partner Chase":L(["sprint",15,"Chase"]),
"Static Stretch & Huddle":L(["hamstring",20,"Hamstring, right"],["hamstring",20,"Hamstring, left"],["quad",20,"Quad"],["calf",20,"Calf"]),
"Bump Euro Finish":L(["bumpEuro",30,"Bump euro, right side"],["bumpEuro",30,"Bump euro, left side"]),
"Form Shooting":L(["shoot",30,"Form shot"]),
"Free Throw Routine Builder":L(["shoot",30,"Routine + shot"])
};
// ---------- rendering ----------
const rad=a=>a*Math.PI/180, sin=a=>Math.sin(rad(a)), cos=a=>Math.cos(rad(a));
const GROUND=92, ease=x=>0.5-0.5*Math.cos(Math.PI*x);
const lerp=(a,b,u)=>a+(b-a)*u, lv=(a,b,u)=>a.map((v,i)=>lerp(v,b[i],u));
function solve(p,view){
  const P=[0,0], up=[sin(p.t),-cos(p.t)];
  const at=(o,d,l)=>[o[0]+d[0]*l,o[1]+d[1]*l];
  const neck=at(P,up,24), head=at(P,up,30.5), sh=at(P,up,21);
  const fw=view===FRONT;
  const shL=fw?[sh[0]-6,sh[1]]:sh, shR=fw?[sh[0]+6,sh[1]]:sh, hpL=fw?[-4,0]:[0,0], hpR=fw?[4,0]:[0,0];
  const limb=(o,a,L1,L2)=>{const e=[o[0]+L1*sin(a[0]),o[1]+L1*cos(a[0])];return[o,e,[e[0]+L2*sin(a[1]),e[1]+L2*cos(a[1])]]};
  const la=limb(shL,p.la,13,12), ra=limb(shR,p.ra,13,12), ll=limb(hpL,p.ll,17,17), rl=limb(hpR,p.rl,17,17);
  const fL=fw?[ll[2][0]-3,ll[2][1]]:[ll[2][0]+5,ll[2][1]], fR=fw?[rl[2][0]+3,rl[2][1]]:[rl[2][0]+5,rl[2][1]];
  const low=Math.max(ll[2][1],rl[2][1]);
  const dx=50+(p.x||0), dy=GROUND-(p.f||0)-(p.y||0)-low;
  const T=q=>[q[0]+dx,q[1]+dy];
  return {P:T(P),neck:T(neck),head:T(head),la:la.map(T),ra:ra.map(T),ll:ll.map(T),rl:rl.map(T),fL:T(fL),fR:T(fR),dx,dy};
}
function ballPos(spec,s,p){
  if(spec==="rh") return [s.ra[2][0],s.ra[2][1]+3.2];
  if(spec==="lh") return [s.la[2][0],s.la[2][1]+3.2];
  if(spec==="ch") return [(s.la[2][0]+s.ra[2][0])/2+2,(s.la[2][1]+s.ra[2][1])/2];
  return [50+(p.x||0)+spec[0],GROUND+spec[1]];
}
function poseAt(m,time){
  const n=m.k.length, ph=(time/m.ms)%n, i=Math.floor(ph), u=ease(ph-i);
  const A=m.k[i], Bk=m.k[(i+1)%n];
  const p={t:lerp(A.t,Bk.t,u),la:lv(A.la,Bk.la,u),ra:lv(A.ra,Bk.ra,u),ll:lv(A.ll,Bk.ll,u),rl:lv(A.rl,Bk.rl,u),y:lerp(A.y||0,Bk.y||0,u),x:lerp(A.x||0,Bk.x||0,u),f:lerp(A.f||0,Bk.f||0,u),r:lerp(A.r||0,Bk.r||0,u)};
  const s=solve(p,m.v);
  let balls=[];
  if(A.b||Bk.b){const bA=A.b||Bk.b,bB=Bk.b||A.b;
    const sA=solve(A,m.v),sB=solve(Bk,m.v);
    balls=bA.map((b,j)=>{const b2=bB[j]||b;const same=b[0]===b2[0]&&typeof b[0]==="string";
      const pos=same?ballPos(b[0],s,p):lv(ballPos(b[0],sA,A),ballPos(b2[0],sB,Bk),u);
      return {pos,z:u<.5?b[1]:b2[1]}});}
  return {p,s,balls,back:u<.5?A.back:Bk.back};
}
const line=(a,b)=>`M${a[0].toFixed(1)},${a[1].toFixed(1)}L${b[0].toFixed(1)},${b[1].toFixed(1)}`;
const limbPath=l=>`M${l[0][0].toFixed(1)},${l[0][1].toFixed(1)}L${l[1][0].toFixed(1)},${l[1][1].toFixed(1)}L${l[2][0].toFixed(1)},${l[2][1].toFixed(1)}`;
function frameSVG(m,time){
  const {s,balls,p,back}=poseAt(m,time);
  let g="";
  // ground + motion ticks
  g+=`<line class="mv-ground" x1="4" y1="${GROUND+0.8}" x2="96" y2="${GROUND+0.8}"/>`;
  if(m.dir){const off=((time/1000)*m.dir*14)%10;for(let x=-10;x<=110;x+=10){const xx=x-off; if(xx>4&&xx<96) g+=`<line class="mv-tick" x1="${xx.toFixed(1)}" y1="${GROUND+3}" x2="${(xx-3).toFixed(1)}" y2="${GROUND+3}"/>`}}
  if(m.box){const [a,b,h]=m.box;g+=`<rect class="mv-box" x="${50+a}" y="${GROUND-h}" width="${b-a}" height="${h}" rx="1"/>`}
  balls.filter(b=>b.z<0).forEach(b=>g+=`<circle class="mv-ball back" cx="${b.pos[0].toFixed(1)}" cy="${b.pos[1].toFixed(1)}" r="3"/>`);
  const far=m.v===SIDE?"far":"";
  g+=`<path class="mv-limb ${far}" d="${limbPath(s.la)}"/><path class="mv-limb ${far} ${back?"far":""}" d="${limbPath(s.ll)}${line(s.ll[2],s.fL).replace("M"," M")}"/>`;
  g+=`<path class="mv-limb body" d="${line(s.P,s.neck)}"/><circle class="mv-head" cx="${s.head[0].toFixed(1)}" cy="${s.head[1].toFixed(1)}" r="5.5"/>`;
  g+=`<path class="mv-limb" d="${limbPath(s.rl)}${line(s.rl[2],s.fR).replace("M"," M")}"/><path class="mv-limb" d="${limbPath(s.ra)}"/>`;
  if(m.band) g+=`<path class="mv-band" d="${line(s.ll[1],s.rl[1])}"/>`;
  if(p.r){const top=s.head[1]-9, bot=Math.max(s.ll[2][1],s.rl[2][1])+4, cy=lerp(top,bot,(p.r+1)/2), cx=(s.la[2][0]+s.ra[2][0])/2;
    g+=`<path class="mv-rope" d="M${s.la[2][0].toFixed(1)},${s.la[2][1].toFixed(1)} Q${cx.toFixed(1)},${(2*cy-(s.la[2][1]+s.ra[2][1])/2).toFixed(1)} ${s.ra[2][0].toFixed(1)},${s.ra[2][1].toFixed(1)}"/>`}
  balls.filter(b=>b.z>=0).forEach(b=>g+=`<circle class="mv-ball" cx="${b.pos[0].toFixed(1)}" cy="${b.pos[1].toFixed(1)}" r="3.3"/>`);
  return g;
}
window._frameSVG=frameSVG;
window.moveSVG=(key,cls="")=>`<svg class="mv ${cls}" viewBox="0 0 100 100" data-move="${key}" role="img" aria-label="Animated demo">${frameSVG(M[key],0)}</svg>`;
// one animation loop for every demo on screen
const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
let start=performance.now();
function tick(now){
  if(!document.hidden){document.querySelectorAll("svg.mv[data-move]").forEach(el=>{
    const r=el.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight||r.width===0) return;
    const m=M[el.dataset.move]; if(m) el.innerHTML=frameSVG(m,reduce?0:now-start);
  })}
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
})();
