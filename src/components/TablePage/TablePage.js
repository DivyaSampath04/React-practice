import React from 'react';
import {TablePagination} from "@material-ui/core";

const tablePage = (props) => {
    
    console.log(props.searchFlag,props.newData,props.data);
    return (
        <TablePagination
              component="div"
              count= {props.count}
              rowsPerPageOptions={[5]}
              rowsPerPage={props.recordsPerPage}
              page={props.pageNum}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={props.handleChangePage}
            />
    )
            
}

export default tablePage;