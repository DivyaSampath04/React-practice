import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Table, TableContainer, Paper, Button } from "@material-ui/core";
import * as config from "../../utils/config";
import TableData from "./StaffTable/TableData/TableData";
import TableHeader from "./StaffTable/TableHeader/TableHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddStaff from "./AddStaff/AddStaff";
import "./StaffManagement.css";

class StaffManagement extends React.Component {
  state = {
    add_open: false,
    staff_data: [],
    staff_header: [],
    id: "",
    name: "",
    phone: "",
    gender: "",
    action: "",
    ref: "",
  };
  componentDidMount = () => {
    this.setState({
      staff_data: config.staff_data,
      staff_header: config.staff_header,
    });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  saveChanges = () => {
    let staff_data_copy = [...this.state.staff_data];
    if (this.state.action === "add") {
      var new_data = {
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        gender: this.state.gender,
      };
      staff_data_copy.push(new_data);
    } else {
      staff_data_copy[this.state.ref] = {
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        gender: this.state.gender,
      };
    }
    this.setState({ add_open: false, staff_data: staff_data_copy });
  };
  openPopup = (action, id, ref) => {
    this.setState({ add_open: true, action: action, ref: ref });
    if (action === "add") {
      this.setState({ id: "", name: "", phone: "", gender: "" });
    } else {
      config.staff_data.forEach((data) => {
        id === data.id &&
          this.setState({
            id: data.id,
            name: data.name,
            phone: data.phone,
            gender: data.gender,
          });
      });
    }
  };
  closePopup = () => {
    this.setState({ add_open: false });
  };
  deleteData = (index) => {
    let deletedData = [...this.state.staff_data];
    deletedData.splice(index, 1);
    this.setState({ staff_data: deletedData });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="full-view">
          <div className="flex-space-between">
            <SearchBar />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.openPopup("add")}
            >
              Add
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="customized table">
              <TableHeader data={this.state.staff_header} />
              <TableData
                data={this.state.staff_data}
                openPopup={this.openPopup}
                deleteData={this.deleteData}
              />
            </Table>
          </TableContainer>
        </div>
        <AddStaff
          data={this.state}
          handleChange={this.handleChange}
          saveChanges={this.saveChanges}
          cancelChanges={this.cancelChanges}
          closePopup={this.closePopup}
        />
      </div>
    );
  }
}

export default StaffManagement;
