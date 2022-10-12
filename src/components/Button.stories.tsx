
import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
export default {
  title: 'Components/Button',
  component: Button,
  args:{
    children: 'Example Button',
    
  },
    argTypes:{
       
    }
} as Meta<ButtonProps>;

export const Default = {};



