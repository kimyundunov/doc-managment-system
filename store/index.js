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
  ],
  user: undefined
})

export const actions = {
  // auth
  login({ commit }, payload) {
    return this.$axios
      .$post('/api/auth', payload)
      .then((response) => {
        commit('SET_USER', response)
      })
  },

  // user
  fetchUsers() {
    return this.$axios
      .$get('/api/user/list')
  },
  fetchUser(_, id) {
    return this.$axios
      .$get('/api/user', { params: { id }})
  },
  updateUser(_, payload) {
    if (payload.id) {
      return this.$axios
        .$patch('/api/user', payload)
    } else {
      return this.$axios
        .$post('/api/user', payload)
    }
  },

  // role
  fetchRoles() {
    return this.$axios
      .$get('/api/role/list')
  },
  fetchRole(_, id) {
    return this.$axios
      .$get('/api/role', { params: { id }})
  },
  updateRole(_, payload) {
    if (payload.id) {
      return this.$axios
        .$patch('/api/role', payload)
    } else {
      return this.$axios
        .$post('/api/role', payload)
    }
  },

  // status
  fetchStatuses() {
    return this.$axios
      .$get('/api/status/list')
  },
  fetchStatus(_, id) {
    return this.$axios
      .$get('/api/status', { params: { id }})
  },
  updateStatus(_, payload) {
    if (payload.id) {
      return this.$axios
        .$patch('/api/status', payload)
    } else {
      return this.$axios
        .$post('/api/status', payload)
    }
  },

  // upload
  uploadFile(_, formData) {
    return this.$axios
      .$post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  }
}

export const mutations = {
  SET_USER(state, data) {
    state.user = data
  }
} 