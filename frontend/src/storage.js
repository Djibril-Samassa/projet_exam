const appStorage = {
    getItem(key) {
      return JSON.parse(sessionStorage.getItem(key) || '{}') || null
    },
    setItem(key, data) {
      sessionStorage.setItem(key, JSON.stringify(data))
    },
    removeItem(key) {
      sessionStorage.removeItem(key)
    }
  }
  
  export default appStorage
  