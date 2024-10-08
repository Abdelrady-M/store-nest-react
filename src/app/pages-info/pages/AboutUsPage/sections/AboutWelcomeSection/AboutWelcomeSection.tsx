import { trans } from "@mongez/localization";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "design-system/components/ui/carousel";
import React from "react";
import { currentDirection, currentLocaleCode } from "shared/utils/helpers";
function _AboutWelcomeSection() {
  return (
    <div className="flex gap-4 max-lg:flex-col">
      <div className="body-t-1-right basis-full">
        <img
          src="/public/images/about-us/about-1.png"
          className="w-full rounded-3xl"
        />
      </div>
      <div className="body-t-1-left p-10 basis-full">
        <h2 className="text-4xl font-bold my-10">
          {trans("about-us.welcome")}
        </h2>

        <p className="text-muted-foreground my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum. Ius ferri velit sanctus cu,
          sed at soleat accusata.
        </p>

        <p className="text-muted-foreground">
          Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut
          libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
          Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
          ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate id est
          laborum.
        </p>

        <div className="gallery-images w-full my-4">
          <Carousel>
            <CarouselContent
              lang={currentLocaleCode()}
              dir={currentDirection()}>
              {[
                "/images/about-us/about-2.png",
                "/images/about-us/about-3.png",
                "/images/about-us/about-4.png",
                "/images/about-us/about-2.png",
                "/images/about-us/about-4.png",
              ].map(image => (
                <>
                  <CarouselItem className="w-full me-2 xs:basis-1/2 md:basis-1/3 aspect-square">
                    <img src={image} />
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-1/2 -translate-y-1/2 left-2 text-primary hover:text-primary-foreground" />
            <CarouselNext className="top-1/2 -translate-y-1/2 right-2 text-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const AboutWelcomeSection = React.memo(_AboutWelcomeSection);
export default AboutWelcomeSection;
