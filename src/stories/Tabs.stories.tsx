// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { ITabGroup, Tab, Tabs } from "payzli-ui"; // Adjust the import path as needed
import { useState } from "react";

export default {
	title: "payzli-ui/Components/Tabs",
	component: Tabs,
	subcomponents: { Tab },
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered" // Centers the component in the Canvas
	},
	argTypes: {
		onChange: {
			action: "onChange",
			table: {
				type: { summary: "function" },
				defaultValue: {
					summary: "(event: React.MouseEvent<HTMLDivElement>, newValue: any) => void"
				}
			}
		},
		value: {
			control: { type: "text" }
		},
		type: {
			control: { type: "inline-radio" },
			options: ["primary", "secondary", "tertiary", "underline", "underline-primary", "button"]
		},
		size: {
			control: { type: "inline-radio" },
			options: ["sm", "md"]
		},
		fullwidth: {
			control: { type: "boolean" }
		}
	}
} as Meta<ITabGroup>;

const Template: StoryFn<ITabGroup> = (args) => {
	const [selectedTab, setSelectedTab] = useState<string>(args.value);

	const handleChange = (event: any, newValue: any) => {
		setSelectedTab(newValue);
	};

	return (
		<Tabs {...args} value={selectedTab} onChange={handleChange}>
			<Tab value="tab1" label="Tab 1" />
			<Tab value="tab2" label="Tab 2" />
			<Tab value="tab3" label="Tab 3" />
			<Tab value="tab4" label="Tab 4" disabled={true} />
		</Tabs>
	);
};

export const ButtonTabs = Template.bind({});
ButtonTabs.args = {
	value: "tab1",
	type: "button",
	size: "sm",
	className: "w-100"
};

export const Underline = Template.bind({});
Underline.args = {
	value: "tab1",
	type: "underline",
	size: "md",
	className: "w-100"
};

export const UnderlinePrimary = Template.bind({});
UnderlinePrimary.args = {
	value: "tab1",
	type: "underline-primary",
	size: "md",
	className: "w-100"
};

export const Secondary = Template.bind({});
Secondary.args = {
	value: "tab1",
	type: "secondary",
	size: "md",
	className: "w-100"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	value: "tab1",
	type: "tertiary",
	size: "md",
	className: "w-100"
};
