const $miniScreen = document.querySelector("#mini__screen");
const $screen = document.querySelector("#screen");
const $num_0 = document.querySelector("#num__0");
const $num_1 = document.querySelector("#num__1");
const $num_2 = document.querySelector("#num__2");
const $num_3 = document.querySelector("#num__3");
const $num_4 = document.querySelector("#num__4");
const $num_5 = document.querySelector("#num__5");
const $num_6 = document.querySelector("#num__6");
const $num_7 = document.querySelector("#num__7");
const $num_8 = document.querySelector("#num__8");
const $num_9 = document.querySelector("#num__9");
const $plus = document.querySelector("#plus");
const $minus = document.querySelector("#minus");
const $multiply = document.querySelector("#multiply");
const $divide = document.querySelector("#divide");
const $delete = document.querySelector("#delete");
const $result = document.querySelector("#result");

let number = "0";
let newNumber = "0";
let operator;
let result;

function onClickNumber(numberOfBtn){
    return (event) => {
        event.preventDefault();
        if(!operator){
            if(result){
                result = null;
                operator = null;
                number = "0";
                newNumber = "0";
            }
            if(number.length < 12){
                if(number === "0")
                    number = numberOfBtn;
                else
                    number += numberOfBtn;
            }
            $screen.innerText = number;
        }
        else{
            if(newNumber.length < 12){
                if(newNumber === "0")
                    newNumber = numberOfBtn;
                else
                    newNumber += numberOfBtn;
            }
            $screen.innerText = newNumber;
        }
    };
}

function onClickOp(opBtn){
    return (event) => {
        event.preventDefault();
        operator = opBtn;
        $miniScreen.innerText = `${number} ${opBtn}`;
    };
}

$num_0.addEventListener("click", onClickNumber("0"));
$num_1.addEventListener("click", onClickNumber("1"));
$num_2.addEventListener("click", onClickNumber("2"));
$num_3.addEventListener("click", onClickNumber("3"));
$num_4.addEventListener("click", onClickNumber("4"));
$num_5.addEventListener("click", onClickNumber("5"));
$num_6.addEventListener("click", onClickNumber("6"));
$num_7.addEventListener("click", onClickNumber("7"));
$num_8.addEventListener("click", onClickNumber("8"));
$num_9.addEventListener("click", onClickNumber("9"));

$plus.addEventListener("click", onClickOp("+"));
$minus.addEventListener("click", onClickOp("-"));
$multiply.addEventListener("click", onClickOp("*"));
$divide.addEventListener("click", onClickOp("/"));


$delete.addEventListener("click",(event) => {
    event.preventDefault();
    if(!result){
        if(!operator){
            if(number.length === 1)
                number = "0";
            else
                number = String(Math.floor(number/10));
            $screen.innerText = number;
        }
        else{
            if(newNumber.length === 1)
                newNumber = "0";
            else
                newNumber = String(Math.floor(newNumber/10));
            $screen.innerText = newNumber;
        }
    }
    else{   
        $screen.innerText = "0";
        result = null;
        number = "0";
        newNumber = "0";
        operator = null;
    }
});

$result.addEventListener("click",(event) => {
    if(operator){
        switch(operator){
            case "+":
                result = parseInt(number) + parseInt(newNumber);
                break;
            case "-":
                result = parseInt(number) - parseInt(newNumber);
                break;
            case "*":
                result = parseInt(number) * parseInt(newNumber);
                break;
            case "/":
                result = parseInt(number) / parseInt(newNumber);
                break;
            default:
                break;
        }
        $screen.innerText = result;
        $miniScreen.innerText = `${number} ${operator} ${newNumber} = ${result}`;
        number = String(result);
        newNumber = "0";
    }
});

console.log("111"/10);
