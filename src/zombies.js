const zombiesAtWalmart = {
  opener: {
    openerText:
      "This is a text-based, choose-your-own-adventure game where you try to escape from Walmart. See how long you can survive.",
    image: "images/opener.png",
  },
  aisle1: {
    storyPrompt:
      "You wake up in a Walmart during the middle of the day. The place seems eerily empty. You look around and see a person standing across the aisle, turned around. You think about asking for help but you're not sure. What do you do next?",
    choices: [
      {
        text: "1. Walk over and ask them for help. They can probably explain what's going on.",
        destination: "aisle1zombie",
        outcome: "alert",
      },
      {
        text: "2. Throw something over the aisle to create a diversion.",
        destination: "aisle1continue",
        outcome: "continue",
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
      "You climb into the fridge and close the door. However, you're unable to get out again and slowly freeze to death. Game over.",
    image: "images/aisle1freezer.png",
  },
  aisle1zombie: {
    storyPrompt:
      "As you approach the figure, they slowly turn around. Their eyes are vacant, skin pale and splotchy. You realize too late that this is a zombie. It starts moving towards you. What do you do?",
    choices: [
      {
        text: "1. Rush at the zombie and fight it",
        destination: "aisle2",
        outcome: "continue",
      },
      {
        text: "2. Run back and head to another aisle.",
        destination: "aisle3",
        outcome: "continue",
      },
      {
        text: "3. Try to negotiate with the zombie.",
        destination: "aisle1gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle1zombie.png",
  },
  aisle1zombieDeath: {
    storyPrompt: "You rush at the zombie and try to fight it. However, it's too strong and bites you. You slowly turn into a zombie. Game over.",
    image: "images/aisle1zombieDeath.png",
  },
  aisle1continue: {
    storyPrompt: "You throw a nearby box of food into the next aisle. Hearing it, the figure perks up and starts walking away. You decide to sneak ahead to the next aisle",
    image: "images/aisle1continue.png",
},
};
