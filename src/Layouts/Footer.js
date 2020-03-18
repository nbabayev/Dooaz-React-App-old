import React , { Component } from 'react';
import {Link} from 'react-router-dom'
// import Images from '../Images';
// import homeIcon from '../../public/images/home-icon.svg';
// import homeIcon from '/public/images/home-icon.svg';

import '../App.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="footer-color" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="row ">
                            <div className="col-6 d-flex align-items-center flex-column">
                                <div className="d-flex w-100">
                                    <Link to="/" className="home-page">
                                        <img src="./images/home-icon.svg" className="home-ico mr-2" alt=""/>Ana Səhifə
                                    </Link>
                                    {/* <Link href="/" > */}
                                        {/* <a className="faq ml-5">SAYTDA REKLAM</a> */}
                                    {/* </Link> */}
                                    <Link to="/faq" className="faq ml-5">
                                        FAQ
                                    </Link>
                                </div>
                                {/* <div className="mt-5 text-white">
                                    <span>Saytın rəhbərliyi reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır</span>
                                </div> */}
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <div className="about-us-footer">
                                    <span className="mb-3">HAQQIMIZDA</span>
                                    {/* <Link href=""><a>Qaydalar</a></Link> */}
                                    {/* <Link href=""><a>Layihə haqqında</a></Link> */}
                                    {/* <Link href=""><a>Necə istifadə etməli</a></Link> */}
                                </div>
                                <div className="about-us-footer ml-4">
                                    <span className="mb-3">ƏLAQƏ</span>
                                    <span>(012) 000-08-05</span>
                                    <span>(012) 000-08-05</span>
                                    <a href="mailto:info@primpl.com">info@primpl.com</a>
                                </div>
                            </div>
                            <div className="col-12 text-white pt-3 mt-5 border-top">
                                Copyright &copy; 2020 Doo.az
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  
            </div>
           
    )
    }
   
}
