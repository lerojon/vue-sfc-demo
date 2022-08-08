import Vue from "vue"
import Vuex from "vuex"
import { SOME_MUTATION } from "./mutations-type.js"
import getters from "./getters"
Vue.use(Vuex)

/* const store_one = {
  state: {
    file: {
      a: 1,
      b: 2,
    },
    text_data: "13132131",
  },
  mutations: {
    test_fun: (state, commit) => {
      state.file.a = commit
    },
    [SOME_MUTATION]: (state, commit) => {
      state.text_data = commit.a
    },
  },
  getters: {
    getFile: (state) => {
      console.log("change")
      return state.file.a
    },
    get_some: (state) => {
      return state.text_data
    },
  },
}
const store = new Vuex.Store(store_one)
export default store */

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
})

export default store
