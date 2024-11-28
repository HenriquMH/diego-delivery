import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Truck } from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  rating: string;
  image: string;
  description: string;
}

interface Food {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  description: string;
}

export function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/restaurants')
      .then(response => response.json())
      .then(data => {
        const restaurantData = data.find((r: Restaurant) => r.id === id);
        setRestaurant(restaurantData);
      });

    fetch('https://apifakedelivery.vercel.app/foods')
      .then(response => response.json())
      .then(data => {
        const restaurantFoods = data.filter((f: Food) => f.restaurantId === id);
        setFoods(restaurantFoods);
      });
  }, [id]);

  if (!restaurant) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-64 -mx-4">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex items-center mt-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{restaurant.rating}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Cardápio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {foods.map(food => (
            <div key={food.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{food.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{food.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {food.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Truck className="w-4 h-4 mr-1" />
                      R$ {food.delivery.toFixed(2)}
                    </div>
                  </div>
                  <span className="font-semibold">R$ {food.price.toFixed(2)}</span>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

