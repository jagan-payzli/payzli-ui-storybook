// src/components/Button.stories.tsx
import { Circle } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "payzli-ui"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/Button",
	component: Button,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	argTypes: {
		variant: {
			control: { type: "inline-radio" },
			options: ["primary", "secondary", "tertiary", "none"]
		},
		size: {
			control: { type: "inline-radio" },
			options: ["small", "medium", "large"]
		},
		buttonType: {
			control: { type: "inline-radio" },
			options: ["button", "text", "link"]
		},
		iconPosition: {
			control: { type: "inline-radio" },
			options: ["left", "right", "both"]
		},
		disabled: {
			control: { type: "boolean" }
		}
	}
} as Meta<IButtonProps>;
type Story = StoryObj<IButtonProps>;

export const Primary: Story = {
	// 👇 Rename this story
	name: "Primary Button",
	args: {
		onClick: (event: any) => alert("Primary Button Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button"
	}
};
export const Secondary: Story = {
	// 👇 Rename this story
	name: "Secondary Button",
	args: {
		onClick: (event: any) => alert("Secondary Button Clicked"),
		label: "Click Me",
		variant: "secondary",
		size: "medium",
		buttonType: "button"
	}
};

export const Tertiary: Story = {
	// 👇 Rename this story
	name: "Tertiary Button",
	args: {
		onClick: (event: any) => alert("Tertiary Button Clicked"),
		label: "Click Me",
		variant: "tertiary",
		size: "medium",
		buttonType: "button"
	}
};

export const Disabled: Story = {
	// 👇 Rename this story
	name: "Disabled Button",
	args: {
		onClick: (event: any) => alert("Disabled Button Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		disabled: true
	}
};

export const WithLeftIcon: Story = {
	// 👇 Rename this story
	name: "Button with Left Icon",
	args: {
		onClick: (event: any) => alert("Button with Left Icon Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		leftIcon: <Circle />,
		iconPosition: "left"
	}
};

export const WithRightIcon: Story = {
	// 👇 Rename this story
	name: "Button with Right Icon",
	args: {
		onClick: (event: any) => alert("Button with Right Icon Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		rightIcon: <Circle />,
		iconPosition: "right"
	}
};

export const WithBothIcons: Story = {
	// 👇 Rename this story
	name: "Button with Both Icons",
	args: {
		onClick: (event: any) => alert("Button with Both Icons Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "button",
		iconComp: <Circle />,
		iconPosition: "both"
	}
};

export const LinkButton: Story = {
	// 👇 Rename this story
	name: "Link Button",
	args: {
		onClick: (event: any) => alert("Link Button Clicked"),
		label: "Click Me",
		variant: "primary",
		size: "medium",
		buttonType: "link"
	}
};
