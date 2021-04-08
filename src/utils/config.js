export const staff_header = [
  { name: "Name", sort_order: true, sort_icon: false },
  { name: "Organization", sort_order: true, sort_icon: false },
  { name: "Role", sort_order: true, sort_icon: false },
  { name: "Email Id", sort_order: false, sort_icon: true },
  { name: "Phone Number", sort_order: false, sort_icon: false },
  { name: "Address", sort_order: false, sort_icon: false },
  { name: "Area", sort_order: false, sort_icon: false },
  { name: "City", sort_order: false, sort_icon: false },
  { name: "State", sort_order: false, sort_icon: false },
  { name: "Country" },
  { name: "Status" },
  { name: "Edit" },
  { name: "Delete"},
];
export const staff_data = [
  {
    name: "John Doe",    
    org: "AZL Industries",    
    role: "PowerLab Admin",    
    id: "john@gmail.com",
    phone: "+65 5967 4419",
    address: "87 North Avenue",
    area: "Orient Estate",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",    
    rec_active: "Inactive"
  },
  {
    name: "Jeff B",    
    org: "AZL Industries",    
    role: "PowerLab Admin",    
    id: "jeff@gmail.com",
    phone: "+65 5967 4419",
    address: "87 North Avenue",
    area: "Orient Estate",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",    
    rec_active: "Active"
  },
  {
    name: "Tom H",    
    org: "AZL Industries",    
    role: "PowerLab Admin",    
    id: "tom@gmail.com",
    phone: "+65 5967 4419",
    address: "87 North Avenue",
    area: "Orient Estate",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",      
    rec_active: "Active"
  },
  {
    name: "Micheal J",    
    org: "AZL Industries",    
    role: "PowerLab Admin",    
    id: "mic@gmail.com",
    phone: "+65 5967 4419",
    address: "87 North Avenue",
    area: "Orient Estate",
    city: "Singapore",
    state: "Singapore",
    country: "Singapore",          
    rec_active: "Active"
  },
];

localStorage.setItem('staff_data ',JSON.stringify(staff_data));
