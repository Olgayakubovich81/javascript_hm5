// // Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const btn= document.createElement("button")
// const divElem = document.createElement("div")

// divElem.style.width = "200px";
// divElem.style.height = "200px";
// divElem.style.backgroundColor = "red";

// btn.textContent = "Change Color and Size";

// btn.addEventListener("click",function () {
//     divElem.style.backgroundColor = "green",
//     divElem.style.width= "100px"
//     divElem.style.height= "100px"

//     });

// document.body.appendChild(divElem);
// document.body.appendChild (btn);



// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const btn= document.createElement("button")
// const divElem = document.createElement("div")

// divElem.style.width = "200px";
// divElem.style.height = "200px";
// divElem.style.backgroundColor = "pink";

// btn.textContent = "Change Color";

// btn.addEventListener("click",function () {
//     divElem.style.backgroundColor = "blue"
//       });

//       console.log (divElem)

// document.body.appendChild(divElem);
// document.body.appendChild (btn);



// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.


// const btn= document.createElement("button")
// const divElem = document.createElement("div")

// divElem.style.width = "150px";
// divElem.style.height = "150px";
// divElem.style.border=  "2px solid black";


// btn.textContent = "Change Size";

// btn.addEventListener("click",function () {
            
//             divElem.style.width= "170px"
//             divElem.style.height= "170px"
        
//             });


// document.body.appendChild(divElem);
// document.body.appendChild (btn);

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.


// const btn= document.createElement("button")
// btn.innerText = "Button"
// const divElem = document.createElement("div")
//  divElem.classList.add("root")

// btn.addEventListener("click",function () {
//        const pElem=document.createElement ("p")
//        pElem.innerText= "Hello world!"
//        pElem.style.color="blue";
//        divElem.appendChild (pElem)
   
//     });

// document.body.appendChild(divElem);
// document.body.appendChild (btn)


// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.


const btn = document.createElement("button");
btn.innerText = "Button";
const divElem = document.createElement("div");
divElem.classList.add("root");
let currentColor = 'blue';

btn.addEventListener("click", function () {
    const pElem = document.createElement("p");
    pElem.innerText = "Hello world!";

    if (currentColor === 'blue') {
        pElem.style.color = 'blue';
        currentColor = 'green';
    } else {
        pElem.style.color = 'green';
        currentColor = 'blue';
    }

    divElem.appendChild(pElem);
});


document.body.appendChild(btn);
document.body.appendChild(divElem);

