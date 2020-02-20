function spy(func) {
  function spyF() {
    spyF.calls.push([...arguments]);
    return func.apply(this, arguments);
  }

  spyF.calls = [];

  return spyF;
}

export { spy };
