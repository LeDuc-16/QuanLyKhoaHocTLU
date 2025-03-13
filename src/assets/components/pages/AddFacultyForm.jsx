import React, { useState } from 'react';

const AddFacultyForm = () => {
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
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-1/2 mx-auto">
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
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded-lg">Hủy</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Thêm</button>
      </div>
    </form>
  );
};

export default AddFacultyForm;
