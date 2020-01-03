function easy(number) {
    if (!number)
        return 0;
    var result = 1;
    while (number) {
        result *= number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}

console.log(easy(33721));