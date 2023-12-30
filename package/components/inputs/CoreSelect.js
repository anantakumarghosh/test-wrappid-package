// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSelect } from "@wrappid/native";

import CoreFormControl from "./CoreFormControl";
import CoreInputLabel from "./CoreInputLabel";

export default function CoreSelect(props) {
  const { label } = props;

  return (
    <CoreFormControl>
      <CoreInputLabel id="demo-simple-select-label">{label}</CoreInputLabel>

      <NativeSelect {...props} />
    </CoreFormControl>
  );
}
CoreSelect.validProps = [
  {
    description:
      "If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.",
    name: "autoWidth",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "The option elements to populate the select with. Can be some MenuItem when native is false and option when native is true.⚠️The MenuItem elements must be direct descendants when native is false.",
    name: "children",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "Override or extend the styles applied to the component.See CSS API below for more details.",
    name: "classes",
    types: [{ default: "{}", type: "object" }],
  },
  {
    description:
      "If true, the component is initially open. Use when the component open state is not controlled (i.e. the open prop is not defined). You can only use it when the native prop is false (default).",
    name: "defaultOpen",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The default value. Use when the component is not controlled.",
    name: "defaultValue",
    types: [{ default: "", type: "any" }],
  },
  {
    description:
      "If true, a value is displayed even if no items are selected.In order to display a meaningful value, a function can be passed to the renderValue prop which returns the value to be displayed when no items are selected.⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value. The label should either be hidden or forced to a shrunk state.",
    name: "displayEmpty",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "The icon that displays the arrow.",
    name: "IconComponent",
    types: [{ default: "ArrowDropDownIcon", type: "elementType" }],
  },
  {
    description:
      "The id of the wrapper element or the select element when native.",
    name: "id",
    types: [{ default: "", type: "string" }],
  },
  {
    description:
      "An Input element; does not have to be a material-ui specific Input.",
    name: "input",
    types: [{ default: "", type: "element" }],
  },
  {
    description:
      "Attributes applied to the input element. When native is true, the attributes are applied on the select element.",
    name: "inputProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description: "See OutlinedInput#label",
    name: "label",
    types: [{ default: "", type: "node" }],
  },
  {
    description:
      "The ID of an element that acts as an additional label. The Select will be labelled by the additional label and the selected value.",
    name: "labelId",
    types: [{ default: "", type: "string" }],
  },
  {
    description: "Props applied to the Menu element.",
    name: "MenuProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "If true, value must be an array and the menu will support multiple selections.",
    name: "multiple",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description: "If true, the component uses a native select element.",
    name: "native",
    types: [{ default: "FALSE", type: "bool" }],
  },
  {
    description:
      "Callback fired when a menu item is selected.Signature:function(event: SelectChangeEvent, child?: object) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (any). Warning: This is a generic event, not a change event, unless the change event is caused by browser autofill.child The react element that was selected when native is false (default).",
    name: "onChange",
    types: [{ default: "", type: "func" }],
  },
  {
    description:
      "Callback fired when the component requests to be closed. Use it in either controlled (see the open prop), or uncontrolled mode (to detect when the Select collapses).Signature:function(event: object) => voidevent The event source of the callback.",
    name: "onClose",
    types: [{ default: "", type: "func" }],
  },
  {
    description:
      "Callback fired when the component requests to be opened. Use it in either controlled (see the open prop), or uncontrolled mode (to detect when the Select expands).Signature:function(event: object) => voidevent The event source of the callback.",
    name: "onOpen",
    types: [{ default: "", type: "func" }],
  },
  {
    description:
      "If true, the component is shown. You can only use it when the native prop is false (default).",
    name: "open",
    types: [{ default: "", type: "bool" }],
  },
  {
    description:
      "Render the selected value. You can only use it when the native prop is false (default).Signature:function(value: any) => ReactNodevalue The value provided to the component.",
    name: "renderValue",
    types: [{ default: "", type: "func" }],
  },
  {
    description: "Props applied to the clickable div element.",
    name: "SelectDisplayProps",
    types: [{ default: "", type: "object" }],
  },
  {
    description:
      "The input value. Providing an empty string will select no options. Set to an empty string '' if you don't want any of the available options to be selected.If the value is an object it must have reference equality with the option in order to be selected. If the value is not an object, the string representation must match with the string representation of the option in order to be selected.",
    name: "value",
    types: [{ default: "", type: "'' | any" }],
  },
  {
    description: "The variant to use.",
    name: "variant",
    types: [{ default: "outlined'", type: "string", validValues: ['filled', 'outlined','standard'] }],
  },
];
CoreSelect.invalidProps = ["sx", "classes"];
