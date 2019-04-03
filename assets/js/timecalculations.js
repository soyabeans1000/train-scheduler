function next_train(first_train, frequency) {
	let start_time = moment(first_train, 'HH:mm A');
	let now = moment()
	let duration = moment.duration(now.diff(start_time));
	let totalMinutesSinceFirstTrain = Math.abs(parseInt(duration.asMinutes()));
	let minute
	if (now.isBefore(start_time)) totalMinutesSinceFirstTrain = 0
	//Find minutes past since last train
	minute = totalMinutesSinceFirstTrain % frequency
	//Find how many minutes to go
	let howMuchtoAdd = frequency - minute
    howMuchtoAdd = howMuchtoAdd + totalMinutesSinceFirstTrain
    
    if (now.isBefore(start_time)) 
    howMuchtoAdd = 0
	return start_time.add(howMuchtoAdd, 'minutes').format('HH:mm A')
}

function minsleft(first_train, frequency) {
	let start_time = moment(first_train, 'HH:mm A');
    let now = moment()
    
    console.log("Time Now =>" + moment(now).format('HH:mm') )  
    console.log("First Train =>" + moment(start_time).format('HH:mm A') )

    let duration = moment.duration(now.diff(start_time));
    
    let minute = Math.abs(parseInt(duration.asMinutes()));

    console.log(minute + 'Math.abs(parseInt(duration.asMinutes()))')
    //Find minutes past since last train
    minute = Math.abs(parseInt(duration.asMinutes())) % frequency

     console.log(minute + 'Math.abs(parseInt(duration.asMinutes()))%frequency')

    minute = frequency - minute

    console.log("MINUSING FROM MINUTE=>" + minute)
    
    //If train not started 
    if (now.isBefore(start_time)) 
    minute = Math.abs(parseInt(duration.asMinutes()))
	
	return minute
}