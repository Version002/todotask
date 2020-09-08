<template>
  <div id="input">
    <div class="row">
      <div class="start">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_iaog4B.json"
          background="transparent"
          speed="0.7"
          style="width: 200px; height: 200px;"
          loop
          autoplay
        ></lottie-player>
      </div>
      <h2 class="center">
        <b>Todo App Using VueJS</b>
      </h2>
    </div>

    <div class="list">
      <div class="lottie">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_v4t3yi.json"
          background="transparent"
          speed="0.4"
          style="width: 50px; height: 50px;"
          loop
          autoplay
        ></lottie-player>
      </div>
      <input type="text" id="title" v-model="title" @keyup.enter="add()" />
    </div>
    <div class="list">
      <div class="lotties">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_F5nRNb.json"
          background="transparent"
          speed="0.8"
          style="width: 100px; height: 90px;"
          loop
          autoplay
        ></lottie-player>
      </div>
      <input type="text" id="title" v-model="deadline" @keyup.enter="add()" />
      <br />
      <button @click="add()" id="Add">Add New Tasks</button>
      <button @click="bye()" id="Delete">Delete All Tasks</button>
    </div>
    <tasklist :title="title" :existingApp="existingApp" />
  </div>
</template>

<script>
import tasklist from "./Tasklist.vue";
export default {
  name: "inputer",
  data: () => {
    return {
      title: "",
      deadline: "",
      existingApp: [
        {
          text: "Go Home",
          time: "5pm"
        }
      ]
    };
  },
  components: {
    tasklist
  },
  methods: {
    add() {
      this.existingApp.push({
        text: this.title,
        time: this.deadline
      });
    },
    bye() {
      this.existingApp.splice({
        text: this.title,
        time: this.deadline
      });
    }
  }
};
</script>

<style scoped>
#Add {
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
  cursor: pointer;
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
  cursor: pointer;
}
#Delete:active {
  transform: translateY(-1px);
}
#Desc {
  outline: none;
  background-color: orange;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
}
#Desc:hover {
  background-color: orange;
  opacity: 0.7;
  cursor: pointer;
}
#Desc:active {
  transform: translateY(-1px);
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 80px;
}

.list > input {
  border-radius: 10px;
  outline: none;
  border: 1px solid teal;
  padding: 10px;
}
#input {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 135px;
  margin-bottom: 10px;
  color: turquoise;
}
label {
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.row {
  display: flex;
  flex-direction: row;
}
.start {
  margin-left: -245px;
}
.lottie {
  margin-right: 280px;
  margin-bottom: -46px;
}
.lotties {
  margin-right: 280px;
  margin-bottom: -63px;
}
</style>
