const user = {
  firstName: "Lohn",
  lastName: "Doe",
  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set FullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
};
export default user
