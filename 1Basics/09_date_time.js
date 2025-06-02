// //Dates 

// let ourDate = new Date()
//     console.log(ourDate.toString());
//     console.log(ourDate.toDateString());
//     console.log(ourDate.toTimeString());
//     console.log(ourDate.toLocaleString());
   
//     console.log(typeof ourDate);

//     let myDate= new Date(2026, 10, 11,)
// // year, month (0-11), day, hours, minutes, seconds
//     console.log(myDate.toDateString());
 
//     let anotherDate = new Date (2021, 1, 1 , 10, 11, 12, 30, 45) //First Year , then month, day, hours, minutes, seconds, milliseconds
    

//     console.log(anotherDate.toLocaleString());// gives local time
//     console.log(anotherDate.toUTCString()); // gives UTC time

//     console.log(anotherDate.toISOString()); // gives ISO format
//     console.log(anotherDate.toString()); // gives string format
//     console.log(anotherDate.toTimeString()); // gives time format
//     console.log(anotherDate.toDateString()); // gives date format
//     console.log(anotherDate.getTime()); // gives time in milliseconds since 1970
//     console.log(anotherDate.getFullYear()); // gives year     
//     console.log(anotherDate.getMonth()); // gives month (0-11)
//     console.log(anotherDate.getDate()); // gives date (1-31)
//     console.log(anotherDate.getDay()); // gives day (0-6)
//     console.log(anotherDate.getHours()); // gives hours (0-23)  
//     console.log(anotherDate.getMinutes()); // gives minutes (0-59)      
//     console.log(anotherDate.getSeconds()); // gives seconds (0-59)
//     console.log(anotherDate.getMilliseconds()); // gives milliseconds (0-999)   
//     console.log(anotherDate.getTimezoneOffset()); // gives timezone offset in minutes

    


//     let newDate = new Date ("2021-2-3")
//     console.log(newDate.toLocaleString()); // gives string format

//     let newDate1 = new Date (2023, 1, 23)
//     console.log(newDate1.toLocaleString()); // gives string format

//     let newDate2 = new Date ("04-30-2020")
//     console.log(newDate2.toLocaleString()); // gives string format
    
//     let myTimestamp = Date.now() // gives current timestamp in milliseconds
//     console.log(myTimestamp); // prints the timestamp 
    
    
//     console.log(newDate2.getTime()); // prints the timestamp 

console.log(Date.now());
console.log(Date().toLocaleString()); // prints the current date and time in local format