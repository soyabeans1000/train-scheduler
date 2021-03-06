//Calculate Next Train
function next_train(first_train, frequency) {
	let start_time = moment(first_train, 'HH:mm A');
	let now = moment()
    let duration = moment.duration(now.diff(start_time));
    let totalMinutesSinceFirstTrain = Math.abs(duration.asMinutes());
    let minute
    
    //if train not started yet
    if (now.isBefore(start_time)) 
    totalMinutesSinceFirstTrain = 0

    //Find minutes past since last train
    minute = totalMinutesSinceFirstTrain % frequency
   
    //add duration plus time to next train

    let howMuchtoAdd = frequency - minute
    howMuchtoAdd = howMuchtoAdd + totalMinutesSinceFirstTrain


    //If train start time is in the future
    if (now.isBefore(start_time)) 
    howMuchtoAdd = 0
	return start_time.add(howMuchtoAdd, 'minutes').format('HH:mm A')
}

function minsleft(first_train, frequency) {

	let start_time = moment(first_train, 'HH:mm A');
    let now = moment()

  //get duration between the 2 times, if negative, make positive
  let duration = moment.duration(now.diff(start_time));

    //get duration in minutes
  let minute = Math.abs(duration.asMinutes())
 
  //If train not started 
  if (now.isBefore(start_time)) 
  {
      //return rounded duration in minutes
      return Math.ceil(minute);
  }
  minute = Math.abs(parseInt(duration.asMinutes()));
  
    //Find minutes past since last train
    minute = minute % frequency
     
    //minutes to next train
    minute = frequency - minute
     
    //if minute less than 0, it is below one min
    if (minute === 0)
    return "< min"
    else 
    return minute 
}