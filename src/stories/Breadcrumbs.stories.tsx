// src/components/Button.stories.tsx
import { CaretRight, House, LineVertical } from "@phosphor-icons/react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Breadcrumbs, IBreadcrumbs } from "payzli-ui"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/Breadcrumbs",
	component: Breadcrumbs,
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
		breadcrumbs: {
			control: { type: "object" },
			table: {
				type: { summary: "IBreadcrumb[]" },
				defaultValue: {
					summary: "[]"
				}
			}
		},
		type: {
			control: { type: "inline-radio" },
			options: ["primary", "secondary", "tertiary"]
		},
		seprator: {
			control: { type: "object" },
			table: {
				type: { summary: "ReactNode" },
				defaultValue: {
					summary: "null"
				}
			}
		},
		homeIcon: {
			control: { type: "object" },
			table: {
				type: { summary: "ReactNode" },
				defaultValue: {
					summary: "null"
				}
			}
		},
		homeRoute: {
			control: { type: "text" }
		},
		className: {
			control: { type: "text" }
		}
	}
} as Meta<IBreadcrumbs>;

const breadcrumbs = [
	{
		title: "Homepage",
		path: "/residuals",
		active: false
	},
	{
		title: "Merchants",
		path: "/merchants",
		active: false
	},
	{
		title: "Merchant Profile",
		path: "/merchants/profile",
		active: true
	}
];

type Story = StoryObj<IBreadcrumbs>;

export const PrimaryBreadcrumb: Story = {
	name: "Primary Breadcrumb",
	args: {
		type: "primary",
		breadcrumbs: breadcrumbs,
		homeIcon: <House />,
		seprator: <CaretRight />,
		homeRoute: "/",
		className: ""
	},
	render: (args) => <Breadcrumbs {...args} />
};

export const SecondaryBreadcrumb: Story = {
	name: "Secondary Breadcrumb",
	args: {
		type: "secondary",
		breadcrumbs: breadcrumbs,
		homeIcon: <House />,
		seprator: <CaretRight />,
		homeRoute: "/",
		className: ""
	},
	render: (args) => <Breadcrumbs {...args} />
};

export const TertiaryBreadcrumb: Story = {
	name: "Tertiary Breadcrumb",
	args: {
		type: "tertiary",
		breadcrumbs: breadcrumbs,
		homeIcon: <House />,
		seprator: <CaretRight />,
		homeRoute: "/",
		className: ""
	},
	render: (args) => <Breadcrumbs {...args} />
};

export const NoHomeBreadcrumb: Story = {
	name: "Different Separator Breadcrumb",
	args: {
		type: "primary",
		breadcrumbs: breadcrumbs,
		homeIcon: <House />,
		seprator: <LineVertical style={{ transform: "rotate(25deg)" }} />,
		homeRoute: "/",
		className: ""
	},
	render: (args) => <Breadcrumbs {...args} />
};
