new Vue({
  el: "#App",
  data() {
    return {
      tasks: [],
      inputvalue: "",
    };
  },
  methods: {
    addTask: function () {
      if (this.inputvalue == "") {
        alert("Please fill in the input!");
      } else {
        this.tasks.push(this.inputvalue);
        this.inputvalue = "";
      }
    },
    delitem: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
  },
});
