export const charToBinary = char => char.charCodeAt(0).toString(2);
export const binaryToChar = binary => String.fromCharCode(parseInt(binary, 2));
