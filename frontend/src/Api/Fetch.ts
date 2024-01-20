import axios, { AxiosResponse } from "axios";

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


const createFetchURL = (endpoint: string, id?: number) => {
    return id ? `${endpoint}/${id}` : `${endpoint}`;
};

export const fetchRequest = async (
    request: string, 
    endpoint: string,
    requestObject?: {},
    id?: number
): Promise<AxiosResponse> => {
    const endpointUrl = createFetchURL(endpoint, id);

    try {
        switch (request) {
            case 'GET':
                const getResponse = await axios.get(`http://localhost:8000/${endpointUrl}`);

                return getResponse;
            case 'POST':
                const postResponse = await axios.post(`http://localhost:8000/${endpointUrl}`, requestObject);

                return postResponse;
            case 'PUT':
                const editResponse = await axios.put(`http://localhost:8000/${endpointUrl}`, requestObject);

                return editResponse;
            case 'DELETE':
                const deleteResponse = await axios.delete(`http://localhost:8000/${endpointUrl}`);

                return deleteResponse;
            default:
                throw new Error(`Unsupported request type: ${request}`);
        }
    } catch (error) {
        throw new Error(`Failed fetch request: ${error}`);
    }
};