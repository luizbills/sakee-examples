var stats = new Stats();
document.body.appendChild(stats.domElement);

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 32) addEntity(random(1,16));
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var total = 0;
function addEntity(radius) {
  var newEntityID = sakee.entity.create(['Position', 'Velocity', 'Diameter']),
    px = random(radius, canvas.width - radius),
    py = random(radius, canvas.height - radius),
    vx = random(-3, 3),
    vy = random(-3, 3);

  var position = sakee.entity.getComponent(newEntityID, 'Position');
  var velocity = sakee.entity.getComponent(newEntityID, 'Velocity');
  var diameter = sakee.entity.getComponent(newEntityID, 'Diameter');

  // set position
  position.x = px;
  position.y = py;

  // set velocity
  velocity.x = vx;
  velocity.y = vy;

  // set diameter
  diameter.value = radius * 2;

  console.log(++total);
}

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
