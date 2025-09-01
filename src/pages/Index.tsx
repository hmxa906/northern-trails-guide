import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import DestinationCard from '@/components/DestinationCard';
import Footer from '@/components/Footer';

// Import images
import hunzaImage from '@/assets/hunza-valley.jpg';
import skarduImage from '@/assets/skardu-lakes.jpg';
import naranImage from '@/assets/naran-kaghan.jpg';
import swatImage from '@/assets/swat-valley.jpg';
import murreeImage from '@/assets/murree-hills.jpg';

const Index = () => {
  useEffect(() => {
    // SEO optimization
    document.title = 'Northern Pakistan Travel Blog | Hunza, Skardu, Naran, Swat, Murree';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Northern Pakistan\'s breathtaking beauty. Complete travel guides for Hunza Valley, Skardu, Naran Kaghan, Swat Valley, and Murree. Budget estimates, itineraries, and insider tips.');
    }
  }, []);

  const featuredDestinations = [
    {
      image: hunzaImage,
      title: 'Hunza Valley',
      location: 'Gilgit-Baltistan, Pakistan',
      description: 'Experience the legendary beauty of Hunza with snow-capped Karakoram peaks, terraced apricot orchards, and ancient stone forts. Home to some of the most hospitable people on earth, offering breathtaking views of Rakaposhi and rich cultural heritage spanning centuries.',
      budgetRange: 'PKR 33,000 - 115,000',
    },
    {
      image: skarduImage,
      title: 'Skardu Lakes',
      location: 'Gilgit-Baltistan, Pakistan',
      description: 'Gateway to K2 and paradise of crystal-clear lakes surrounded by dramatic granite peaks. From the famous Shangrila Resort to the pristine Deosai Plains, Skardu offers unparalleled adventure tourism and some of the most spectacular mountain scenery in the world.',
      budgetRange: 'PKR 47,500 - 150,000',
      reverse: true,
    },
    {
      image: naranImage,
      title: 'Naran Kaghan Valley',
      location: 'Khyber Pakhtunkhwa, Pakistan',
      description: 'Alpine paradise featuring emerald lakes, lush green meadows, and majestic peaks. Famous for the enchanting Lake Saiful Muluk and colorful wildflower fields, this valley offers perfect hiking trails and breathtaking mountain vistas.',
      budgetRange: 'PKR 25,500 - 82,000',
    },
    {
      image: swatImage,
      title: 'Swat Valley',
      location: 'Khyber Pakhtunkhwa, Pakistan',
      description: 'Known as the Switzerland of Pakistan, featuring emerald rivers flowing through dense pine forests. Rich in Buddhist heritage with ancient stupas and monasteries, Swat offers a perfect blend of natural beauty and historical significance.',
      budgetRange: 'PKR 28,000 - 95,000',
      reverse: true,
    },
    {
      image: murreeImage,
      title: 'Murree Hills',
      location: 'Punjab, Pakistan',
      description: 'Colonial-era hill station with charming architecture, scenic chairlifts, and panoramic valley views. Famous for its bustling Mall Road, pine forests, and pleasant weather, making it perfect for family vacations and weekend getaways.',
      budgetRange: 'PKR 15,000 - 55,000',
    },
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Slider */}
        <HeroSlider />

        {/* Introduction Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Discover Northern Pakistan
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From the towering peaks of the Karakoram to the serene lakes of Skardu, Northern Pakistan offers some of the world's most spectacular landscapes. Our comprehensive guides help you plan unforgettable adventures through these magnificent regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/destinations" className="btn-mountain px-8 py-4 rounded-lg font-semibold inline-flex items-center">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/travel-guides" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Travel Guides
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Northern Pakistan Destinations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each destination offers unique experiences, from mountain treks to cultural immersion, with detailed cost breakdowns and insider tips.
              </p>
            </div>

            <div className="space-y-8">
              {featuredDestinations.map((destination, index) => (
                <DestinationCard
                  key={index}
                  image={destination.image}
                  title={destination.title}
                  location={destination.location}
                  description={destination.description}
                  budgetRange={destination.budgetRange}
                  reverse={destination.reverse}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 bg-gradient-mountain text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Northern Pakistan at a Glance</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Key facts about this incredible region that spans multiple provinces and offers diverse experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-white/90">Major Destinations</div>
                <div className="text-sm text-white/70 mt-2">Hunza, Skardu, Naran, Swat, Murree</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8,000m+</div>
                <div className="text-white/90">Peak Heights</div>
                <div className="text-sm text-white/70 mt-2">Including K2, world's 2nd highest</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-white/90">Months Season</div>
                <div className="text-sm text-white/70 mt-2">April-October is best for most areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">PKR 15K+</div>
                <div className="text-white/90">Starting Budget</div>
                <div className="text-sm text-white/70 mt-2">2-day Murree trip from Islamabad</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mountain-card rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Start Your Adventure</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to explore the magical landscapes of Northern Pakistan? Browse our detailed guides, check estimated costs, and start planning your unforgettable journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/estimated-costs" className="btn-mountain px-8 py-4 rounded-lg font-semibold">
                  Check Travel Costs
                </Link>
                <Link to="/travel-guides" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Download Guides
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;