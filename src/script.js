function plant() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let emoji = prompt("What is your favorite emoji?");

  if (name.length > 0 && email.length > 0) {
    alert(
      "Thank you " +
        name +
        "! We'll be in touch by email, meanwhile plant a lot of trees! " +
        emoji
    );
  } else name.length < 0 || email.length < 0;
  alert("Please try again");
}
let plantButton = document.querySelector(".plant-button");
plantButton.addEventListener("click", plant);
