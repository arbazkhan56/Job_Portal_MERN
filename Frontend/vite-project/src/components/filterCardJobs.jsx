import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const FilterCardJobs = () => {
  const id =455;
  return (
    <>
      <div className="gap-6">

        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-2">{"title"}</h3>
          <p className="text-gray-700 mb-2">{"description"}</p>
          <span className="inline-block bg-indigo-500 text-white px-3 py-1 rounded-lg text-sm">
            {"tech"}
          </span>
          <div className="flex gap-2">
            <Button><Link to={`/description/${id}`}>Details</Link></Button>
            <Button>Save For Later</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default FilterCardJobs
