import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

class TableData extends React.Component {
    render(){
        return(
            <>
            <TableBody>
                {this.props.data && this.props.data.map((dt,i) => 
                    <TableRow key = {i}>
                        <TableCell>{dt.id}</TableCell>
                        <TableCell>{dt.name}</TableCell>
                        <TableCell>{dt.gender}</TableCell>
                        <TableCell>{dt.phone}</TableCell>
                        <TableCell>{dt.created}</TableCell>
                        <TableCell><EditIcon /></TableCell>
                        <TableCell><DeleteOutlineOutlinedIcon /></TableCell>
                    </TableRow>
                )}
            </TableBody>
            </>
        );
    }
}

export default TableData;