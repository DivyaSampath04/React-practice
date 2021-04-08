import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Table, TableContainer, Paper, Button } from "@material-ui/core";
import * as config from "../../utils/config";
import TableData from "./StaffTable/TableData/TableData";
import TableHeader from "./StaffTable/TableHeader/TableHeader";
import TablePage from "../../components/TablePage/TablePage";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddStaff from "./AddStaff/AddStaff";
import "./StaffManagement.css";

class StaffManagement extends React.Component {
  state = {
    add_open: false,
    staff_data: [],
    staff_header: [],
    staff_details : {
        name: "",
        org: "",
        role: "",
        id: "",
        phone: "",
        address: "",
        area: "",
        city: "",
        state: "",
        country: "",
        rec_active: "",
    },
    action: "",
    ref: "",
    title : "",
    startRecordNum : -1,
    recordsPerPage : 5,
    pageNum :0
  };
  componentDidMount = () => {
    this.setState({
      staff_data: config.staff_data,
      staff_header: config.staff_header,
    });
  };
  handleChange = (event) => {
    //this.setState({ [event.target.name]: event.target.value });
    let val = event.target.value;
    let name = event.target.name;
    this.state.staff_details[name] = val;
    this.setState({ staff_details: this.state.staff_details });
  };
  handleChangePage = (event, newPage) =>{
    let recordsPerPage = this.state.recordsPerPage;
		this.setState({startRecordNum : recordsPerPage* newPage});
    this.setState({pageNum :  newPage});
        
  }
  saveChanges = () => {
    let staff_data_copy = [...this.state.staff_data];
    if (this.state.action === "add") {
      var new_data = this.state.staff_details;
      staff_data_copy.push(new_data);
    } else {
      staff_data_copy[this.state.ref] = this.state.staff_details;
    }
    this.setState({ add_open: false, staff_data: staff_data_copy });
  };
  openPopup = (action, id, ref) => {
    this.setState({ add_open: true, action: action, ref: ref });
    if (action === "add") {
      this.setState({
        staff_details : { name: "", org : "",role: "", id: "", phone: "",area : "", address: "", city: "", state: "", country: ""}, title : 'Add Staff'});
    } else {
      action === 'edit' ? this.setState({title : 'Edit Staff'}) : this.setState({title : 'View Staff'})
      this.state.staff_data.forEach((data) => {
        id === data.id &&
          this.setState({
            staff_details : {
              name: data.name,
              org: data.org,
              role: data.role,
              id: data.id,
              phone: data.phone,
              address: data.address,
              area: data.area,
              city: data.city,
              state: data.state,
              country: data.country,
              rec_active: data.rec_active,
            }
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
          <div>
            <p className = 'page-title'>STAFF MANAGEMENT</p>
          </div>
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
          <br />
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="customized table">
              <TableHeader data={this.state.staff_header} />
              <TableData
                data={this.state.staff_data}
                openPopup={this.openPopup}
                deleteData={this.deleteData}
                startRecordNum = {this.state.startRecordNum}
                recordsPerPage = {this.state.recordsPerPage}
              />
            </Table>
          </TableContainer>
          <TablePage
              count ={this.state.staff_data.length}
              recordsPerPage = {this.state.recordsPerPage}
              pageNum = {this.state.pageNum}
              handleChangePage = {this.handleChangePage}
          />
        </div>
        <Footer />
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
