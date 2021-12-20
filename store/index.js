export const state = () => ({
  menu: [
    {
      key: 'home',
      name: 'Главная',
      route: '/',
      icon: 'mdi-home'
    },
    {
      key: 'user',
      name: 'Пользователи',
      route: '/user',
      icon: 'mdi-account-group'
    },
    {
      key: 'doc',
      name: 'Документы',
      route: '/doc',
      icon: 'mdi-file-document'
    },
    {
      key: 'status',
      name: 'Статус документа',
      route: '/status',
      icon: 'mdi-text-box-search'
    },
    {
      key: 'role',
      name: 'Права пользователя',
      route: '/role',
      icon: 'mdi-account-lock'
    },
    {
      key: 'type',
      name: 'Вид документа',
      route: '/type',
      icon: 'mdi-text-box-check'
    }
  ]
})