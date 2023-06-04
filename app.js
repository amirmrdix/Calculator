const allButtons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.calc-display');

const clear = document.querySelector('.clear')

let output = '';
disabled()



allButtons.forEach(button => {

    button.addEventListener('click', ev => {
        
        if(button.classList.contains('operator')){
            disabled()
            opHandler(button.innerText)
        }
        else{
            output += button.innerText
            enable()
        }


        if (output.length === 13) {
            allButtons.forEach(but => {
                but.disabled = true
                if (but == clear) {
                    clear.disabled = false
                }
            })
        }

        
        
        display.innerText = output
    })

});





function disabled() {
    operators.forEach(op => {
        op.disabled = true
    });
}

function enable() {
    operators.forEach(op => {
        op.disabled = false
    });
}

function opHandler(op) {

    switch (op) {

        case '\367': output += '/'
            break;

        case '\327': output += '*'
            break

        case '\u221A' : 
            output = Math.sqrt(output)
            enable()
            break

        case 'X2' :
            output = output**2
            enable()
            break

        case '=' : 
            output = eval(output)
            enable()
                break


        case '\u2201' : 
            output = '' 
            allButtons.forEach(i => {
                i.disabled = false
            })
            break

        default: output += op
            break;

    }
    
}
