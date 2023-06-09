const zombiesAtWalmart = {
  opener: {
    openerText:
      "This is a text-based, choose-your-own-adventure game where you try to escape from Walmart. See how long you can survive.",
  },
  aisle1: {
    storyPrompt:
      "You wake up in a Walmart during the middle of the day. The lights are turned off and the place seems eerily empty. You look around and see a person standing across the aisle, turned around. You think about asking for help but something seems off. What do you do next?",
    choices: [
      {
        text: "Walk over and ask them for help. They can probably explain what's going on.",
        destination: "aisle1-zombie",
      },
      {
        text: "Look around first for a weapon in case something weird is happening",
        destination: "aisle1-weapon",
      },
      {
        text: "Slowly walk backwards and go to the next aisle to keep looking",
        destination: "aisle2",
      },
      {
        text: "Climb inside the nearby fridge and wait for them to leave.",
        destination: "aisle1-gameOver",
      },
    ],
  },

  aisle2: {
    storyPrompt:
      "You enter the next aisle and find shelves filled with canned food. It seems like a good place to stock up on supplies. As you start grabbing cans, you hear a faint noise behind you. What do you do?",
    choices: [
      {
        text: "Quickly grab as much food as you can and rush to the next aisle.",
        destination: "aisle3",
      },
      {
        text: "Stay hidden and observe the source of the noise.",
        destination: "aisle2-noise",
      },
      {
        text: "Drop the cans and run back to the previous aisle.",
        destination: "aisle2-gameOver",
      },
      {
        text: "Use one of the cans as a distraction and throw it to the other end of the aisle.",
        destination: "aisle2-distraction",
      },
    ],
  },
  aisle3: {
    storyPrompt:
      "You find yourself in the electronics aisle. Broken TV screens and scattered cables are all around you. Suddenly, you hear a loud crash coming from the far end. What do you do?",
    choices: [
      {
        text: "Investigate the source of the crash.",
        destination: "aisle3-crash",
      },
      {
        text: "Search the shelves for any useful gadgets or tools.",
        destination: "aisle3-search",
      },
      {
        text: "Leave the aisle and move on to the next section.",
        destination: "aisle3-gameOver",
      },
      {
        text: "Hide behind a pile of TVs and observe the area.",
        destination: "aisle3-hide",
      },
    ],
  },
  aisle4: {
    storyPrompt:
      "You enter the clothing aisle and find rows of empty hangers and torn clothes. It seems like someone has been scavenging through this aisle. What do you do?",
    choices: [
      {
        text: "Look for any clothing items that might be useful for your journey.",
        destination: "aisle4-clothes",
      },
      {
        text: "Listen for any sounds or signs of movement.",
        destination: "aisle4-gameOver",
      },
      {
        text: "Proceed to the next aisle, keeping an eye out for any potential threats.",
        destination: "aisle5",
      },
      {
        text: "Arrange the hangers to create a barricade at one end of the aisle.",
        destination: "aisle4-barricade",
      },
    ],
  },
  aisle5: {
    storyPrompt:
      "You arrive at the toy aisle, filled with action figures, board games, and toy guns. A remote-controlled car is moving by itself, bumping into the shelves. What do you do?",
    choices: [
      {
        text: "Pick up the toy car and see if it can be useful.",
        destination: "aisle5-toycar",
      },
      {
        text: "Avoid the noise and proceed to the next aisle.",
        destination: "aisle6",
      },
      {
        text: "Search for a weapon among the toys.",
        destination: "aisle5-weapon",
      },
      {
        text: "Stay put and observe the area before moving.",
        destination: "aisle5-gameOver",
      },
    ],
  },
  aisle6: {
    storyPrompt:
      "The camping gear aisle is next. Tents, sleeping bags, and various equipment are scattered around. Suddenly, you notice a light coming from one of the tents. What do you do?",
    choices: [
      {
        text: "Approach the tent cautiously.",
        destination: "aisle6-tent",
      },
      {
        text: "Grab some camping gear and move on to the next aisle.",
        destination: "aisle7",
      },
      {
        text: "Ignore the tent and look for other useful items in the aisle.",
        destination: "aisle6-items",
      },
      {
        text: "Turn around and leave the aisle immediately.",
        destination: "aisle6-gameOver",
      },
    ],
  },
  aisle7: {
    storyPrompt:
      "The final aisle is full of gardening tools. It’s quiet and deserted. You see a shovel leaning against a shelf. What do you do?",
    choices: [
      {
        text: "Pick up the shovel. It might be useful.",
        destination: "aisle7-shovel",
      },
      {
        text: "Proceed cautiously, looking out for any movement.",
        destination: "aisle7-gameOver",
      },
      {
        text: "Start barricading the aisle using the gardening tools.",
        destination: "aisle7-barricade",
      },
      {
        text: "Leave the aisle and look for an exit.",
        destination: "exit",
      },
    ],
  },
  
};
