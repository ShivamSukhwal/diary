const $entryForm = document.querySelector("#entryForm");
const $entries = document.getElementById("entries");
const $entryTextBox = document.querySelector(".entry-textbox");
const $entriesNav = document.querySelector(".entries-nav");

let count = 1;
const addEntryToDom = (event) => {
  event.preventDefault();

  $entries.innerHTML += `<div class='entry'> ${$entryTextBox.value}</div>`;
  const $entry = document.getElementsByClassName("entry");
  $entry.innerText = $entryTextBox.value;
  $entryTextBox.value = "";
  $entry[count - 1].style.display = "none";

  $entriesNav.innerHTML += `<button class='entries-button'>${count}</button>`;
  count++;
};

$entryForm.addEventListener("submit", addEntryToDom);
