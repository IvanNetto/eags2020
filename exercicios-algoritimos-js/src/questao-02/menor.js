module.exports = function (a, b, c, d) {
    if (a < b && a < c && a < d) {
        return a
    }

    if(b < c && b < d){
        return b
    }

    if(c < d)
        return c

    return d
}