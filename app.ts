let userInput: unknown

//* Can store any value without getting errors.

userInput = 5

userInput = 'Ridwan'

// * Will get errors if assigning to a type that has already been defined

let userName: string

// This will cause an error
// userName = userInput

//  can add if statement to work around this

if (typeof userInput === 'string') {
  userName = userInput
}

//? Never Types

function generateError(message: string, code: number) {
  // infinite loops are also never types
  while (true) {
    throw { message: message, errorCode: code }
  }
}

generateError('An error occured!', 500)
