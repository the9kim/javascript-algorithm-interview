function solution(n, arr1, arr2) {
    return arr1.map((value, index) => {
        const binaryString = (value | arr2[index]).toString(2);
        const formattedString = binaryString
            .replaceAll('1', '#')
            .replaceAll('0', ' ');

        return formattedString.padStart(n, ' ');
    });
}