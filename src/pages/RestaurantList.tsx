import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Restaurant {
  id: string;
  name: string;
  rating: string;
  image: string;
  description: string;
}

function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <div className="restaurant-list">
      <h1>Todos os Restaurantes</h1>
      {restaurants.map(restaurant => (
        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant.name} />
          <div className="restaurant-info">
            <h2>{restaurant.name}</h2>
            <p>Avaliação: {restaurant.rating}</p>
            <p>{restaurant.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RestaurantList;

