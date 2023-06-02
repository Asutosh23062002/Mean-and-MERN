const takenemail = document.getElementById("email");
const takenpassword = document.getElementById("password");

function findUser() {
  fetch("http://localhost:8000/myData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const user = data.find((el) => el.email === takenemail.value && el.password === takenpassword.value);
      console.log(user);
      if (user) {
        alert("logged in");
      } else {
        window.location.href = "./index.html";
      }
    });
}