'use client'
import React from 'react'
import {
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
} from 'lucide-react'
import CommentInput from './CommentInput'

const FeedPost = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div>
          <p className="font-medium text-black">John Doe</p>
          <p className="text-xs text-gray-500">12 April at 08:28 PM</p>
        </div>
      </div>

      <p className="mb-2 text-black">Caption...</p>

      <div className="flex gap-4 mb-5">
        {/* Left large box */}
        <div className="flex-1 h-45 bg-gray-200 rounded-xl" />

        {/* Right stacked boxes */}
        <div className="flex flex-col gap-4 w-1/3">
          <div className="h-20 bg-gray-200 rounded-xl" />
          <div className="h-20 bg-gray-200 rounded-xl" />
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 items-center mb-2">
        <div className="flex items-center gap-1">
          <MessageCircle size={16} className="text-gray-500" />
          <p>25 Comments</p>
        </div>
        <div className="flex items-center gap-1">
          <Heart size={16} className="text-gray-500" />
          <p>120k Likes</p>
        </div>
        <div className="flex items-center gap-1">
          <Share2 size={16} className="text-gray-500" />
          <p>231 Shares</p>
        </div>
        <div className="flex items-center gap-1">
          <Bookmark size={16} className="text-gray-500" />
          <p>10 Saved</p>
        </div>
      </div>

    <CommentInput />
    </div>
  )
}

export default FeedPost
