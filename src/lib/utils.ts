import fs from "fs";
import { extractLexemes } from "./lexeme";
import { lookup } from "./token";
import { logTree } from './tree';

/**
 * Reads a file and returns its contents as a string.
 * @param {string} filePath - The path to the file.
 * @returns {Promise<string>} - A promise that resolves with the file contents as a string.
 */
function readFileToString(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // NOTE: read the file using fs.readFile
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // NOTE: if there is an error, reject the promise with the error object
        reject(err);
        return;
      }

      // NOTE: if successful, resolve the promise with the file contents as a string
      resolve(data);
    });
  });
}

function readSwiftCode(filename: string) {
  readFileToString(__dirname + "/../../" + filename).then((swiftCode) => {
    const lexemes = extractLexemes(swiftCode);
    const tokens = lexemes.map((lexeme) => lookup(lexeme));
    logTree(tokens, filename);
  });
}

export { readSwiftCode };
