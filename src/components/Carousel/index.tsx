import { ChevronDown, CloseIcon } from '@/src/assets/svgIcons';
import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef } from 'react';

interface CarouselProps {
    images: Array<Array<string | StaticImageData>>;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [showSelectedImage, setShowSelectedImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const carouselRef = useRef<HTMLDivElement>(null);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const position = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartPos(position);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !carouselRef.current) return;
        const currentPosition = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const diff = startPos - currentPosition;

        if (diff > 100) {
            nextSlide();
            setIsDragging(false);
        } else if (diff < -100) {
            prevSlide();
            setIsDragging(false);
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    function getSrc(src: string) {
        setShowSelectedImage(true)
        setSelectedImage(src)
    }

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                ref={carouselRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full flex">
                        {image.map(img => (
                            <Image
                                src={img}
                                alt={`Slide ${index}`}
                                className="w-1/3 flex hover:scale-110 hover:cursor-zoom-in duration-200 ease-in-out transition-transform"
                                key={index}
                                onClick={() => getSrc(img.toString())}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 rotate-90 duration-200 hover:bg-[#210140] hover:bg-opacity-40 rounded-full"
                onClick={prevSlide}
            >
                <ChevronDown width={48} height={48} fill='#FFFFFF' />
            </button>
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 -rotate-90 duration-200 hover:bg-[#210140] hover:bg-opacity-40 rounded-full"
                onClick={nextSlide}
            >
                <ChevronDown width={48} height={48} fill='#FFFFFF' />
            </button>
            {showSelectedImage &&
                <>
                    <div className='fixed inset-0 bg-gray-500 z-50 opacity-40'></div>
                    <span className='fixed z-50 w-[800px] rounded-xl bg-white top-24 inset-x-96 ml-40'>
                        <button onClick={() => setShowSelectedImage(false)} className='absolute -right-8 -top-8'><CloseIcon width={18} height={18}/></button>
                        <Image src={selectedImage} alt='' className='rounded-xl' />
                    </span>
                </>

            }
        </div>
    );
};

export default Carousel;
