let button = document.getElementById("tap&remove");
let dropdown = document.getElementById("colorSelect");

button.addEventListener("click", () => {
          // Get the selected index
            let selectedIndex = dropdown.selectedIndex;

            // Remove the selected option
            if (selectedIndex >= 0) {
                dropdown.remove(selectedIndex);
            }
});