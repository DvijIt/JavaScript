function spy(test) {
    function spyFunk() {
        styFunk.calls.push([...arguments])
        return test.apply(this, arguments)
    }
    spyF.calls = [];
    return spyFunk;
};
export { spy };