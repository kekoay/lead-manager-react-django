import { CREATE_MESSAGE } from './types';

//create messages
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};
