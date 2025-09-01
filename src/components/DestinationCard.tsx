import { MapPin, DollarSign } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  budgetRange: string;
  reverse?: boolean;
}

const DestinationCard = ({ 
  image, 
  title, 
  location, 
  description, 
  budgetRange, 
  reverse = false 
}: DestinationCardProps) => {
  return (
    <div className={`mountain-card rounded-2xl overflow-hidden mb-16 ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    } flex flex-col lg:items-center`}>
      {/* Image Section */}
      <div className="lg:w-1/2 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 lg:p-12 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed text-lg">
          {description}
        </p>

        {/* Budget Info */}
        <div className="space-y-4">
          <div className="flex items-center text-primary font-semibold">
            <DollarSign className="h-5 w-5 mr-1" />
            Budget Range: {budgetRange}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Accommodation</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>Budget: PKR 2,000-4,000/night</p>
                <p>Mid-range: PKR 5,000-8,000/night</p>
                <p>Luxury: PKR 10,000+/night</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Daily Expenses</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>Food: PKR 1,500-3,000</p>
                <p>Transport: PKR 2,000-5,000</p>
                <p>Activities: PKR 1,000-3,000</p>
              </div>
            </div>
          </div>
        </div>

        <button className="btn-mountain px-6 py-3 rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;