import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import FooterMain from './components/footer/FooterMain';
import Home from './components/home/Home';
import ProductsPage from './components/products/ProductsPage';
import ProductDetailPage from './components/products/ProductDetailPage/ProductDetailPage';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';
import ProductOfBrands from './components/products/ProductOfBrands/ProductOfBrands';
import ProductsComparison from './components/products/ProductsComparison/ProductsComparison';
import Gallery from './components/Gallery/Gallery';
import Sitemap from './components/Sitemap/Sitemap';
import ProductData from './components/products/Products/Products.json'
import CartPage from './components/products/CartPage/CartPage';
import DeliveryServices from './components/services/DeliveryServices';
import TechnologySupport from './components/services/TechnologySupport';
import SuccessPage from './components/products/CartPage/SuccessPage';
import ServicesMain from './components/services/ServicesMain';
import FAQstore from './components/help/FAQstore';
import WarrantiesStore from './components/help/WarrantiesStore';
import PolicyStore from './components/help/PolicyStore';
import ProductRecall from './components/help/ProductRecall';
import StoresVenus from './components/stores/StoresVenus';
import CareersVenus from './components/stores/CareersVenus';
import EcoSystem from './components/stores/EcoSystem';
import NotFound from './components/notFound/NotFound';
import InformProduct from './components/inform/InformProduct';
function App() {
  const [ comparison, setComparison] = useState('');
  const [ cart, setCart] = useState([]);
  const [ searchProduct, setSearchProduct ] =useState();
  const [ inform, setInForm] = useState([])
  const handleDelComparison = (id)=>{
    const newcomparison = comparison.filter((temp) => temp.id !== id);
    setComparison((comparison)=>newcomparison);
  }
  const handleAddComparison = (id) =>{
    if(comparison.length <= 4){
      let newComp = ProductData.filter((item) => item.id===id)
    setComparison((comparison)=> [...comparison, newComp[0]]) 
    } else{
      return alert("You should only choose a maximum of 5 products.")
    }
    setInForm((inform) => [...inform,'Comp'])
    
  }
  const handleAddProductCart = (datacart) =>{
    setCart((cart)=> [...cart, datacart])
    setInForm((inform) => [...inform,'Cart'])
  }
  const handledCartProductCart = (temp) =>{
    setCart((cart) =>temp)
  }
  
  const handleSeachProduct =(keySearchProduct) =>{
    setSearchProduct(keySearchProduct)
  }
  
  return (
    <Router>
      <div className="App">
        <Header handleSeachProduct={handleSeachProduct} indexofCart={cart.length} />
        <Routes>
            <Route path="/" element={<Home handleAddComp={handleAddComparison} handleCarts={handleAddProductCart}/>}/>

            <Route path="products" element={<ProductsPage handleAddComp={handleAddComparison} handleCarts={handleAddProductCart} searchProduct={searchProduct}/>}/>
            <Route path="/products/:id" element={<ProductsPage handleAddComp={handleAddComparison} handleCarts={handleAddProductCart}/>}/>
            <Route path="products/detail/:id" element={<ProductDetailPage handleCarts={handleAddProductCart}/>}/>
            <Route path="products/:id/detail/:id" element={<ProductDetailPage handleCarts={handleAddProductCart}/>}/>
            
            <Route path="detail/:id" element={<ProductDetailPage handleCarts={handleAddProductCart}/>}/>
            <Route path="brands/:id" element={<ProductOfBrands  handleAddComp={handleAddComparison} handleCarts={handleAddProductCart} searchProduct={searchProduct}/>}/>
            <Route path="brands/:id/detail/:id" element={<ProductDetailPage handleCarts={handleAddProductCart}/>}/>
            <Route path="brands" element={<ProductOfBrands handleAddComp={handleAddComparison} handleCarts={handleAddProductCart} searchProduct={searchProduct}/>}/>

            <Route path="contact" element={<ContactUs/>}/>
            <Route path="about-us" element={<AboutUs/>}/>
            <Route path="compare" element={<ProductsComparison handleDelComp={handleDelComparison} dataComparison={comparison}/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="sitemap" eleent={<Sitemap/>}/>
            <Route path="cart" element={<CartPage cart={cart} handledCartProductCart={handledCartProductCart}/>}/>
            <Route exact path="/DeliveryServices" element={<DeliveryServices/>} />
            <Route exact path="/TechnologySupport" element={<TechnologySupport/>} />
            <Route path="SuccessPage" element={<SuccessPage/>} />
            <Route path="services" element={<ServicesMain/>} />
            <Route path="FAQstore" element={<FAQstore/>} />
            <Route path="warranties" element={<WarrantiesStore/>} />
            <Route path="policy" element={<PolicyStore/>} />
            <Route path="product-recalls" element={<ProductRecall/>} />
            <Route path="stores" element={<StoresVenus/>} />
            <Route path="careers" element={<CareersVenus/>} />
            <Route path="ecosystem" element={<EcoSystem/>} />
            <Route path="*" element={<NotFound/>} />
           
        </Routes>
        <FooterMain />
        <InformProduct inform={inform} setInForm={setInForm}/>
      </div>
    </Router>
  );
}

export default App;
