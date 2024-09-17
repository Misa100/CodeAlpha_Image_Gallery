// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

      // Get the modal
      var modal = document.getElementById("imageModal");

      // Get the modal image element
      var modalImg = document.getElementById("modalImage");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // Add click event to each card image
      document.querySelectorAll('#filterable-cards .card img').forEach((img) => {
        img.addEventListener('click', function() {
          modal.style.display = "block";
          modalImg.src = this.src;
        });
      });

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }

      // Also close the modal when clicking anywhere outside the image
      modal.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }