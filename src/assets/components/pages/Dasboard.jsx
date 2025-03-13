import React from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg[ #fafbff] shadow-md p-4">
    <ul>
      <li className="p-2"> <img src="src/assets/img/logo-dai-hoc-thuy-loi-inkythuatso.svg" alt="Logo" className="w-30 h-30" /> </li>
      <li className="p-2"><a href="">Trang chủ</a></li>
      <li className="p-2 "><a href="">Giảng viên</a></li>
      <li className="p-2"><a href="">Đề tài ngiên cứu</a></li>
      <li className="p-2"><a href="">Công bố khoa học</a></li>
      <li className="p-2"><a href="">Tạp chí - ấn phẩm</a></li>
      <li className="p-2"><a href="">Thông báo hội nghị</a></li>
      <li className="p-2"><a href="">Báo cáo - thống kê</a></li>
    </ul>
  </div>
);

const Header = ({ title }) => (
  <div className="px-5 py-6  bg-[ #fafbff]">
    <div className="flex justify-between items-center space-x-4">
       <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center space-x-2">
        <a href="" className="flex items-center gap-2">
          <img src="src/assets/img/logo-dai-hoc-thuy-loi-inkythuatso.svg" alt="Avatar" className="w-8 h-8 rounded-full" />
          <span className="font-medium">Nguyễn Văn A</span>
        </a>
      </div>
    </div>
    <div className="flex justify-between items-center mt-10">
      <input type="text" placeholder="Tìm kiếm..." className="px-2 py-1 border rounded-sm outline-none w-100" />
      <a href="" className="bg-[#2263e6] px-6 py-1.5 rounded-lg text-white">+ Thêm</a>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const color = status === 'Đang làm việc' ? 'green' : status === 'Tạm nghỉ' ? 'blue' : 'red';
  return <span className={`px-2 py-1 text-white bg-${color}-500 rounded-lg`}>{status}</span>;
};

const ActionButtons = () => (
  <div className="space-x-2 flex justify-center items-center">
    <button className="text-green-500"><PlusCircle size={20} /></button>
    <button className="text-blue-500"><Edit size={20} /></button>
    <button className="text-red-500"><Trash2 size={20} /></button>
  </div>
);

const FacultyTable = () => {
  const data = [
    {
      name: 'PGS. TS Nguyễn Văn An',
      email: '2251172378@e.tlu.edu.vn',
      status: 'Đang làm việc',
      department: 'Công trình',
      major: 'Cầu đường',
      date: '2023-09-20'
    }
  ];

  return (
    <table className="min-w-full bg[ #fafbff] rounded-lg shadow-md text-center">
      <thead>
        <tr>
          <th className="py-2">STT</th>
          <th className="py-2">Họ và Tên</th>
          <th className="py-2">Email</th>
          <th className="py-2">Trạng thái</th>
          <th className="py-2">Khoa</th>
          <th className="py-2">Chuyên ngành</th>
          <th className="py-2">Ngày vào</th>
          <th className="py-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="">
            <td className="py-3">{index + 1}</td>
            <td className="py-3">{item.name}</td>
            <td className="py-3">{item.email}</td>
            <td className="py-3"><StatusBadge status={item.status} /></td>
            <td className="py-3">{item.department}</td>
            <td className="py-3">{item.major}</td>
            <td className="py-3">{item.date}</td>
            <td className="py-3"><ActionButtons /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Dasboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Trang chủ" />
        <div className="p-4">
          <FacultyTable />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
