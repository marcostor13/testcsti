import { SAVE } from './actions';
export  interface IAppState {
    lastId: String;
}

export const INITIAL_STATE: IAppState = {
    lastId: ''
}

export function reducer(state, action){

    switch (action.type) {
        case SAVE:
            return { lastId: action.lastId } 
        default:
            break;
    }

    

    return state
}