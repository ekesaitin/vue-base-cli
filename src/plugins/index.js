import directives from './directives'
import methods from './methods'

export default {
  install (Vue) {
    Vue.mixin({
      directives,
      methods
    })
  }
}
