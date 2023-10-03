class Model {
  #jel;
  constructor() {
    this.#jel = "X";
  }

  getJel() {
    return this.#jel;
  }

  csere() {
    if (this.#jel == "X") {
      this.#jel = "O";
    } else {
      this.#jel = "X";
    }
  }
}

export default Model;
