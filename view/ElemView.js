class ElemView {
  #szuloElem;
  #index
  #allapot;
  constructor(szuloElem, index) {
    this.#index = index;
    this.#szuloElem = szuloElem;
    this.#allapot = true;
    this.#megjelenit();

    this.elem = $(".elem:last-child");
    this.pElem = this.elem.children("p");

    $(".elem").on("click", () => {
        if(this.#allapot){
            this.#esemenyTrigger("kattint");
            this.#allapot = false;
        }
    });
  }

  getIndex(){
    return this.#index;
  }

  setJel(jel){
    this.pElem.html(jel);
  }

  #megjelenit() {
    let txt = "<div class='elem'><p></p></div>";
    this.#szuloElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, {detail: this});
    window.dispatchEvent(E);
  }
}
export default ElemView;
