import Profile from './components/Profile'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center bg-[#1f1f1f]">
        <Profile />
      </main>
      <Footer />
    </div>
  )
}
