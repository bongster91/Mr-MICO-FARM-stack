export const findId = (object: any) => {
    const allIDs = ['bank_accounts_id', 'investments_id', 'properties_id', 'bills_id', 'loans_id', 'credits_id', 'expenses_id'];
    
    for (let el in object) {
        const accountId = allIDs.filter((el2) => object[el2]);
        
        return object[accountId[0]];
    };
    
};  