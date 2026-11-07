// Structured plays: players, spots, and per-phase actions (type, from/to, timing).
// Each spec is turned into playbook frames for the diagram + animation engine, so new plays only need data.
//
// Format
//   players: { "1": {at:[x,y], ball:true, role:"PG"}, ... }   half court: x 0-50, y 0-47, basket (25,5.25)
//   phases:  [{ title, note, actions:[ ... ] }]               positions carry over from phase to phase
//   action types
//     cut|run    {p, to:[[x,y],...], at?, dur?}               solid line + arrow, player moves
//     dribble    {p, to:[[x,y],...], at?, dur?}               zigzag line, player moves with the ball
//     screen     {p, to:[x,y], at?, dur?}                     solid line ending in a bar (T), screener moves to the spot
//     pass       {from, to, at?}                              dashed line, ball travels
//     read       {from, to, label?}                           dashed option line (drawn, not played)
//     shot       {p, at?}
//     label      {at:[x,y], text}
//     seal       {p}                                          "SEAL" marker at the player
(function(){
  const SPECS = window.PLAY_SPECS = window.PLAY_SPECS || [];

  SPECS.push({
    n: "Pistol – PnR to High-Low", sec: "halfcourt", type: "offense", call: "PISTOL",
    when: "Early offence off a push, or any time you want a ball screen on the wing. Three reads in one action: the roller, the kick-out, then the high-low.",
    s: "1 (PG) pushes up the right side with the ball. 2 in the right corner, 5 at the right block/elbow, 3 in the left corner, 4 on the left wing.",
    k: "1 pitches it ahead early, then fills the corner|5 sprints to the screen, sets it on 2's defender, then rolls hard to the rim|2 comes off the screen shoulder to shoulder, eyes on the roller first|4 lifts to the slot as the ball is kicked, catch ready|5 steps across and seals low on the left block: hands up, big target|3 stays spaced in the left corner the whole time",
    counters: "They switch the ball screen: 5 seals the smaller defender and rolls|Help comes from the left side: 2 kicks to 4, or skips to 3 in the corner|They front the post on the high-low: 4 swings to 3 and 5 seals again",
    links: ["Pick & Roll Basics","Pick & Roll Reads vs Coverage","High-Low Entry 2v2","Post Seal & Duck-in"],
    players: { "1": {at:[33,40], ball:true, role:"PG"}, "2": {at:[46,4]}, "5": {at:[35,16]}, "3": {at:[4,4]}, "4": {at:[6,23]} },
    phases: [
      { title: "Pitch", note: "1 dribbles to the right wing · 2 cuts up from the corner · 5 steps up to the screening spot · 1 pitches it to 2",
        actions: [
          {type:"dribble", p:"1", to:[[40,31]], at:0, dur:1.8},
          {type:"cut", p:"2", to:[[44,21]], at:0, dur:1.8},
          {type:"cut", p:"5", to:[[41,28]], at:0.3, dur:1.6},
          {type:"pass", from:"1", to:"2", at:1.9} ] },
      { title: "Pick and roll", note: "5 sets a ball screen on 2's defender · 2 dribbles off it to the middle · 5 rolls hard to the rim · 1 fills the right corner · READ 1: hit the roller",
        actions: [
          {type:"screen", p:"5", to:[42,24], at:0, dur:0.8},
          {type:"dribble", p:"2", to:[[38,23],[31,25]], at:0.9, dur:1.5},
          {type:"cut", p:"5", to:[[35,15],[29,7]], at:1.0, dur:1.5},
          {type:"cut", p:"1", to:[[46,18],[46,4]], at:0.6, dur:1.9},
          {type:"read", from:"2", to:"5", label:"Option 1: hit the roller"} ] },
      { title: "Kick out", note: "5 is covered: 2 kicks it to 4 · 4 lifts from the wing to the left slot as the pass arrives · READ 2",
        actions: [
          {type:"cut", p:"4", to:[[13,30]], at:0, dur:1.2},
          {type:"pass", from:"2", to:"4", at:0.8},
          {type:"label", at:[17,36.5], text:"Option 2: kick to 4"} ] },
      { title: "High-low", note: "5 steps across and seals on the left block · 4 passes down to 5 · READ 3 · 3 stays spaced in the left corner",
        actions: [
          {type:"cut", p:"5", to:[[23,8],[17,10]], at:0, dur:1.2},
          {type:"seal", p:"5"},
          {type:"pass", from:"4", to:"5", at:1.3},
          {type:"shot", p:"5", at:2.1},
          {type:"label", at:[10,16], text:"Option 3: high-low"} ] }
    ]
  });

  // ---------- spec → frames ----------
  const off = (a,b,k)=>{const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1;return [+(a[0]+dx/L*k).toFixed(1),+(a[1]+dy/L*k).toFixed(1)]};
  const flatPts = pts => pts.reduce((o,p)=>o.concat(p),[]);
  function toFrames(spec){
    const pos={}, frames=[]; let ball=null;
    for(const [k,v] of Object.entries(spec.players)){pos[k]=v.at.slice();if(v.ball)ball=k}
    spec.phases.forEach((ph,pi)=>{
      const els=[];
      for(const [k,p] of Object.entries(pos)){els.push(["o",p[0],p[1],k]);if(k===ball)els.push(["b",p[0]+1.6,p[1]+1.6])}
      // where each player ends this phase (passes go to where the receiver is going)
      const end={};for(const k in pos)end[k]=pos[k];
      ph.actions.forEach(a=>{if(a.p&&a.to&&["cut","run","dribble","screen"].includes(a.type))end[a.p]=Array.isArray(a.to[0])?a.to[a.to.length-1]:a.to});
      const cur={};for(const k in pos)cur[k]=pos[k].slice();
      ph.actions.forEach(a=>{
        const tm=(a.at!=null||a.dur!=null)?{...(a.at!=null?{at:a.at}:{}),...(a.dur!=null?{dur:a.dur}:{})}:null;
        const T=e=>tm?[...e,tm]:e;
        if(a.type==="cut"||a.type==="run"||a.type==="dribble"){
          const pts=a.to;const s0=off(cur[a.p],pts[0],1.4);
          els.push(T([a.type==="dribble"?"d":"m",flatPts([s0,...pts])]));cur[a.p]=pts[pts.length-1].slice();
        }else if(a.type==="screen"){
          const s0=off(cur[a.p],a.to,1.4);els.push(T(["s",[...s0,...a.to]]));cur[a.p]=a.to.slice();
        }else if(a.type==="pass"||a.type==="read"){
          const from=cur[a.from],to=end[a.to];const s0=off(from,to,1.6),e0=off(to,from,1.6);
          els.push(a.type==="pass"?T(["p",[...s0,...e0]]):["op",[...s0,...e0]]);
          if(a.type==="pass")ball=a.to;
          if(a.label){const mx=(s0[0]+e0[0])/2,my=(s0[1]+e0[1])/2;els.push(["t",mx,my-2.2,a.label])}
        }else if(a.type==="shot"){els.push(T(["sh",[cur[a.p][0],cur[a.p][1]-0.8]]))}
        else if(a.type==="label"){els.push(["t",a.at[0],a.at[1],a.text])}
        else if(a.type==="seal"){const p=end[a.p];els.push(["t",p[0]-5,p[1],"SEAL"])}
      });
      for(const k in end)pos[k]=end[k].slice();
      frames.push({c:`${pi+1}. ${ph.title}: ${ph.note}`,e:els,full:!!spec.full});
    });
    return frames;
  }
  window.PLAYS = window.PLAYS || {};
  window.PLAYBOOK = window.PLAYBOOK || [];
  window.specToFrames = toFrames;
  SPECS.forEach(spec=>{
    window.PLAYS[spec.n]=toFrames(spec);
    if(!window.PLAYBOOK.some(p=>p.n===spec.n)){
      window.PLAYBOOK.push({n:spec.n,sec:spec.sec,type:spec.type,call:spec.call,when:spec.when,s:spec.s,
        d:spec.phases.map(ph=>`${ph.title}: ${ph.note}`).join("|"),counters:spec.counters||"",k:spec.k||"",links:spec.links||[]});
    }
  });
})();
