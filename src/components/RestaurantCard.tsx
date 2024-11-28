import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface RestaurantCardProps {
  id: string;
  name: string;
  rating: string;
  image: string;
  description: string;
}

export function RestaurantCard({ id, name, rating, image, description }: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}

