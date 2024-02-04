const rootNode = document.querySelector("#root");

for(let i = 0; i < 10; i++){
    // console.log(i);
    const parNode = document.createElement('p'); //создаем параграф
    parNode.innerText = i; // добавляем текст
    parNode.classList.add('item') // добавили параграфу новый класс
    rootNode.append(parNode); // записываем  параграф в рут
}

const nameNode = document.createElement('p')
const LastNameNode = document.createElement('p')

const containerNode = document.createElement('div')
rootNode.append(containerNode)

nameNode.innerText = "Anton"
LastNameNode.innerText = "Ushakov"
containerNode.append(nameNode, LastNameNode)


const imgNode = document.createElement('img'); //создали элемент
imgNode.src = 'media/cat.jpg';// передали ссылку на картинку
rootNode.append(imgNode);// добавили в рут

const words = [
    "bike",
    "snowbord",
    "table",
    "computer"
];

const newDivNode = document.createElement('div')
words.forEach(w => {
    const wordNode = document.createElement('p');
    wordNode.innerText = w;
    // rootNode.append(wordNode)
    newDivNode.append(wordNode)
})
rootNode.append(newDivNode)







