import React from 'react';
import DashboardCard from '../molecules/DasboardCard';
import MapSection from '../molecules/MapSection';

const DashboardMain = ({ selectedMenuItem }) => {
  const cards = [
    'Thông tin sinh viên',
    'Bồi dưỡng chuyên khoa học',
    'Đề tài nghiên cứu cũ',
    'Học số khóa học',
    'Giảng viên',
  ];

  return (
    <main className="flex-1 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {cards.map((card) => (
          <DashboardCard
            key={card}
            title={card}
            onClick={() => console.log(`Clicked: ${card}`)}
          />
        ))}
      </div>
      <MapSection />
    </main>
  );
};

export default DashboardMain;