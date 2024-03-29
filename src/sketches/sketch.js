export default function sketch(p) {
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(800, 800);
    p.noStroke();
  };

  p.draw = () => {
    p.background('lightblue');
    p.ellipse(150, 100, 100, 100);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = newProps => {
    if (canvas)
      //Make sure the canvas has been created
      p.fill(newProps.color);
  };
}
