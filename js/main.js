let now = new Date();
let dayOfTheMonth = now.getDate()
let monthOfTheYear = now.getMonth()
let fullYear = now.getFullYear()
let dayOfTheWeek = now.getDay()
console.log('Первое задание\n\n \tДень текущего месяца:',dayOfTheMonth)
console.log('\tМесяц текущего года:',monthOfTheYear)
console.log('\tТекущий год:',fullYear)
console.log('\tТекущий день недели',dayOfTheWeek)

console.log('\nВторое задание')
let march10of2005Year = new Date(2005, 2, 10)
let dayOfTheNewWeek = march10of2005Year.getDay()
console.log('\tДень недели 10 марта 2005года: ',dayOfTheNewWeek)

console.log('\nТретье задание')
let days = now.getTime()
let dayss = (((days / 1000) / 3600 ) / 24 )
console.log('\tКол-во дней, которые прошли с начала 1970 года:',Math.ceil(dayss))

console.log('\nЧетвертое задание')
let march1of1988 = new Date(1988, 2, 1)
let march8of2015 = new Date(2015,2, 8)
march1of1988 = march1of1988.getTime()
march8of2015 = march8of2015.getTime()
minus = march8of2015 - march1of1988
console.log('\tКол-во часов, прошедших с 1 марта 1988 по 8 марта 2015го:',minus/1000/3600)

console.log('\nПятое задание')
const endOfTheDay = 24 * 60 * 60
let hours = now.getHours()
let minutes = now.getMinutes()
hours = hours * 60 * 60 
minutes = minutes * 60
let time = hours + minutes
let toTheEndOfTheDay = endOfTheDay - time
console.log('\tКол-во секунд оставшееся до конца дня:',toTheEndOfTheDay)


// Преобразуйте массив таким образом, что бы в нем все элементы были уникальными (встречаются лишь один раз)
console.log('\nШестое задание')
const arr = [1, 2, 3, 1, 2, 5, 6, 3];

const res = []
arr.forEach( element => {
    if(!res.some( el => element === el)){
        res.push(element)
    }
})
console.log('\tМассив без повторений:',res)


// Удалить в массиве все числа, которые повторяются более двух раз.
console.log('\nСедьмое задание')
let arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8 ]
// let firstElement = arr1.shift()
// let count = 0;
// for (let i = 0; i < arr1.length; i++){
//     for( let j = 0; j < arr1.length; j++){ 
//         if ( arr1[i] === arr1[j] ){
//             count += 1;
//         }
//     }
    
// }
// console.log(count)


arr1 = arr1.filter((item, i, source) => {
    // Если индекс элемента в массиве не равен индексу первого вхождения этого элемента в массив, то в результирующий массив этот элемент включать не надо
    return source.indexOf(item) === i;
  });
  console.log(arr1)


// Удалить из второго массива только те элементы, которые встречаеются в первом массиве
console.log('Восьмое задание')
const arr2 = [1, 3, 5];
const arr3 = [1, 2, 3, 4, 5, 6];

arr3.forEach( (element,index) =>{
    if ( arr2.includes(element)){
        delete arr3[index]
    }
})
console.log(arr3)