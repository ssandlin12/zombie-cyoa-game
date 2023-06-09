function generatePrompt(previousPrompt, userChoice) {
    return `Story scenario: You wake up inside a Walmart during a zombie apocalypse and want to escape.
    Story step & user possible choices: You look around and see someone across the aisle, turned around. 1. You sneak away quietly. It might be a zombie. 2. You call out to the person. 3. You look for a weapon nearby.
    User selected choice: 2. You call out to the person.
    Story step and user possible choices: You decide to call out to the person. They turn around and start shuffling over towards you without speaking. 1. You walk towards them to ask for help, 2. You turn around and run, 3. You open up a nearby fridge and climb inside

    Story scenario: You wake up inside a Walmart during a zombie apocalypse and want to escape.
    Story step & user possible choices: You're in the sports equipment aisle. You decide to get up and look around. 1. You grab a baseball for self-defense, 2. You keep looking around for other weapons, 3. You grab a tennis racquet for self-defense
    User selected choice: 3. You grab a tennis racquet for self-defense
    Next story step & user possible choices: You're now armed with a tennis racquet. You suddenly hear a crash across the store. 1. You walk over to investigate the sound, 2. You sneak away to find an exit, 3. You look for another weapon

    Story scenario: You wake up inside a Walmart during a zombie apocalypse and want to escape.
    Story step & user possible choices: ${previousPrompt};
    User selected choice: ${userChoice}
    Story step & user possible choices: `;
  }

class Prompts {
    constructor() {
        let newPrompts;

        if (this.previousPrompt === " ") {
            newPrompts = generatePrompt();
        }
        else {
            newPrompts = generatePrompt(this.previousPrompt, this.userChoice);
        }

        /* convert the generated prompt into descriptions and button text */
        this.description = newPrompts.substring(0, newPrompts.indexOf("1."));
        this.button1 = newPrompts.substring(newPrompts.indexOf("1."), newPrompts.indexOf("2."));
        this.button2 = newPrompts.substring(newPrompts.indexOf("2."), newPrompts.indexOf("3."));
        this.button3 = newPrompts.substring(newPrompts.indexOf("3."), newPrompts.length);
    }
}
