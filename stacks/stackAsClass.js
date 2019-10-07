

class Stack {
  constructor() {
    console.log('parent constructor')
    this.stack = []
  }

  push(item){
    if(item){
      this.stack.push(item)
    }
  }

  pop(){
    if(this.stack.length < 1){ return }
    return this.stack.pop()
  }

  get length(){
    return this.stack.length
  }

  peek(){
    if(this.stack.length < 1){ return }
    return this.stack[this.stack.length-1]
  }
}


class SuperStack extends Stack{
  constructor() {
    super();
  }

  doubleStack(){
    // Adds extra methods to the original stack
  }
}


const lowerBodyStack = new SuperStack()

lowerBodyStack.push('underwear')
lowerBodyStack.push('socks')
lowerBodyStack.push('pants')
lowerBodyStack.push('shoes')

console.log('lowerbody', lowerBodyStack.stack)

lowerBodyStack.pop()
lowerBodyStack.pop()
console.log(lowerBodyStack.peek()) // Socks
console.log(lowerBodyStack.length) // 2
console.log('lowerbody', lowerBodyStack.stack)

exports.Stack = Stack


