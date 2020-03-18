import React  from 'react';
import {Link} from 'react-router-dom';
// import '../src/App.css';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
import AllAds from './AllAds';
import Category from './categories'
// import arrow from '/public/images/arrow-down.svg'
// import searchIco from '/public/images/search-icon.svg';
// import mapPin from '/public/images/map-pin.svg';


const widthFilter = {
  width: '250px',
  marginLeft: '20px'
}
const widthSearch = {
  width: '700px'
}
const imgLeft = {
  top: '13px',
  left: '20px'
}
const imgRight = {
  top: '13px',
  right: '20px',
  filter: 'brightness(2)'
}

class App extends React.Component {
    state = {
        activeCategoryId: null,
        categories: [],
        city: [],
        allAds:[]
    }
    _categoryClick(id) {
        this.setState({
            activeCategoryId: this.state.activeCategoryId === id ? null : id
        })
    }
    showCity() {
        let select = document.getElementsByClassName('c-select')[0];
        select.classList.toggle('active')
    }
    removeHandle() {
        let select = document.getElementsByClassName('c-select')[0];
        select.classList.remove('active')
    }
    componentDidMount() {

        if (window.activateFlipdown) {
            window.activateFlipdown()
        }
        fetch('http://192.168.88.253:8000/api',{
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
            console.log(data.cities.map(city =>  city.name))
            // console.log(cat)
                this.setState({
                    categories: data.categories,
                    city:data.cities.map(inner =>  { return inner}),
                    allAds: data.ads.data
                    // img: data.map(inner => { return inner.image_path })
                })
                console.log(this.state.allAds)
        })
    }
  render() {

    const city = this.state.city
    const categories = this.state.categories;
    const allAds = this.state.allAds
    console.log(allAds)
    const categoryIcon = this.state.img
    const gridCategory = [...Array(Math.ceil(categories.length / 4)).keys()].map((index) => {
        const categoriesView = categories.slice(index * 4, index * 4 + 4).map(category => (
            <div>
                <a  className={`d-flex align-items-center cat-links ${this.state.activeCategoryId === category.id ? 'triangle' : ''}`}
                    
                    onClick={() => this._categoryClick(category.id)}
                >
                    {/* {categoryIcon.map(img => { */}
                        <div className="img-circle">
                            <img src={category.image_path} alt=""/>
                        </div>
                    {/* // })} */}
                     { category.name }
                </a>
            </div>
        ))
        const subCategoriesView = categories.slice(index * 4, index * 4 + 4).map((category, index) => (
            <div className={`w-100 content ${this.state.activeCategoryId === category.id ? 'content-active' : ''}`} id={`subcategory-${category.id}`} key={index}>
                <div className="heading-content w-100 d-flex">
                    <a href={category.slug} className="mr-3">Bütün elanlar</a>
                    {/* <span className="number-doo number-all">{ category.sub_categories.map(item => item.count).reduce((a, b) => a + b, 0)}</span> */}
                    {/* <span className="number-doo number-all">{ category.ad_count}</span> */}
                </div>
                <div className="mega-sub">   
                    { category.sub_categories.map((item, index) => (
                        <div className="d-flex" key={index}>
                            <Link to={item.slug} className="mr-2">{ item.name }</Link>
                            {/* <span className="number-doo">{ category.name }</span> */}
                        </div>
                    ))}
                </div>
            </div>
        ))
        return (
            <div className="category-row">
                <div className="main-links">
                    { categoriesView } 
                </div>
                <div className="subcategory-inner">
                    { subCategoriesView }
                </div>
            </div>
        )
    })
    return (
      <div className="App">
            <Header />               
                <section>
                <div className="container pt-5 pb-5">
                    <div className="d-flex">
                        <div className="searchblock d-flex" style={widthSearch}>
                            <div className="img-parent" style={imgLeft}>
                                <img src="./images/search-icon.svg" alt=""/>
                            </div>
                            <input type="search" placeholder="Məsələn, Aksesuarlar"/>
                        </div>
                        <div className="searchblock" style={widthFilter}>
                            <div className="img-parent" style={imgLeft}>
                                <img src="./images/map-pin.svg" alt=""/>
                            </div>
                            <div className="clickable-inner" onMouseEnter={this.showCity} onMouseOut={this.removeHandle}>
                                <span>Bütün Azərbaycan</span>
                                <img src="./images/arrow-down.svg" alt=""/>
                            </div>

                            <div className="c-select">
                                {city.map(c => {
                                   return <div>{c.name.az}</div>
                                })}
                                {/* <div>{city}</div>
                                <div>{city}</div>
                                <div>{city}</div>
                                <div>{city}</div>
                                <div>{city}</div> */}
                            </div>
                            {/* <input type="search" placeholder="Bütün Azərbaycan"/> */}
                       
                        </div>
                        <div className="searchnow-container">
                            <button className="searchnow">Axtar</button>
                            <div className="img-parent" style={imgRight}>
                                <img src="search-icon.svg" alt="" style={imgRight}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                    {/* {pids.map(pid => (<Link href="/[pid]" as={`/#${pid}`}  scroll><a>Bütün elanlar</a></Link>))} */}
                    <a href="#allAdverts">Bütün elanlar</a>
                    </div>
                </div> 
                <div className="container pb-5">
                    <div className="category">
                        <div className="grid-category">
                        {gridCategory} 
                        </div>
                    </div>
                    {/* <Category /> */}
                </div>
                </section>
                <section className="countdown">
                    <div className="container">
                        <div className="row ">
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <div><p className="countdown-ad">Vaxt bitməmiş pulsuz <br/> elanını yerləştir!</p></div>                          
                                <div id="flipdown" className="flipdown"></div>
                                    <div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="allAdverts" id="allAdverts">
                    <div className="container mt-5 mb-5" >
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6"><span className="all-adverts">BÜTÜN ELANLAR</span></div>
                            <div className="col-6 d-flex justify-content-end">
                                <button className="drop-advert-container">
                                    <span className="tst">Bütün elanlar</span>
                                    <img  src="./images/arrow-down.svg" alt=""/>
                                    <div className="drop-advert">
                                        <div>Elan 1</div>
                                        <div>Elan 1</div>
                                        <div>Elan 1</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                     {/* <AllAds data={allAds}/> */}
                </section>
            <Footer />
      </div>
    );
  }
}

export default App;