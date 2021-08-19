module.exports = function reverse (n) {
    n = String(n);
    var arr = n.split('');
    arr = arr.reverse();
    if (arr[arr.length - 1] === '-') { arr.pop(); }
    return(arr.join(''));
}
