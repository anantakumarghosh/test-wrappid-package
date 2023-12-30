// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreH from "./CoreH";
import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreH6(props) {
  props = sanitizeComponentProps(CoreH6, props);
  const {
    align, gutterBottom, noWrap, paragraph, component, variant = "h6", children 
  } = props;
  
  return (
    <CoreH
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      component={component}
      variant={variant}
      __level="h6">
      {children}
    </CoreH>
  );
}

CoreH6.validProps = [
  {
    description: "Set the text-align on the component.",
    name       : "align",
    types      : [
      {
        default    : "inherit",
        type       : "string",
        validValues: [
          "center",
          "inherit",
          "justify",
          "left",
          "right"
        ]
      }
    ]
  },
  {
    description: "If true, the text will have a bottom margin.",
    name       : "gutterBottom",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).",
    name       : "noWrap",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "If true, the element will be a paragraph element.",
    name       : "paragraph",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "string" }]
  },
  {
    description: "Applies the theme typography styles.",
    name       : "variant",
    types      : [
      {
        default: "h6",
        type   : "string"
      }
    ]
  }
];
CoreH6.invalidProps = ["sx", "classes"];