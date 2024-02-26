const areParenthesesBalanced = (str) => {
  let r = false

  const startChar = '('
  const endingChar = ')'

  let startingChars = []
  let endingChars = []

  for (let i = 0; i < str.length; i++) {
    const currentChar = str.charAt(i)

    if (currentChar === startChar) {
      startingChars.push(currentChar)
    } else if (currentChar === endingChar) {
      startingChars.pop()
    }
  }

  // run it back to see if it works for closing parenthesis as well
  for (let i = str.length; i > 0; i--) {
    const currentChar = str.charAt(i - 1)

    if (currentChar === startChar) {
      endingChars.pop()
    } else if (currentChar === endingChar) {
      endingChars.push(currentChar)
    }
  }

  return startingChars.length === 0 && endingChars.length === 0
}

const validTestableStrings = [
  `()`,
  `()()()`,
  `(()())`,
  `((()))`,
  `((()()))`
]

const invalidTestableStrings = [
  `(`,
  `)`,
  `())`,
  `(()(`,
  `(()())(`
]

const lispCode = '(defun factorial (n) (if (= n 0) 1 (* n (factorial (- n 1)))))'
console.log(`${lispCode} == ${areParenthesesBalanced(lispCode)}`)

// will end up all true
validTestableStrings.forEach((item) => {
  console.log(`${item} == ${areParenthesesBalanced(item)}`)
})
console.log('-------')
// will end up all false
invalidTestableStrings.forEach((item) => {
  console.log(`${item} == ${areParenthesesBalanced(item)}`)
})

/*
( - Unclosed opening parenthesis
) - Unopened closing parenthesis
()) - Mismatched parenthesis
(()( - Mismatched parenthesis
(()())( - Mismatched parenthesis
 */
