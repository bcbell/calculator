/*---------------Constant------------*/
const calculator={
    displayResult: 0,
    firstOperator: null,
    secondOperator: false,
    operator: null,
}

let aNumber= 0
let aResult=''

/*-----------Cached Elements-------*/
//Display
displayNumber=document.querySelector('displayScreen')

//Reset Button
reset= document.querySelector('reset')
CE= document.querySelector('backspace')

//Operator Buttons

divideBtn=document.querySelector('divide')
multipleBtn=document.querySelector('multiple')
subtractBtn=document.querySelector('subtract')
additionBtn =document.querySelector('addition')
equalBtn =document.querySelector('equal')


//Number Buttons

num1=document.querySelector('numero1')
num2=document.querySelector('numero2')
num3=document.querySelector('numero3')
num4=document.querySelector('numero4')
num5=document.querySelector('numero5')
num6=document.querySelector('numero6')
num7=document.querySelector('numero7')
num8=document.querySelector('numero8')
num9=document.querySelector('numero9')
num0=document.querySelector('numero0')

/*----------Event Listener---------*/

//reset button

//numbers
num1.addEventListener('click', ()=>{
    aResult.value=parseInt(aResult.value)+1
})
//operators

divideBtn.addEventListener('click',()=>{
    aResult.value= parseInt(aNumber.value) / parseInt(aResult.value)
})
multipleBtn.addEventListener('click',()=>{
    aResult.value=parseInt(aNumber.value)* parseInt(aResult.value)
})
subtractBtn.addEventListener('click',()=>{ 
    aResult.value=parseInt(aNumber.value)-parseInt(aResult.value)
})
additionBtn.addEventListener('click',()=>{
    aResult.value=parseInt(aNumber.value)+parseInt(aResult.value)
})

/*--------Function----------*/
