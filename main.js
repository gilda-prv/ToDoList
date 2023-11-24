new Vue({
  el: "#App",
  data() {
    return {
      goals: [],
      inputvalue: "",
    };
  },
  methods: {
    addTask: function () {
      if (this.inputvalue == "") {
        alert("Please fill in the input!");
      } else {
        this.goals.push(this.inputvalue);
        this.inputvalue = "";
      }
    },
  },
});
