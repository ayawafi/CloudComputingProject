function displayGreeting() {
    var name = prompt("Please enter your name:");
    var greeting = "Hello, " + name + "! Welcome to our website.";
    alert(greeting);
  }
  
  // Function to change the background color of a page
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Function to show a hidden element
  function showElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block";
    }
  }
  
  // Usage examples
  displayGreeting();
  changeBackgroundColor("lightblue");
  showElement("myElement");