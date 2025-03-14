import React from 'react';
import SidebarMenuItem from '../molecules/SidebarMenuItem';
import Button from '../atoms/Button';

const Sidebar = ({ selectedMenuItem, setSelectedMenuItem, onLogout }) => {
  const menuItems = [
    'Trang chủ',
    'Giảng viên',
    'Đề tài nghiên cứu',
    'Công bố khoa học',
    'Tạp chí',
    'Thống kê nghiên cứu',
    'Báo cáo - thống kê',
  ];

  return (
    <aside className="w-64 bg-white p-4 flex flex-col h-screen">
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item}
              label={item}
              onClick={() => setSelectedMenuItem(item)}
              isActive={selectedMenuItem === item}
            />
          ))}
        </ul>
      </nav>
      <Button onClick={onLogout} variant="primary" className="mt-auto">
        Đăng xuất
      </Button>
    </aside>
  );
};

export default Sidebar;