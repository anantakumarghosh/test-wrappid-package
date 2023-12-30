import * as React from "react";

import PropTypes from "prop-types";

import TableBulkAction from "./CoreTableBulkAction";
import config from "../../../config/config";
import CoreCheckbox from "../../inputs/CoreCheckbox";
import CoreIconButton from "../../inputs/CoreIconButton";
import CoreFormControlLabel from "../../inputs/forms/CoreFormControlLabel";
import CoreFormGroup from "../../inputs/forms/CoreFormGroup";
import CoreBox from "../../layouts/CoreBox";
import CoreToolBar from "../../surfaces/CoreToolbar";
import CorePopover from "../../utils/CorePopover";
import CoreIcon from "../CoreIcon";
import CoreTooltip from "../CoreTooltip";
import CoreTypographyBody1 from "../CoreTypographyBody1";

export default function CoreTableToolBar(props) {
  const { HandleColumnFilter, columns, bulkActions, selected } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <CoreToolBar
      sx={{
        pl: { sm: 2 },
        pr: { sm: 1, xs: 1 },
        ...(selected.length > 0 && { bgcolor: config.color.primaryTextColorLight }),
      }}
    >
      {selected.length > 0 ? (
        <CoreTypographyBody1
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selected.length} selected
        </CoreTypographyBody1>
      ) : null}

      {selected.length > 0 ? (
        <TableBulkAction selected={selected} bulkActions={bulkActions} />
      ) : (
        <CoreBox component="div" sx={{ flex: "100%", textAlign: "right" }}>
          <CoreTooltip title="Filter Columns">
            <CoreIconButton onClick={handleOpen}>
              <CoreIcon>filter_list</CoreIcon>
            </CoreIconButton>
          </CoreTooltip>

          <CorePopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              horizontal: "left",
              vertical  : "bottom",
            }}
          >
            {props?.headCells?.map((col, index) => (
              <CoreFormGroup row={true} key={`CoreFormGroup-${col.id}-${index}`}>
                <CoreFormControlLabel
                  control={
                    <CoreCheckbox
                      onChange={(err) => {
                        HandleColumnFilter(err, col);
                      }}
                      checked={!columns.includes(col.id)}
                    />
                  }
                  label={col.label}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 16, marginLeft: 2 } }}
                />
              </CoreFormGroup>
            ))}
          </CorePopover>
        </CoreBox>
      )}
    </CoreToolBar>
  );
}

CoreTableToolBar.propTypes = { selected: PropTypes.array.isRequired };
