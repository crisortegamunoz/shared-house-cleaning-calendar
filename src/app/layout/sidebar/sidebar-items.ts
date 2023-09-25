import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    iconType: 'feather',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [
      {
        path: 'dashboard',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [],
      },
    ],
  },
  {
    path: 'calendar',
    title: 'MENUITEMS.CALENDAR.TEXT',
    iconType: 'feather',
    icon: 'calendar',
    class: '',
    groupTitle: false,
    badge: 'New',
    badgeClass: 'badge bg-blue sidebar-badge float-end',
    submenu: [],
  }];

