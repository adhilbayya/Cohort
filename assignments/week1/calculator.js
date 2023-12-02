class Calculator{
    constructor(){
        this.result = 0;
    }

    add(num){
        this.result += num
    }
    sub(num){
        this.result -= num
    }
    mul(num){
        this.result *= num
    }
    div(num){
        if(num == 0){
            throw new Error('Cant divide with 0')
        }
        this.result /= num
    }
    clear(){
        this.result = 0
    }
    calculate(expression){
        let sanitizedExpression = expression.replace(/\s+/g, '')
        if(!/^[0-9+\-*/(). ]+$/.test(sanitizedExpression)){
            throw new Error("Invalid charecter is used")
        }
        try{
            this.result = eval(sanitizedExpression)
        }catch(err){
            throw new Error("Not a valid expression")
        }
    }
    viewResult(){
        return this.result;
    }
}

let calculator = new Calculator()
calculator.calculate('10 + 2 * ((6 - (4 + 1)) / 2) + 7')
console.log(calculator.viewResult())