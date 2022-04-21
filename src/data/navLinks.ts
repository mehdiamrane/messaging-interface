type NavLink = {
  key: string;
  url: string;
  routes: string[];
  disabled?: boolean;
};

const navLinks: NavLink[] = [
  {
    key: 'home',
    url: '/',
    routes: ['/'],
  },
  {
    key: 'messages',
    url: '#',
    routes: ['/conversation/[id]'],
    disabled: true,
  },
];

export default navLinks;
