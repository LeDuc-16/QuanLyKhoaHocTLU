import React from 'react';

const Card = ({ icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-4 bg-blue-500 text-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition"
    >
      {icon && <span className="mr-2">{icon}</span>}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Card;