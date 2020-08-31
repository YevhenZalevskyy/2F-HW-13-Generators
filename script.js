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

// Change Font Size Function
const docText = document.getElementById('sizeText')
const fontGenerator = newFontSizeGenerator(14);

function newFontSizeGenerator(size) {
  docText.style.fontSize = fontGerneator.next().value + 'px'
}

minus.addEventListener('click', function() {
  docText.style.fontSize = fontGerneator.next().value + 'px;'
})

plus.addEventListener('click', function() {
  docText.style.fontSize = fontGenerator.next().value + 'px;'
})
