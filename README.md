# generate password

## Git clone

Go to github.com and looked up the public repository of module 3. Copy code and
clone with your terminal (mac) into a folder. Open files in vs code.

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

#### Angels walkthrough

* Java
    1. I looked up how to get a prompt when the button was clicked function generate password then add var.
    2. Add alerts to fit criteria.
    3. Made confirm to ask for password options then make var of the options.
    4. Made random sequence so that the answer can generate. 
    5. Took a while but had to push the options with the random list and random chart to generate the password.
  
    
  
##### Turn in

  Make a repository with a unique name and typed out a README with how I did this assignment. Go into terminal (mac) and open files and git status. Make git branch to -M main.Push existing repository from command line.