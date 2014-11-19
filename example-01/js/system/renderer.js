var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var TWO_PI = Math.PI * 2;

canvas.width = canvas.height = 300;

sakee.system.set('renderer', {
  filter: {
    position: true,
    radius: true,
    color: true
  },

  events: {
    'render system': function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    'render entity': function(eid) {
      var position = sakee.entity.getComponent(eid, 'position'),
        radius = sakee.entity.getComponent(eid, 'radius').value,
        color = sakee.entity.getComponent(eid, 'color').value,
        x = position.x | 0,
        y = position.y | 0;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, TWO_PI); // draw a circle
      ctx.fill();
      ctx.closePath();
    }
  }
});
