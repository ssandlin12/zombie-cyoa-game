const zombiesAtSuperMart = {
  opener: {
    openerText:
      "This is a text-based, choose-your-own-adventure game where you try to escape from a super store. See how long you can survive.",
    image: "images/opener.png",
  },
  genericZombieDeath: {
    storyPrompt: "The zombie caught up to you and bit you. You now join the ranks of the undead. Game over.",
    image: "images/genericzombieDeath.png",
  },
  aisle1: {
    storyPrompt:
      "You wake up in a SuperMart during the middle of the day. You don't know how long you were unconscious. As you look around, you see a person standing across the aisle with his back to you. What do you do next?",
    choices: [
      {
        text: "1. Walk over and ask for help. They can probably explain what's going on.",
        destination: "aisle1zombie",
        outcome: "alert",
      },
      {
        text: "2. Throw a nearby water bottle at them.",
        destination: "aisle1continue",
        outcome: "interject",
      },
      {
        text: "3. Climb inside the nearby fridge and wait for them to leave.",
        destination: "aisle1freezer",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle1.png",
  },
  aisle1freezer: {
    storyPrompt:
      "You climb into the fridge and close the door. The door locks behind you and you slowly freeze to death. Game over.",
    image: "images/aisle1freezer.png",
  },
  aisle1zombie: {
    storyPrompt:
      "As you approach the person, they slowly turn around. Their eyes are vacant, skin pale and splotchy. You realize this is a zombie. It starts moving towards you. What do you do?",
    choices: [
      {
        text: "1. Rush towards the zombie and shove it out of the way.",
        destination: "aisle1zombieDeath",
        outcome: "gameOver",
      },
      {
        text: "2. Try to run around the zombie and get to the next aisle.",
        destination: "aisle2",
        outcome: "alert",
      },
      {
        text: "3. Try to negotiate with the zombie.",
        destination: "aisle1zombieYell",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle1zombie.png",
  },
  aisle1zombieDeath: {
    storyPrompt: "You rush at the zombie and try to shove it out of the way. However, it's faster than you expected and it catches your arm. Game over.",
    image: "images/aisle1zombieBite.png",
  },
  aisle1zombieYell: {
    storyPrompt: "Your voice gets louder until you're yelling, which attracts every zombie in the store. They all proceed to bite you. Game over.",
    image: "images/aisle1zombieYell.png",
  },
  aisle1continue: {
    storyPrompt: "You throw a water bottle at them. Your throw completely misses, but fortunately, they end up walking in the direction of the noise. The aisle is now clear.",
    choices: [
      {
        text: 'Continue',
        destination: "aisle2",
        outcome: "progress",
      },
    ],
    image: "images/aisle1continue.png",
},
aisle2: {
  storyPrompt: "You enter the next aisle and see rows of canned food. You quickly grab one in case you need it later. What do you do now?",
  choices: [
    {
      text: "1. Grab some more canned food. You never know when you'll need it.",
      destination: "aisle2cannedFood",
      outcome: "alert",
    },
    {
      text: "2. Hide in the aisle and wait for the zombie to pass.",
      destination: "aisle2hide",
      outcome: "alert",
    },
    {
      text: "3. Put the can back on the shelf, you don't need it.",
      destination: "aisle2putCanBack",
      outcome: "gameOver",
    },
  ],
  image: "images/aisle2.png",
},
aisle2cannedFood: {
  storyPrompt: "You grab a few more cans of food. As you're loading up, you see a zombie staring at you from down the aisle. What do you do?",
  choices: [
    {
      text: "1. Forget the cans. Pull a shelf down to block the aisle.",
      destination: "aisle2topple",
      outcome: "gameOver",
    },
    {
      text: "2. Throw a can of beans at the zombie.",
      destination: "aisle2continue",
      outcome: "alert",
    },
    {
      text: "3. Run away carrying your cans of food.",
      destination: "aisle2foodRun",
      outcome: "gameOver",
    },
  ],
  image: "images/aisle2cansHands.png",
},
aisle2hide: {
  storyPrompt: "You wait and hide for a minute. As you're about to leave, you turn and see a zombie standing a few feet away. What do you do?",
  choices: [
    {
      text: "1. Throw a can of beans at the zombie.",
      destination: "aisle2continue",
      outcome: "alert",
    },
    {
      text: "2. Keep hiding and hope the zombie doesn't see you.",
      destination: "aisle2hideAgain",
      outcome: "gameOver",
    },
    {
      text: "3. Call for help. Maybe someone in the store is nearby.",
      destination: "aisle1zombieYell",
      outcome: "gameOver",
    },
  ],
  image: "images/aisle2hide.png",

},
aisle2topple: {
  storyPrompt: "You pull a shelf down to block the aisle. The shelf falls on you and you are crushed to death. Game over.",
    image: "images/aisle2topple.png",
},
aisle2putCanBack: {
  storyPrompt: "You start to put the can back but it accidentally falls and hits the ground. The noise attracts zombies from every direction. Game over.",
    image: "images/aisle2cans.png",
},
aisle2foodRun: {
  storyPrompt: "You run away with your cans of food. However, you trip and fall. Before you can get up, a zombie has reached you. Game over.",
    image: "images/aisle2cans.png",
},
aisle2hideAgain: {
  storyPrompt: "You try to hide again, but other zombies have now closed in and you have nowhere to run. Game over.",
    image: "images/aisle2hideAgain.png",
},
aisle2continue: {
  storyPrompt: "The zombie falls backwards and you run past it as other zombies appear. You continue down the aisle, but it's still chasing you as you enter the electronics section.",
  choices: [
    {
      text: 'Continue',
      destination: "aisle3",
      outcome: "progress",
    },
  ],
  image: "images/aisle2throw.png",
},
aisle3: {
  storyPrompt: "You wait and hide for a minute. As you're about to leave, you turn and see a zombie standing a few feet away. What do you do?",
  choices: [
    {
      text: "1. Throw a can of beans at the zombie.",
      destination: "aisle2continue",
      outcome: "alert",
    },
    {
      text: "2. Keep hiding and hope the zombie doesn't see you.",
      destination: "aisle2hideAgain",
      outcome: "gameOver",
    },
    {
      text: "3. Call for help. Maybe someone in the store is nearby.",
      destination: "aisle1zombieYell",
      outcome: "gameOver",
    },
  ],
  image: "images/aisle2hide.png",

},
};
