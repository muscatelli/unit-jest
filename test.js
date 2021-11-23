const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEurotoUs } = require('./app.js')
    expect(fromEurotoUs(3.5)).toBe(4.2);
})

test("1.206 dollar should be 127.9yens", function(){
    const { fromUstoYen } = require('./app.js')
    expect(fromUstoYen(19)).toBe(2430.1);
})

test("127.9yens should be 0.8 pounds/Great", function(){
    const { fromYentoPound } = require('./app.js')
    expect(fromYentoPound(35)).toBe(28);
})