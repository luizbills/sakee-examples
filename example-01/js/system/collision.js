sakee.system.set('collision', {
  priority: {
    update: 10
  },

  filter: {
    position: true,
    velocity: true,
    diameter: true
  },

  events: {
    'update entity': function(eid) {
      var position = sakee.entity.getComponent(eid, 'position'),
        velocity = sakee.entity.getComponent(eid, 'Velocity'),
        radius = sakee.entity.getComponent(eid, 'radius').value,
        px = position.x,
        py = position.y,
        collided = false;

      // Check for collision with the screen edge (left and right)
      if (px + radius > 300) {
        collided = true;
        px = 300 - radius;
      }
      else if (px - radius < 0) {
        collided = true;
        px = radius;
      }

      position.x = px;

      if (collided) {
        velocity.x *= -1;
        collided = false;
      }

      // Check for collision with the screen edge (top and bottom)
      if (py + radius > 300) {
        collided = true;
        py = 300 - radius;
      }
      else if (py - radius < 0) {
        collided = true;
        py = radius;
      }

      position.y = py;

      if (collided) {
        velocity.y *= -1;
      }
    }
  }
});
