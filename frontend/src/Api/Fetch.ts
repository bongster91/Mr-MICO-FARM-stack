import axios, { AxiosResponse } from "axios";

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


const createFetchURL = (endpoint: string, index?: number) => {
    return index ? `${endpoint}/${index}` : `${endpoint}`;
};

export const fetchRequest = async (
    request: RequestMethod, 
    endpoint: string, 
    index?: number
): Promise<AxiosResponse> => {
    const endpointUrl = createFetchURL(endpoint, index);
    const url = process.env.SERVER_URL;

    try {
        switch (request) {
            case 'GET':
                const response = await axios.get(`http://localhost:8000/${endpointUrl}`);
                return response
            default:
                throw new Error(`Unsupported request type: ${request}`);
        }
    } catch (error) {
        throw new Error(`Failed fetch request: ${error}`)
    }
};