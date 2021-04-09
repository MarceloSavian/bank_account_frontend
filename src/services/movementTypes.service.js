import config from '../config/index';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from './user.service';

export const movementTypesService = {
    getMovementTypes
};

function getMovementTypes() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            ...authHeader()
        }
    };

    return fetch(`${config.apiUrl}/movementTypes`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}