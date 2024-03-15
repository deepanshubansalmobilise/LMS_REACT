const Menu = [
  { path: '/', icon: 'fa fa-sitemap', title: 'Home' },
  
  { path: '/dashboard/menu', icon: 'fa fa-align-left', title: 'Menu Level',
    children: [
      { path: '/menu/menu-1-1', title: 'Menu 1.1',
        children: [
          { path: '/menu/menu-1-1/menu-2-1', title: 'Menu 2.1',
            children: [
              { path: '/menu/menu-1-1/menu-2-1/menu-3-1', title: 'Menu 3.1' },
              { path: '/menu/menu-1-1/menu-2-1/menu-3-2', title: 'Menu 3.2' }
            ]
          },
          { path: '/menu/menu-1-1/menu-2-2', title: 'Menu 2.2' },
          { path: '/menu/menu-1-1/menu-2-3', title: 'Menu 2.3' },
        ]
      },
      { path: '/menu/menu-1-2', title: 'Menu 1.2' },
      { path: '/menu/menu-1-3', title: 'Menu 1.3' },
    ],
  },

  {
    path: '/dashboard', icon: 'fa fa-sitemap', title: 'Dashboard'
  },
  {
    path: '/dashboard/team-learning', icon: 'fa fa-sitemap', title: 'My Team Learning'
  },
  {
    path: '/dashboard/courses', icon: 'fa fa-sitemap', title: 'Courses'
  },
  // {
  //   path: '/login', icon: 'fa fa-sitemap', title: 'Login'
  // }
  
]

export default Menu;