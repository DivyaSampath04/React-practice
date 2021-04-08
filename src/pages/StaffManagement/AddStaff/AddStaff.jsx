import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControlLabel,
  Radio,
  Divider,
  Button,
  RadioGroup,
  MenuItem,
  InputLabel,
  Select,
  FormControl
} from "@material-ui/core";
import "./AddStaff.css";
import CloseIcon from "@material-ui/icons/Close";

class AddStaff extends React.Component {
  render() {
    return (
      <>
        <Dialog open={this.props.data.add_open} className = 'pop-up-staff'>
          <DialogTitle className="add-staff-title">
            <div className="flex-space-between">
              <p className="pop-title">{this.props.data.title}</p>
              <CloseIcon
                className="icon-style"
                style={{ color: "white" }}
                onClick={this.props.closePopup}
              />
            </div>
          </DialogTitle>
          <DialogContent>
            <div>
              {this.props.data.action === 'edit' ||  this.props.data.action === 'add'? 
              <>
              <div className="flex-space-between">
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={this.props.data.staff_details.name}
                  onChange={(event) => this.props.handleChange(event)}
                />
               
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Organization"
                  variant="outlined"
                  name="org"
                  value={this.props.data.staff_details.org}
                  onChange={(event) => this.props.handleChange(event)}
                />
                </div>
                <div className="flex-space-between">
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Role"
                  variant="outlined"
                  name="role"
                  value={this.props.data.staff_details.role}
                  onChange={(event) => this.props.handleChange(event)}
                />                
            
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Email Id"
                  variant="outlined"
                  name="id"
                  value={this.props.data.staff_details.id}
                  onChange={(event) => this.props.handleChange(event)}
                />
              </div>
              <div className="flex-space-between">

                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Phone no."
                  variant="outlined"
                  name="phone"
                  value={this.props.data.staff_details.phone}
                  onChange={(event) => this.props.handleChange(event)}
                />
             
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Address"
                  variant="outlined"
                  name="address"
                  value={this.props.data.staff_details.address}
                  onChange={(event) => this.props.handleChange(event)}
                />    
              </div>
              <div className="flex-space-between">

                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Area"
                  variant="outlined"
                  name="area"
                  value={this.props.data.staff_details.area}
                  onChange={(event) => this.props.handleChange(event)}
                />          


                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="City/Town"
                  variant="outlined"
                  name="city"
                  value={this.props.data.staff_details.city}
                  onChange={(event) => this.props.handleChange(event)}
                />        
              </div>
              <div className="flex-space-between">
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="State"
                  variant="outlined"
                  name="state"
                  value={this.props.data.staff_details.state}
                  onChange={(event) => this.props.handleChange(event)}
                />

                {/*<TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Country"
                  variant="outlined"
                  name="country"
                  value={this.props.data.staff_details.country}
                  onChange={(event) => this.props.handleChange(event)}
                />    */}
                <FormControl   className = 'input-field'>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                
                <Select
              
                  name="country"
                  value={this.props.data.staff_details.country}
                  onChange={(event) => this.props.handleChange(event)}
                >
                  <MenuItem value='India'>India</MenuItem>
                  <MenuItem value='Singapore'>Singapore</MenuItem>
                  <MenuItem value='Malaysia'>Malaysia</MenuItem>
                </Select>
              </FormControl>              
              </div>
              <div className="flex-space-between">                
                <div className = 'button-field'>
                  <RadioGroup row  name="rec_active" defaultValue={this.props.data.staff_details.rec_active} onChange={(event) => this.props.handleChange(event)}>
                    <FormControlLabel defaultChecked={this.props.data.staff_details.rec_active === 'Active'} value="Active" control={<Radio />} label="Active" />
                    <FormControlLabel defaultChecked={this.props.data.staff_details.rec_active === 'Inactive'} value="Inactive" control={<Radio />} label="Inactive" />
                  </RadioGroup>
                </div>           
             
             </div>
              


              <Divider variant="middle" />
              <div className="button-align">
                <Button
                  className="button-field"
                  variant="contained"
                  color="primary"
                  onClick={() => this.props.saveChanges()}
                >
                  Save
                </Button>
                <Button
                 className="button-field"
                  variant="outlined"
                  onClick={() => this.props.closePopup()}
                >
                  Cancel
                </Button>
              </div>
              </>
              : 
              
              <div className = 'view-only'>
              <div className = 'flex-space-between'>
                  <div>
                          <div className="each-header-data">
                            <p className="label-font">Name</p>
                            <p className="value-font">
                            {this.props.data.staff_details.name}
                            </p>
                          </div>

                          <div className="each-header-data">
                            <p className="label-font">Organization</p>
                            <p className="value-font">
                            {this.props.data.staff_details.org}
                            </p>
                          </div>
      
                          <div className="each-header-data">
                              <p className="label-font">Role</p>
                              <p className="value-font">
                              {this.props.data.staff_details.role}
                              </p>
                          </div>
                
        
                     
                            <div className="each-header-data">
                              <p className="label-font">Email Id</p>
                              <p className="value-font">
                              {this.props.data.staff_details.id}
                              </p>
                              </div>
                      

                            <div className="each-header-data">
                              <p className="label-font">Phone Number</p>
                              <p className="value-font">
                              {this.props.data.staff_details.phone}
                              </p>
                            </div>
                  
                  
                      </div><div>
                            <div className="each-header-data">
                              <p className="label-font">Address</p>
                              <p className="value-font">
                              {this.props.data.staff_details.address}
                              </p>
                            </div>
                  
                            <div className="each-header-data">
                              <p className="label-font">Area</p>
                              <p className="value-font">
                              {this.props.data.staff_details.area}
                              </p>
                            </div>
                  


                              <div className="each-header-data">
                                <p className="label-font">State</p>
                                <p className="value-font">
                                {this.props.data.staff_details.state}
                                </p>
                              </div>

                              <div className="each-header-data">
                                <p className="label-font">Country</p>
                                <p className="value-font">
                                {this.props.data.staff_details.country}
                                </p>
                              </div>


                    

                            <div className="each-header-data">
                              <p className="label-font">Active</p>
                              <p className="value-font">
                              {this.props.data.staff_details.rec_active}
                              </p>
                            </div>
                      </div>
              </div>
            </div>}
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default AddStaff;
