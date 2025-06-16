let button = document.querySelector("button");

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    if (weather === "rainy"){
        document.querySelector("p").textContent = "Bring an umbrella!";
    }
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"
    else{
        document.querySelector("p").textContent = "Enjoy the sun!";
    }
});