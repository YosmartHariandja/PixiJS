let app = new PIXI.Application({
  width: 800,
  height: 600,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xAAAAAA,
});

document.body.appendChild(app.view);

PIXI.loader
  .add("images/cat.png")
  .load(setup);

function setup() {

  let center = new PIXI.Circle(app.view.width / 2, app.view.height / 2);

  //cat objects
  let cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
  // cat.anchor.set(0.5);
  // cat.x = app.view.width / 2;
  // cat.y = app.view.height / 2;
  cat.position.set(center.x, center.y);
  // cat.width = 80;
  // cat.height = 120;
  // cat.scale.x = 0.5;
  // cat.scale.y = 0.5;
  cat.scale.set(1);
  cat.rotation = 0 * Math.PI / 180;
  cat.pivot.set(32);

  let dot = new PIXI.Graphics();
  dot.beginFill(0x000000);
  dot.drawCircle(0, 0, 5);
  dot.endFill();
  dot.position.set(app.view.width / 2, app.view.height / 2);
  
  app.stage.addChild(cat);
  app.stage.addChild(dot);

}