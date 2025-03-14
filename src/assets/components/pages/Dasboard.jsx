import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-[#fafbff] shadow-md p-4">
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

const Header = ({ title, onAdd }) => (
  <div className="px-5 py-6 bg-[#fafbff]">
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
      <button onClick={onAdd} className="bg-[#2263e6] px-6 py-1.5 rounded-lg text-white">+ Thêm</button>
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
    <table className="min-w-full bg-[#fafbff] rounded-lg shadow-md text-center">
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
          <tr key={index}>
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

const AddFacultyForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    department: '',
    major: '',
    startDate: '',
    position: '',
    degree: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-1/2 mx-auto my-[-50]">
      <h2 className="text-2xl font-bold mb-4">Thêm giảng viên</h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="fullName" placeholder="Họ và tên" value={formData.fullName} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="phoneNumber" placeholder="Số điện thoại" value={formData.phoneNumber} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="department" placeholder="Khoa" value={formData.department} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="major" placeholder="Chuyên ngành" value={formData.major} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="position" placeholder="Chức vụ" value={formData.position} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
        <input name="degree" placeholder="Học vị" value={formData.degree} onChange={handleChange} className="p-2 border rounded-lg outline-none" />
      </div>
      <textarea name="notes" placeholder="Ghi chú" value={formData.notes} onChange={handleChange} className="p-2 border rounded-lg outline-none w-full mt-4"></textarea>
      <div className="flex justify-end space-x-4 mt-4">
        <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-lg">Hủy</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Thêm</button>
      </div>
    </form>
  );
};

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Trang chủ" onAdd={() => setShowForm(true)} />
        <div className="p-4">
          <FacultyTable />
          {showForm && <AddFacultyForm onClose={() => setShowForm(false)} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
