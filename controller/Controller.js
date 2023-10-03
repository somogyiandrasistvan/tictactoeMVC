import Model from "../model/Model.js";
import ElemView from "../view/ElemView.js";

class Controller {
  constructor() {
    const MODEL = new Model();
    const ELEMVIEW = new ElemView($(".elemek"));

    $(window).on("kattint", () => {
      MODEL.csere();
      ELEMVIEW.setJel(MODEL.getJel())
    });
  }
}

export default Controller;
