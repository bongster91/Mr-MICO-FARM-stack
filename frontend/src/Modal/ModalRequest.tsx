import axios from "axios";
import { assetTypes, debtTypes } from "./types";
import { RequestMethod, fetchRequest } from "../Api/Fetch";

export const findAccountType = (type: string, formValues: any) => {
    const accountTypes = type === 'assets' ? assetTypes : debtTypes;
    const account = accountTypes.filter((el) => el.value === formValues.type);
    
    return account[0];
};

export const handleRequest = async (type: string, request: string, formValues: any) => {
    const account = findAccountType(type, formValues);
    const response = await fetchRequest(request, account.type, formValues);

    return response.status === 200 ? 'Success' : 'Failure';
};

export const findType = (props: any) => {
    return props['assets_id'] ? 'assets' : 'debts';
};

const findID = (object: any) => {
    for (let asset of assetTypes) {
        if (object[ `${asset.type}_id` ]) {
            return object[ `${asset.type}_id` ];
        };
    };

    for (let debt of debtTypes) {
        if (object[ `${debt.type}_id` ]) {
            return object[ `${debt.type}_id` ];
        };
    };
};

export const handlePutRequest = async (type: string, request: string, formValues: any, props: any) => {
    const id = findID(props);
    const response = await fetchRequest(request, type, formValues, id);

    return response.status === 200 ? 'Success' : 'Failure';
};