/*
 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
 */
 console.log('Task 1');
 const arr = [1, 5, 7, 9];
 console.log(Math.min(...arr));

 /*
 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
 */
 console.log('Task 2');
 function createCounter() {
    let value = 0;
    return {
        increment: () => {value++ },
        decrement: () => {value-- },
        result: function () {
            return value;
        }
    }
 }

const obj1 = createCounter();
obj1.increment(); //+1
obj1.increment(); //+1
obj1.increment(); //+1
obj1.increment(); //+1
console.log(obj1.result());

obj1.decrement(); //-1
obj1.decrement(); //-1
console.log(obj1.result());

/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
 */
 console.log('Task 3');
 function findElementByClass(rootElement){    
    const rootEl =  rootElement.children;
    for (let i= 0; i < rootEl.length; i++) {        
        console.log(`Teg:${rootEl[i].tagName} class:${rootEl[i].classList[0]}`);
        findElementByClass(rootEl[i]);       
    }
 }
 const rootElement = document.querySelector('.dropdown'); 
 findElementByClass(rootElement);