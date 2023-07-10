/**
 * Extracts lexemes from Swift code by splitting it based on delimiters and strings.
 * @param {string} swiftCode - The Swift code to extract lexemes from.
 * @returns {string[]} - An array of extracted lexemes.
 */
function extractLexemes(swiftCode: string): string[] {
  const delimiters = [
    " ",
    ";",
    ",",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "<",
    ">",
    "\n",
    "?",
    ".",
    ":",
  ];
  const lexemes: string[] = [];
  let currentLexeme = "";
  // NOTE: track if we are inside a string literal
  let isInString = false;

  for (let i = 0; i < swiftCode.length; i++) {
    const char = swiftCode[i];

    // NOTE: check if the character is a double quotation mark (")
    // NOTE: it is necessary to treat a string literal as a single token
    if (char === '"') {
      if (isInString) {
        // NOTE: complete the current lexeme and add it as a string literal
        currentLexeme += char;
        lexemes.push(currentLexeme);
        currentLexeme = "";
      } else {
        if (currentLexeme.trim() !== "") {
          // NOTE: add the current lexeme (if not empty) before encountering the string literal
          lexemes.push(currentLexeme.trim());
        }
        currentLexeme = char;
      }

      // NOTE: toggle the state of being inside a string literal
      isInString = !isInString;
    } else if (isInString) {
      // NOTE: if we are inside a string literal, append the character to the current lexeme
      currentLexeme += char;
    } else if (delimiters.includes(char)) {
      // NOTE: if the character is a delimiter
      // NOTE: add the current lexeme (if not empty) before encountering the delimiter
      if (currentLexeme.trim() !== "") {
        lexemes.push(currentLexeme.trim());
      }
      // NOTE: add the delimiter as a separate lexeme
      lexemes.push(char);
      currentLexeme = "";
    } else {
      // NOTE: if the character is not a delimiter or inside a string literal, append it to the current lexeme
      currentLexeme += char;
    }
  }

  // NOTE: add the last lexeme (if not empty) after iterating through the code
  if (currentLexeme.trim() !== "") {
    lexemes.push(currentLexeme.trim());
  }

  // NOTE: blank spaces need to be removed (trim method will do it)
  return lexemes.filter((lexeme) => !!lexeme.trim());
}

export { extractLexemes };
