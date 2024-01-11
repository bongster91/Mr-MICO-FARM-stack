import axios, { AxiosResponse } from "axios";

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


const createFetchURL = (endpoint: string, index?: number) => {
    return index ? `${endpoint}/${index}` : `${endpoint}`;
};

export const fetchRequest = (
    request: RequestMethod, 
    endpoint: string, 
    index?: number
): Promise<AxiosResponse> => {
    const endpointUrl = createFetchURL(endpoint, index);
    const url = process.env.SERVER_URL;

    switch (request) {
        case 'GET':
            return axios.get(`http://localhost:8000/${endpointUrl}`);
        default:
            throw new Error(`Unsupported request type: ${request}`);
    }
};