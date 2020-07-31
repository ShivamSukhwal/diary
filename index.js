const $entryForm = document.querySelector("#entryForm");
const $entries = document.getElementById("entries");
const $entryTextBox = document.querySelector(".entry-textbox");

const addEntryToDom = (event) => {
  event.preventDefault();
  const submittedEntry = $entryTextBox.value;
  $entries.innerHTML += `<div class='entry'> ${submittedEntry}</div>`;
};

$entryForm.addEventListener("submit", addEntryToDom);
