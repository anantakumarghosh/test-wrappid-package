// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { CoreApplicationContext } from "../../config/contextHandler";
import CoreTypographyCaption from "../dataDisplay/CoreTypographyCaption";

export default function CoreAppVersion(props) {
  const { noTitle = false } = props;
  const { version } = React.useContext(CoreApplicationContext);

  return <CoreTypographyCaption>{!noTitle && "Application Version: "}{`v${version || "unknown"}`}</CoreTypographyCaption>;
}
