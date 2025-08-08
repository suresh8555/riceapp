import React from 'react';
import StatsCards from './StatsCards';

const cardsData = [
  {
    title: "Today's Sales",
    value: '$53,000',
    icon: 'bi-currency-dollar',
    iconColor: '#000405ff',
    percent: 30,
    isPositive: true,
  },
  {
    title: "Today's Users",
    value: '3,200',
    icon: 'bi-people-fill',
    iconColor: '#000405ff',
    percent: 20,
    isPositive: true,
  },
  {
    title: 'New Clients',
    value: '+1,200',
    icon: 'bi-heart-fill',
    iconColor: '#000405ff',
    percent: 20,
    isPositive: false,
  },
  {
    title: 'New Orders',
    value: '$13,200',
    icon: 'bi-lock-fill',
    iconColor: '#6a12edff',
    percent: 10,
    isPositive: true,
  },
];

const StatsCard = () => {
  return (
    <div className="row g-3">
      {cardsData.map((card, index) => (
        <div className="col-12 col-sm-6 col-lg-3 " key={index}>
          <StatsCards {...card} />
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
