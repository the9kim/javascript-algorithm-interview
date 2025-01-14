function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    temperatures.forEach((n, i) => {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < n) {
            const last = stack.pop();
            result[last] = i - last;
        }
        stack.push(i);
    });

    return result;
}