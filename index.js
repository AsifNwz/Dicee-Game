document.querySelector("#Player1").innerText = "Player 1";
document.querySelector("#Number1").innerText = "Player 1";

document.getElementById("run").addEventListener("click", checkWinner);

function checkWinner() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var imageName1 = "./images/dice" + randomNumber1 + ".png";
  var imageName2 = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", imageName1);
  document.querySelector(".img2").setAttribute("src", imageName2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! &#128681";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Asif Wins! &#128681";
  } else {
    document.querySelector("h1").innerHTML = "&#128681 Draw! &#128681";
  }

  var table = document.getElementById("table");

  // Create a new table row element
  var row = document.createElement("tr");

  // Create two table data elements for the numbers
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");

  // Set the inner text of the table data elements to the numbers
  td1.innerText = randomNumber1;
  td2.innerText = randomNumber2;

  // Append the table data elements to the table row element
  row.appendChild(td1);
  row.appendChild(td2);

  // Append the table row element to the table element
  table.appendChild(row);
}
