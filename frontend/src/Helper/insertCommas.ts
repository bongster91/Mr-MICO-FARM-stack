export const insertCommas = (num: number) => {
    if (Number.isInteger(num)) {
        return num.toLocaleString('en-US') + '.00';
    };
    
    return num.toLocaleString('en-US');
};