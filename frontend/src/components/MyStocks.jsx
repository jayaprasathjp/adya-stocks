import React, { useState, useEffect } from "react";
function MyStocks() {
  const [myStocks, setMyStocks] = useState({});

  useEffect(() => {
    async function fetchStocks() {
      try {
        const response = await fetch(`http://localhost:3001/myStocks`,{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({userId:5}),
            });
        const result = await response.json();
        // setMyStocks(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchStocks();
  }, []);
  console.log(myStocks.availableStocks);
  return (
    <>
      <div className="">MY STOCKS</div>
      
          <div  class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="p-8 rounded-t-lg"
                src="/docs/images/pro  ducts/apple-watch.png"
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                 stock.name
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  quantity
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  ₹
                </span>
                <a
                  href="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  sell
                </a>
              </div>
            </div>
          </div>
          </>
  );
}

export default MyStocks;
