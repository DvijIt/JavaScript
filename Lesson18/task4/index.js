function spy(test) {
    function spyFunk() {
        styFunk.calls.push([...arguments])
        return test.apply(this, arguments)
    }

    return spyFunk;
};
export { spy };