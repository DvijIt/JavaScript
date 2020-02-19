const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fullName) {
        let arr = fullName.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}

export { user }