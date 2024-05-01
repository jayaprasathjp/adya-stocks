import React, { useEffect, useState } from "react";

const Buy = () => {
  const userId = Number(sessionStorage.getItem("userId")) || 1;
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stockInfo, setStockInfo] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [walletAmount,setWalletAmount] = useState(0);

  const fetchWalletAmount=async()=>{
    const res = await fetch("http://localhost:3001/walletAmount",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    })
    const data = await res.json();
    setWalletAmount(data.amount);
  }

  const fetchStockInfo = async () => {
    try {
      const res = await fetch("http://localhost:3001/stockInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stockId: id }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch stock information");
      }
      const data = await res.json();
      setStockInfo(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockInfo();
    fetchWalletAmount();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stockInfo) {
    return <div>No stock information available</div>;
  }

  const { name, price, availability } = stockInfo.info;
  const imageUrl =
    stockInfo.image ||
    "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg";

  const handleBuy = async () => {
    const data = await fetch("http://localhost:3001/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stockId: id, userId: userId, quantity }),
    });
    const response = await data.json();
    if (response.myStocks && response.myStocks.stockId === id) {
      fetchStockInfo();
      fetchWalletAmount();
      alert("Stock bought successfully");
    } else {
      alert("Error buying stocks", response.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center justify-between h-[350px] w-[300px]">
        <div className="flex flex-col items-center">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
          )}
          <div>
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Price:</span>
              <span className="text-gray-800 font-semibold">{"₹" + price}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Availability:</span>
              <span className="text-gray-800 font-semibold">
                {availability[0].available}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {/* Slider for choosing quantity */}
          <input
            type="range"
            min="1"
            max={availability[0].available}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-32 mx-4"
          />
          <span>{quantity}</span>
        </div>
        <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <span className="text-lg font-semibold">Wallet Balance:</span>
            <span className="text-lg font-semibold ml-2">₹{walletAmount}</span>
          </div>
        </div>
        <button
          onClick={handleBuy}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Buy;
