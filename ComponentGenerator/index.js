const fs = require("fs");
const path = require("path");
const colorizeLog = require("../DebuggingLogs");

function generateComponent() {
  // Declare and reading command argument
  const componentNameIndex = process.argv.indexOf("--name");

  // Checking arguments
  if (
    componentNameIndex === -1 ||
    componentNameIndex === process.argv.length - 1
  ) {
    colorizeLog(
      "ERROR",
      "Please provide a component name using the --name flag."
    );
    return;
  }

  // Reading argument input
  const componentName = process.argv[componentNameIndex + 1];

  // Reading Component Directory
  const componentDir = path.join(__dirname, componentName);

  // Checking directory according to argument input
  if (fs.existsSync(componentDir)) {
    colorizeLog("ERROR", "Component directory already exists!");
    return;
  }

  // Creating directory
  fs.mkdirSync(componentDir);

  // Declare paths
  const componentFilePath = path.join(componentDir, `${componentName}.ts`);
  const testFilePath = path.join(componentDir, `${componentName}.test.ts`);
  const StoryFilePath = path.join(componentDir, `${componentName}.story.ts`);

  // Declare file contents
  const componentContent = `import React from "react";

type Props = {};

const ${componentName} = (props: Props) => {
  return <div>${componentName}</div>;
};

export default ${componentName};`;
  const testContent = `import ${componentName} from './${componentName}';

describe("This ${componentName}", () => {
  test("Should do ${componentName} purposes", () => {
    "Render Something here"
  })
});`;
  const storyContent = `import React from "react";
import ${componentName} from "./${componentName}";

export default {
  title: "Components/${componentName}",
  component: ${componentName},
};

const Template = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};`;

  // Writing files 
  fs.writeFileSync(componentFilePath, componentContent);
  fs.writeFileSync(testFilePath, testContent);
  fs.writeFileSync(StoryFilePath, storyContent);

  colorizeLog("SUCCESS", `Component files generated for ${componentName} component.`)
}

generateComponent();
