import React, { Component } from 'react'
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import save from '/public/images/save.svg'
export default class sign extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="personal">
                    <div className="container">
                        <div className="row">
                            <p className="heading-section">ŞƏXSİ MƏLUMATLAR</p>
                            <div className="personal-inner w-100">
                                <form action="">
                                    <label htmlFor="">
                                        Ad
                                        <input type="text" placeholder="Tural"/>
                                    </label>
                                    <label htmlFor="">
                                        Soyad
                                        <input type="text" placeholder="Taghiyev"/>
                                    </label>
                                    <label htmlFor="">
                                        Email
                                        <input type="email" placeholder="tural.taghiyev25@gmail.com"/>
                                    </label>
                                    <label htmlFor="">
                                        Telefon
                                        <input type="text"  placeholder="(055) 824-33-10"/>
                                    </label>
                                    <div className="button-submit">
                                        <button><img src="/images/save.svg" alt=""/>Yadda saxla</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>               
               <Footer />
            </div>
        )
    }
}