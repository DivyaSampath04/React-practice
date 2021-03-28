import React from "react";
import { TableBody, TableCell, TableRow, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

class TableData extends React.Component {
  render() {
    return (
      <>
        <TableBody>
          {this.props.data &&
            this.props.data.map((dt, i) => (
              <TableRow key={i}>
                <TableCell>{dt.id}</TableCell>
                <TableCell>{dt.name}</TableCell>
                <TableCell>{dt.gender}</TableCell>
                <TableCell>{dt.phone}</TableCell>
                <TableCell>
                  <EditIcon
                    className="icon-style"
                    onClick={() => this.props.openPopup("edit", dt.id, i)}
                  />
                </TableCell>
                <TableCell>
                  <DeleteOutlineOutlinedIcon
                    className="icon-style"
                    onClick={() => this.props.deleteData(i)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </>
    );
  }
}

export default TableData;
