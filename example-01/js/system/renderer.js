var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = canvas.height = 300;

sakee.system.set('Renderer', {
  priority: {
    render: 1000
  },

  filter: {
    position: true,
    diameter: true
  },

  events: {
    'render system': function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    'render entity': function(eid) {
      var position = sakee.entity.getComponent(eid, 'position'),
        px = position.x | 0,
        py = position.y | 0,
        radius = sakee.entity.getComponent(eid, 'diameter').value / 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2); // draw a circle
      ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
});
