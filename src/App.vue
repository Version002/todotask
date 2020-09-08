<template>
  <div id="app">
    <inputer />
  </div>
</template>

<script>
import inputer from "./components/Input.vue";
export default {
  name: "app",
  components: {
    inputer
  }
  // data() {
  //   return {
  //     title: "",
  //     deadline: "",
  //     existingApp: [
  //       {
  //         text: "Go Home",
  //         time: "5pm",
  //       },
  //     ],
  //   };
  // },
  // methods: {
  //   add() {
  //     this.existingApp.push({
  //       text: this.title,
  //       time: this.deadline,
  //     });
  //   },
  //   bye() {
  //     this.existingApp.splice({
  //       text: this.title,
  //       time: this.deadline,
  //     });
  //   },
  // },
};
</script>

<style scoped>
/*#Add {
  outline: none;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
}
#Add:hover {
  background-color: skyblue;
  opacity: 0.7;
}
#Add:active {
  transform: translateY(-1px);
}
#Delete {
  outline: none;
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
}
#Delete:hover {
  background-color: red;
  opacity: 0.7;
}
#Delete:active {
  transform: translateY(-1px);
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list > input {
  border-radius: 10px;
  outline: none;
  border: 1px solid teal;
  padding: 10px;
}
label {
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.box {
  height: auto;
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;  
  display: flex;
  justify-content: center;
  align-items: center;
}
*/
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
