type NavLink = {
  key: string;
  url: string;
  disabled?: boolean;
};

const navLinks: NavLink[] = [
  {
    key: 'home',
    url: '#',
    disabled: true,
  },
  {
    key: 'users',
    url: '/',
  },
  {
    key: 'settings',
    url: '#',
    disabled: true,
  },
];

export default navLinks;
