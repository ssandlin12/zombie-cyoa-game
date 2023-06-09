class Prompts {
    constructor() {
        this.description = description;
        this.prompt1 = prompt1;
        this.prompt2 = prompt2;
        this.prompt3 = prompt3;
    }
    displayDescription() {
        // create a variable that will store the description
        let description = document.createElement('p');
        // add a class to the description
        description.classList.add('description');
        // add the description to the prompt
        prompt.appendChild(description);
    }

    // create a method that will display the prompt
    displayPrompts() {
        // create a variable that will store the prompt
        let prompt = document.createElement('div');
        // add a class to the prompt
        prompt.classList.add('prompt');
        // add the prompt to the DOM
        document.body.appendChild(prompt);
        // create a variable that will store the description
        let description = document.createElement('p');
        // add a class to the description
        description.classList.add('description');
        // add the description to the prompt
        prompt.appendChild(description);
        // create a variable that will store the prompt1
        let prompt1 = document.createElement('button');
        // add a class to the prompt1
        prompt1.classList.add('prompt1');
        // add the prompt1 to the prompt
        prompt.appendChild(prompt1);
        // create a variable that will store the prompt2
        let prompt2 = document.createElement('button');
        // add a class to the prompt2
        prompt2.classList.add('prompt2');
        // add the prompt2 to the prompt
        prompt.appendChild(prompt2);
        // create a variable that will store the prompt3
        let prompt3 = document.createElement('button');
        // add a class to the prompt3
        prompt3.classList.add('prompt3');
        // add the prompt3 to the prompt
        prompt.appendChild(prompt3);
    }

}
