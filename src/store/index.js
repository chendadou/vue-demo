import { createStore } from 'vuex'

// 状态管理最大的用处：达到数据共享
export default createStore({

  // 定义状态 state
  state: {
    list: [
      {
        title: "吃饭",
        complete: true,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "打游戏",
        complete: false,
      },
    ],
  },

  // 
  getters: {
  },

  // 【同步】修改 state，都是方法
  // 第一个参数是 state，第二个参数是需要修改的值
  mutations: {
    // 新增任务（payload: 指新增的任务对象）
    addTodoTask: (state, payload) => {
      state.list.push(payload);
    },

    // 删除任务（payload：指被删除任务的数组下标）
    deleteTodoTask: (state, payload) => {
      state.list.splice(payload, 1);
    },

    // 清除已完成（payload：指过滤之后的数组）
    clear: (state, payload) => {
      state.list = payload;
    }
  },

  // 【异步】提交 mutation
  // 第一个参数是 store，第二个参数是需要修改的值
  actions: {
  },

  // 模块化
  modules: {
  }
})
