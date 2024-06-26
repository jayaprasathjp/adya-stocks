import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popular from "./Popular";

const TopStocks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fn = async () => {
      let data = await fetch("http://localhost:3001/stocks", {
        method: "GET",
      });
      data = await data.json();
      data = data.availableStocks.map((val) => {
        const imgUrl =
          "http://localhost:3001/imagestocks/files/" + val.StockImages;
        return {
          id: val.id,
          name: val.name,
          href: "/Buy?id=" + val.id,
          price: "₹" + val.price,
          availability: val.availability[0].available,
          imageSrc: imgUrl,

          imageAlt: "Stock Image",
        };
      });
      setProducts(data);
    };
    fn();
  }, []);
  console.log(products);
  return (
    <div className="bg-white">
      <h2 className="text-2xl ml-20 font-extrabold tracking-tight text-gray-900">
        Available Stocks
      </h2>
      <div className="sm:py-10 lg:px-4">
        <div className="bg-white text-center max-w-full px-4 py-16 ml-20  sm:py-2  flex flex-wrap justify-start ">
          {products.map((product) => {
            return (
              <>
                <Link
                  key={product.id}
                  to={product.href}
                  className="group rounded-xl bg-slate-300 m-4 max-w-xs w-full border border-gray p-3"
                >
                  <div className="flex items-center justify-center overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover rounded-md mt-3 w-32 h-32 group-hover:opacity-75"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-bold  text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <p className="mt-1 bg-white rounded-md text-lg font-medium text-green-500">
                    Available share : {product.availability}%
                  </p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopStocks;