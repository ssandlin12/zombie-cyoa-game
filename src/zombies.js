const zombiesAtSuperMart = {
  opener: {
    openerText:
      "This is a text-based, choose-your-own-adventure game where you try to escape from a SuperMart store. See how long you can survive.",
    image: "images/opener.png",
  },
  genericZombieDeath: {
    storyPrompt:
      "The zombie caught up to you and bit you. You now join the ranks of the undead. Game over.",
    image: "images/genericzombieDeath.png",
  },
  aisle1: {
    storyPrompt:
      "You wake up in a SuperMart. You don't know how long you were unconscious. As you look around, you see someone standing with their back to you.",
    choices: [
      {
        text: "1. Walk over to them and ask for help.",
        destination: "aisle1zombie",
        outcome: "alert",
      },
      {
        text: "2. Throw a nearby water bottle at their head.",
        destination: "aisle1continue",
        outcome: "interject",
      },
      {
        text: "3. Climb inside the nearby fridge and hide until they leave.",
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
      "As you approach the person, they slowly turn around. You quickly realize this is a zombie. It starts walking towards you. What do you do?",
    choices: [
      {
        text: "1. Fight the zombie with your bare hands.",
        destination: "aisle1zombieDeath",
        outcome: "gameOver",
      },
      {
        text: "2. Run around the zombie and go to the next aisle.",
        destination: "aisle2",
        outcome: "alert",
      },
      {
        text: "3. Speak calmly and negotiate with the zombie.",
        destination: "aisle1zombieYell",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle1zombie.png",
  },
  aisle1zombieDeath: {
    storyPrompt:
      "You swing your arm to hit the zombie. It's faster than you expected and it catches your arm. Game over.",
    image: "images/aisle1zombieBite.png",
  },
  aisle1zombieYell: {
    storyPrompt:
      "You call out. Your voice gets louder until you're yelling, which attracts every zombie in the store. Game over.",
    image: "images/aisle1zombieYell.png",
  },
  aisle1continue: {
    storyPrompt:
      "Your throw completely misses and hits the back wall. Fortunately the zombie follows the noise. The aisle is now clear.",
    choices: [
      {
        text: "Continue",
        destination: "aisle2",
        outcome: "continue",
      },
    ],
    image: "images/aisle1continue.png",
  },
  aisle2: {
    storyPrompt:
      "You enter the next aisle and see rows of canned food. You grab one of the cans. It's baked beans. What now?",
    choices: [
      {
        text: "1. Stock up on canned food while you can.",
        destination: "aisle2cannedFood",
        outcome: "alert",
      },
      {
        text: "2. Hide in the aisle and wait for any zombies to pass.",
        destination: "aisle2hide",
        outcome: "alert",
      },
      {
        text: "3. Place the can back on the shelf.",
        destination: "aisle2putCanBack",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle2.png",
  },
  aisle2cannedFood: {
    storyPrompt:
      "As you're loading your arms with cans, you see a zombie turn the corner and walk towards you.",
    choices: [
      {
        text: "1. Topple a shelf to block the aisle.",
        destination: "aisle2topple",
        outcome: "gameOver",
      },
      {
        text: "2. Throw a can of beans at the zombie.",
        destination: "aisle2continue",
        outcome: "alert",
      },
      {
        text: "3. Run away carrying all your cans.",
        destination: "aisle2foodRun",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle2cansHands.png",
  },
  aisle2hide: {
    storyPrompt:
      "You wait and hide for a little bit. You're about to relax when a zombie turns the corner towards you.",
    choices: [
      {
        text: "1. Throw a can of beans at the zombie.",
        destination: "aisle2continue",
        outcome: "alert",
      },
      {
        text: "2. Keep hiding and hope the zombie is blind.",
        destination: "aisle2hideAgain",
        outcome: "gameOver",
      },
      {
        text: "3. Yell for help. Maybe a survivor is nearby.",
        destination: "aisle1zombieYell",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle2hide.png",
  },
  aisle2topple: {
    storyPrompt:
      "You topple a shelf. Like dominoes, the other shelves fall and you're crushed to death. Game over.",
    image: "images/aisle2topple.png",
  },
  aisle2putCanBack: {
    storyPrompt:
      "You try to put the can back but it falls and hits the ground. The noise attracts zombies from every direction. Game over.",
    image: "images/aisle2cans.png",
  },
  aisle2foodRun: {
    storyPrompt:
      "You make it 10 steps with your cans before you trip and fall. Before you can get up, a zombie is there. Game over.",
    image: "images/aisle2cans.png",
  },
  aisle2hideAgain: {
    storyPrompt:
      "Zombies are apparently not blind. It walks right up to you and bites you. Game over.",
    image: "images/aisle2hideAgain.png",
  },
  aisle2continue: {
    storyPrompt:
      "The can of beans hits the zombie in the head. It falls down and you run away towards the electronics section.",
    choices: [
      {
        text: "Continue",
        destination: "aisle3",
        outcome: "alert",
      },
    ],
    image: "images/aisle2throw.png",
  },
  aisle3: {
    storyPrompt:
      "You make it to the electronics section filled with TV's and other items. The zombies are still right behind you though.",
    choices: [
      {
        text: "1. Turn around and run back to the food section.",
        destination: "genericZombieDeath",
        outcome: "gameOver",
      },
      {
        text: "2. Search for a tool you can use to fight back.",
        destination: "aisle3tools",
        outcome: "alert",
      },
      {
        text: "3. Go over and watch some television.",
        destination: "aisle3tv",
        outcome: "interject",
      },
    ],
    image: "images/aisle3.png",
  },
  aisle3tools: {
    storyPrompt: "You see three options nearby: an HDMI cable, a selfie stick, and a large TV.",
    choices: [
      {
        text: "1. Grab the HDMI cable.",
        destination: "aisle3hdmi",
        outcome: "gameOver",
      },
      {
        text: "2. Grab the selfie stick.",
        destination: "aisle3selfie",
        outcome: "alert",
      },
      {
        text: "3. Grab the large TV.",
        destination: "aisle3tv",
        outcome: "interject",
      },
    ],
    image: "images/aisle3tools.png",
  },
  aisle3hdmi: {
    storyPrompt:
      "You grab the HDMI cable but then realize it's wrapped up with a tie. As you try to untie it, a zombie bites you. Game over.",
    image: "images/aisle3hdmi.png",
  },
  aisle3tv: {
    storyPrompt:
      "For some reason, you decide to watch TV. Lucky for you, someone connected the TV to the security cameras. You watch the zombies' movements and evade them.",
    choices: [
      {
        text: "Continue",
        destination: "aisle4",
        outcome: "interject",
      },
    ],
    image: "images/aisle3tv.png",
  },
  aisle3selfie: {
    storyPrompt: "You grab the selfie stick and knock back the zombies back long enough to run to the next aisle.",
    choices: [
      {
        text: "Continue",
        destination: "aisle4",
        outcome: "alert",
      },
    ],
    image: "images/aisle3selfieAttack.png",
  },
  aisle4: {
    storyPrompt:
      "You've made it to the checkout area at the front of the store. Zombies are walking near the exit. There's also a dead body lying nearby.",
    choices: [
      {
        text: "1. Search the dead body near you.",
        destination: "aisle4deadBody",
        outcome: "gameOver",
      },
      {
        text: "2. Open up a cash register booth and see what's inside.",
        destination: "aisle4register",
        outcome: "gameOver",
      },
      {
        text: "3. Make a break for the door before the zombies notice you.",
        destination: "aisle4door",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle4.png",
  },
  aisle4door: {
    storyPrompt:
      "You run for the door and try to open it. It's locked. By the time you realize this, the zombies have already swarmed you. Game over.",
    image: "images/aisle4door.png",
  },
  aisle4deadBody: {
    storyPrompt: "You approach the body and begin to check its pockets. As you're about to grab a key, the body wakes up and bites you. Game over.",
    image: "images/aisle4deadBody.png",
  },
  aisle4register: {
    storyPrompt: "You open up the cash register and find a key. You use it to open the door and escape. You win!.",
    image: "images/aisle4register.png",
  },
}
