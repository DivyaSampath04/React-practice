import React from "react";
import { Typography, TableHead, TableCell, TableRow } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

class TableHeader extends React.Component {
  render() {
    return (
      <TableHead className="thBorder">
        <TableRow>
          {this.props.data &&
            this.props.data.map((dt, i) => (
              <TableCell key={i}>
                <div className="flex-text-icon">
                  {dt.name}
                  {dt.sort_icon ? (
                    dt.sort_order ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )
                  ) : null}
                </div>
              </TableCell>
            ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default TableHeader;
