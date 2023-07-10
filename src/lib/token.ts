/**
 * Represents the possible values of a token.
 */
type TokenValue =
  | "LET"
  | "IDENTIFIER"
  | "INTEGER"
  | "FLOAT"
  | "STRING"
  | "PLUS"
  | "MINUS"
  | "MULTIPLY"
  | "DIVIDE"
  | "LEFT_PAREN"
  | "RIGHT_PAREN"
  | "LEFT_BRACE"
  | "RIGHT_BRACE"
  | "SEMICOLON"
  | "ASSIGN"
  | "COMMA"
  | "NEWLINE"
  | "QUESTION_MARK"
  | "PERIOD"
  | "COLON";

/**
 * Represents a token with its value, pattern, and attachment flag.
 */
type Token = {
  value: TokenValue;
  pattern: string;
  attachValue: boolean;
};

/**
 * An array of tokens with their respective values, patterns, and attachment flags.
 */
const tokens: Token[] = [
  { value: "LET", pattern: "^let$", attachValue: false },

  {
    value: "IDENTIFIER",
    pattern: "^[a-zA-Z_][a-zA-Z0-9_]*$",
    attachValue: true,
  },
  { value: "INTEGER", pattern: "^[0-9]+$", attachValue: true },
  { value: "FLOAT", pattern: "^[+-]?[0-9]*\\.[0-9]+$", attachValue: true },
  { value: "STRING", pattern: '^"([^"\\\\]|\\\\.)*"$', attachValue: true },
  { value: "PLUS", pattern: "^\\+$", attachValue: false },
  { value: "MINUS", pattern: "^-$", attachValue: false },
  { value: "MULTIPLY", pattern: "^\\*$", attachValue: false },
  { value: "DIVIDE", pattern: "^\\/$", attachValue: false },
  { value: "LEFT_PAREN", pattern: "^\\($", attachValue: false },
  { value: "RIGHT_PAREN", pattern: "^\\)$", attachValue: false },
  { value: "LEFT_BRACE", pattern: "^\\{$", attachValue: false },
  { value: "RIGHT_BRACE", pattern: "^\\}$", attachValue: false },
  { value: "SEMICOLON", pattern: "^;$", attachValue: false },
  { value: "ASSIGN", pattern: "^=$", attachValue: false },
  { value: "COMMA", pattern: "^,$", attachValue: false },
  { value: "NEWLINE", pattern: "^\\n$", attachValue: false },
  { value: "QUESTION_MARK", pattern: "^\\?$", attachValue: false },
  { value: "PERIOD", pattern: "^\\.$", attachValue: false },
  { value: "COLON", pattern: "^:$", attachValue: false },
];

/**
 * Looks up a string and returns the corresponding token value if a match is found.
 * @param {string} str - The string to lookup.
 * @returns {string} - The token value if a match is found.
 */
function lookup(str: string): string {
  for (const token of tokens) {
    // NOTE: create a regular expression using the token's pattern
    const regex = new RegExp(token.pattern);
    // NOTE: test if the string matches the regular expression
    if (regex.test(str)) {
      // NOTE: attach the string to the token value if required (by attachValue flag)
      return token.attachValue ? `${token.value}(${str})` : token.value;
    }
  }

  throw new Error(`Nenhum token correspondente para ${str}`);
}

export { lookup };
