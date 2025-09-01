import { Heart, Users, Award, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion for Adventure',
      description: 'We are driven by an unwavering love for the mountains, valleys, and cultural richness of Northern Pakistan.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'Supporting local communities and promoting sustainable tourism that benefits the people of Northern Pakistan.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Authentic Experiences',
      description: 'Providing genuine, unfiltered experiences that showcase the true beauty and culture of the region.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Responsible Tourism',
      description: 'Promoting eco-friendly travel practices that preserve the natural beauty for future generations.'
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Passionate explorers sharing the untold stories and hidden gems of Northern Pakistan's breathtaking landscapes.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Born from a love for adventure and a deep appreciation for Pakistan's northern beauty
                </p>
              </div>

              <div className="mountain-card rounded-2xl p-8 md:p-12 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Northern Pakistan Travel Blog began as a personal journey of discovery through the majestic landscapes of Hunza, Skardu, Naran, Swat, and Murree. What started as documenting our own adventures has evolved into a comprehensive resource for travelers seeking authentic experiences in Pakistan's northern regions.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team consists of local guides, experienced travelers, and photography enthusiasts who have spent years exploring every valley, lake, and mountain peak in Northern Pakistan. We believe that travel should be more than just sightseeing—it should be about connecting with local cultures, understanding traditions, and creating memories that last a lifetime.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through detailed guides, honest cost breakdowns, and insider tips, we aim to make the spectacular beauty of Northern Pakistan accessible to travelers from all walks of life. Whether you're planning a budget backpacking trip or a luxury mountain retreat, we provide the information you need to make your journey unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide our mission to share Northern Pakistan's beauty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="mountain-card rounded-lg p-8">
                  <div className="bg-gradient-mountain text-white rounded-lg p-4 w-fit mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <div className="mountain-card rounded-2xl p-8 md:p-12">
                <p className="text-2xl font-light text-muted-foreground leading-relaxed mb-8">
                  "To inspire and empower travelers to explore Northern Pakistan's incredible landscapes while fostering respect for local cultures and promoting sustainable tourism practices."
                </p>
                <div className="bg-gradient-mountain text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
                  <p className="text-white/90">
                    Follow us on social media for daily dose of Northern Pakistan's beauty, travel tips, and inspiring stories from fellow adventurers. Share your own experiences and become part of our growing community of mountain lovers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about traveling to Northern Pakistan? Want to share your own adventure story? We'd love to hear from you.
            </p>
            <button className="btn-mountain px-8 py-4 rounded-lg text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;