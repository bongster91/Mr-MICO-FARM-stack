import axios from "axios";
import { assetTypes, debtTypes } from "./types";
import { RequestMethod, fetchRequest } from "../Api/Fetch";

const findAccountType = (type: string, formValues: any) => {
    const accountTypes = type === 'assets' ? assetTypes : debtTypes;
    const account = accountTypes.filter((el) => el.value === formValues.type);
    
    return account[0];
};

export const handleRequest = async (type: string, request: string, formValues: any) => {
    const account = findAccountType(type, formValues);
    const response = await fetchRequest(request, account.type, formValues);

    return response.status === 201 ? 'Success' : 'Failure';
};