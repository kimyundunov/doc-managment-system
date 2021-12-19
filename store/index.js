export const state = () => ({
  menu: [
    {
      name: 'Главная',
      route: '/',
      icon: 'mdi-home'
    },
    {
      name: 'Пользователи',
      route: '/user',
      icon: 'mdi-account-group'
    },
    {
      name: 'Документы',
      route: '/doc',
      icon: 'mdi-file-document'
    },
    {
      name: 'Статус документа',
      route: '/status',
      icon: 'mdi-text-box-search'
    },
    {
      name: 'Права пользователя',
      route: '/role',
      icon: 'mdi-account-lock'
    },
    {
      name: 'Вид документа',
      route: '/doc',
      icon: 'mdi-text-box-check'
    }
  ]
})