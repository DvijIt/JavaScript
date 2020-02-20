function spy(test) {
  function spyFunk() {
    spyFunk.calls.push([...arguments]);
    return test.apply(this, arguments);
  }

  spyFunk.calls = [];

  return spyFunk;
}

export { spy };
