var dt = 1000/60/1000;

sakee.system.set('Moviment', {
  priority: {
    update: 1000
  },

  filter: {
    position: true,
    velocity: true
  },

  events: {
    'update entity': function(eid) {
      var position = sakee.entity.getComponent(eid, 'Position'),
        velocity = sakee.entity.getComponent(eid, 'Velocity'),
        px = position.x,
        py = position.y,
        vx = velocity.x,
        vy = velocity.y,
        collided = false;

      px += vx;
      py += vy;

      position.x = px;
      position.y = py;

      // Check for collision with the screen edge (left and right)
      if (px > 300) {
        collided = true;
        px = 300;
      } else if (px < 0) {
        collided = true;
        px = 0;
      }

      position.x = px;

      if (collided) {
        velocity.x *= -1;
        collided = false;
      }

      // Check for collision with the screen edge (top and bottom)
      if (py > 300) {
        collided = true;
        py = 300;
      } else if (py < 0) {
        collided = true;
        py = 0;
      }

      position.y = py;

      if (collided) {
        velocity.y *= -1;
      }
    }
  }
});
