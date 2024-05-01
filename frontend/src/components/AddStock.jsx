


import React, { useState  } from 'react';
import {useNavigate} from "react-router-dom"

function AddStock() {
  const [formData, setFormData] = useState({
    name: "", symbol: "", stockImages: "", price: "", totalStocks: "", ownerId: Number(JSON.parse(localStorage.getItem("user")).id)
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, stockImages: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finaldata = new FormData();
    for (let key in formData) {
      finaldata.append(key, formData[key]);
    }
    console.log(finaldata);

    try {
      const response = await fetch("http://localhost:3001/addStock", {
        method: "POST",
        body: finaldata,
      });
      const result = await response.json();
      if(result.status === "success"){
        navigate("/TopStocks")
      }
      // Handle success or failure
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center pt-10 mb-5'>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">ADD STOCK</h5>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Name</label>
            <input onChange={handleChange} type="text" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="symbol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Symbol</label>
            <input onChange={handleChange} type="text" name="symbol" id="symbol" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="stockImages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Image</label>
            <input type="file" onChange={handleFileChange} name="stockImages" id="stockImages" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Price</label>
            <input onChange={handleChange} type="number" step="0.01" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock share Percentage(%)</label>
            <input onChange={handleChange} type="number" name="totalStocks" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default AddStock;