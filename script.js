            /////  HW#13 Generators  /////

// Id Generator Function
const idGenerator = createIdGenerator();
let id = 1;

function* createIdGenerator() {
  while (true) {
    yield id;
    id++;
  }
}

// Id Generator connect with Document
const getId = document.getElementById('id')
const idNum = document.getElementById('num')

getId.addEventListener('click', function () {
  idNum.innerText = idGenerator.next().value
})
