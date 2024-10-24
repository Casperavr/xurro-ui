"use client"

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */


type Image = {
    title: string,
    id: number,
    index: number,
    src: StaticImageData,
    alt: string,
}

type CarouselProps = {
    images: Image[]
}


export default function Carousel({ images }:CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);



  const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[50vh] flex overflow-visible relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images && images.map((image:Image, index:number) => {
            if (index === currentSlide) {
              return (
                <div key={image.id} className="h-full">
                    <h1 className="relative md:inset-x-1/3 md:bottom-12 z-50 text-xl">{image.title}</h1>
                    <Image
                    src={image.src}
                    layout="fill"
                    objectFit="contain"
                    className="animate-fadeIn"
                    alt={image.alt}
                    />
                </div>
              );
            }

            
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images && images.map((_, index:number) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-1 w-12 bg-gray-300 mx-2 mb-2 cursor-pointer"
                  : "h-1 w-12 bg-gray-700 mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}