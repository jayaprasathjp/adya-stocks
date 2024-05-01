import React, { useState, useEffect } from "react";
function MyStocks() {
  const [myStocks, setMyStocks] = useState([]);

  useEffect(() => {
    async function fetchStocks() {
      try {
        const response = await fetch(`http://localhost:3001/myStocks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId:Number(JSON.parse(localStorage.getItem("user")).id) }),
        });
        const result = await response.json();
        setMyStocks(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchStocks();
  }, []);
  console.log(myStocks);
  return (
    <>
      <div className="m-10 ml-20 text-3xl font-extrabold ">MY STOCKS</div>
      <div className="ml-20 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {myStocks.map((stock, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-500 dark:border-gray-500"
              >
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg"
                    src="/docs/images/pro  ducts/apple-watch.png"
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <p className="text-3xl font-semibold tracking-tight text-green-100 ">{stock.stock.name}</p>
                    <h5 className=" mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      Quantity :
                    </h5>
                  </a>
                  <div className="flex  items-center mt-2.5 mb-5">
                    <span className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {stock.quantity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-500">
                      <span className="text-gray-50 text-3xl">current price :</span>₹
                      {stock.stock.price}
                    </span>
                    <a
                      href={"/Sell?id=" + stock.id}
                      className="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sell{">>"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          {myStocks.length==0&&(<div className="mx-100 my-200 text-red-600  text-5xl">No stock available!</div>)}
        </div>
      </div>
    </>
  );
}

export default MyStocks;
