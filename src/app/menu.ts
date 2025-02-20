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
      {
        name: 'Depolar',
        icon: 'fa-solid fa-warehouse',
        url: '/depots',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Ürünler',
        icon: 'fa-brands fa-product-hunt',
        url: '/products',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Reçeteler',
        icon: 'fa-solid fa-receipt',
        url: '/recipes',
        isTitle: false,
        subMenus: [],
      },
    ],
  },
  {
    name: 'Siparişler',
    icon: 'fa-solid fa-file-invoice',
    url: '/orders',
    isTitle: false,
    subMenus: [],
  },
  {
    name: 'Faturalar',
    icon: 'fa-solid fa-file-invoice-dollar',
    url: '/',
    isTitle: false,
    subMenus: [
      {
        name: 'Alış Faturaları',
        icon: 'fa-solid fa-arrow-down',
        url: '/invoices/purchase',
        isTitle: false,
        subMenus: [],
      },
      {
        name: 'Satış Faturaları',
        icon: 'fa-solid fa-arrow-up',
        url: '/invoices/selling',
        isTitle: false,
        subMenus: [],
      }
    ],
  },
];
