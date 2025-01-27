function removeDuplicateLetters(s: string): string {
    const counter: Record<string, number> = {};
    const used: Set<string> = new Set();
    const stack: string[] = [];

    // Count the occurrences of each character
    for (const char of s) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (const char of s) {
        counter[char] -= 1;

        // Skip if the character is already in the stack
        if (used.has(char)) {
            continue;
        }

        // Maintain a lexicographically sorted stack
        while (stack.length > 0 &&
        stack[stack.length - 1] > char &&
        counter[stack[stack.length - 1]] > 0) {
            used.delete(stack.pop() as string);
        }

        stack.push(char);
        used.add(char);
    }

    return stack.join('');
}
