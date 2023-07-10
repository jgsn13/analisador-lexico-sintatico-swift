interface TreeNode {
  type: string;
  value?: string | number;
  children?: TreeNode[];
}

/**
 * Parses an array of tokens and constructs a parser tree.
 *
 * @param {string[]} tokens - The array of tokens to parse.
 * @returns {TreeNode} The root node of the parser tree.
 */
function parse(tokens: string[]): TreeNode {
  let index = 0;

  function walk(): TreeNode | undefined {
    const token = tokens[index];

    // NOTE: check if token is an identifier
    if (token.startsWith("IDENTIFIER(")) {
      index++;
      return { type: "identifier", value: token.slice(11, -1) };
    }

    // NOTE: check if token is an integer
    if (token.startsWith("INTEGER(")) {
      index++;
      return { type: "integer", value: parseInt(token.slice(8, -1)) };
    }

    // NOTE: check if token is a string
    if (token.startsWith('STRING("') && token.endsWith('")')) {
      index++;
      return { type: "string", value: token.slice(8, -2) };
    }

    // NOTE: check if token is a keyword or operator
    if (
      token === "LET" ||
      token === "ASSIGN" ||
      token === "PLUS" ||
      token === "MINUS" ||
      token === "MULTIPLY" ||
      token === "DIVIDE"
    ) {
      index++;
      return { type: token.toLowerCase() };
    }

    // NOTE: check if token is a punctuation
    if (
      token === "LEFT_PAREN" ||
      token === "RIGHT_PAREN" ||
      token === "COMMA" ||
      token === "COLON" ||
      token === "QUESTION_MARK" ||
      token === "PERIOD"
    ) {
      index++;
    }

    // NOTE: check if token is the start of an array
    if (token === "[") {
      index++;
      const node: TreeNode = { type: "array", children: [] };

      // NOTE: process the elements inside the array
      while (tokens[index] !== "]") {
        const element = walk();
        if (element) {
          node.children?.push(element);
        }
      }

      index++; // consume ']'
      return node;
    }

    return undefined;
  }

  const rootTreeNode: TreeNode = { type: "program", children: [] };

  // NOTE: process each statement in the token array
  while (index < tokens.length) {
    const statement = walk();
    if (statement) {
      rootTreeNode.children?.push(statement);
    }
  }

  return rootTreeNode;
}

/**
 * Logs the parser tree representation of the given tokens.
 *
 * @param {string[]} tokens - The array of tokens to generate the parser tree from.
 * @param {string} [treeName] - An optional name for the parser tree. If provided, it will be logged before the tree.
 * @returns {void}
 */
function logTree(tokens: string[], treeName?: string): void {
  treeName && console.log(treeName);
  const tree = parse(tokens);
  console.log(JSON.stringify(tree, null, 4));
}

export { logTree };
