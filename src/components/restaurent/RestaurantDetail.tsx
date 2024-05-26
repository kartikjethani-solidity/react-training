// RestaurantDetail.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const RestaurantDetail: React.FC = () => {
  const selectedRestaurant = useSelector((state: RootState) => state.selectedRestaurant);

  if (!selectedRestaurant) return <p>Select a restaurant to see details.</p>;

  return (
    <div className="restaurant-detail bg-white shadow-md rounded p-4 mt-4">
      <h2 className="font-bold text-xl">{selectedRestaurant.info.name}</h2>
      <p>{selectedRestaurant.info.description}</p>
      <p>{selectedRestaurant.info.address}</p>
      <p>Rating: {selectedRestaurant.info.avgRating} ★</p>
    </div>
  );
};

export default RestaurantDetail;
