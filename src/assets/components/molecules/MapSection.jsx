import React from 'react';

const MapSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white">
      <div className="w-full md:w-1/3">
        <img src="/map-placeholder.png" alt="Map" className="w-full h-40 object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold">TRƯỜNG ĐẠI HỌC THỦY LỢI</h3>
        <p>Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội</p>
        <p>Điện thoại: (024) 38522201 - Fax: (024) 3563351</p>
        <p>Email: phonght@tlu.edu.vn</p>
      </div>
    </div>
  );
};

export default MapSection;