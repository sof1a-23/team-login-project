// validation.js
function validateLogin(email, password) {
  if (!email.includes('@')) return false;
  if (password.length < 6) return false;
  return true;
}
