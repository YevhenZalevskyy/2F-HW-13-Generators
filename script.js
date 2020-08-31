            /////  HW#13 Generators  /////

const idGenerator = createIdGenerator();
let id = 1;

function* createIdGenerator() {
  while (true) {
    yield id;
    id++;
  }
}

const getId = document.getElementById('id')
const idNum = document.getElementById('num')

getId.addEventListener('click', function () {
  idNum.innerText = idGenerator.next().value
})
