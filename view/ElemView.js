class ElemView {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.#megjelenit();

    this.elem = $(".elem");
    this.pElem = this.elem.children("p");
    console.log(this.pElem)

    $(".elem").on("click", () => {
      this.#esemenyTrigger("kattint");
    });
  }

  setJel(jel){
    this.pElem.html(jel);
  }

  #megjelenit() {
    let txt = "<div class='elem'><p>X</p></div>";
    this.#szuloElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev);
    window.dispatchEvent(E);
  }
}
export default ElemView;
