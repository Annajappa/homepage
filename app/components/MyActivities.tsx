'use client'
import React from 'react'

const courses = [
  { title: 'Web Developer', percent: 60 },
  { title: 'Digital Marketing', percent: 80 },
  { title: 'E-commerce', percent: 40 },
]

const MyActivities = () => {
  return (
    <div className="rounded-2xl shadow bg-gradient-to-br from-[#e6f0ff] to-[#cce0ff] p-1">
      <div className="bg-white rounded-2xl p-4">
        <h3 className="font-semibold text-lg text-black mb-1">My Activities</h3>
        <p className="text-gray-500 mb-4 text-sm font-medium">Courses</p>

        <ul className="space-y-4 text-sm">
          {courses.map(({ title, percent }) => (
            <li key={title} className="flex justify-between items-center">
              <span className="text-gray-700">{title}</span>
              {/* Simulated circular progress using border trick */}
              <div className="relative w-6 h-6">
                <svg viewBox="0 0 36 36" className="w-6 h-6">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray={`${percent}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-5 px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 transition">
          Add Courses
        </button>
      </div>
    </div>
  )
}

export default MyActivities
