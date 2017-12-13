class RetiredForagerBee extends ForagerBee{
  // TODO..
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.forage = function () {
        return 'I am too old, let me play cards instead';
    };
    this.gamble = function (treasure) {
        this.treasureChest.push(treasure);
    }
  }
};
// the ForagerBee superclass
// an age property that is set to 40
// a job property that is set to gamble
// a canFly property that is set to false
// a color property that is set to grey
// a forage method that returns I am too old, let me play cards instead
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a treasureChest property inherited from ForagerBee that is set to an empty array []
// an always winning gamble method that allows the bee to add a treasure to the treasureChest