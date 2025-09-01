import { DollarSign, Bed, Utensils, Car, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EstimatedCosts = () => {
  const destinations = [
    {
      name: 'Hunza Valley',
      duration: '4 Days',
      budget: {
        accommodation: { budget: '8,000', midRange: '20,000', luxury: '40,000' },
        food: { budget: '6,000', midRange: '12,000', luxury: '20,000' },
        transport: { budget: '15,000', midRange: '25,000', luxury: '40,000' },
        activities: { budget: '4,000', midRange: '8,000', luxury: '15,000' },
        total: { budget: '33,000', midRange: '65,000', luxury: '115,000' }
      }
    },
    {
      name: 'Skardu',
      duration: '5 Days',
      budget: {
        accommodation: { budget: '12,000', midRange: '25,000', luxury: '50,000' },
        food: { budget: '7,500', midRange: '15,000', luxury: '25,000' },
        transport: { budget: '20,000', midRange: '35,000', luxury: '50,000' },
        activities: { budget: '8,000', midRange: '15,000', luxury: '25,000' },
        total: { budget: '47,500', midRange: '90,000', luxury: '150,000' }
      }
    },
    {
      name: 'Naran Kaghan',
      duration: '3 Days',
      budget: {
        accommodation: { budget: '6,000', midRange: '15,000', luxury: '30,000' },
        food: { budget: '4,500', midRange: '9,000', luxury: '15,000' },
        transport: { budget: '12,000', midRange: '18,000', luxury: '25,000' },
        activities: { budget: '3,000', midRange: '6,000', luxury: '12,000' },
        total: { budget: '25,500', midRange: '48,000', luxury: '82,000' }
      }
    },
    {
      name: 'Swat Valley',
      duration: '4 Days',
      budget: {
        accommodation: { budget: '8,000', midRange: '18,000', luxury: '35,000' },
        food: { budget: '6,000', midRange: '12,000', luxury: '20,000' },
        transport: { budget: '10,000', midRange: '15,000', luxury: '25,000' },
        activities: { budget: '4,000', midRange: '8,000', luxury: '15,000' },
        total: { budget: '28,000', midRange: '53,000', luxury: '95,000' }
      }
    },
    {
      name: 'Murree',
      duration: '2 Days',
      budget: {
        accommodation: { budget: '4,000', midRange: '10,000', luxury: '20,000' },
        food: { budget: '3,000', midRange: '6,000', luxury: '12,000' },
        transport: { budget: '6,000', midRange: '10,000', luxury: '15,000' },
        activities: { budget: '2,000', midRange: '4,000', luxury: '8,000' },
        total: { budget: '15,000', midRange: '30,000', luxury: '55,000' }
      }
    }
  ];

  const categories = [
    { key: 'accommodation', icon: Bed, label: 'Accommodation' },
    { key: 'food', icon: Utensils, label: 'Food & Dining' },
    { key: 'transport', icon: Car, label: 'Transportation' },
    { key: 'activities', icon: Camera, label: 'Activities & Tours' }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-mountain text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Estimated Costs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Plan your budget for Northern Pakistan adventures. Compare costs across different comfort levels and destinations.
            </p>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Budget Breakdown by Destination</h2>
              <p className="text-muted-foreground text-lg">All costs are in Pakistani Rupees (PKR) per person</p>
            </div>

            <div className="space-y-12">
              {destinations.map((destination, index) => (
                <div key={index} className="mountain-card rounded-2xl p-8">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-muted-foreground">Duration: {destination.duration}</p>
                  </div>

                  {/* Budget Categories */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    {categories.map((category) => (
                      <div key={category.key} className="text-center">
                        <div className="bg-gradient-mountain text-white rounded-lg p-4 mb-4 inline-block">
                          <category.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-semibold mb-4">{category.label}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Budget:</span>
                            <span className="font-medium">PKR {destination.budget[category.key].budget}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Mid-range:</span>
                            <span className="font-medium">PKR {destination.budget[category.key].midRange}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Luxury:</span>
                            <span className="font-medium">PKR {destination.budget[category.key].luxury}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total Costs */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Total Estimated Cost
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <h5 className="font-semibold text-green-600 mb-2">Budget Travel</h5>
                        <p className="text-2xl font-bold">PKR {destination.budget.total.budget}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <h5 className="font-semibold text-blue-600 mb-2">Mid-Range</h5>
                        <p className="text-2xl font-bold">PKR {destination.budget.total.midRange}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <h5 className="font-semibold text-purple-600 mb-2">Luxury</h5>
                        <p className="text-2xl font-bold">PKR {destination.budget.total.luxury}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money Saving Tips */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Money Saving Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mountain-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Travel Off-Season</h3>
                <p className="text-muted-foreground">Visit during shoulder seasons for better rates on accommodation and fewer crowds.</p>
              </div>
              <div className="mountain-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Group Bookings</h3>
                <p className="text-muted-foreground">Travel in groups to share transportation costs and get group discounts on hotels.</p>
              </div>
              <div className="mountain-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Local Food</h3>
                <p className="text-muted-foreground">Eat at local restaurants instead of hotel dining to experience authentic cuisine at lower costs.</p>
              </div>
              <div className="mountain-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Public Transport</h3>
                <p className="text-muted-foreground">Use local buses and shared jeeps for intercity travel to reduce transportation expenses.</p>
              </div>
              <div className="mountain-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Advance Booking</h3>
                <p className="text-muted-foreground">Book accommodations and flights in advance for better deals and availability.</p>
              </div>
              <div className="mountain-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Local Guides</h3>
                <p className="text-muted-foreground">Hire local guides instead of expensive tour companies for authentic and budget-friendly experiences.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EstimatedCosts;