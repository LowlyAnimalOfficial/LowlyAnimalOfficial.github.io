function callAPI()
{
 // Make a GET request to the API endpoint
 fetch('https://StupidS.azurewebsites.net/ShortStory')
 .then(response => {
     // Check if the response is successful (status code 200)
     if (!response.ok) {
         throw new Error('Network response was not ok');
     }
     // Parse the JSON response
     return response.json();
 })
 .then(data => {
     // Display the response data
     const story = data[0].story; // Assuming the response is an array with one object
     document.getElementById('response').textContent = story.replace('"', "");
 })
 .catch(error => {
     // Handle any errors that occur during the request
     console.error('There was a problem with the request:', error);
 });
}