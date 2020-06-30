class ChangeNotifier {

  constructor() {
    this.listeners = [];
  }

  hasListener() {
    return this.listeners.length > 0;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    const removeIndex = this.listeners.findIndex(lst => {
      return listener === lst;
    });

    if (removeIndex !== -1) {
      this.listeners = this.listeners.slice(removeIndex, 1);
    }
  }

  notifyListeners() {
    if (this.hasListener) {
      this.listeners.forEach(listener => listener());
    }
  }

}

export default ChangeNotifier;