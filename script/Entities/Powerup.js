ENGINE.Powerup = function(args) {

  Utils.extend(this, {
    type: "medikit" /* default powerup type */
  }, args);

  this.radius = 6;

  this.sprites = {
    "medikit": [103, 66, 15, 15]
  };

};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Powerup,
  collidable: true,

  collision: function(object) {
    if (object instanceof ENGINE.Player) {
      object.powerup(this);
    }
  },

  remove: function() {
    this.collection.remove(this);
  },

  step: function(delta) {
  },

  render: function(delta) {
    var sprite = this.sprites[this.type];
    app.layer.drawRegion(app.images.spritesheet, sprite, this.x, this.y);
  }

};
