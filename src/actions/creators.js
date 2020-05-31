import {SET_DOTA} from "./types";
import {SET_CSGO} from "./types";

const setCSGO = (csgo) => {
    return {type: SET_CSGO, csgo}
};

const setDOTA = (dota) => {
    return {type: SET_DOTA, dota}
};

export {setCSGO, setDOTA};