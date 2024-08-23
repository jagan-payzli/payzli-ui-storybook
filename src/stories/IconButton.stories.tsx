// src/components/Button.stories.tsx
import { Heart } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { IconButton, IIconButtonProps } from "payzli-ui"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/IconButton",
	component: IconButton,
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
			control: { type: "text" }
		},
		buttonType: {
			control: { type: "inline-radio" },
			options: ["button", "text"]
		},
		disabled: {
			control: { type: "boolean" }
		},
		id: {
			control: { type: "text" }
		},
		className: {
			control: { type: "text" }
		}
	}
} as Meta<IIconButtonProps>;
type Story = StoryObj<IIconButtonProps>;

export const Primary: Story = {
	name: "Primary Button",
	args: {
		onClick: (event: any) => alert("Primary Button Clicked"),
		variant: "primary",
		size: "medium",
		buttonType: "button"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const Secondary: Story = {
	name: "Secondary Button",
	args: {
		onClick: (event: any) => alert("Secondary Button Clicked"),
		variant: "secondary",
		size: "medium",
		buttonType: "button"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const Tertiary: Story = {
	name: "Tertiary Button",
	args: {
		onClick: (event: any) => alert("Tertiary Button Clicked"),
		variant: "tertiary",
		size: "medium",
		buttonType: "button"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const Disabled: Story = {
	name: "Disabled Button",
	args: {
		onClick: (event: any) => alert("Disabled Button Clicked"),
		variant: "primary",
		size: "medium",
		buttonType: "button",
		disabled: true
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};

export const TextButton: Story = {
	name: "Text Button",
	args: {
		onClick: (event: any) => alert("Text Button Clicked"),
		variant: "primary",
		size: "medium",
		buttonType: "text"
	},
	render: (args) => (
		<IconButton {...args}>
			<Heart size={32} />
		</IconButton>
	)
};
