
let generating = false;

function CallAPI()
{
    if (generating)
    {
        return;
    }

    generating = true;

    WaitUp(false);

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
         WaitUp(true);
     // Display the response data
     const story = data[0].story; // Assuming the response is an array with one object
     document.getElementById('response').textContent = story;
   
 })
 .catch(error => {
     // Handle any errors that occur during the request
     console.error('There was a problem with the request:', error);
 });
}

function WaitUp(end)
{
    if (end)
    {
        generating = false;

        document.getElementById('response').style.fontStyle = "normal";
        document.getElementById('response').style.fontSize = "1.5em";
        document.getElementById('response').style.color = "Black";
        document.getElementById('generateButton').textContent = "Generate story";
        return;
    }

    const waitMessages = [
    "Tipsy storytelling in progress...",
    "Drunk on creativity...",
    "Intoxicated inspiration at play...",
    "Inebriated narratives unfolding...",
    "Writing under the influence...",
    "Intoxicated imagination at work...",
    "Spirited storytelling in motion...",
    "Crafting tales with a buzz...",
    "Sipping and scripting...",
    "Tipsy tales being penned...",
    "Writing the story while drunk..."
    ];

    let randomIndex = Math.floor(Math.random() * waitMessages.length);

    document.getElementById('response').style.fontStyle = "italic";
    document.getElementById('response').style.fontSize = "20px";
    document.getElementById('response').style.color = "Gray";
    document.getElementById('response').textContent = waitMessages[randomIndex];

    document.getElementById('generateButton').textContent = "Wait up... Generating...";
}