function numJewelsInStones(jewels: string, stones: string): number {
    const counter: Record<string, number> = {};

    for (let stone of stones) {
        counter[stone] = (counter[stone] || 0) + 1;
    }

    let result = 0;

    for (let jewel of jewels) {
        result += counter[jewel] || 0;
    }

    return result;
}