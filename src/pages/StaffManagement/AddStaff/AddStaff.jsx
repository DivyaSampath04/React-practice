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
  RadioGroup
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
                  value={this.props.data.name}
                  onChange={(event) => this.props.handleChange(event)}
                />
                <TextField
                  autoComplete = "off"
                  className="input-field"
                  label="Email Id"
                  variant="outlined"
                  name="id"
                  value={this.props.data.id}
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
                  value={this.props.data.phone}
                  onChange={(event) => this.props.handleChange(event)}
                />
                <div>
                <RadioGroup row  name="gender" defaultValue={this.props.data.gender} onChange={(event) => this.props.handleChange(event)}>
                    <FormControlLabel defaultChecked={this.props.data.gender === 'Male'} value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel defaultChecked={this.props.data.gender === 'Female'} value="Female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </div>
              </div>
              <br />
              <Divider variant="middle" />
              <div className="button-align">
                <Button
                  className="input-field"
                  variant="contained"
                  color="primary"
                  onClick={() => this.props.saveChanges()}
                >
                  Save
                </Button>
                <Button
                  className="input-field"
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
              {this.props.data.name}
              </p>
            </div>
            <div className="each-header-data">
              <p className="label-font">Email Id</p>
              <p className="value-font">
              {this.props.data.id}
              </p>
              </div>
            </div>
           <div>
            <div className="each-header-data">
              <p className="label-font">Phone Number</p>
              <p className="value-font">
              {this.props.data.phone}
              </p>
            </div>
            <div className="each-header-data">
              <p className="label-font">Gender</p>
              <p className="value-font">
              {this.props.data.gender}
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
