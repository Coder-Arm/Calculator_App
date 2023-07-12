const screen = document.getElementById("screen");
const btn1 = document.getElementById("1");
btn1.addEventListener("click",()=>{
  screen.value += btn1.innerText;
})
const btn2 = document.getElementById("2");
btn2.addEventListener("click",()=>{
    screen.value += btn2.innerText;
  })
const btn3 = document.getElementById("3");
btn3.addEventListener("click",()=>{
    screen.value += btn3.innerText;
  })
const btn4 = document.getElementById("4");
btn4.addEventListener("click",()=>{
    screen.value += btn4.innerText;
  })
const btn5 = document.getElementById("5");
btn5.addEventListener("click",()=>{
    screen.value += btn5.innerText;
  })
const btn6 = document.getElementById("6");
btn6.addEventListener("click",()=>{
    screen.value += btn6.innerText;
  })
const btn7 = document.getElementById("7");
btn7.addEventListener("click",()=>{
    screen.value += btn7.innerText;
  })
const btn8 = document.getElementById("8");
btn8.addEventListener("click",()=>{
    screen.value += btn8.innerText;
  })
const btn9 = document.getElementById("9");
btn9.addEventListener("click",()=>{
    screen.value += btn9.innerText;
  })
const btn0 = document.getElementById("0");
btn0.addEventListener("click",()=>{
    screen.value += btn0.innerText;
  })
const dotBtn = document.getElementById(".");
dotBtn.addEventListener("click",()=>{
    screen.value += dotBtn.innerText;
  })
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click",()=>{
    screen.value = "";
})
const addBtn = document.getElementById("+");
addBtn.addEventListener("click",()=>{
  screen.value+="+";
})
const subBtn = document.getElementById("-");
subBtn.addEventListener("click",()=>{
  screen.value+="-";
})
const mulBtn = document.getElementById("X");
mulBtn.addEventListener("click",()=>{
  screen.value+="x";
})
const divideBtn = document.getElementById("/");
divideBtn.addEventListener("click",()=>{
  screen.value+="/";
})
const equalBtn = document.getElementById("=");
equalBtn.addEventListener("click",()=>{
   if(screen.value.includes("+")){
    let arr = screen.value.split("+");
    screen.value = Number(arr[0]) + Number(arr[1]);
   }
   else if(screen.value.includes("-")){
    let arr = screen.value.split("-");
    screen.value = Number(arr[0]) - Number(arr[1]);
   }
   else if(screen.value.includes("x")){
    let arr = screen.value.split("x");
    screen.value = Number(arr[0]) * Number(arr[1]);
   }
   else if(screen.value.includes("/")){
    let arr = screen.value.split("/");
    screen.value = Number(arr[0]) / Number(arr[1]);
   }
})

const delBtn = document.getElementById("delete");
delBtn.addEventListener("click",()=>{
 screen.value =  screen.value.substr(0,screen.value.length-1);

})