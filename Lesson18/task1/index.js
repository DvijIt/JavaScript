const event = {
  quests: [
    { name: "Tom", email: "t@gmail.com", age: 17 },
    { name: "Bob", email: "b@gmail.com", age: 18 }
  ],
  message: "Welcome to the party!",
  getInvitation() {
    return this.guests
      .filter(el => el.age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`
      }));
  }
};
export { event };
