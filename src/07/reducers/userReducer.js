import { SET_USER } from '../actions/userActions';

export default function reducer(state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_USER:
            return {
                ...payload,
                ...state,
            };
        default:
            return state;
    }
}
