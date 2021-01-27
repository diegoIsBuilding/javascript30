document.addEventListener("DOMContentLoaded", () => {
  // Select all controls
  const inputs = document.querySelectorAll(".controls input");
  function handleUpdate() {
    // With this function handle the proerty changes
    // connected with the input controls
    // each setting has a name and value
    const suffix = this.dataset.sizing || "";
    // data set is for when using the data- attribute
    // dataset will return an object of all values and properties
    // of the object

    //Change the values of name and value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  inputs.forEach((input) => input.addEventListener("mouseover", handleUpdate));
});
