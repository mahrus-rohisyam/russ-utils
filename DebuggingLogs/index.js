/**
 * @param {string} level
 * @param {...any} args
 *
 * Example:
 * colorizeLog("ERROR", "This is an error message.", 12);
 * colorizeLog("INFO", "This is an info message.");
 * colorizeLog("DEBUG", "This is a debug message.");
 * colorizeLog("SUCCESS", "This is a success message.");
 */

const path = require('path');

function colorizeLog(level, ...args) {
  const color = {
    ERROR: "\x1b[31m", // Red
    INFO: "\x1b[34m", // Blue
    DEBUG: "\x1b[36m", // Light Blue
    SUCCESS: "\x1b[32m", // Green
    RESET: "\x1b[0m", // Reset color
  };

  const parentDir = path.dirname(__filename);
  const filename = path.basename(__filename);

  color.ERROR
    ? console.error(`${color[level]}[${level}] [${parentDir}/${filename}] ${args.join(" ")}${color.RESET}`)
    : console.log(`${color[level]}[${level}] [${parentDir}/${filename}] ${args.join(" ")}${color.RESET}`);
}

module.exports = colorizeLog;
