import React, {Component} from 'react';
// import { HashRouter, Link } from 'react-router-dom'
import './style.css';
class Footer extends Component{
    render(){
        return (
          <footer>
              {/* <HashRouter> */}
                <div className="container">
                    <p>CONTACT ME HERE !</p>
                    {/* <ul className="social-icons">
                        <li><Link to="https://github.com/mjoyesh"><i class="fab fa-github"></i></Link></li>
                        <li><Link to="https://github.com/mjoyesh"><i class="fab fa-linkedin"></i></Link></li>
                        <li><Link to="https://github.com/mjoyesh"><i class="fab fa-facebook"></i></Link></li>
                        <li><Link to="https://github.com/mjoyesh"><i class="fab fa-instagram"></i></Link></li>
                        <li><Link to="https://github.com/mjoyesh"><i class="fab fa-twitter"></i></Link></li>
                    </ul> */}

                    <ul className="social-icons">
                        <li><a href="https://github.com/mjoyesh"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://github.com/mjoyesh"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/mjoyesh"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://github.com/mjoyesh"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://github.com/mjoyesh"><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
              {/* </HashRouter> */}
          </footer>
          );
    }
}

export default Footer;