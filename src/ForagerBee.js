class ForagerBee extends Bee{
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    this.forage = function (treasure) {
        this.treasureChest.push(treasure);
    }
  }
};
// an age property that is set to 10
// a job property that is set to find pollen
// a color property inherited from bee that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a canFly property that is set true
// a treasureChest property that is set to an empty array []
// a forage method that allows the bee to add a treasure to the treasureChest