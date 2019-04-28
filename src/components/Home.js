import React, {Component} from 'react';
import Details from './Details';
import Progress from './Progress';
import './style.css';
class Home extends Component{
    render(){
        return (
          <>
            <div className="home row">
                <div className="col-lg-3">
                  <img src={"profile.jpg"} alt="Profile" className="profile-image"/>
                  <h5>Front End Developer</h5>
                </div>
                <Details />
            </div>
            <Progress />
          </>
          );
    }
}

export default Home;