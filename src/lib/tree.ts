interface TreeNode {
  type: string;
  value?: string | number;
  children?: TreeNode[];
}

function parse(tokens: string[]): TreeNode {
  let index = 0;

  function walk(): TreeNode | undefined {
    const token = tokens[index];

    if (token.startsWith('IDENTIFIER(')) {
      index++;
      return { type: 'identifier', value: token.slice(11, -1) };
    }

    if (token.startsWith('INTEGER(')) {
      index++;
      return { type: 'integer', value: parseInt(token.slice(8, -1)) };
    }

    if (token.startsWith('STRING("') && token.endsWith('")')) {
      index++;
      return { type: 'string', value: token.slice(8, -2) };
    }

    if (token === 'LET' || token === 'ASSIGN' || token === 'PLUS' || token === 'MINUS' || token === 'MULTIPLY' || token === 'DIVIDE') {
      index++;
      return { type: token.toLowerCase() };
    }

    if (token === 'LEFT_PAREN' || token === 'RIGHT_PAREN' || token === 'COMMA' || token === 'COLON' || token === 'QUESTION_MARK' || token === 'PERIOD') {
      index++;
    }

    if (token === '[') {
      index++;
      const node: TreeNode = { type: 'array', children: [] };

      while (tokens[index] !== ']') {
        const element = walk();
        if (element) {
          node.children?.push(element);
        }
      }

      index++; // Consume ']'
      return node;
    }

    return undefined;
  }

  const rootTreeNode: TreeNode = { type: 'program', children: [] };

  while (index < tokens.length) {
    const statement = walk();
    if (statement) {
      rootTreeNode.children?.push(statement);
    }
  }

  return rootTreeNode;
}

function logTree(tokens: string[], treeName?: string): void {
  treeName && console.log(treeName);
  const tree = parse(tokens);
  console.log(JSON.stringify(tree, null, 4));
}

export { logTree };
