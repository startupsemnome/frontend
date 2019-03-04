import { browserHistory } from 'react-router'
import axios from "axios";
import env from "../consts";

export function featchNetwork(url) {
  return dispatch => {
    axios
      .get("http://www.json-generator.com/api/json/get/bUHDCEMfCa?indent=2")
      .then(network => {
        localStorage.setItem("current_network", JSON.stringify(network.data))
        dispatch([
            { type: "NETWORK_FETCH", payload: network.data }
          ]);
      })
      .catch(e => {
        console.log(e)
      });
  };
}

