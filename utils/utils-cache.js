import Cookie from 'js-cookie'

export const localCache = {
  get: (key) => {
    try {
      return JSON.parse(Cookie.get(key))
    } catch (_) {
      return null
    }
  },

  getWithDomain: (key) => {
    try {
      return JSON.parse(Cookie.get(key, { domain: '.dora.edu.vn' }))
    } catch (_) {
      return null
    }
  },

  set: (key, value) => {
    Cookie.set(key, JSON.stringify(value), { expires: 180 })
  },

  setWithDomain: (key, value) => {
    Cookie.set(key, value, { domain: '.dora.edu.vn', expires: 180 })
  },

  remove: (key) => Cookie.remove(key),

  removeWithDomain: (key) => Cookie.set(key, null, { domain: '.dora.edu.vn', expires: 0 })
}
