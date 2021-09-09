Vue.createApp({
  data() {
    return {
      checkedNames: []
    }
  }
}).mount('#v-model-multiple-checkboxes')

const UserName = {
  props: {
    firstName: String,
    lastName: String
  },
  template: `
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
};

const HelloVueApp = {
  components: {
    UserName,
  },
  data() {
    return {
      firstName: 'Rinor',
      lastName: 'Gimolli',
    };
  },
};

new Vue({
  el: '#example2-1',
  data() {
    return {
      message: 'Welcome to my page!'
    }
  }
})

Vue.createApp(HelloVueApp).mount('#v-model-example')
