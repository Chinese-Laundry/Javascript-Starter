const {
  subtract,
  multiply,
  divide,
  floor,
  add,
  sqft,
  cuft,
  ceil,
  exp,
  pi,
} = require('../libs/math')

/** TEST SUITE INFO */
describe("Test suite for the 'math' library", () => {
  // ---------------------------------------------------------------------------
  test('Tests whether or not the add(2, 2) function will return 4', async () => {
    expect(add(2, 2)).toEqual(4)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the subtract(2, 2) function will return 0', async () => {
    expect(subtract(2, 2)).toEqual(0)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the multiply(2, 2) function will return 4', async () => {
    expect(multiply(2, 2)).toEqual(4)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the divide(2, 2) function will return 1', async () => {
    expect(divide(2, 2)).toEqual(1)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the exp(10, 2) function will return 100', async () => {
    expect(exp(10, 2)).toEqual(100)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the pi(2, 2) function will return 3.14159...', async () => {
    expect(pi()).toEqual(3.141592653589793)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the ceil(10.7) function will return 11.0', async () => {
    expect(ceil(10.7)).toEqual(11.0)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the floor(10.2) function will return 10.0', async () => {
    expect(floor(10.2)).toEqual(10.0)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the cuft(5, 5, 5) function will return 125', async () => {
    expect(cuft(5, 5, 5)).toEqual(125)
  })

  // ---------------------------------------------------------------------------
  test('Tests whether or not the sqft(5, 5) function will return 25', async () => {
    expect(sqft(5, 5)).toEqual(25)
  })
})
