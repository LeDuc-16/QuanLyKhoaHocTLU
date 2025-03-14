import React from 'react';
import Card from '../atoms/Card';

const DashboardCard = ({ title, onClick }) => {
  return <Card title={title} onClick={onClick} />;
};

export default DashboardCard;