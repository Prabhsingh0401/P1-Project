import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const DEFAULT_ITEMS = [
  {
    title: 'Osto One',
    description: 'Comprehensive cybersecurity built for businesses that demand reliability, control, and peace of mind.',
    price: '$10',
    period: '/ User / Month',
    features: [
      'All Security Modules Included',
      'Each User can use upto 3 devices.',
      '24/7 Threat Monitoring'
    ],
    id: 1
  },
  {
    title: 'Osto One + Managed Services*',
    description: 'Full protection plus expert-led management, proactive threat response, and dedicated support.',
    price: '$15',
    period: '/ User / Month',
    features: [
      'All Security Modules Included',
      'Each User can use upto 3 devices.',
      '24/7 Threat Monitoring',
      '*MSP-Backed Dedicated Support'
    ],
    id: 2
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 450,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#373990]'
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col bg-white border border-gray-200 rounded-[12px] overflow-hidden cursor-grab active:cursor-grabbing p-6`}
              style={{
                width: itemWidth,
                height: '430px'
              }}
              transition={effectiveTransition}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{item.description}</p>
                <div className="mb-4">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-black">{item.price}</span>
                    <span className="text-gray-500 ml-1">{item.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-[#393b90] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#393b90] text-white py-2 px-4 rounded-lg hover:bg-[#272863] transition-colors">
                  Get started
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex gap-2 justify-center">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
