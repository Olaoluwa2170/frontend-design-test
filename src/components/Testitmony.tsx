import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DefaultWidth from "./tools/DefaultWidth";

const Testimony = () => {
  return (
    <DefaultWidth className="">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="space-y-8">
          <p className="text-4xl text-center md:text-left md:text-5xl font-bold max-w-[451px] ">
            WHAT THEY ARE TALKING ABOUT?
          </p>
          <p className="text-center md:text-left text-sm text-primary-100">
            Trusted by more than 4,200 customers
          </p>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[330px] md:max-w-[765px] mt-8 md:mt-0"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 ">
                  <div className="">
                    <Card className="border-none rounded bg-white shadow-xl">
                      <CardContent className="flex flex-col items-center bg-white .justify-center p-8 rounded">
                        <div className="">
                          <p className="text-primary-100 text-sm p-2 px-5 leading-5 font-semibold w-[300px] md:w-[380px]">
                            Lorem ipsum is simply free text dolor sit amet,
                            consectetur notted adipisicing elit sed do eiusmod
                            tempor incididunt ut labore et dolore magna
                            aliqua.Lorem ipsum is simply free text dolor sit
                            amet,consectetur notted adipisicing elit sed do
                            eiusmod tempor
                          </p>
                          <p className="px-5 text-xs font-semibold p-2 flex items-end  mt-5 cursor-pointer text-primary-t200">
                            Tugg Devs
                          </p>
                          <p className="px-5 text-xs font-semibold p-1 flex items-end cursor-pointer text-primary-100">
                            customer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="translate-y-40 md:translate-y-32 translate-x-10 md:-translate-x-[305px] h-10 w-10 items-center" />
            <CarouselNext className="translate-y-40 md:translate-y-32 translate-x-10 left-64 md:-translate-x-[305px] h-10 w-10 items-center md:left-0" />
          </Carousel>
        </div>
      </div>
    </DefaultWidth>
  );
};

export default Testimony;
