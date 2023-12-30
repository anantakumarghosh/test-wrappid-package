// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeInput } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreInput(props) {
  const { error, helperText } = props;

  return (
    <CoreBox>
      <NativeInput {...props} />

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}
CoreInput.validProps = [
  {
    description:
      "This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the specification.",
    name: "autoComplete",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "If true, the input element is focused during the first mount.",
    name: "autoFocus",
    types: [{ default: "", type: "bool" }],
  },
  {
    description:
      "Override or extend the styles applied to the component.See CSS API below for more details.",
    name: "classes",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide. The prop defaults to the value ('primary') inherited from the parent FormControl component.",
    name: "color",
    types: [{ default: "", type: "string", validValues: ['primary', 'secondary'] }],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name: "components",
    types: [
      { default: "{}", type: "object", validValues: ["{ Input?: elementType, Root?: elementType }"] },
    ],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name: "componentsProps",
    types: [{ default: "{}", type: "object", validValues: ["{ input?: object, root?: object }"] }],
  },
  {
    description: "The default value. Use when the component is not controlled.",
    name: "defaultValue",
    types: [{ default: "", type: "any" }],
  },
  {
    description:
      "If true, the component is disabled. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name: "disabled",
    types: [{ default: "", type: "bool" }],
  },
  {
    description: "If true, the input will not have an underline.",
    name: "disableUnderline",
    types: [{ default: "", type: "bool" }],
  },
  {
    description: "End InputAdornment for this component.",
    name: "endAdornment",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "If true, the input will indicate an error. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name: "error",
    types: [{ default: "", type: "bool" }],
  },
  {
    description:
      "If true, the input will take up the full width of its container.",
    name: "fullWidth",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The id of the input element.",
    name: "id",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "The component used for the input element. Either a string to use a HTML element or a component.",
    name: "inputComponent",
    types: [{ default: "input'", type: "elementType" }],
  },
  {
    description: "Attributes applied to the input element.",
    name: "inputProps",
    types: [{ default: "{}", type: "object" }],
  },
  {
    description: "Pass a ref to the input element.",
    name: "inputRef",
    types: [{ default: "", type: "ref" }],
  },
  {
    description:
      "If dense, will adjust vertical spacing. This is normally obtained via context from FormControl. The prop defaults to the value ('none') inherited from the parent FormControl component.",
    name: "margin",
    types: [{ default: "", type: "dense'| 'none'" }],
  },
  {
    description:
      "Maximum number of rows to display when multiline option is set to true.",
    name: "maxRows",
    types: [{ default: "", type: "number| string" }],
  },
  {
    description:
      "Minimum number of rows to display when multiline option is set to true.",
    name: "minRows",
    types: [{ default: "", type: "number| string" }],
  },
  {
    description: "If true, a TextareaAutosize element is rendered.",
    name: "multiline",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "Name attribute of the input element.",
    name: "name",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "Callback fired when the value is changed.Signature:function(event: React.ChangeEvent) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (string).",
    name: "onChange",
    types: [{ default: "", type: "func" }],
  },
  {
    description:
      "The short hint displayed in the input before the user enters a value.",
    name: "placeholder",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "It prevents the user from changing the value of the field (not from interacting with the field).",
    name: "readOnly",
    types: [{ default: "", type: "bool" }],
  },
  {
    description:
      "If true, the input element is required. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name: "required",
    types: [{ default: "", type: "bool" }],
  },
  {
    description:
      "Number of rows to display when multiline option is set to true.",
    name: "rows",
    types: [{ default: "", type: "number| string" }],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the componentsProps prop, which will be deprecated in the future.",
    name: "slotProps",
    types: [{ default: "{}", type:"object" ,validProps:"{ input?: object, root?: object }" }],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the components prop, which will be deprecated in the future.",
    name: "slots",
    types: [
      { default: "{}", type: "object", validValues: "{ input?: elementType, root?: elementType }" },
    ],
  },
  {
    description: "Start InputAdornment for this component.",
    name: "startAdornment",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "Type of the input element. It should be a valid HTML5 input type.",
    name: "type",
    types: [{ default: "text", type: "string" }],
  },
  {
    description:
      "The value of the input element, required for a controlled component.",
    name: "value",
    types: [{ default: "", type: "any" }],
  },
];
CoreInput.invalidProps = [];
