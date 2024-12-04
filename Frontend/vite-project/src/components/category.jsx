import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Category() {
  const itemList = [
    "frontend Developer",
    "backend Developer",
    "data scientist",
    "UX/UI designer",
    "product manager",
  ]
  return (
    <>
      <div className="flex justify-center items-center py-20">
        <Carousel className="ml-20 w-80 text-center">
          <CarouselContent>

            {
              itemList.map((item, index) => (
                <CarouselItem key={index}>
                  <button className="rounded-lg text-gray-900">{item}</button>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default Category
