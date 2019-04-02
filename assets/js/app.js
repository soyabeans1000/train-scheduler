document.querySelector('#localtime').innerHTML = moment().format('hh:mm A')

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCss5qU7BL6Nf5Vbjf78-NM80iNvNbK2_k",
    authDomain: "train-timetable-14837.firebaseapp.com",
    databaseURL: "https://train-timetable-14837.firebaseio.com",
    projectId: "train-timetable-14837",
    storageBucket: "train-timetable-14837.appspot.com",
    messagingSenderId: "347337677651"
  };
  firebase.initializeApp(config)

  // Create a variable to reference the db
  const db = firebase.firestore()

 
   let train_name,
    train_destination, first_train_time, train_frequency


  //Capture Button Click
  document.querySelector('#sbmt').addEventListener('click', e => {
    // Don't refresh the page!
    e.preventDefault()

     db.collection('trains').doc().set({
     name: document.querySelector('#name-input').value,
     destination : document.querySelector('#destination-input').value,
     first_train: document.querySelector('#time-input').value,
    frequency: document.querySelector('#frequency-input').value
    })
  
  }) 

  //FireBase watcher
  db.collection('trains').onSnapshot(snap => {

    trainCount = snap.size
    document.querySelector('#timetable').innerHTML = ''
    snap.docs.forEach(doc => {


      // grab the important properties of the document
      let { name, destination, first_train, frequency } = doc.data()
      let nexttrain =  next_train(first_train,frequency)
      let minutesleft = minsleft(first_train,frequency)


    // Change the HTML to reflect
      let trainElem = document.createElement('tr')
          
     //Train Data
      trainElem.innerHTML = `<th scope="row">${name}</th> 
      <td>${destination}</td>
      <td>${frequency}</td> 
      <td>${nexttrain}</td> 
      <td>${minutesleft}</td>`

     document.querySelector('#timetable').append(trainElem)
      
    })
  })
