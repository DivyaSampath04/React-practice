import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import {FormControl,TextField,InputAdornment} from'@material-ui/core';
import Search from "@material-ui/icons/Search";

class SearchBar extends React.Component {
    render(){
        return(
            <>
              <div>
                <div>
                  <FormControl>
                    <TextField
                      style={{ width: "300px" }}
                      variant="outlined"
                      margin="dense"
                      id="input-with-icon-textfield"
                      placeholder="Search"
                      name="search"
                      autoComplete="off"
                      value={this.props.search}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            {this.props.searchFlag === false ? (
                              <CloseIcon
                                className="icon-action"
                                onClick={() => this.props.cancelFilter("search")}
                              />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </div>
            
              </div>
                </>
        );
    }
}

export default SearchBar;