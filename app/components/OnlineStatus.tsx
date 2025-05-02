'use client'
import React from 'react'
import { ChevronUp } from 'lucide-react'

const OnlineStatus = () => {
  return (
    <div className="bg-gradient-to-br to-[#cce0ff] p-3 rounded-full w-[300px]">
      <div className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow">
        {/* Overlapping user avatars */}
        <div className="flex items-center -space-x-3 relative">
          <div className="w-8 h-8 bg-blue-400 rounded-full z-10" />
          <div className="w-8 h-8 bg-blue-500 rounded-full z-20" />
          <div className="w-8 h-8 bg-blue-600 rounded-full z-30 relative">
            {/* Green dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border border-white" />
          </div>
        </div>

        <span className="text-gray-500 text-sm font-medium flex-1">Online</span>

        <ChevronUp size={16} className="text-gray-400" />
      </div>
    </div>
  )
}

export default OnlineStatus
