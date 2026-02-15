// const myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// const myNewDate = new Date(2023,0,23)
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleDateString());

// const myCreatedDate = new Date("12-14-2023")
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));
 const newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate.toLocaleString('default',{
    dateStyle:"full"
}));
console.log(newDate.toLocaleString());
