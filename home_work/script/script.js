// exercise 1
const btnNode = document.querySelector("#btn1")
const textNode = document.querySelector('#target')

btnNode.addEventListener('click', event =>{
    textNode.innerText = "Привет мир!"
})

// exercise 2
const btn2Node = document.querySelector("#btn2")
const inputNode = document.querySelector("input")


btn2Node.addEventListener("click", event => {
    console.log(inputNode.value);
})

// exercise 3

const randomNode = document.querySelector('.exercise3')
const newDivNode = document.createElement('div')
const randomBtn = document.createElement('button');
const randomNumber = document.createElement('p');



// randomBtn.innerText = number;

randomBtn.addEventListener('click', event =>{
    let number = (Math.floor(Math.random() * (15 - 5 + 1)) + 5);
    randomNumber.innerText = number
    randomBtn.innerText = number

})

randomBtn.append(randomNumber);
newDivNode.append(randomBtn);
randomNode.append(newDivNode);

