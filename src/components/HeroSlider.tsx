import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import hero images
import hunzaImage from '@/assets/hunza-valley.jpg';
import skarduImage from '@/assets/skardu-lakes.jpg';
import naranImage from '@/assets/naran-kaghan.jpg';
import swatImage from '@/assets/swat-valley.jpg';
import murreeImage from '@/assets/murree-hills.jpg';

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: SlideData[] = [
  {
    image: hunzaImage,
    title: 'Hunza Valley',
    subtitle: 'Land of Legends',
    description: 'Discover the breathtaking beauty of Karakoram mountains and ancient culture',
  },
  {
    image: skarduImage,
    title: 'Skardu Lakes',
    subtitle: 'Gateway to K2',
    description: 'Experience pristine lakes and dramatic landscapes near the world\'s second highest peak',
  },
  {
    image: naranImage,
    title: 'Naran Kaghan',
    subtitle: 'Alpine Paradise',
    description: 'Explore lush green valleys, pristine lakes and colorful meadows',
  },
  {
    image: swatImage,
    title: 'Swat Valley',
    subtitle: 'Switzerland of Pakistan',
    description: 'Journey through emerald rivers, dense forests and ancient heritage',
  },
  {
    image: murreeImage,
    title: 'Murree Hills',
    subtitle: 'Colonial Charm',
    description: 'Enjoy scenic hill station with pine forests and panoramic valley views',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className={`text-6xl md:text-8xl font-bold mb-4 transition-all duration-700 ${
            'fade-in-up'
          }`}>
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-6 hero-title">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="btn-mountain px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Explore Now
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;