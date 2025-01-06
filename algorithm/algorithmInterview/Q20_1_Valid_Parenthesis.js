var isValid = function (s) {
    const pair = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    const stack = [];

    for (const e of s) {
        if (Object.values(pair).includes(e)) {
            stack.push(e);
        } else if (stack.length === 0 || stack.pop() !== pair[e]) {
            return false;
        }
    }

    return stack.length === 0;
}