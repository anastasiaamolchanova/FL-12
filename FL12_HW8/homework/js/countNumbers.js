function countNumbers(smth) {
    var allowed = /\d+/;
    var results = Array.prototype.reduce.call(smth, function (data, letter) {
        if (allowed.test(letter)) {
            letter = letter.toLowerCase();
            if (data[letter] === undefined) {
                data[letter] = 0;
            }
            data[letter] += 1;
        }
        return data;
    }, {});
    return results;
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');