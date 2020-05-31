import {SET_CSGO} from "../actions/types";
import {SET_DOTA} from "../actions/types";

const initialState = {csgo: [], dota: []};

export default function blogs(state, action) {
    switch (action.type) {
        case SET_CSGO:
            return {...state, csgo: action.csgo};
        case SET_DOTA:
            return {...state, dota: action.dota};
        default:
            return state;
    }
}
