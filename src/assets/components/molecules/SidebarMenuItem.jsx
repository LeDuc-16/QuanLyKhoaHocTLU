import React from 'react';
import Link from '../atoms/Link';

const SidebarMenuItem = ({ label, onClick, isActive }) => {
  return (
    <li className={`py-2 ${isActive ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>
      <Link onClick={onClick} className={`block px-4 ${isActive ? 'text-white' : ''}`}>
        {label}
      </Link>
    </li>
  );
};

export default SidebarMenuItem;