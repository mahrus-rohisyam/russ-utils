import React from "react";
import YourComponent from "./YourComponent";

export default {
  title: "Components/YourComponent",
  component: YourComponent,
};

const Template = (args) => <YourComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};