import { assetTypes, debtTypes } from "./types";

const findAccountType = (type: string, formValues: any) => {
    const accountTypes = type === 'assets' ? assetTypes : debtTypes;
    const account = accountTypes.filter((el) => el.value === formValues.type);
    console.log(account)
};

export const handleRequest = async (type: string, request: string, formValues: any) => {
    const accountType = findAccountType(type, formValues);
    console.log(accountType)
};