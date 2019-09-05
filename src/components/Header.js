import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchText:""
        }
    }
    handleChange=(e)=>{
        const searchText=e.target.value;
        this.setState({
            searchText
        })
    }
 handleSearch=(e)=>{
     e.preventDefault();
     console.log("handleSearch clicked")
     console.log(this.state.searchText)
        this.props.getSearchedPost(this.state.searchText);
    }
  render() {
    return (
      <nav className="  header">
        <div className="row" >
          <div className="col">
            <h1 className="navbar-brand" >Social Media App</h1>
          </div>

          <div className="col">
            <form className="form-inline">
              <input
                className="form-control form-control-sm mr-sm-2"
                type="text"
                placeholder="Search"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSearch} className="btn btn-success btn-sm" type="submit" >
                Search
              </button>
            </form>
          </div>
          <div className="col" >
            <button class="btn btn-outline-primary btn-sm" type="submit" style={{color:"white"}}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
