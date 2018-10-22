const burst = new mojs.Burst({
  radius: {0 : 360},
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    angle: {360:0},
    radius:{30 : 5},
    duriation: 3000
  }
});
const timeline = new mojs.Timeline({
  repeat: 999
}).add(burst);

const html = new mojs.Html({
  el: '#animation1',
  burst
}).play();
