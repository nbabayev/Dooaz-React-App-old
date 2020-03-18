import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import Sign from '../Login'
// import logo from '/public/images/logo.svg';
// import homeIcon from '../../public/images/home-icon.svg';
// import homeIcon from '/public/images/home-icon.svg';
// import headuser from '/public/images/user-per.svg'
import '../App.css'

// import homeIco from '../../public/static/images/icons/home-icon.svg';
// import logo from '../../public/static/images/logo.svg'
// import loginIco from '../../public/static/images/icons/log-in.svg'
// import plus from '../../public/static/images/icons/plus.svg'
const fixPad = {
    padding: '12px 27px'
}
function  handleClick(){
        var b= document.getElementById("drop1");
       b.classList.toggle("active")
}
function handleClick2(){
    var c= document.getElementById("drop2");
    c.classList.toggle("active")

}
 function LoggedUser()  {
    // const dropHandle = ()  =>{
    //     toggle = false
    //     console.log(toggle)
    // }
    return (
        <div className="login text-white font-bold  position-relative" id="login" style={fixPad} onClick={handleClick}>
            <img  className="mr-2" src="user-per.svg"/>Tural Tağıyev
                <div className="drp-down" id="drop1">
                    <Link to="/Success" className="first-link">Mənim elanlarım</Link>
                    <Link to="/Personal">Şəxsi məlumatlar</Link>
                    <Link to="">Çıxış</Link>
                </div>
                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="../Success">Mənim elanlarım</Link>
                    <Link to="../Personal">Şəxsi məlumatlar</Link>
                    <Link to="" className="dropdown-item">Çıxış</Link>
                </div> */}
  
        </div>
    )
}
export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: false
        }
        this.dropdownHandle = this.dropdownHandle.bind(this)
    }
    dropdownHandle() {
        // alert('works')
        this.setState({
            dropdown: !this.state.dropdown
        })
    }
    render() {
        return (
            <div>
                <header>
                    <div className="container-fluid i-container-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="home-page">
                                        <Link to="/" className="home-page">
                                            <img src="/images/home-icon.svg" className="home-ico mr-2" alt=""/>Ana Səhifə
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
                                    <span className="contact-numeber text-white">Əlaqə: (012) 599-08-05; (012) 505-85-85</span>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid i-container-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/"><img src="/images/logo.svg" alt=""/></Link>
                                </div>
                                <div className="col-6 d-flex justify-content-between align-items-center">
                                    <div className="d-flex ">
                                        <div className="drop-mini position-relative mr-5" onClick={handleClick2}>
                                            <span  className="drop-key">Haqqımızda</span>
                                            <div className="d-about"  id="drop2">
                                                <Link to="">Qaydalar</Link>
                                                <Link to="">Layihə haqqında</Link>
                                                <Link to="">Necə istifadə etməli</Link>
                                            </div>
                                        </div>
                                        <Link to="/" className="faq">
                                            FAQ
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Link to="/Login" className="login text-white font-bold">
                                            <img className="mr-2" alt=""/>Giriş
                                        </Link>
                                        {/* <LoggedUser /> */}
                                        <Link to="/NewAd" className="advert text-white font-bold ml-3">
                                            <img className="mr-2" alt=""/>Elan yerləşdir
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
