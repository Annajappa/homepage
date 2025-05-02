'use client'
import React from 'react'
import { Book } from 'lucide-react'

const ProfileCard = () => {
  return (
    <div className="rounded-2xl shadow bg-gradient-to-br from-[#e6f0ff] to-[#cce0ff] p-1">
      <div className="bg-white rounded-2xl text-center overflow-hidden">
        {/* Top gray section */}
        <div className="bg-gray-200 h-20 relative">
          {/* Profile Image Circle */}
          <div className="w-20 h-20 bg-gray-300 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 top-6" />
        </div>

        <div className="pt-12 pb-4 px-4">
          <h3 className="font-semibold text-black">John Doe</h3>
          <p className="text-sm text-gray-500">department | Bio</p>
          <p className="text-sm text-gray-500">Location</p>

          {/* Education Icon Row */}
          <div className="flex justify-center items-center gap-1 mt-2 text-gray-700">
            <Book className="w-4 h-4" />
            <span className="text-sm">Education</span>
          </div>

          {/* View Profile Button */}
          <button className="mt-4 px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 transition">
            View profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
