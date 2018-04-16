import Component from './Component.vue'

function plugin (Vue) {
  Vue.component('{{ name }}', Component)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
// Export all components too
export {
  Component
}

