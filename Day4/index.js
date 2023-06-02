// fetch("http://localhost:8080/myData",{
//     method:'GET',
// }).then((response)=>response.json())
//     .then((data)=>console.log(data));

// const show=document.getElementById("show");
// function renderdata(data) {  data.array.forEach((el) => {
//     const div = document.createElement("div") ;
//     const image = document.createElement("img");
//     image.src=el.image;
//     image.style.width="100px";
//     image.style.height="100px";
//     div.append(image);
//     show.append(div);
//  });
// }

const takenemail = document.getElementById("email");
const takenpassword = document.getElementById("password");

function submitData() {
  if (takenemail.value !== "" && takenpassword.value !== "") {
    const obj = {
      id: Date.now(),
      email: takenemail.value,
      password: takenpassword.value,

    };
    // console.log(takenemail.value,takenpassword.value);
    fetch(" http://localhost:8080/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => alert("Added"))
      
      .catch((err) => console.log(err));
    } else {
      alert("Fill in all the fields");
    }
    window.location.href="./login.html"
}