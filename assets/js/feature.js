document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".show-more-btn");

  buttons.forEach((button) => {
    const parent = button.closest(".feature-item");
    const subtitleElement = parent.querySelector(".subtitle");
    const fullText = subtitleElement.getAttribute("data-full-text");

    // Only truncate if the full text is longer than 65 characters
    if (fullText.length > 65) {
      const shortText = fullText.substring(0, 65) + "...";

      // Initialize with the short text and set data-expanded to false
      subtitleElement.textContent = shortText;
      subtitleElement.setAttribute("data-expanded", "false");

      // Add event listener to handle the "Selengkapnya" button click
      button.addEventListener("click", function () {
        if (subtitleElement.getAttribute("data-expanded") === "true") {
          // Collapse the text
          subtitleElement.textContent = shortText;
          button.textContent = "Selengkapnya";
          subtitleElement.setAttribute("data-expanded", "false");
        } else {
          // Expand the text
          subtitleElement.textContent = fullText;
          button.textContent = "Tampilkan Lebih Sedikit";
          subtitleElement.setAttribute("data-expanded", "true");
        }
      });
    } else {
      // If the text is 65 characters or less, display the full text and hide the button
      subtitleElement.textContent = fullText;
    }
  });
});
