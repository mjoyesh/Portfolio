import React, {Component} from 'react';
import './style.css';
class Progress extends Component{
    render(){
        return (
            <>
            <p className="progress-heading">Take a look at my progress</p>
            <div className="progress-content">
                <span>HTML</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar">85%</div>
                </div>
                </div>
            </div>

            <div className="progress-content">
                <span>CSS</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar bg-info css">80%</div>
                </div>
                </div>
            </div>

            <div className="progress-content">
                <span>JAVASCRIPT</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar bg-warning js">75%</div>
                </div>
                </div>
            </div>

            <div className="progress-content">
                <span>BOOTSTRAP</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar bg-danger bs">85%</div>
                </div>
                </div>
            </div>

            <div className="progress-content">
                <span>REACT JS</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar bg-secondary react">70%</div>
                </div>
                </div>
            </div>

            <div className="progress-content">
                <span>REACT BOOTSTRAP</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar bg-dark react-bs">70%</div>
                </div>
                </div>
            </div>

            <div className="progress-content">
                <span>SASS</span>
                <div className="progress row">
                <div className="progress-bar-outer col-lg-12 col-sm-12">
                    <div class="progress-bar sass">90%</div>
                </div>
                </div>
            </div>
            </>
          );
    }
}

export default Progress;    