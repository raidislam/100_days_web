const profile = {
  name: "John Doe",
  age: 30,
  coords: {
    lat: 0,
    lng: 0,
  },
  setAge(age) {
    return (this.age = age);
  },
};

console.log(profile.setAge(31));
