import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            DeliveryApp
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </Link>
            <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

