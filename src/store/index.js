import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { src: 'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?auto=format&fit=crop&w=753&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123', title: 'Hey', date: '2012-02-02' },
      { src: 'https://images.unsplash.com/photo-1445787517961-a36e33995743?auto=format&fit=crop&w=850&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '1234', title: 'How', date: '2012-02-03' },
      { src: 'https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=733&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '12345', title: 'Good?', date: '2012-02-05' },
      { src: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=733&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123456', title: 'fine', date: '2012-02-06' },
      { src: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123457', title: 'ok', date: '2012-02-04' }
    ],
    user: {
      id: '321',
      registeredMeetups: ['5454']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 3)
    }
  }
})