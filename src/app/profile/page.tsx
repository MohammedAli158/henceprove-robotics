"use client"
import React from 'react';
import {useState} from "react"
export default function ProfilePage() {
   
  return (
    <div className=" bg-gray-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
       

        

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-2" />
          <button className="text-sm text-blue-600 hover:underline">Change Avatar</button>
        </div>

        {/* Form */}
        <div className="space-y-4 flex gap-5">
         <div className=' flex-1 '>
             <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" value="Ali" className="mt-1 block w-full border border-gray-300 rounded-md p-2" readOnly />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" checked readOnly />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" readOnly />
                <span>Female</span>
              </label>
            </div>
          </div>
         

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" value="s72948399@gmail.com" className="mt-1 block w-full border border-gray-300 rounded-md p-2" readOnly />
          </div>

          
        </div>
          <div className='flex-1' >
            <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input type="text" placeholder="Enter 10-digit mobile number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
            <label className="block text-sm font-medium text-gray-700">Grade</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
              <option>Select Grade</option>
            </select>
          <div>
            <label className="block text-sm font-medium text-gray-700">School Name</label>
            <input type="text" placeholder="Enter school name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          </div>


         

         
        </div>
     <div className='flex flex-col justify-center items-center' >
            <label className="block text-sm font-medium text-gray-700">About</label>
            <textarea
              maxLength={500}
              placeholder="Write about yourself (max 500 characters)"
              className="mt-1 block w-full border border-gray-300 focus:outline-none  rounded-md p-2 h-24 resize-none"
            />
             <button
            type="button"
            disabled
            className="mt-4 w-55 text-center bg-gray-400 text-white py-2 rounded-md cursor-not-allowed"
          >
            Save Changes
          </button>
          </div>
      </div>
    </div>
  );
}