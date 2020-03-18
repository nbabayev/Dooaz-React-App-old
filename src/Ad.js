import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import AllAds from './AllAds';
// import adBig from '/public/images/adBigPhoto.png';
// import ad from '/public/images/adsPhoto1.png';
// import ad2 from '/public/images/adsPhoto2.png';
// import ad3 from '/public/images/adsPhoto3.png';
// import ads1 from '/public/images/adsPhoto1.png'
// import ads2 from '/public/images/adsPhoto2.png'
// import ads3 from '/public/images/adsPhoto3.png'
// import ads4 from '/public/images/adsPhoto4.png';
// import warnIcon from '/public/images/warn-ico.svg'
import "lightgallery.js/dist/css/lightgallery.css";

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
const GROUP1 = [
    // adBig,
    // ad,
    // ad2,
    // ad3
    // "https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    // "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
  ];
  
//   const GROUP2 = [
//     "https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//     "https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//   ];
  
const PhotoItem = ({ image, group }) => (
    <div>
        <LightgalleryItem group={group} src={image}>
            <img src={image} style={{ width: "100%" }} />
        </LightgalleryItem>
            
    </div>
);

export default class Adverts extends Component {
    render() {
        return (
            <div>
            <Header />
                <div className="container-fluid breadcrumb-container">
                    <div className="container">
                        <div className="row">
                            <div className="breadcrumb-ads">
                                <a className="mr-2">Bütün kateqoriyalar</a><span className="mr-2">   /  </span>
                                <a className="mr-2">Elektronika</a><span className="mr-2"> / </span>
                                <a>Telefonlar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ad-images">
                    <div className="container">
                        <div className="row">
                            <LightgalleryProvider>
                                <div className="d-flex">
                                    <div style={{ display: "flex" }}>
                                        {GROUP1.map((p, idx) => (
                                            <PhotoItem key={idx} image={p} group="group1"/>
                                        ))}
                                    </div>
                                    {/* <div style={{ display: "flex", alignItems: "center" ,marginLeft: '20px'}}>
                                        {GROUP1.map((p, idx) => (
                                        <PhotoItem key={idx} image={p} group="group2" />
                                        ))}
                                    </div> */}
                                </div>
                            </LightgalleryProvider>
                        </div>
                    </div>
                </div>
                <div className="container innerAd">
                  <div className="row">
                      <div className="d-flex">
                            <div className="priceTable">
                                <div className="palette1 widthChanger head-size-changer">
                                    Gunluk
                                </div>
                                <div className="palette2 widthChanger price-size-changer">
                                    10azn
                                </div>
                            </div>
                            <div className="priceTable ml-3">
                                <div className="palette3 widthChanger head-size-changer">
                                    Heftelik
                                </div>
                                <div className="palette4 widthChanger price-size-changer">
                                    150azn
                                </div>
                            </div>
                            <div className="priceTable ml-3">
                                <div className="palette1 widthChanger head-size-changer">
                                    Ayliq
                                </div>
                                <div className="palette6 widthChanger price-size-changer">
                                    15000azn
                                </div>
                            </div>
                      </div>
                      <div className="ml-4">
                          <span className="adName">
                            Samsung Galaxy Note 9
                                128 GB
                          </span>
                      </div>
                  </div>
                </div>
                <section className="ad-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 p-0">
                                <div className="advertiser-info">
                                    <div className="advser-num">
                                        (055) 585-00-00
                                    </div>
                                    <div className="advser-name mt-2">
                                        Elşən Səfərov   
                                    </div>
                                    <div className="mt-3"><a>İstifadəçinin bütün elanları</a></div>
                                    <img src="/images/phone-receiver.svg" className="phn-rcvr" alt=""/>
                                </div>
                                <div className="ad-details">
                                    <div className="ad-id">
                                        Elanın nömrəsi 16144724>
                                    </div>
                                    <div>Baxışların sayı: 9290</div>
                                    <div className="updated-ad">Yeniləndi: 09 Fevral 2020</div>
                                </div>
                                <div><a className="reportAd"><img src="/images/warn-ico.svg" alt=""/> Elandan şikayət et</a></div>
                            </div>
                            <div className="col-8 p-0">
                                <div className="fr1-cvr">
                                    <div className="fr1">
                                        <div className="ad-fr-info pb-2">
                                            <span>Şəhər</span>
                                            <span>Bakı</span>
                                        </div>
                                        <div className="ad-fr-info pt-2">
                                            <span>Marka</span>
                                            <span>Samsung</span>
                                        </div>
                                    </div>
                                    <div className="ad-info-txt">
                                        İdeal vəziyyətdədir. Evdə işlənib, 1 pultla.
                                        Karobkadan çıxan bütün aksesuarları üstündədir.
                                        Üstündə Rdr2 diski və akkaunt var hansı ki içərisində 3 oyun (Pubg, the Witcher, Horizon zero) var
                                        Real alıcılar maraqlana bilər.
                                    </div>
                                    <button className="shr-btn"><img src="/images/share.svg" alt=""/> Paylaş</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="similar-ad">
                <div className="container mt-5 mb-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6"><span className="all-adverts">BÜTÜN ELANLAR</span></div>
                            <div className="col-6 d-flex justify-content-end">
                                <button className="drop-advert-container">
                                    <span className="tst">Bütün elanlar</span>
                                    <img  src="/images/arrow-down.svg" alt=""/>
                                    <div className="drop-advert">
                                        <div>Elan 1</div>
                                        <div>Elan 1</div>
                                        <div>Elan 1</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <AllAds />
                </section>
                <Footer />
                </div>
        )
    }
}
