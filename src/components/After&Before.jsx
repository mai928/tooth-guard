'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api';
import { useTranslation } from 'react-i18next';

const AfterBefore = () => {



  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [data, setData] = useState('')


  const { t, i18n } = useTranslation()

  useEffect(() => {
    const fetchSetting = async () => {
      const response = await fetchData(`api/after_before`, i18n.language)
      setData(response?.data)
    }

    fetchSetting()

  }, [])

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
        <img
          className='w-full h-full'

          alt=""
          fill
          draggable={false}
          priority
          src={data?.before_photo}
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            className='w-full h-full'
            priority
            draggable={false}
            alt=""
            src={data?.after_photo}
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
