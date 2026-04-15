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

window.deletePassword = (index) => {
  const data = localStorage.getItem("passwords");
  let info = JSON.parse(data);

  const deletedSite = info[index].website;
  info.splice(index, 1);

  localStorage.setItem("passwords", JSON.stringify(info));
  alert(`Deleted credentials for ${deletedSite}`);
  showPasswords();
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!websiteInput.value || !usernameInput.value || !passwordInput.value) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  const passwords = localStorage.getItem("passwords");
  let passwordList = passwords ? JSON.parse(passwords) : [];

  passwordList.push({
    website: websiteInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
  });

  localStorage.setItem("passwords", JSON.stringify(passwordList));
  alert("Password saved successfully!");

  websiteInput.value = "";
  usernameInput.value = "";
  passwordInput.value = "";

  showPasswords();
});

showPasswords();
