## Goal
Our goal is for you to describe to us what the solution is doing and how it's satisfying the requirements.

 You are welcome to modify these files as needed to help them understand the code along with changing the base input to test simpler cases.

## Particle Simulation

The goal of this assignment is to write a small particle simulation to show how little rocks would fall in a 2D world.

You program should determine how, under the effects of gravity, any loose rocks would fall and print out the results.

The program should contain a function (main) that takes, as input, a list of strings where each string contains the elements at that height (first row is the highest, read left to right).

Character definitions:
 '.' one single rock
 ':' two rocks
 ' ' empty space into which rocks may fall
 'T' table, through which rocks may not fall

Rules:
    1) Only rocks may fall
    2) Up to two rocks can occupy a space
    3) Rock are unable to fall through a table
    4) Tables themselves never fall; they are securely fixed in place.

As implied above, rocks may stack up to two into a space.

Example Inputs/Outputs

Example 1)
Input:
[
    'T',
    '.',
    '.',
    ' ',
]

Output print result:
T

:

Example 2)
Input:
[
    '....:',
    ' T T.',
    '.:..:',
    '... .',
]

Output print result:
 . . 
 T T:
... :
:::.: