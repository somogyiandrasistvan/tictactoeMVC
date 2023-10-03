import Model from "../model/Model.js";
import JatekTerView from "../view/JatekTerView.js";

class Controller {
  constructor() {
    const MODEL = new Model();
    const JATEKTERVIEW = new JatekTerView($(".elemek"));

    $(window).on("kattint", (event) => {
      console.log(event.detail)
      MODEL.csere(event.detail.getIndex());
      event.detail.setJel(MODEL.getJel())
      console.log(MODEL.vegeVanE());
    });
  }
}

export default Controller;
