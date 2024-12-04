import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const FilterCard = () => {
    const fitlerData = [
        {
            fitlerType: "Location",
            array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
        },
        {
            fitlerType: "Industry",
            array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
        },
        {
            fitlerType: "Salary",
            array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
        },
    ]
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <hr className="mt-3" />
            <RadioGroup>
                {fitlerData.map((data, index) => (
                    <div key={index}>
                        <h1 className="font-bold text-lg">{data.fitlerType}</h1>
                        {data.array.map((item, idx) => {
                            const itemId = `id-${index}-${idx}`;
                            return (
                                <div className="flex items-center space-x-2 my-2" key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
        </>
    )
}

export default FilterCard
