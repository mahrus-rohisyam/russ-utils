/**
 * @Usage execute `node /ComponentGenerator/ReactTestStory.js --name YourComponentName`
 */

const fs = require("fs");
const path = require("path");
const colorizeLog = require("../DebuggingLogs");

function generateComponent() {
  const componentNameIndex = process.argv.indexOf("--name");
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

  const componentName = process.argv[componentNameIndex + 1];
  const componentDir = path.join(__dirname, componentName);

  if (fs.existsSync(componentDir)) {
    colorizeLog("ERROR", "Component directory already exists!");
    return;
  }

  fs.mkdirSync(componentDir);

  const componentFilePath = path.join(componentDir, `${componentName}.ts`);
  const testFilePath = path.join(componentDir, `${componentName}.test.ts`);
  const StoryFilePath = path.join(componentDir, `${componentName}.story.ts`);

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

  fs.writeFileSync(componentFilePath, componentContent);
  fs.writeFileSync(testFilePath, testContent);
  fs.writeFileSync(StoryFilePath, storyContent);

  console.log(`Component files generated for ${componentName} component.`);
}

generateComponent();