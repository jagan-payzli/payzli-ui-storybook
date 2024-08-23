// src/components/Button.stories.tsx
import { Circle } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps, ITypography, Typography } from "payzli-ui"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/Typography",
	component: Typography,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	argTypes: {
		children: {
			control: { type: "text" }
		},
		size: {
			control: { type: "inline-radio" },
			options: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]
		},
		color: {
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"tertiary",
				"quaternary",
				"primary_on_brand",
				"secondary_on_brand",
				"tertiary_brand",
				"quaternary_brand",
				"white",
				"disabled",
				"placeholder",
				"placeholder_subtle",
				"brand_primary",
				"brand_secondary",
				"brand_tertiary",
				"brand_tertiary_alt",
				"error_primary",
				"warning_primary",
				"success_primary",
				"muted"
			]
		},
		fontFamily: {
			control: { type: "inline-radio" },
			options: ["regular", "medium", "semibold", "bold", "thin"]
		},
		type: {
			control: { type: "inline-radio" },
			options: ["heading", "text"]
		},
		style: {
			control: { type: "object" }
		},
		className: {
			control: { type: "text" }
		}
	}
} as Meta<ITypography>;
type Story = StoryObj<ITypography>;

export const Paragraph: Story = {
	name: "Paragraph",
	args: {
		size: "md",
		type: "text",
		children: "This is a paragraph"
	}
};

export const Heading: Story = {
	name: "Heading",
	args: {
		size: "md",
		type: "heading",
		children: "This is a Heading"
	}
};
