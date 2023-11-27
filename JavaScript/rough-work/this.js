let data = {
  name: "Adhil",
  title: "Student",
  mark: [1, 2, 3],
  getDetail() {
    this.mark.forEach(function (m) {
      console.log(this.mark, m);
    }, this);
  },
};

function Video(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.age);
}

data.getDetail();
