// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTab } from "@wrappid/native";

export default function CoreTab(props) {
  return <NativeTab {...props} />;
}

CoreTab.validProps = [
  {
    description: "If true, the component is disabled.",
    name: "disabled",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "If true, the keyboard focus ripple is disabled.",
    name: "disableFocusRipple",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "If true, the ripple effect is disabled.⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.",
    name: "disableRipple",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The icon to display.",
    name: "icon",
    types: [
      { default: "", type: "element string" },
    ],
  },
  {
    description: "The position of the icon relative to the label.",
    name: "iconPosition",
    types: [
      {
        default: "top'",
        type: "string",
        validValues: ["bottom", "end", "start", "top"],
      },
    ],
  },
  {
    description: "The label element.",
    name: "label",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "You can provide your own value. Otherwise, we fallback to the child position index.",
    name: "value",
    types: [{ default: "", type: "any" }],
  },
  {
    description:
      "Tab labels appear in a single row. They can use a second line if needed.",
    name: "wrapped",
    types: [{ default: "FALSE", type: "bool" }],
  },
];
CoreTab.invalidProps = ["sx", "classes"];
