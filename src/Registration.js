import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios';
import  Header   from './Layouts/Header';
import Home from './Home'
import  Footer   from './Layouts/Footer';
import { useHistory } from 'react-router';
// import logimg from '/public/images/logo-blue.svg'
// import close from '/public/images/X.svg'

export default class sign extends Component {
        state = {
            name: '',
            surname: '',
            email: '',
            phone:'',
            password: '',
            confirm_password: '',
            users: [],
            errorMessage: [],
            redirect: null
        }

    getData = (fieldName) => (e) => {
        e.preventDefault();
        this.setState({
            [fieldName]: e.target.value,
            // 'name': e.target.value
        })
    }
    addData = async (e) => {
        e.preventDefault();
        
        const user = {
            name : this.state.name,
            surname : this.state.surname,
            email : this.state.email,
            phone : this.state.phone,
            password : this.state.password,
            confirm_password : this.state.confirm_password,
            btn_state: true
        }
        await this.setState({
            users: user
        })
        const users = this.state.users;
        console.log(users)

        fetch('http://192.168.88.253:8000/api/register',{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(users)
        }).then(resp => {
            return resp.json()
        }).then(async (data) => {
            console.log(data);
            console.log(data.errors)
            // console.log(data.status)
            const status = data.status;

            const { errors, user, token } = data;
            
            await this.setState({
                    errorMessage: errors ? [ errors ] : [],
                })

            if (status === 'success') {
                console.log(status)
                this.setState({
                    redirect: '/'
                })
                // return <Redirect to={ Home}/>
                // const  changeBtn =() =>{
                    
                //     this.setState({
                //         btn_state: false
                //     })
                // }
                // this.setState({
                //     errorMessage: [data.errors]
                // })
            }
            
            // console.log(typeof this.state.errorMessage)
        })
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={this.state.redirect} />)
        }
        let errName = this.state.errorMessage.map((message, index) => {
            if(this.state.fname === "") {
                return <div className="bg-danger" key={index}>{message.name}</div>
            }
        })
        let errSname = this.state.errorMessage.map((message, index) => {
            if(this.state.lname === "") {
                return <div className="bg-danger" key={index}>{message.surname}</div>
            }
        })
        let email = this.state.errorMessage.map((message, index) => {
            if(this.state.email === "") {
                return <div className="bg-danger" key={index}>{message.email}</div>
            }
        })
        let phone = this.state.errorMessage.map((message, index) => {
            if(this.state.phone === "") {
                return <div className="bg-danger" key={index}>{message.phone}</div>
            }
        })
        let pass = this.state.errorMessage.map((message, index) => {
            if(this.state.pass === "") {
                return <div className="bg-danger" key={index}>{message.password}</div>
            }
        })
        let repass = this.state.errorMessage.map((message, index) => {
            if(this.state.repass === "") {
                return <div className="bg-danger" key={index}>{message.confirm_password}</div>
            }
        })

        return (
            <div>
                <Header />
                    <section className="log-same text-center">
                        <div className="container">
                            <div className="row">
                                <div className="inner-registration w-100 position-relative">
                                    <img className="position-absolute close-sign" src="X.svg" alt=""/>
                                    <img className="log-img d-block" src="logo-blue.svg" alt=""/>
                                    <h3 className="w-100 text-center title-log"><b>Sayta Qeydiyyat</b></h3>
                                    <form action="" className="registration-form" onSubmit={this.addData}>
                                        <input type="text" name="name" value={this.state.name} onChange={this.getData('name')} placeholder="Ad" />
                                        <input type="text" name="surname" value={this.state.surname} onChange={this.getData('surname')} placeholder="Soyad" />
                                        { errName }
                                        { errSname }
                                        <input type="email" name="email" value={this.state.email} onChange={this.getData('email')} placeholder="Email" />
                                        { email }
                                        <input type="text" name="phone" value={this.state.phone} onChange={this.getData('phone')} placeholder="Telefon" />
                                        { phone }
                                        <input type="password" name="password" value={this.state.password} onChange={this.getData('password')} placeholder="Şifrə" />
                                        <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.getData('confirm_password')} placeholder="Şifrənizi təstiqləyin" required/>
                                        { pass }
                                        { repass }
                                        {/* {this.state.email ? null : this.state.errorMessage } */}
                                        <button to="" type="submit" className="go-success" >
                                            Qeydiyyatdan keçin
                                        </button>                                        
                                    </form>
                                    <div className="bottom-log d-flex flex-column justify-content-center">
                                        <span>Saytda şəxsi kabinetiniz yoxdursa</span>
                                        <Link to="/Login" className="same-log">
                                            DAXİL OLUN
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