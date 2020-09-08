<template>
  <div>
    <div class="flex">
      <h2>Task List</h2>
      <table class="box">
        <ul class="w3-container w3-center w3-animate-left">
          <li
            :key="todo.title"
            v-for="todo in existingApp"
            class="w3-container w3-center w3-animate-top"
          >
            <span>{{ todo.text }} at {{ todo.time }}</span>
          </li>
        </ul>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tasklist",
  props: ["title", "existingApp"]
};
</script>

<style scoped>
.box {
  height: auto;
  width: 300px;
  border: 1px solid turquoise;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  margin-left: 38px;
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-left: 80px;
}
.flex > h2 {
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
}
li:hover {
  transform: translate(0px, -3px);
  transition: 2s;
  cursor: pointer;
}
</style>
