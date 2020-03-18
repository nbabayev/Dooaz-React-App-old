import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import file from '/public/images/file.svg'
// import redcircle from '/public/images/redellipse.svg';
import NewAd from './NewAd'

export default class Sign extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            prices: {
                gunluk: '',
                heftelik: '',
                ayliq: ''
            },
            context: '',
            name: '',
            email: '',
            phone: '',
            rememberMe: false
        }
    }
    custom(el) {
        return document.getElementById(el);
      }
      uploadFile() {    
        var file = this.custom("file-download").files[0];
        // alert(file.name+" | "+file.size+" | "+file.type);
        var formdata = new FormData();
        formdata.append("file-download", file);
        var ajax = new XMLHttpRequest();
        ajax.upload.addEventListener("progress", this.progressHandler, false);
        ajax.addEventListener("load", this.completeHandler, false);
        ajax.addEventListener("error", this.errorHandler, false);
        ajax.addEventListener("abort", this.abortHandler, false);
        ajax.open("POST", "https://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP"); // 
        //use file_upload_parser.php from above url
        ajax.send(formdata);
      }
    
       progressHandler = (event) => {
        // this.custom("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
        var percent = (event.loaded / event.total) * 100;
        this.custom("progressBar").value = Math.round(percent);
        // this.custom("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
      }
      
    //    completeHandler =(event) =>  {
    //     // this.custom("status").innerHTML = event.target.responseText;
    //     this.custom("progressBar").value = 0; //wil clear progress bar after successful upload
    //   }
      

      componentDidMount() {
        fetch('https://dooaz.herokuapp.com/api/elanlar/newad',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'post',
            // body: users 
        }).then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data)
            // console.log(data.cities.map(city =>  city.name))
            // console.log(cat)
                this.setState({
                    categories: data.categories,
                    // img: data.map(inner => { return inner.image_path })
                })
                console.log(this.state.img)
        })
    }
    render() {
        const category = this.state.categories
        return (
            <div>
                <Header />
                <section className="advertisement">
                    <div className="container">
                        <div className="row">
                           <div className="col-12">
                                <p className="heading-section">ŞƏXSİ MƏLUMATLAR</p>
                                <div className="advert-inner w-100">
                                    <form action="" className="ad-fill" id="upload_form" encType="multipart/form-data" method="post">
                                        <label>
                                            <p className="same-cat">Kateqoriya <span>*</span></p>
                                            <select name="category">
                                                <option value="" selected>Siyahıdan seçin</option>
                                                {category.map(cat => {
                                                    return <optgroup label={cat.name}>
                                                        {cat.sub_categories.map(sub => {

                                                        return  <option value={sub.id}>{sub.name}</option>
                                                        })}
                                                    </optgroup>
                                                
                                                })}
                                            </select>
                                        </label>
                                        <label>
                                            <p className="same-cat">Şəhər <span>*</span></p>
                                            <select name="" id="" >
                                                <option value="Ev">Bakı</option>
                                                <option value="Telefon">Sumqayıt</option>
                                                <option value="Avtomobil">Gəncə</option>
                                            </select>
                                        </label>
                                        <label>
                                            <p className="same-cat">Qiymət, AZN <span>*</span></p>
                                            <div className="pays">
                                                <input type="text" value={this.state.prices} onChange={this.getData} placeholder="Qiymət günlük"/>
                                                <input type="text" placeholder="Qiymət həftəlik"/>
                                                <input type="text" placeholder="Qiymət aylıq"/>
                                            </div>
                                        </label>
                                        <label>
                                            <p>Məzmun</p>
                                            <textarea name="area-51" id=""></textarea>
                                        </label>
                                        <div id="wrapper" className="">       
                                                <p className="same-cat">Şəkillər</p>
                                                <div className="save-file">
                                                    <img src="/images/file.svg" alt=""/>
                                                    <span>Şəkil əlavə etmək</span>
                                                    <input id="file-download" type="file" multiple="multiple" name="file1" onChange={this.uploadFile.bind(this)}/><br />
                                                </div>
                                            <div id="image-holder"> 
                                                <progress id="progressBar" value="0" max="100"></progress>
                                            </div>
                                            {/* shekil sayi lazimdi */}
                                        </div>
                                        <div id="status"></div>
                                        <label>
                                            <p>Adınız <span>*</span></p>
                                            <input type="text"/>
                                        </label>
                                        <label>
                                            <div className="d-flex flex-column">
                                            <p>E-mail<span>*</span></p>
                                            <span className="gray-span">Saytda göstərilmir</span>
                                            </div>
                                            <input type="text"/>
                                        </label>
                                        <label>
                                            <div className="d-flex flex-column">
                                            <p>Mobil nömrə <span>*</span></p>
                                            <span className="gray-span">Yalnız birini qeyd edin </span>
                                            </div>
                                            <input type="text" placeholder="(000) 000-00-00"/>
                                        </label>
                                        <label>
                                            <p></p>
                                            <div className="labbing d-flex justify-content-between align-items-center">
                                                <label className="lab-log">Məlumat yadda saxla
                                                    <input type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>                                            
                                            </div>
                                        </label>
                                        <label>
                                            <p></p>
                                            <div className="d-flex justify-content-between caution-box">
                                                <p>Elan yerləşdirərək, siz Doo.az-ın 
                                                    <a>İstifadəçi razılaşması</a> ilə 
                                                    razı olduğunuzu təsdiq edirsiniz.</p>
                                                <Link to="/" onClick={this.sendData}>Elanı əlavə et</Link>
                                            </div>
                                        </label>
                                    </form>
                                    <div className="rules-advert">
                                        <div className="line-rules">
                                            <div></div>
                                            <h3 className="rules-heading">Doo.az-ın sadə qaydaları</h3>
                                        </div>                                        
                                        <div className="info-rules">
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Eyni elanı bir neçə dəfə təqdim etməyin.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Qadağan olunmuş məhsulları satmayın.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Saytın tam qaydaları</span></div>
                                        </div>
                                        <div className="line-rules">
                                            <div></div>
                                            {/* <Link href="/"> */}
                                            <a className="rules-click">Saytın bütün qaydaları</a>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>                 
                </section>               
                < Footer />

            </div>
        )
    }
}