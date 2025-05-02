'use client'
import React from 'react'
import {
  Youtube,
  Image,
  LayoutGrid
} from 'lucide-react'

const PostSomething = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4">
      <h2 className="font-semibold text-black mb-2">Post Something</h2>
      <hr className="mb-3 border-gray-200" />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
          <input
            type="text"
            placeholder="What’s on your mind?"
            className="bg-transparent text-gray-500 placeholder-gray-400 font-medium focus:outline-none w-full"
          />
        </div>

        <div className="flex gap-3 text-gray-500">
          <Youtube className="w-5 h-5" />
          <Image className="w-5 h-5" />
          <LayoutGrid className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default PostSomething
