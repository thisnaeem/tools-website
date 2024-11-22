import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ToolsList from '@/components/ToolsList'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16 flex-grow">
        <Hero />
        <ToolsList />
      </main>
      <Footer />
    </div>
  )
}
