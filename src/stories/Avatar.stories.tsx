// src/components/Button.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Avatar, Button, IAvatar, IButtonProps } from "payzli-ui"; // Adjust the import path as needed

export default {
	title: "payzli-ui/Components/Avatar",
	component: Avatar,
	tags: ["autodocs", "test"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	argTypes: {
		size: {
			control: { type: "inline-radio" },
			options: ["xs", "sm", "md", "lg", "xl", "2xl"]
		},
		statusIcon: {
			control: { type: "select" },
			options: ["online", "offline", "verified", "company", "merchant", "user", "admin", "partner", "<JSX.Element>"]
		},
		src: {
			control: { type: "text" }
		},
		src_text: {
			control: { type: "text" }
		},
		placeholderIcon: {
			control: { type: "boolean" }
		},
		onClick: {
			action: "clicked"
		},
		id: {
			control: { type: "text" }
		},
		image_hash: {
			control: { type: "text" }
		},
		mime_type: {
			control: { type: "text" }
		},
		apiRoutePrefix: {
			control: { type: "text" }
		},
		height: {
			control: { type: "text" }
		},
		width: {
			control: { type: "text" }
		},
		alt: {
			control: { type: "text" }
		},
		className: {
			control: { type: "text" }
		},
		style: {
			control: { type: "object" }
		},
		tooltip: {
			control: { type: "text" }
		},
		user_type: {
			control: { type: "text" }
		},
		parentClass: {
			control: { type: "text" }
		},
		iconSize: {
			control: { type: "text" }
		},
		statusIconSize: {
			control: { type: "text" }
		},
		loading: {
			control: { type: "inline-radio" },
			options: ["lazy", "eager"]
		}
	}
} as Meta<IAvatar>;
type Story = StoryObj<IAvatar>;

export const DefaultIcon: Story = {
	// 👇 Rename this story
	name: "Default Icon",
	args: {
		onClick: (event: any) => alert("Avatar Clicked"),
		size: "2xl",
		id: "",
		image_hash: "",
		mime_type: "",
		height: "24px",
		width: "24px",
		placeholderIcon: true
	}
};
export const NameIcon: Story = {
	// 👇 Rename this story
	name: "With Name",
	args: {
		onClick: (event: any) => alert("Avatar Clicked"),
		size: "2xl",
		src_text: "Kapil Prashad",
		id: "",
		image_hash: "",
		mime_type: "",
		height: "24px",
		width: "24px",
		placeholderIcon: false
	}
};

export const PayzliImage: Story = {
	// 👇 Rename this story
	name: "Image Hash",
	args: {
		onClick: (event: any) => alert("Avatar Clicked"),
		size: "2xl",
		image_hash: "5f5b174c8ab6c732caffd82dfd54e72c50b5c686",
		mime_type: "image/png",
		apiRoutePrefix: "https://qa.connect.payzli.com/api/v1/Auth/get_file",
		height: "24px",
		width: "24px"
	}
};
export const OnlinePayzliImage: Story = {
	// 👇 Rename this story
	name: "Online Avatar",
	args: {
		onClick: (event: any) => alert("Avatar Clicked"),
		size: "2xl",
		image_hash: "5f5b174c8ab6c732caffd82dfd54e72c50b5c686",
		mime_type: "image/png",
		apiRoutePrefix: "https://qa.connect.payzli.com/api/v1/Auth/get_file",
		statusIcon: "online",
		height: "24px",
		width: "24px"
	}
};

export const hrefPayzliImage: Story = {
	// 👇 Rename this story
	name: "with src url",
	args: {
		onClick: (event: any) => alert("Avatar Clicked"),
		size: "2xl",
		src: "https://lh3.googleusercontent.com/ogw/AF2bZyiblb3IWMhXzI86zV3P3aEr2qfPacKWrGT_PB1bDxCR=s64-c-mo",
		image_hash: "",
		mime_type: "",
		apiRoutePrefix: "",
		statusIcon: "online",
		height: "24px",
		width: "24px"
	}
};
