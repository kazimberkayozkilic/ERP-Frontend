export class MenuModel {
  name: string = '';
  icon: string = '';
  url: string = '';
  isTitle: boolean = false;
  subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
  {
    name: 'Ana Sayfa',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [],
  },
  {
    name: 'Ana Group',
    icon: 'far fa-list-alt',
    url: '',
    isTitle: false,
    subMenus: [
      {
        name: 'Müşteri',
        icon: 'far fa-solid fa-users',
        url: '/customers',
        isTitle: false,
        subMenus: [],
      },
    ],
  },
];
