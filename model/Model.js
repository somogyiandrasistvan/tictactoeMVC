class Model {
  #jel;
  #list = [];
  #lepes;
  constructor() {
    this.#jel = "X";
    this.#list = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    this.#lepes = 0;
  }

  getJel() {
    return this.#jel;
  }

  csere(index) {
    if (this.#jel === "X") {
      this.#jel = "O";
    } else {
      this.#jel = "X";
    }
    this.#list[index] = this.#jel
    console.log(this.#list)
  }

  vegeVanE(){
    this.#lepes++;
    let eredmeny = this.#vizszintesEll();
    if(eredmeny.indexOf("XXX")>-1){
        return "X nyert"
    }else if(eredmeny.indexOf("OOO")>-1){
        return "0 nyert"
    }else if(this.#lepes >= 9){
        "Döntetlen"
    }
    if(this.#lepes>=9){
        return "vége"
    }
    return "nincs vége"
  }

  #vizszintesEll(){
    let vText = ""
    for (let i = 0; i < this.#list.length; i++) {
        vText += this.#list[i];
        if(i % 3 == 2){
            vText += "@"
        }
        
    }
    console.log(vText)
    return vText;
  }
}

export default Model;
