// src/components/Button.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Card, ICardProps, Typography } from "payzli-ui"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/Card",
	component: Card,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	argTypes: {
		size: {
			control: { type: "inline-radio" },
			options: ["xs", "sm", "md", "lg", "xl", "xxl"]
		},
		className: {
			control: { type: "text" }
		}
	}
} as Meta<ICardProps>;
type Story = StoryObj<ICardProps>;

export const Primary: Story = {
	name: "Simple Card",
	args: {
		size: "xl",
		className: ""
	},
	render: (args) => (
		<Card {...args}>
			<Typography type="text" size="md">
				Card Title
			</Typography>
		</Card>
	)
};
