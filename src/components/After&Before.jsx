'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const AfterBefore = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
  
    const handleMove = (event) => {
      if (!isDragging) return;

      let clientX;
      if (event.type.includes('mouse')) {
        clientX = event.clientX;
      } else if (event.type.includes('touch')) {
        clientX = event.touches[0].clientX;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
  
      setSliderPosition(percent);
    };
  
    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleTouchStart = () => {
      setIsDragging(true);
    };
  
    const handleEnd = () => {
      setIsDragging(false);
    };

    return (
      <div
        className="w-full relative py-10"
        onMouseUp={handleEnd}
        onTouchEnd={handleEnd}
      >
        <div
          className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <Image
            alt=""
            fill
            draggable={false}
            priority
            src="/assets/after.webp"
          />

          <div
            className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              fill
              priority
              draggable={false}
              alt=""
              src="/assets/before.webp"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{
              left: `calc(${sliderPosition}% - 1px)`,
            }}
          >
            <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
          </div>
        </div>
      </div>
    );
};

export default AfterBefore;
