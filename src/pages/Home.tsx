import { useState, useEffect } from 'react';
import { RestaurantCard } from '../components/RestaurantCard';

interface Restaurant {
  id: string;
  name: string;
  rating: string;
  image: string;
  description: string;
}

export function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/restaurants')
      .then(response => response.json())
      .then(setRestaurants);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Restaurantes Recomendados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
          />
        ))}
      </div>
    </div>
  );
}

