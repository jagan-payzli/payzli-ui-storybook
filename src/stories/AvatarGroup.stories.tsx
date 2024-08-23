// src/components/Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarGroup, IAvatarGroup, ITabGroup, Tab, Tabs } from "payzli-ui"; // Adjust the import path as needed
import { useState } from "react";

export default {
	title: "payzli-ui/Components/AvatarGroup",
	component: AvatarGroup,
	subcomponents: { Avatar },
	tags: ["autodocs", "test"],
	parameters: {
		layout: "centered" // Centers the component in the Canvas
	},
	argTypes: {
		children: {
			control: { type: "object" }
		},
		className: {
			control: { type: "text" }
		},
		max: {
			control: { type: "number" }
		},
		onClick: {
			action: "onClick"
		},
		handleClickMore: {
			action: "handleClickMore"
		},
		handleAddNew: {
			action: "handleAddNew"
		},
		size: {
			control: { type: "inline-radio" },
			options: ["xs", "sm", "md", "lg", "xl", "2xl"]
		},
		showAddIcon: {
			control: { type: "boolean" }
		},
		showTooltip: {
			control: { type: "boolean" }
		},
		plusIconSize: {
			control: { type: "text" }
		},
		plusIconWidth: {
			control: { type: "text" }
		},
		plusIconHeight: {
			control: { type: "text" }
		}
	}
} as Meta<IAvatarGroup>;

const Template: StoryFn<IAvatarGroup> = (args) => {
	return (
		<AvatarGroup
			{...args}
			onClick={() => alert("Avatar Clicked")}
			handleAddNew={() => alert("Add New Clicked")}
			handleClickMore={() => alert("More Option Clicked")}
			size="md"
			showAddIcon={true}
			plusIconHeight=""
			plusIconWidth=""
			plusIconSize=""
		>
			<Avatar size={"md"} src_text={"Kapil Prashad"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Aman Rawat"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Revanth Dodla"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Snehal Agawane"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Taha Shahbuddin"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Alexey Piskarev"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Sumantha Relker"} id={""} image_hash={""} mime_type={""} />
			<Avatar size={"md"} src_text={"Ronak Chatawel"} id={""} image_hash={""} mime_type={""} />
		</AvatarGroup>
	);
};
const Template2: StoryFn<IAvatarGroup> = (args) => {
	return (
		<AvatarGroup
			{...args}
			onClick={() => alert("Avatar Clicked")}
			handleAddNew={() => alert("Add New Clicked")}
			handleClickMore={() => alert("More Option Clicked")}
		>
			<Avatar
				size={"md"}
				image_hash="5f5b174c8ab6c732caffd82dfd54e72c50b5c686"
				id={""}
				mime_type={"image/png"}
				apiRoutePrefix="https://dev.connect.payzli.com/api/v1/Auth/get_file"
				src_text={""}
			/>
			<Avatar
				size={"md"}
				image_hash="5f5b174c8ab6c732caffd82dfd54e72c50b5c686"
				id={""}
				mime_type={"image/png"}
				apiRoutePrefix="https://dev.connect.payzli.com/api/v1/Auth/get_file"
				src_text={""}
			/>
			<Avatar
				size={"md"}
				image_hash="5f5b174c8ab6c732caffd82dfd54e72c50b5c686"
				id={""}
				mime_type={"image/png"}
				apiRoutePrefix="https://dev.connect.payzli.com/api/v1/Auth/get_file"
				src_text={""}
			/>
			<Avatar
				size={"md"}
				image_hash="5f5b174c8ab6c732caffd82dfd54e72c50b5c686"
				id={""}
				mime_type={"image/png"}
				apiRoutePrefix="https://dev.connect.payzli.com/api/v1/Auth/get_file"
				src_text={""}
			/>
			<Avatar
				size={"md"}
				image_hash="5f5b174c8ab6c732caffd82dfd54e72c50b5c686"
				id={""}
				mime_type={"image/png"}
				apiRoutePrefix="https://dev.connect.payzli.com/api/v1/Auth/get_file"
				src_text={""}
			/>
		</AvatarGroup>
	);
};

export const TextAvatarGroup = Template.bind({});
TextAvatarGroup.args = {
	max: 3,
	size: "md",
	showAddIcon: true,
	showTooltip: true
};

export const ImageAvatarGroup = Template2.bind({});
ImageAvatarGroup.args = {
	max: 3,
	size: "md",
	showAddIcon: true,
	showTooltip: true
};

export const WithoutAddIcon = Template2.bind({});
WithoutAddIcon.args = {
	max: 3,
	size: "md",
	showAddIcon: false
};
