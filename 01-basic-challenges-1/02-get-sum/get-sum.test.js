const getSum = require('./get-sum')

test("Returning 'Hello, World' as a string ", () => {
  const result = getSum(10, 20)
  const result1 = getSum(20, 40)
  expect(result).toBe(30)
  expect(result1).toBe(60)
})
