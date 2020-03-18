import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import ads1 from '/public/images/adsPhoto1.png'
// import ads2 from '/public/images/adsPhoto2.png'
// import ads3 from '/public/images/adsPhoto3.png'
// import ads4 from '/public/images/adsPhoto4.png';

// const Ads = [
//     {
//         name: 'iPhone X 128GB',
//         id:1,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'Samsung Note10',
//         id:2,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'Samsung s10',
//         id:3,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'iPhone X 64GB',
//         id:4,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'iPhone X 64GB',
//         id:4,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '/images/09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'iPhone X 64GB',
//         id:4,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'iPhone X 64GB',
//         id:4,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     },
//     {
//         name: 'iPhone X 64GB',
//         id:4,
//         details: {
//             gunluk: 15,
//             heftelik: 150,
//             ayliq: 15000,
//             location: "Gəncə",
//             date: '09 fevral 2020'
//         },
//         photo:"/images/adsPhoto1.png"
//     }
// ]
export default class extends Component {
    render() {
        const ads = this.props.data;
        console.log(ads)
        const adView = ads.map((ad, index) => {
            return (
            <Link to="/Ad">
                <div className="grid-ads-item" key={index}>
                    <div>
                        <img src="" alt=""/>
                    </div>
                    <div className="d-flex">
                        <div className="priceTable ">
                            <div className="palette1 widthChanger head-size-changer">
                                Gunluk
                            </div>
                            <div className="palette2 widthChanger price-size-changer">
                            </div>
                        </div>
                        <div className="priceTable">
                            <div className="palette3 widthChanger fontCHanger head-size-changer">
                                Heftelik
                            </div>
                            <div className="palette4 widthChanger  price-size-changer">
                            </div>
                        </div>
                        <div className="priceTable">
                            <div className="palette1 widthChanger fontCHanger head-size-changer">
                                Ayliq
                            </div>
                            <div className="palette6 widthChanger fontCHanger price-size-changer">
                            </div>
                        </div>
                    </div>
                    <div className="ads-info">
                        <div className="ads-name">
                            {ad.name}
                        </div>
                        <div className="loc-date">
                            {ad.created_at}
                            <br/>
                            {ad.city.name.az}
                        </div>
                    </div>
                </div>
            </Link>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="grid-ads">
                        {adView}
                    </div>
                    <div className="load mt-5 mb-5">
                        <button className="searchnow m-auto">Hamsını göstər</button>
                    </div>
                </div>
            </div>
        )
    }
}
