var c = [];
for (var i = 0; i < 3; ++i) {
    // c.push(Promise.resolve(i));
    c.push(Promise.reject(i));
}
Promise.all(c)
    .then(function () {
    console.log(c);
})
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=test.js.map