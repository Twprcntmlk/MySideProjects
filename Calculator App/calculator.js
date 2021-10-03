class Calculator{
    // input is what I am typing
    // output is what I have type
    constructor(outputTextElement, inputTextElement){
        this.outputTextElement = outputTextElement
        this.inputTextElement = inputTextElement
        //run this initializing
        //this.output = ''
        //this.input = ''
        //this.operation = undefined
        this.clear()

    }

    // methods
    clear() {
        this.output = ''
        this.input = ''
        this.operation = undefined
      }

    delete() {
        this.input = this.input.toString().slice(0, -1)
    }


    addNumber(number){
        console.log(number)
        // in case of multiple ".""
        if (number === "." && this.input.includes(".")) {
            return
        }
        this.input = this.input.toString() + number.toString()


    }

    chooseOperation(operation) {
        if (this.input === '') return
        if (this.output !== '') {
          this.compute()
        }
        // hold operation
        this.operation = operation
        // move the input to the output space
        this.output = this.input
        //clear input space
        this.input = ''
      }

    compute() {
    let answer
    const prev = parseFloat(this.output)
    const current = parseFloat(this.input)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
        answer = prev + current
        break
        case '-':
        answer = prev - current
        break
        case '*':
        answer = prev * current
        break
        case '÷':
        answer = prev / current
        break
        default:
        return
    }
    this.input = answer
    this.operation = undefined
    this.output = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }

      updateDisplay() {
        this.inputTextElement.innerText = this.getDisplayNumber(this.input)
        if (this.operation != null) {
          this.outputTextElement.innerText =`${this.getDisplayNumber(this.output)} ${this.operation}`
        } else {
          this.outputTextElement.innerText = ''
        }
      }
}

const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const deleteButton = document.querySelector('[delete]')
const allClearButton = document.querySelector('[all-clear]')
const outputTextElement = document.querySelector('[output]')
const inputTextElement= document.querySelector('[input]')


// instantiate new calculator Class
const calculator = new Calculator(outputTextElement, inputTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    console.log("button.innerText",button.innerText)
      calculator.addNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
