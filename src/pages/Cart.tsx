import { useState, useEffect } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Marmita',
      price: 19.9,
      quantity: 2,
      image: 'https://img.freepik.com/fotos-premium/a-autentica-marmita-brasileira-mais-conhecida-como-marmitex-feita-com-comida-tradicional-do-brasil_496782-2496.jpg'
    },
    {
      id: '2',
      name: 'Combo Whopper',
      price: 34.5,
      quantity: 1,
      image: 'https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/10/Screenshot_19-1-1024x560.png.webp'
    }
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 5.99;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Seu Carrinho</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-4 p-4 border-b border-gray-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">R$ {item.price.toFixed(2)}</p>
              <div className="flex items-center gap-3 mt-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded ml-auto">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Taxa de entrega</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-100 pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>R$ {(total + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors font-semibold">
        Finalizar Pedido
      </button>
    </div>
  );
}

