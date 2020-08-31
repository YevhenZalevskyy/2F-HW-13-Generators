            /////  HW#13 Generators  /////

const idGenerator = createIdGenerator();
let id = 1;

function* createIdGenerator() {
  while (true) {
    yield id;
    id++;
  }
}

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
