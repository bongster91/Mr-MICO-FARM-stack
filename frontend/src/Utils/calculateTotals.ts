export const calculateTotal = (array: any) => {
    return array.reduce((a: any, b: any) => a + b.amount, 0)
}