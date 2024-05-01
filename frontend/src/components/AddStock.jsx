import React,{useState} from 'react'

function AddStock() {
    const [formData, setFormData] = useState({
        name: "", symbol:"", price:"", totalStocks:"", ownerId:0 
    
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
      
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`http://localhost:3001/addStock`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
     
        navigate('/')
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>

    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">ADD STOCK</h5>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Name</label>
                <input   onChange={handleChange} type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
            </div>
            <div>
                <label for="symbol" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Symbol</label>
                <input   onChange={handleChange} type="text" name="symbol" id="symbol"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Image</label>
                <input  type="file" name="image" id="image"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Price</label>
                <input   onChange={handleChange} type="text" name="price" id="price"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Quantity</label>
                <input   onChange={handleChange} type="text" name="totalStocks" id="quantity"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
           
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
            
        </form>
    </div>
    </div>
  )
}

export default AddStock