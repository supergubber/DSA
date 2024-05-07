const helloword = require('./hello-world')
test("Returning 'Hello, World' as a string ", () => {
  const result = helloword()
  expect(result).toBe('Hello World')
})
