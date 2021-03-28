export const staff_header = [
  { name: "Email Id", sort_order: false, sort_icon: true },
  { name: "Name", sort_order: true, sort_icon: false },
  { name: "Gender", sort_order: true, sort_icon: false },
  { name: "Phone Number", sort_order: true, sort_icon: false },
  { name: "Edit" },
  { name: "Delete"},
];
export const staff_data = [
  {
    id: "john@gmail.com",
    name: "John Doe",
    gender: "Male",
    phone: "000000000",
    
  },
  {
    id: "jeff@gmail.com",
    name: "Jeff B",
    gender: "Male",
    phone: "000000000",
   
  },
  {
    id: "tom@gmail.com",
    name: "Tom H",
    gender: "Male",
    phone: "000000000",
   
  },
  {
    id: "mic@gmail.com",
    name: "Micheal J",
    gender: "Male",
    phone: "000000000",
    
  },
];

localStorage.setItem('staff_data ',JSON.stringify(staff_data));
