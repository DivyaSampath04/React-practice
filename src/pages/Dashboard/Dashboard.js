import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="full-view">
          <div>
            <p className="page-title">DASHBOARD</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
