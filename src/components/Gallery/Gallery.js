import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Gallery.scss'
import GalleryItems from './GalleryItems'
import Products from './../products/Products/Products.json'
import Pagination from '../Pagination/Pagination'

function Gallery() {
  const Keyparam = useParams();
  const Productsdata = (Keyparam.id === undefined ? Products : Products.filter(temp => temp.categories.id.toString() === Keyparam.id));
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const PER_PAGE = 9;
  const [currentPage, setcurrentPage] = useState(0);
  const handlePageClick = ({ selected: selecTedPage }) => {
    setcurrentPage(selecTedPage)
    window.scrollTo(0, 0)
  }
  const offset = currentPage * PER_PAGE;
  const currentPageData = Productsdata.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(Productsdata.length / PER_PAGE);
  return (
    <div className='gallerypage'>
      <div className='gallerypage-main'>
        <div className='gallerypage-main-container'>
          {currentPageData.length === 0 ? <h4 className='gallerypage-main-container-alert'>The product you are looking for is being updated by the store. Sorry for the inconvenience!</h4> : currentPageData.map((items, index) => {
            return (
              <div className='gallerypage-main-container-items' key={index}>
                <GalleryItems id={items.id} name={items.name} images={items.imagesPreview[0].path} rating={items.rating} />
              </div>
            )
          })}
          <div className='gallerypage-main-container-page'>
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gallery
