type ArrayTotalType = {
    name: string
    type: string
    amount: number
    assets_id?: number
    debts_id?: number
};

export const calculateTotal = (array: ArrayTotalType[]) => {
    return array.reduce((a: unknown, b: any) => a + b.amount, 0);
};