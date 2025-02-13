function lengthOfLongestSubstring(s: string): number {
    const indexMap: Record<string, number> = {};

    let maxLength: number = 0;
    let left: number = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] in indexMap && left <= indexMap[s[right]]) {
            left = indexMap[s[right]] + 1;
        }
        maxLength = Math.max(right - left + 1, maxLength);
        indexMap[s[right]] = right;
    }

    return maxLength;
};