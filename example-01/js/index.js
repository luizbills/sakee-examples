var stats = new Stats();
document.body.appendChild(stats.domElement);

createBall();

function createBall() {
  var newEntityID = sakee.entity.create(['position', 'velocity', 'radius', 'color']);

  // get entity components
  var position = sakee.entity.getComponent(newEntityID, 'position');
  var velocity = sakee.entity.getComponent(newEntityID, 'velocity');
  var radius = sakee.entity.getComponent(newEntityID, 'radius');

  // set position (middle of canvas)
  position.x = canvas.width / 2;
  position.y = canvas.height / 2;

  // set velocity (100 pixels/second)
  velocity.x = Math.random() * 150;
  velocity.y = Math.random() * 150;

  // set radius
  radius.value = 32;
}

// start game loop
window.timer = new Timer({
  update: function() {
    sakee.system.emit('update');
  },

  render: function() {
    stats.begin();
    sakee.system.emit('render');
    stats.end();
  }
});
