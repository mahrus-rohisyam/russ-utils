# Russ

To make my life as a programmer more calm and practical haha

## `colorizeLog` Function
### Description
This function logs messages to the console with colorized output based on the specified log level. It supports different log levels such as "ERROR", "INFO", "DEBUG", and "SUCCESS", each represented by a different color. The function also includes the file location from which it was triggered in the log message.

### Parameters
- `level` (string): The log level, which can be one of "ERROR", "INFO", "DEBUG", or "SUCCESS".
- `args` (any): Any number of additional arguments to be logged. These arguments will be converted to strings and joined with spaces.

### Usage
```javascript
// Example usage
colorizeLog("ERROR", "This is an error message.", 12);
colorizeLog("INFO", "This is an info message.");
colorizeLog("DEBUG", "This is a debug message.");
colorizeLog("SUCCESS", "This is a success message.");
```

Apologies for the confusion. Here's the updated usage for the `generateComponent` function:

## `generateComponent` Function
### Description
This function generates component files for the example: on the `ReactTestStory.js` script will generate React based on the provided component name. It creates a directory with the given component name and generates three files inside it: `ComponentName.ts`, `ComponentName.test.ts`, and `ComponentName.story.ts`. The `ComponentName.ts` file includes a basic component template, the `ComponentName.test.ts` file is an empty test file, and the `ComponentName.story.ts` file contains a storybook configuration.

### Parameters
This function does not take any parameters.

### Usage
To generate the component files, execute the following command in your terminal:

```
node /ComponentGenerator --name YourComponent
```

Replace `/ComponentGenerator` with the actual path to the script file. Make sure to provide the desired component name after the `--name` flag.

For example:

```
node /path/to/generateComponent.js --name Button
```

This command will generate the component files for a component named "Button" in the specified directory.

Please adjust the command and file path according to your specific setup.
