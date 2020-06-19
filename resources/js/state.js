function createState() {
  const observers = [];
  let _value = {};

  function subscribe(observerFunction) {
    observers.push(observerFunction)
  }

  function notifyAll() {
    for (const observerFunction of observers) {
      observerFunction(_value)
    }
  }

  function setValue(value) {
    _value = value;
    notifyAll();
  }

  function value() {
    return _value;
  }

  return {
    subscribe,
    setValue,
    value,
  }
}