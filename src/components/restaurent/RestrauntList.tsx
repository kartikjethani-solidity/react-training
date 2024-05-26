
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCart from '../redux/actionCreator';
import RestaurantCard from './RestaurantCard';
import { RootState } from '../redux/rootReducer';

const RestaurantList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, cart, error } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="restaurant-list container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cart && cart.map(restaurant => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
