# Social Network API

  An api using nosql database and mongoose to handle backend requests.

  ## Table of Contents
   
  - [Links](#links)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Links

Video Demonstration: https://www.youtube.com/watch?v=XRdpqZy3zhU
  ## Installation

To use this app:
 - `npm i` to run dependencies
 - `npm run start` to initialize the app
 - Use insomnia or other application to simulate http requests

  ## Usage

  This app allows for users to manage backend requests for a social network app that contains; users, who each contain an array of thoughts, and thoughts contain an array of reactions.

  The mongoose based requests allow for this database to be manipulated via:
  - User:
    - POST createUser
    - GET getAllUser
    - PUT updateUser
    - DEL deleteUser
  - Thoughts:
    - POST addThought
    - GET getThoughtbyId
    - GET getAllThought
    - PUT updateThought
    - DEL removeThought
  - Reactions:
    - POST addReaction
    - DEL removeReaction

This app also features virtuals to give reactionCount (based on the number of objects in the Reaction array), and getter a function to format the createdAt from the default ISO to something more readable.
  ## License

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Contributing

  No contributors to this project

  ## Tests

  Insomnia used to test routes

  ## Questions

  - Check out my other repositories at [GitHub Profile](https://github.com/c-phillips7@gmail.com)

  - For any questions, contact me at cp.phillips15@gmail.com.

