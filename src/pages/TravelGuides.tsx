import { Calendar, Users, Backpack, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TravelGuides = () => {
  const guides = [
    {
      title: '4-Day Hunza Valley Adventure',
      duration: '4 Days / 3 Nights',
      groupSize: '2-8 People',
      season: 'April - October',
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Karimabad',
          activities: ['Check into hotel', 'Visit Baltit Fort', 'Sunset at Eagle\'s Nest', 'Local dinner']
        },
        {
          day: 2,
          title: 'Rakaposhi Base Camp',
          activities: ['Early morning hike', 'Photography session', 'Local lunch', 'Altit Fort exploration']
        },
        {
          day: 3,
          title: 'Attabad Lake & Passu',
          activities: ['Boat ride on lake', 'Passu Cones viewpoint', 'Suspension bridge walk', 'Cultural exchange']
        },
        {
          day: 4,
          title: 'Departure',
          activities: ['Morning in Karimabad bazaar', 'Souvenir shopping', 'Departure to Islamabad']
        }
      ]
    },
    {
      title: '5-Day Skardu Lakes Tour',
      duration: '5 Days / 4 Nights',
      groupSize: '4-10 People',
      season: 'May - September',
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Shangrila',
          activities: ['Airport pickup', 'Check into Shangrila Resort', 'Lower Kachura Lake visit', 'Evening rest']
        },
        {
          day: 2,
          title: 'Satpara & Sadpara Lakes',
          activities: ['Morning at Satpara Lake', 'Sadpara Dam visit', 'Local trout lunch', 'Skardu city tour']
        },
        {
          day: 3,
          title: 'Deosai Plains',
          activities: ['Early departure to Deosai', 'Wildlife spotting', 'Sheosar Lake', 'Camping under stars']
        },
        {
          day: 4,
          title: 'Upper Kachura Lake',
          activities: ['Return from Deosai', 'Upper Kachura Lake', 'Boating & fishing', 'Organic farm visit']
        },
        {
          day: 5,
          title: 'Departure',
          activities: ['Morning photography', 'Local handicraft shopping', 'Flight to Islamabad']
        }
      ]
    }
  ];

  const tips = [
    {
      category: 'Best Season',
      icon: <Calendar className="h-5 w-5" />,
      content: 'Visit during April-October for clear weather. Avoid winter months due to road closures and extreme cold.'
    },
    {
      category: 'Packing Essentials',
      icon: <Backpack className="h-5 w-5" />,
      content: 'Warm clothes, comfortable hiking boots, sunscreen, power bank, first aid kit, and local currency.'
    },
    {
      category: 'Cultural Respect',
      icon: <Users className="h-5 w-5" />,
      content: 'Dress modestly, respect local customs, ask permission before photographing people, and learn basic Urdu phrases.'
    },
    {
      category: 'Safety Tips',
      icon: <Lightbulb className="h-5 w-5" />,
      content: 'Travel with reputable guides, inform someone of your itinerary, carry emergency contacts, and have travel insurance.'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-mountain text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Travel Guides
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive guides and expert tips for your Northern Pakistan adventure. Plan your perfect journey with our detailed itineraries.
            </p>
          </div>
        </section>

        {/* Sample Itineraries */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Sample Itineraries</h2>
            
            <div className="space-y-16">
              {guides.map((guide, index) => (
                <div key={index} className="mountain-card rounded-2xl p-8">
                  {/* Guide Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-4">{guide.title}</h3>
                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {guide.groupSize}
                      </div>
                      <div className="flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        {guide.season}
                      </div>
                    </div>
                  </div>

                  {/* Itinerary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {guide.itinerary.map((day, dayIndex) => (
                      <div key={dayIndex} className="border border-border rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-mountain text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                            {day.day}
                          </div>
                          <h4 className="text-lg font-semibold">{day.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Essential Travel Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <div key={index} className="mountain-card rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-mountain text-white p-3 rounded-lg flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tip.category}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tip.content}</p>
                    </div>
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

export default TravelGuides;