document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login validation
    if (username === "ahmed" && password === "123" ) {
      // Successful login
      // Redirect to the specified URL
    window.location.href = "https://www.ncei.noaa.gov/access/search/data-search/daily-summaries?bbox=31.378,70.378,28.960,72.598&startDate=2022-01-02T00:00:00&endDate=2022-01-02T23:59:59&pageNum=1";
    } else {
      // Invalid login  
      document.getElementById("message").textContent = "Invalid username or password";
    }
  });
});
