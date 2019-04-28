import React, {Component} from 'react';
import './style.css';
class Details extends Component{
    render(){
        return (
            <div className="details col-lg-9">
                    <h2 className="headings">Hey There !</h2>
                    <h4 className="headings">I'm Joyesh Malik</h4>

                    <p className="headings">Allow me to introduce myself</p>
                    <p>
                        I'm obsessed with making things and even more obssessed with making things better.
                        My speciality is front-end web design and development, making websites and turning
                        it into beautiful & responsive Application.
                    </p>

                    <p>Look What i Can Do</p>
                    <p className="canDoContent">
                        <ul>
                            <li>Web Design</li>
                            <li>HTML CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                        </ul>

                        <ul>
                            <li>React JS</li>
                            <li>React Bootstrap</li>
                            <li>SASS</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </p>
            </div>
          );
    }
}

export default Details;