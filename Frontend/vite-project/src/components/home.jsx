import Category from "./category"
import UseAllJobs from "./customhooks/usealljobs"
import Footer from "./footer"
import HeroSelection from "./heroSelection"
import LatestJobs from "./latestJobs"
import Navbar from "./share/navbar"
function Home() {
  UseAllJobs()
  return (
    <div>
      <Navbar />
      <HeroSelection />
      <Category />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home
