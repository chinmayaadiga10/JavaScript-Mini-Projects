const websiteInput = document.getElementById("website");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordTable = document.querySelector("table");
const submitBtn = document.querySelector(".btn");

const showPasswords = () => {
  const data = localStorage.getItem("passwords");
  const info = data ? JSON.parse(data) : [];

  if (info.length === 0) {
    passwordTable.innerHTML = "<caption>No passwords saved yet.</caption>";
    passwordTable.style.border = "none";
    return;
  }

  let tableHTML = `
    <tr>
      <th>Website</th>
      <th>Username</th>
      <th>Passwords</th>
      <th>Delete</th>
    </tr>`;

  info.forEach((element, index) => {
    tableHTML += `
      <tr>
        <td>${element.website}</td>
        <td>${element.username}</td>
        <td>${element.password}</td>
        <td>
          <button class="btn" onclick="deletePassword(${index})">Delete</button>
        </td>
      </tr>`;
  });

  passwordTable.innerHTML = tableHTML;
  passwordTable.style.border = "2px solid black";
};
