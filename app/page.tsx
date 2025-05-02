import Navbar from './components/Navbar'
import JobOpportunities from './components/JobOpportunities'
import PostSomething from './components/PostSomething'
import FeedPost from './components/FeedPost'
import ProfileCard from './components/ProfileCard'
import MyActivities from './components/MyActivities'
import OnlineStatus from './components/OnlineStatus'

export default function Home() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <JobOpportunities />
        </div>

        {/* Center Feed */}
        <div className="lg:col-span-2 space-y-4">
          <PostSomething />
          <FeedPost />
          <FeedPost />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <ProfileCard />
          <MyActivities />
          <OnlineStatus />
        </div>
      </div>
    </main>
  )
}
