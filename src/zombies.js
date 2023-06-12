const zombiesAtWalmart = {
  opener: {
    openerText:
      "This is a text-based, choose-your-own-adventure game where you try to escape from Walmart. See how long you can survive.",
    image: "images/opener.png",
  },
  aisle1: {
    storyPrompt:
      "You wake up in a Walmart during the middle of the day. The lights are turned off and the place seems eerily empty. You look around and see a person standing across the aisle, turned around. You think about asking for help but something seems off. What do you do next?",
    choices: [
      {
        text: "1. Walk over and ask them for help. They can probably explain what's going on.",
        destination: "aisle1zombie",
        outcome: "alert",
      },
      {
        text: "2. Throw something over the aisle to get their attention.",
        destination: "aisle2",
        outcome: "safe",
      },
      {
        text: "3. Climb inside the nearby fridge and wait for them to leave.",
        destination: "aisle1freezer",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle1.png",
  },

  aisle2: {
    storyPrompt:
      "You enter the next aisle and find shelves filled with canned food. It seems like a good place to stock up on supplies. As you start grabbing cans, you hear a faint noise behind you. What do you do?",
    choices: [
      {
        text: "1. Quickly grab as much food as you can and rush to the next aisle.",
        destination: "aisle3",
        outcome: "continue",
      },
      {
        text: "2. Stay hidden and observe the source of the noise.",
        destination: "aisle2noise",
        outcome: "continue",
      },
      {
        text: "3. Drop the cans and run back to the previous aisle.",
        destination: "aisle2gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle2.png",
  },
  aisle3: {
    storyPrompt:
      "You find yourself in the electronics aisle. Broken TV screens and scattered cables are all around you. Suddenly, you hear a loud crash coming from the far end. What do you do?",
    choices: [
      {
        text: "1. Investigate the source of the crash.",
        destination: "aisle3crash",
        outcome: "continue",
      },
      {
        text: "2. Search the shelves for any useful gadgets or tools.",
        destination: "aisle3search",
        outcome: "continue",
      },
      {
        text: "3. Leave the aisle and move on to the next section.",
        destination: "aisle3gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle3.png",
  },
  aisle4: {
    storyPrompt:
      "You enter the clothing aisle and find rows of empty hangers and torn clothes. It seems like someone has been scavenging through this aisle. What do you do?",
    choices: [
      {
        text: "1. Look for any clothing items that might be useful for your journey.",
        destination: "aisle4clothes",
        outcome: "continue",
      },
      {
        text: "2. Listen for any sounds or signs of movement.",
        destination: "aisle4gameOver",
        outcome: "gameOver",
      },
      {
        text: "3. Proceed to the next aisle, keeping an eye out for any potential threats.",
        destination: "aisle5",
        outcome: "continue",
      },
    ],
    image: "images/aisle4.png",
  },
  aisle5: {
    storyPrompt:
      "You arrive at the toy aisle, filled with action figures, board games, and toy guns. A remote-controlled car is moving by itself, bumping into the shelves. What do you do?",
    choices: [
      {
        text: "1. Pick up the toy car and see if it can be useful.",
        destination: "aisle5toycar",
        outcome: "continue",
      },
      {
        text: "2. Avoid the noise and proceed to the next aisle.",
        destination: "aisle6",
        outcome: "continue",
      },
      {
        text: "3. Search for a weapon among the toys.",
        destination: "aisle5gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle5.png",
  },
  aisle6: {
    storyPrompt:
      "The camping gear aisle is next. Tents, sleeping bags, and various equipment are scattered around. Suddenly, you notice a light coming from one of the tents. What do you do?",
    choices: [
      {
        text: "1. Approach the tent cautiously.",
        destination: "aisle6tent",
        outcome: "continue",
      },
      {
        text: "2. Grab some camping gear and move on to the next aisle.",
        destination: "aisle7",
        outcome: "continue",
      },
      {
        text: "3. Ignore the tent and look for other useful items in the aisle.",
        destination: "aisle6gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle6.png",
  },
  aisle7: {
    storyPrompt:
      "The final aisle is full of gardening tools. It’s quiet and deserted. You see a shovel leaning against a shelf. What do you do?",
    choices: [
      {
        text: "1. Pick up the shovel. It might be useful.",
        destination: "aisle7shovel",
        outcome: "continue",
      },
      {
        text: "2. Start barricading the aisle using the gardening tools.",
        destination: "aisle7barricade",
        outcome: "continue",
      },
      {
        text: "3. Leave the aisle and look for an exit.",
        destination: "exit",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle7.png",
  },
  aisle1zombie: {
    storyPrompt:
      "As you approach the figure, they slowly turn around. Their eyes are vacant, skin pale and splotchy. You realize too late - this is a zombie! It starts moving towards you. What do you do?",
    choices: [
      {
        text: "1. Fight back!",
        destination: "aisle2",
        outcome: "continue",
      },
      {
        text: "2. Run back and head to another aisle.",
        destination: "aisle3",
        outcome: "continue",
      },
      {
        text: "3. Freeze in fear.",
        destination: "aisle1gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle1zombie.png",
  },
  aisle1freezer: {
    storyPrompt:
      "You climb into the fridge and close the door. However, you're unable to get out again and slowly freeze to death. Game over.",
    image: "images/aisle1freezer.png",
  },
  aisle2noise: {
    storyPrompt:
      "The noise grows louder and you see a shadow moving along the wall. Suddenly, a cat jumps off the shelf and runs away. Phew! That was close. But you're still in a deserted Walmart... What's your next move?",
    choices: [
      {
        text: "1. Proceed to the next aisle.",
        destination: "aisle3",
        outcome: "continue",
      },
      {
        text: "2. Go back to the previous aisle.",
        destination: "aisle1",
        outcome: "continue",
      },
      {
        text: "3. Hide behind the shelves and wait.",
        destination: "aisle2gameOver",
        outcome: "gameOver",
      },
    ],
    image: "images/aisle2noise.png",
  },

  aisle2gameOver: {
    storyPrompt:
      "You run back to the previous aisle, tripping over a can of beans in your haste. You fall and hit your head on the ground, losing consciousness. Game over.",
    image: "images/aisle2gameOver.png",
  },

  aisle3crash: {
    storyPrompt:
      "You approach the source of the crash. A set of shelves has collapsed, revealing a hole in the wall. It looks like a potential way out, but it's dark and you're not sure what's on the other side. What do you do?",
    choices: [
      {
        text: "1. Investigate the hole.",
        destination: "aisle3exit",
        outcome: "continue",
      },
      {
        text: "2. Continue down the aisle.",
        destination: "aisle4",
        outcome: "continue",
      },
      {
        text: "3. Turn back and choose another aisle.",
        destination: "aisle2",
        outcome: "continue",
      },
    ],
    image: "images/aisle3crash.png",
  },
};
