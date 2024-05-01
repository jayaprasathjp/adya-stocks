import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WalletIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // const userId= Number(JSON.parse(localStorage.getItem("user")).id);
    // const response =  fetch("http://localhost:3001/walletAmount", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userId }),
    // });
    // const data =  response.json();
    // console.log(data.amount);
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate("/login");
    }
  }, []);

  const handleAddAmount = async (e) => {
    e.preventDefault();
    
    const amount = e.target[0].value;
    const userId = user.id;
  
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await fetch("http://localhost:3001/walletAmount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        let data = await response.json();
        const wallet = data.amount + Number(amount);
        const updateResponse = await fetch("http://localhost:3001/updateWallet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, amount: wallet }),
        });
        const updateData = await updateResponse.json();
        setUser((prevUser) => ({ ...prevUser, wallet: updateData.wallet }));
        Swal.fire({
          title: "Success!",
          text: "Amount is added to wallet",
          icon: "success"
        });
        if(result.status === "success"){
          navigate("/TopStocks")
        }
      }    
         
       
      })
    }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div className="mx-auto max-w-7xl mt-4">
      <div className="border overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">{user?.username}</dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user?.email}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-4 border relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div className="absolute rounded-md bg-indigo-500 p-3">
            <WalletIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 truncate text-sm font-medium text-gray-500">
            Wallet Balance
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{user?.wallet}</p>
        </dd>
        <form className="mt-6 sm:flex sm:max-w-md" onSubmit={handleAddAmount}>
          <label htmlFor="add-wallet-balance" className="sr-only">
            Add balance to wallet
          </label>
          <input
            type="number"
            name="add-wallet-balance"
            id="add-wallet-balance"
            required
            className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-black placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
            placeholder="Add balance to wallet"
          />
          <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-indigo-500 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-sm sm:leading-6"
            >
              Add Balance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
