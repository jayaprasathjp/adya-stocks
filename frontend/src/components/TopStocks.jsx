import React from 'react'
import { Link } from 'react-router-dom'
import Popular from './Popular'
import WatchList from './WatchList'

const TopStocks = () => {
    const products = [
        {
          id: 1,
          name: 'Vodafone Idea',
          href: '/Chart',
          price: '₹48',
          percentage: '-2.5(2.5%)',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Vodafone Idea',
            href: '/Chart',
            price: '₹48',
            percentage: '-2.5(2.5%)',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 3,
            name: 'Vodafone Idea',
            href: '/Chart',
            price: '₹48',
            percentage: '-2.5(2.5%)',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
      ]
 
    return (
      <div className="bg-white">
        
        <div className="flex flex-col pt-24">
 <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Index</h2>
<Popular/>
</div>
        <div className=" max-w-2xl  sm:py-24 lg:max-w-7xl lg:px-4">
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Most Popular</h2>
          <div className="bg-white text-center  mx-auto max-w-7xl px-4 py-16  sm:py-2  flex flex-wrap justify-start ">
      {products.map((product) => (
        <Link key={product.id} to={product.href} className="group rounded-xl m-4 max-w-xs w-full border border-gray">
          <div className="flex items-center justify-center overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover w-32 h-32 group-hover:opacity-75"
            />
          </div>
          
          <h3 className="mt-4 text-md text-gray-900">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          <p className="mt-1 text-lg font-medium text-red-500">{product.percentage}</p>
        </Link>
      ))}
      
    </div>

        </div>
      </div>
    )
  }
  

export default TopStocks