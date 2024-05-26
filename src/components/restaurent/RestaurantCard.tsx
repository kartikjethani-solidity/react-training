// RestaurantCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { showRestaurantDetail } from './detailActions'; // Action to show details
import { Restaurant } from './types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showRestaurantDetail(restaurant));
  };

  return (
    <div className="restaurant-card bg-white shadow-md rounded p-4 cursor-pointer" onClick={handleClick}>
      <h3 className="font-bold text-lg">{restaurant.info.name}</h3>
      <p>{restaurant.info.cuisines.join(', ')}</p>
      <p>{restaurant.info.avgRating} ★</p>
    </div>
  );
};

export default RestaurantCard;
