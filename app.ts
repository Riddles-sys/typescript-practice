let userInput: unknown

//* Can store any value without getting errors.

userInput = 5

userInput = 'Ridwan'

// * Will get errors if assigning to a type that has already been defined

let userName: string

// This will cause an error
userName = userInput
