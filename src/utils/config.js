export const staff_header = [
  { name: "Staff ID", sort_order: true, sort_icon: false },
  { name: "Staff Name", sort_order: true, sort_icon: false },
  { name: "Gender", sort_order: true, sort_icon: false },
  { name: "Phone Number", sort_order: true, sort_icon: false },
  { name: "Created on", sort_order: false, sort_icon: true },
  { name: "Edit" },
  { name: "Delete"},
];
export const staff_data = [
  {
    id: "1",
    name: "John Doe",
    gender: "Male",
    phone: "000000000",
    created : "25/03/2021"
  },
  {
    id: "2",
    name: "Jeff B",
    gender: "Male",
    phone: "000000000",
    created : "25/03/2021"
  },
  {
    id: "3",
    name: "Tom H",
    gender: "Male",
    phone: "000000000",
    created : "25/03/2021"
  },
  {
    id: "4",
    name: "Micheal J",
    gender: "Male",
    phone: "000000000",
    created : "25/03/2021"
  },
];

localStorage.setItem('staff_data ',JSON.stringify(staff_data));
