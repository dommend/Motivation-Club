const motivationForm = document.querySelector('form')
motivationForm.addEventListener('submit', async (e) => {
    const name = document.querySelector('#nameFieldgdftretet').value
    const motivationMessage = document.querySelector('#motivationFieldgdftretet').value
    const message = document.querySelector('#message')
    const motivation = {name, motivationMessage}
    e.preventDefault()
    try {
        const response = await axios.post('/motivations', motivation)
        message.textContent = "Tietokantaan lisätty: " + response.data.motivationMessage + ", " 
        + response.data.name
    } catch (error) {
        message.textContent = error
    }
})
  fetch('https://motivation-club.herokuapp.com/motivations')
    .then(response => response.json())
   .then(data => {
     // Create array of object keys, ["311", "310", ...]
    const keys = Object.keys(data)
    // Generate random index based on number of keys
    const randIndex = Math.floor(Math.random() * keys.length)
    // Select a key from the array of keys using the random index
    const randKey = keys[randIndex]
    // Use the key to get the corresponding name from the "names" object
    // const name = data[randKey]
    // const myJSON = JSON.stringify(data, ['name', 'motivation']); 
     motivationMessage.textContent = data[randKey].motivationMessage + " T:" + data[randKey].name
    })
  .catch(error => console.error(error))