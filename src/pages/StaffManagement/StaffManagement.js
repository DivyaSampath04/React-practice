import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Table,TableContainer,Paper, Button} from "@material-ui/core";
import * as config from "../../utils/config";
import TableData from "./StaffTable/TableData/TableData";
import TableHeader from "./StaffTable/TableHeader/TableHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./StaffManagement.css";

class StaffManagement extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className = 'full-view'>
                    <div className = 'flex-space-between'>
                        <SearchBar />
                        <Button variant = 'contained' color = 'primary'>Add</Button>
                    </div>
                   <TableContainer component={Paper} >
                    <Table stickyHeader aria-label = 'customized table' >
                    <TableHeader
                      data = {config.staff_header}
                    />
                    <TableData 
                        data = {config.staff_data}
                    />
                    </Table>
                    </TableContainer>
       
                </div>
            </div>
        )
    }
}

export default StaffManagement;
