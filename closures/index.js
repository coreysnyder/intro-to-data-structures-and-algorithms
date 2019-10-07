function Calculator(seedValue = 0){

  this.value = seedValue

  this.add = (addition = 0) => {
    this.value += addition
    return this
  }

  this.subtract = (subtraction = 0) => {
    this.value -= subtraction
    return this
  }

  this.getValue = () => {
    console.log(this.value)
    return this
  }

  return {
    add: this.add,
    subtract: this.subtract,
    getValue: this.getValue,
  }
}

const myCalculator = new Calculator(10)

myCalculator.getValue()
myCalculator.add(10)
myCalculator.subtract(5)
myCalculator.getValue()

myCalculator.add(10).add(10).subtract(5).getValue()
