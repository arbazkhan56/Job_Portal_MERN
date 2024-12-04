import Card from "./card"
import Navbar from "./share/navbar"

const Browser = () => {
  const searchBrowser = [1,2,3,]
  return (
    <>
      <Navbar />
      <h1 className="text-center"><strong>Browser Jobs - ({searchBrowser.length})</strong></h1>
    <div>
      {
        searchBrowser.map((item, index) => {
          return (
            <Card key={index}/>
          )
        })
      }
    </div>
    </>
  )
}

export default Browser
