import react from "react";
import reactDom from "react-dom";
// import pi ,{doublePi , triplePi} from "./math"
import * as pi from "./math";

reactDom.render(
  <div>
    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
      {/* <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li> */}
    </ul>
  </div>,
  document.getElementById("root")
);
