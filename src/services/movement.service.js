import config from '../config/index';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from './user.service';

export const movementService = {
    postMovement
};

function postMovement(value, movementType) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            ...authHeader()
        },
        body: JSON.stringify({value, movementType})
    };

    return fetch(`${config.apiUrl}/movement`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}