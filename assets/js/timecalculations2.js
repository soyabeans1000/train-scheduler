function  next_train(first_train,frequency)
{
    
    let start_time = moment(first_train, 'HH:mm A');
   
    let now = moment()

   
    console.log("Time Now =>" + moment(now).format('HH:mm A') )

    
    console.log("First Train =>" + moment(start_time).format('HH:mm A') )

    
  

var duration = moment.duration(now.diff(start_time));
var hours = parseInt(duration.asHours());
var minute = parseInt(duration.asMinutes()) % 60;


console.log(minute + "total Time Diff" )

console.log(minute % frequency + "time since last train that left")

var millis = parseInt(duration.asMilliseconds())

var freqInMillis = frequency * 60000




var howmuchToAdd = freqInMillis - (millis % freqInMillis)

console.log('adding Millis=> ' + howmuchToAdd)

console.log('adding Minutes=> ' + howmuchToAdd/60000)
     
return now.add(Math.floor(Math.abs(howmuchToAdd)),'ms').format('HH:mm A') 



     
}

function minsleft(first_train,frequency)
{
   
let start_time = moment(first_train, 'HH:mm A');
   
let now = moment()


console.log("Time Now =>" + moment(now).format('HH:mm A') )


console.log("First Train =>" + moment(start_time).format('HH:mm A') )




var duration = moment.duration(now.diff(start_time));
var hours = parseInt(duration.asHours());
var minute = parseInt(duration.asMinutes()) % 60;


console.log(minute + "total Time Diff" )

console.log(minute % frequency + "time since last train that left")

var millis = parseInt(duration.asMilliseconds())

var freqInMillis = frequency * 60000




var howmuchToAdd = freqInMillis - (millis % freqInMillis)

console.log('adding Millis=> ' + howmuchToAdd)

console.log('adding Minutes=> ' + howmuchToAdd/60000)
 
if (Math.abs(howmuchToAdd/60000) < 1)
 return '< min'

 else 

return Math.floor(Math.abs(howmuchToAdd/60000))

//If time = 0, change time of next Train

}



// function minsleft(first_train,frequency)
// {
    
//     let start_time = moment(first_train, 'HH:mm A');
   
//     let now = moment()

//     console.log("Now=>" + now)
 
//     console.log("Start-Time=>" + start_time)

  

//     timeDiff = now.diff(start_time)

    
// var freqInMillis = frequency * 60000

// var howmuchToAdd = Math.floor(timeDiff % freqInMillis)

//    howmuchToAdd = freqInMillis - howmuchToAdd


//     console.log("Next Train in =>" + howmuchToAdd)

   




// var duration = moment.duration(now.diff(start_time));
// var hours = parseInt(duration.asHours());
// var minute = parseInt(duration.asMinutes())-hours*60;


// console.log(howmuchToAdd)

     


// return Math.floor(howmuchToAdd/60000) ;

  
   
// }

