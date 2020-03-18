import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import close from './publicimages/X.svg';
// import logoBlue from './public/images/logo-blue.svg'

export default class sign extends Component {
    state = {
        email: '',
        password: '',
        users: [],
        errorMessage: []
    }

getData = (fieldName) => (e) => {
    e.preventDefault();
    this.setState({
        [fieldName]: e.target.value,
    })
}
addData = async (e) => {
    e.preventDefault();
    const user = {
        email : this.state.email,
        password : this.state.password,
    }
    await this.setState({
        users: user
    }) 
    const users = this.state.users;
    console.log(users)

    fetch('http://192.168.88.253:8000/api/login',{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        method: 'post',
        body: users
    }).then(resp => {
        return resp.json()
    }).then(data => {
        console.log(data);
    })
}
    render() {
        return (
            <div>
                <Header />
               <section className="log-same text-center">
                    <div className="container">
                        <div className="row">
                            <div className="inner-log w-100 position-relative">
                                <img className="position-absolute close-sign" src="images/X.svg" alt=""/>
                                <img className="log-img d-block" src="logo-blue.svg" alt=""/>
                                <h3 className="w-100 text-center title-log"><b>Sayta Giriş</b></h3>
                                <form action="" className="sign-form">
                                    <input type="text" placeholder="Epoçt və ya telefon nömrəniz" value={this.state.email} onChange={this.getData('email')} name="email"/>
                                    <input type="password" placeholder="Şifrə" value={this.state.password} onChange={this.getData('password')} name="password"/> 
                                    <Link to="/" className ="w-100 text-center" onClick={this.addData}>Daxil ol</Link>
                                    <div className="labbing d-flex justify-content-between align-items-center">
                                            <label className="lab-log">Yadda saxla
                                                <input type="checkbox"/>
                                                <span className="checkmark"></span>
                                            </label>                                            
                                            {/* <Link href="/"> */}
                                                <a className="forget">Şifrənizi unutmusunuz?</a>
                                            {/* </Link> */}
                                    </div>
                                </form>
                                <div className="bottom-log d-flex flex-column justify-content-center">
                                    <span>Saytda şəxsi kabinetiniz yoxdursa</span>
                                    <Link to="/Registration" className="same-log">
                                       QEYDİYYATDAN KEÇİN
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
               <Footer />
            </div>
        )
    }
}
