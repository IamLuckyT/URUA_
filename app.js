// Switch between screens
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Mock login
function loginUser() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if(email && pass) {
    showScreen("dashboard");
  } else {
    alert("Enter email and password");
  }
}
