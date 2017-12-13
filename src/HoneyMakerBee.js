class HoneyMakerBee extends Bee {
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.makeHoney = function () {
        this.honeyPot++;
    };
    this.giveHoney = function () {
        this.honeyPot--;
    }
  }
};

// a honeyPot property that is set to 0
// a makeHoney method that adds 1 to that honeyBee's honeyPot
// a giveHoney method that subtracts 1 from that honeyBee's honeyPot
