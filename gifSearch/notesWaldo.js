

<script>
    appendClickableImageToList("imageList", "https://example.com/image.jpg", "https://example.com", "Example Image");
</script>



  
  
  
  
  
  function generateUniqueRandNumbers(N, maxNumber) {
    const randNumbers = new Set();
    
    while (randNumbers.size < N) {
        const randNumber = Math.floor(Math.random() * maxNumber);
        randNumbers.add(randNumber); // Only adds if unique
    }
    
    return [...randNumbers]; // Convert Set to an array
}
  
  
  
  


        function functionName() {
            console.log("functionName called!");

            // Change the onClick to another function (or no function)
            const button = document.getElementById("myButton");
            let button=this
            
            button.onclick = function () {
            };
        }
   






// Example array and loop range
const arraySet = new Set([a, b, c]); // Define a Set from array values
let concatString = ""; // Initialize the string to concatenate
const frontTag = "<tag>"; // Example front tag
const endTag = "</tag>"; // Example end tag
const hiddenArr = ["hidden", "visible", "other"]; // Example array
console.log(concatString); // Output the final concatenated string



let randomNumber;
let randomCharacterPickerNumberArr=[]
function addUniqueRandomNumber(maxValue) {
    
        randomNumber = Math.floor(Math.random() * maxValue);
    if(array.includes(randomNumber))
    {
     addUniqueRandomNumber(maxCells)
    }
    else {
     {
    randomCharacterPickerNumberArr.push(randomNumber);
}

// Example Usage
const randomNumbers = []; // Initialize an empty array
const maxValue = 10; // Max value for the random number

for (let i = 0; i < 5; i++) { // Generate 5 unique random numbers
    const newRandom = addUniqueRandomNumber(randomNumbers, maxValue);
    console.log(`Generated number: ${newRandom}`);
}

console.log(`All numbers: ${randomNumbers}`);

<button id="goToImage">Double-click to view image</button>



<button ondblclick="openImage()">Double-click to view image</button>

<button id="copyGif">Double-click to copy GIF URL</button>

<script>
function copyGifUrl() {
  const gifUrl = "https://example.com/your-image.gif";

  navigator.clipboard.writeText(url)
    .then(() => {
      alert("GIF URL copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}

document.getElementById("copyGif").addEventListener("dblclick", copyGifUrl);
</script>

<script>
document.getElementById("goToImage").addEventListener("dblclick", 
</script>

<script>
function onScrollToBottom(callback) {
  window.addEventListener("scroll", function() {
    // Check if user reached the bottom
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
      callback(); // Trigger the callback
    }
  });
}

// Example usage:
onScrollToBottom(() => {
  console.log("You’ve reached the bottom of the page!");
  // You can trigger any other function or action here
});
</script>