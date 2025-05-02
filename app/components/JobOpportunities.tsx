import React from 'react'

const JobOpportunities = () => {
  return (
    <aside className="w-full bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold text-lg mb-2 text-black">Job Opportunities</h2>
      <div className="mb-3">
        <h3 className="text-sm font-medium mb-1 text-black">Suggested job searches</h3>
        <div className="flex flex-wrap gap-2">
          {['Apple', 'Services', 'Google', 'Microsoft', 'TCS'].map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 rounded-full text-sm cursor-pointer text-blue-500 border border-blue-500
"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ul className="space-y-2 text-sm">
        {['Full Stack Engineer', 'HTML/CSS Developer', 'Web Developer Intern', 'Senior Web Developer'].map(job => (
          <li key={job} className="text-blue-600 hover:underline cursor-pointer">{job}</li>
        ))}
      </ul>
      <div className="mt-4 text-sm text-gray-500">
        <p className="cursor-pointer">Preferences</p>
        <p className="cursor-pointer">My jobs</p>
        <p className="cursor-pointer">Interview prep</p>
      </div>
      <button className="mt-4 text-blue-600 text-sm hover:underline">Post a free job</button>
    </aside>
  )
}

export default JobOpportunities
