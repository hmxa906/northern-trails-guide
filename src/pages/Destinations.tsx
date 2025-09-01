import { MapPin, Clock, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import images
import hunzaImage from '@/assets/hunza-valley.jpg';
import skarduImage from '@/assets/skardu-lakes.jpg';
import naranImage from '@/assets/naran-kaghan.jpg';
import swatImage from '@/assets/swat-valley.jpg';
import murreeImage from '@/assets/murree-hills.jpg';

const destinations = [
  {
    image: hunzaImage,
    title: 'Hunza Valley',
    location: 'Gilgit-Baltistan',
    description: 'Experience the legendary beauty of Hunza with its terraced fields, ancient forts, and hospitable people.',
    bestTime: 'April - October',
    rating: 4.9,
    highlights: ['Karimabad', 'Altit Fort', 'Rakaposhi View', 'Apricot Blossoms'],
  },
  {
    image: skarduImage,
    title: 'Skardu',
    location: 'Gilgit-Baltistan',
    description: 'Gateway to K2 and home to stunning lakes, dramatic landscapes, and adventure tourism.',
    bestTime: 'May - September',
    rating: 4.8,
    highlights: ['Shangrila Resort', 'Deosai Plains', 'K2 Base Camp Trek', 'Satpara Lake'],
  },
  {
    image: naranImage,
    title: 'Naran Kaghan',
    location: 'Khyber Pakhtunkhwa',
    description: 'Alpine paradise with pristine lakes, lush meadows, and breathtaking mountain scenery.',
    bestTime: 'June - September',
    rating: 4.7,
    highlights: ['Lake Saiful Muluk', 'Lalazar', 'Babusar Pass', 'Lulusar Lake'],
  },
  {
    image: swatImage,
    title: 'Swat Valley',
    location: 'Khyber Pakhtunkhwa',
    description: 'The Switzerland of Pakistan with emerald rivers, dense forests, and rich Buddhist heritage.',
    bestTime: 'March - October',
    rating: 4.6,
    highlights: ['Kalam Valley', 'Ushu Forest', 'Malam Jabba', 'Buddhist Stupas'],
  },
  {
    image: murreeImage,
    title: 'Murree',
    location: 'Punjab',
    description: 'Colonial hill station with pine forests, scenic chairlifts, and panoramic valley views.',
    bestTime: 'April - October',
    rating: 4.3,
    highlights: ['Mall Road', 'Patriata Chairlift', 'Bhurban', 'Pine forests'],
  },
];

const Destinations = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-mountain text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Explore Destinations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover the most breathtaking locations in Northern Pakistan, each offering unique landscapes and unforgettable experiences.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="mountain-card rounded-2xl overflow-hidden group">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={destination.image} 
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {destination.location}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {destination.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>

                    <div className="flex items-center text-sm text-primary">
                      <Clock className="h-4 w-4 mr-1" />
                      Best time: {destination.bestTime}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Top Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full btn-mountain py-3 rounded-lg font-semibold mt-4">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Destinations;