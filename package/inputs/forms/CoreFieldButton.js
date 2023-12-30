// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { createFormButtonProps } from "@wrappid/core";

import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreIconButton from "../../inputs/CoreIconButton";

export default function CoreFieldButton(props) {
  const { element, formikprops, handleButtonCLick, submitLoading } = props;
  let buttonProps = {
    ...createFormButtonProps(element, formikprops, handleButtonCLick),
    disabled: submitLoading,
  };

  // -- console.log("ICON BUTTON ", buttonProps);

  return (
    <CoreIconButton
      disabled={buttonProps.disabled ? true : false}
      onClick={
        element.actionType === "submit"
          ? formikprops?.handleSubmit
          : buttonProps?.OnClick
      }
    >
      <CoreIcon fontSize="small">
        {element.icon
          ? element.icon
          : element.actionType === "submit"
            ? "save"
            : element.actionType === "button"
              ? "cancel"
              : ""}
      </CoreIcon>
    </CoreIconButton>
  );
}
