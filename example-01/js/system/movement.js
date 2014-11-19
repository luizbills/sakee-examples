var dt = 0.0167;

sakee.system.set('movement', {
  priority: {
    update: 100
  },

  filter: {
    position: true,
    velocity: true
  },

  events: {
    'update entity': function(eid) {
      var position = sakee.entity.getComponent(eid, 'position'),
        velocity = sakee.entity.getComponent(eid, 'velocity');

      position.x += velocity.x * dt;
      position.y += velocity.y * dt;
    }
  }
});
