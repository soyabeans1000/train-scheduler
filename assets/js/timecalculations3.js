function  next_train(first_train,frequency)
{
    
    let start_time = moment(first_train, 'HH:mm A');
   
    let now = moment()

 
    console.log("Time Now =>" + moment(now).format('HH:mm A') )  
    console.log("First Train =>" + moment(start_time).format('HH:mm A') )

    var duration = moment.duration(now.diff(start_time));
var hours = parseInt(duration.asHours());

var totalMinutesSinceFirstTrain = Math.abs(parseInt(duration.asMinutes()));

console.log("total Minutes passed since first train=>" + totalMinutesSinceFirstTrain)

let minute


if (now.isBefore(start_time))
totalMinutesSinceFirstTrain = 0


console.log(totalMinutesSinceFirstTrain + "totalMinutesSinceFirstTrain total Minutes since first train" )

//Find minutes past since last train
minute = totalMinutesSinceFirstTrain % frequency

console.log(minute + "minutes since last train" )

//Find how many minutes to go
let howMuchtoAdd = frequency - minute

console.log( howMuchtoAdd+ "howMuchtoAdd minutes since last train" )

howMuchtoAdd = howMuchtoAdd + totalMinutesSinceFirstTrain
console.log('Adding total minutes also' + howMuchtoAdd + "to" + moment(start_time).format('HH:mm A'))

    
return start_time.add(howMuchtoAdd,'minutes').format('HH:mm A') 

    
}

function minsleft(first_train,frequency)
{
   


}



