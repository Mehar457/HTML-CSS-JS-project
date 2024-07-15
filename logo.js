<script>
  function editName() {
    // Get the current name
    var currentName = document.getElementById("name").innerHTML;

    // Create a prompt to edit the name
    var newName = prompt("Enter new name:", currentName);

    // Update the name if the user enters a new value
    if (newName !== null && newName !== "") {
      document.getElementById("name").innerHTML = newName;
    }
  }
</script>