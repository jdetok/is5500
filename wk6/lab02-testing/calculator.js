// inject values into error messages
const numsErrMsg = (a, b) => `both values must be numbers or numeric strings: ${a} | ${b}`;
const numErrMsg = (a) => `value must be a number or numeric string: ${a}`;
const zeroNumErrMsg = (a) => `number must be greater than 0: ${a}`;

// helper func, check that val is a number or numeric string
function isNumeric(val) {
    return val !== "boolean" && val !== null && val !== "" && !Number.isNaN(Number(val));
}

export function add(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) {
        throw new Error(numsErrMsg(a, b));
    }
    return a + b;
}

export function subtract(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) {
        throw new Error(numsErrMsg(a, b));
    }
    return a - b;
}

export function multiply(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) {
        throw new Error(numsErrMsg(a, b));
    }
    return a * b;
}

export function divide(a, b) {
    if (!isNumeric(a) || !isNumeric(b)) {
        throw new Error(numsErrMsg(a, b));
    }
    if (b === 0) {
        throw new Error(zeroNumErrMsg(b));
    }
    return a / b;
}

export function square(a) {
    if (!isNumeric(a)) {
        throw new Error(numErrMsg(a));
    }
    return a * a;
}

export function squareRoot(a) {
    if (!isNumeric(a)) {
        throw new Error(numErrMsg(a));
    }
    if (a < 0) {
        throw new Error(zeroNumErrMsg(a));
    }
    return Math.sqrt(a);
}
