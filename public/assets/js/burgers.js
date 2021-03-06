// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eaten").on("click", function (event) {
    var id = $(this).data("id");
    var newlyEaten = $(this).data('newlyeaten');

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: {
        eaten: newlyEaten
      }
    }).then(function () {
      console.log("changed to", newlyEaten);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});