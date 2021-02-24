/**
 * Function that returns the sum of two numbers
 *
 * @param {number} x The addend (x)
 * @param {number} y The addend (y)
 *
 * @return {number} The sum
 */
const add = (x, y) => x + y

/**
 * Function that returns the difference between two numbers
 *
 * @param {number} x The minuend
 * @param {number} y The subtrahend
 *
 * @return {number} The difference
 */
const subtract = (x, y) => x - y

/**
 * Function that returns the quotient of two numbers
 *
 * @param {number} x The dividend
 * @param {number} y The divisor
 *
 * @return {number} The quotient
 */
const divide = (x, y) => x / y

/**
 * Function that returns the product of two numbers
 *
 * @param {number} x The multiplier
 * @param {number} y The multiplicand
 *
 * @return {number} The product
 */
const multiply = (x, y) => x * y

/**
 * Function that returns the exponential value of two numbers
 *
 * @param {number} x The base
 * @param {number} y The exponent
 *
 * @return {number} The value of x^y
 */
const exp = (x, y) => Math.pow(x, y)

/**
 * Function that returns the value of Pi
 *
 * @return {number} The value Pi
 */
const pi = () => Math.PI

/**
 * Function that returns the value of x, rounded down
 *
 * @param {number} x The number to round up
 * n
 * @return {number} The value of x rounded up
 */
const ceil = (x) => Math.ceil(x)

/**
 * Function that returns the value of x, rounded up
 *
 * @param {number} x The number to round down
 *
 * @return {number} The value of x rounded down
 */
const floor = (x) => Math.floor(x)

/**
 * Return value, in square feet
 *
 * @param {number} l Length's value
 * @param {number} w Width's value
 *
 * @return {number} Return value [in square feet]
 */
const sqft = (l, w) => multiply(l, w)

/**
 * Return value, in cubic feet
 *
 * @param {number} l Length
 * @param {number} w Width
 * @param {number} h Height
 *
 * @return {number} Return value [in cubic feet]
 */
const cuft = (l, w, h) => l * w * h

module.exports = {
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
}
