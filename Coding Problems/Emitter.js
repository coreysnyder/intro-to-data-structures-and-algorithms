// FB Question 1

// code here

var Emitter = () => {
  this.subscriptions = [];

  this.subscribe = (eventName, cb) => {
    console.log('subscribe', eventName, cb)
    if(!this.subscriptions[eventName]){
      this.subscriptions[eventName] = [];
    }
    this.subscriptions[eventName].push(cb)

    return {
      release: () => {
        const specificPosition = this.subscriptions[eventName].indexOf(cb)
        console.log('specificPosition', specificPosition)
        this.subscriptions[eventName].splice(specificPosition, 1)
      }
    }
  }

  this.emit = (eventName, ...args) => {
    // console.log('emit', eventName, args, this.subscriptions)
    if(!this.subscriptions[eventName]){ return; }

    this.subscriptions[eventName].forEach( (cb) => {
      // console.log("callback", cb)
      cb(...args)
    })
  }

  return {
    subscribe: this.subscribe,
    emit: this.emit,
  }
}

// Code Here

// API

const emitter = new Emitter();

// 1. Support subscribing to events
const sub = emitter.subscribe('test', function(a, b){
  console.log("emitter cb1", a, b)
})

const sub2 = emitter.subscribe('test', function(a, b){
  console.log("emitter cb2", a, b)
})

// 2. Support emitting events.
// This particular example should lead ot the 'callback' above being invoked with foo
// and bar as parameters

emitter.emit('test', 'foo!!', 'bar!!')

// 3. Support unsubscribing existing subscriptions by releasing them.
sub2.release();
emitter.emit('test', 'foo!!', 'bar!!')
