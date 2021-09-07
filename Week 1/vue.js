const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

const HelloWorld = Vue.createApp({
  data() {
    return {
      title: "Todos:",
      todoLists:[
        {
          id: '0', text: "Learn the basics of HTML", checked: true},
          id: '1', text: "Learn the basics of CSS", checked: true},
          id: '2', text: "Learn JS", checked: false},
          id: '3', text: "Learn Vue", checked: false}
        }
      ]
    },
    methods: {
      toggleItem(todoItem) {
        todoItem.checked = !todoItem.checked
      }
    }
  }
});

HelloWorld.mount('#app');
