// EXAMPLE 1 - Get the Difference between two Arrays of Objects in JS

const arr1 = [
  {id: 1, name: 'Tom'},
  {id: 2, name: 'bobby hadz'},
];
const arr2 = [{id: 1, name: 'Tom'}];

function getDifference(array1, array2) {
  return array1.filter(object1 => {
    return !array2.some(object2 => {
      return object1.id === object2.id;
    });
  });
}

// 👇️ [ { id: 2, name: 'bobby hadz' } ]
console.log(getDifference(arr1, arr2));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the complete difference between two Arrays of Objects

// const arr1 = [{id: 1, name: 'Tom'}];
// const arr2 = [
//   {id: 1, name: 'Tom'},
//   {id: 2, name: 'bobby hadz'},
// ];

// function getDifference(array1, array2) {
//   return array1.filter(object1 => {
//     return !array2.some(object2 => {
//       return object1.id === object2.id;
//     });
//   });
// }

// const difference = [
//   ...getDifference(arr1, arr2),
//   ...getDifference(arr2, arr1),
// ];

// // 👇️ [{id: 2, name: 'bobby hadz'}]
// console.log(difference);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Shortening the function

// const arr1 = [{id: 1, name: 'Tom'}];
// const arr2 = [
//   {id: 1, name: 'Tom'},
//   {id: 2, name: 'bobby hadz'},
// ];

// function getDifference(array1, array2) {
//   return array1.filter(
//     object1 =>
//       !array2.some(object2 => object1.id === object2.id),
//   );
// }

// const difference = [
//   ...getDifference(arr1, arr2),
//   ...getDifference(arr2, arr1),
// ];

// // 👇️ [{id: 2, name: 'bobby hadz'}]
// console.log(difference);
