export default function () {
    const observers = [];
    let value_ = {};

    function notifyAll() {
        for (const observerFunction of observers) {
            observerFunction(_value)
        }
    }

    function subscribe(observerFunction) {
        observers.push(observerFunction)
    }

    function setValue(value) {
        value_ = value;
        notifyAll();
    }

    function value() {
        return value_;
    }

    return {
        subscribe,
        setValue,
        value,
    }
}