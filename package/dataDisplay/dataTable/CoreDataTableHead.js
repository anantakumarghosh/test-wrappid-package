// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { MEDIUM_WINDOW_WIDTH } from "../../../config/constants";
import CoreClasses from "../../../styles/CoreClasses";
import { getLabel } from "../../../utils/stringUtils";
import CoreCheckbox from "../../inputs/CoreCheckbox";
import CoreTableHead from "../CoreTableHead";
import CoreTableHeadCell from "../CoreTableHeadCell";
import CoreTableHeadRow from "../CoreTableHeadRow";
import CoreTableSortLabel from "../CoreTableSortLabel";
import CoreTypographyBody1 from "../CoreTypographyBody1";

export default function CoreDataTableHead(props) {
  const {
    tableHeadProps,
    tableUUID,
    // tableColumnsShown,
    tableColumnsToShow,
    selectable = true,
    sortable = true,
    rows,
    columns,
    // filteredColumns,
    // eslint-disable-next-line no-unused-vars
    showAuditColumns,
    // eslint-disable-next-line no-unused-vars
    auditColumnsKey,
    order,
    onRequestSort,
    selected,
    handleRowSelectAll,
    _showDetailsPane,
  } = props;

  return (
    <CoreTableHead {...tableHeadProps}>
      {/* Table Column Head */}
      <CoreTableHeadRow>
        {columns &&
        columns.length > 0 &&
        tableColumnsToShow &&
        tableColumnsToShow.length > 0 ? (
            <>
              {/* Selectable */}
              {selectable && (
                <CoreTableHeadCell
                  align={"center"}
                  sx={{ maxWidth: "32px" }}
                  styleClasses={[CoreClasses.PADDING.P0]}
                >
                  <CoreCheckbox
                    key={`${tableUUID}-selectall-row`}
                    checked={rows.length !== 0 && rows.length === selected.length}
                    onChange={(err) => {
                      handleRowSelectAll(err);
                    }}
                  />
                </CoreTableHeadCell>
              )}

              {/* Table Head - Columns */}
              {_showDetailsPane || window.innerWidth < MEDIUM_WINDOW_WIDTH ? (
                <CoreTableHeadCell styleClasses={[CoreClasses.PADDING.PX1]}>
                  {getLabel(tableUUID)}
                </CoreTableHeadCell>
              ) : (
                <>
                  {columns
                    ?.filter((col) => {
                      return tableColumnsToShow?.includes(col.id);
                    })
                    // eslint-disable-next-line no-unused-vars
                    ?.map((column, columnIndex) => {
                      return (
                        <CoreTableHeadCell
                          key={tableUUID + "-th-" + column.id}
                          align={
                            column.id === "action"
                              ? "center"
                              : column?.align || "left"
                          }
                          sortDirection={
                            sortable && order[column.id] ? order : false
                          }
                        >
                          {sortable && column?.sortable !== false ? (
                            <CoreTableSortLabel
                              active={Object.keys(order).includes(column.id)}
                              direction={
                                Object.keys(order).includes(column.id)
                                  ? order[column.id]
                                  : "asc"
                              }
                              onClick={(err) => {
                                // eslint-disable-next-line no-prototype-builtins
                                let orderDirection = order && order.hasOwnProperty(column.id)
                                  ? order[column.id] === "asc" && "desc"
                                  : "asc";

                                onRequestSort(err, column.id, orderDirection);
                              }}
                            >
                              <CoreTypographyBody1 noWrap={true}>
                                {column.label}
                              </CoreTypographyBody1>
                            </CoreTableSortLabel>
                          ) : (
                            <CoreTypographyBody1>
                              {column.label}
                            </CoreTypographyBody1>
                          )}
                        </CoreTableHeadCell>
                      );
                    })}
                </>
              )}
            </>
          ) : (
            <>
              <CoreTableHeadCell>
              Please select a column to show data
              </CoreTableHeadCell>
            </>
          )}
      </CoreTableHeadRow>
    </CoreTableHead>
  );
}
