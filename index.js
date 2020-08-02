const $entryForm = document.querySelector("#entryForm");
const $entries = document.getElementById("entries");
const $entryTextBox = document.querySelector(".entry-textbox");
const $entriesNav = document.querySelector(".entries-nav");

let count = 1;
const addEntryToDom = (event) => {
  event.preventDefault();
  const $singleEntry = document.createElement("div");
  $singleEntry.className = "single-entry";
  $singleEntry.innerText = $entryTextBox.value;
  $entries.appendChild($singleEntry);
  $entryTextBox.value = "";
  $singleEntry.style.display = "none";

  const $displayEntryButton = document.createElement("button");
  $displayEntryButton.className = "entry-button";
  $displayEntryButton.innerText = count;
  $entriesNav.appendChild($displayEntryButton);
  count++;
};

$entryForm.addEventListener("submit", addEntryToDom);
