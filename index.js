const button=document.getElementById("myid");
const button1=document.getElementById("clickable");
const button2=document.getElementById("unclickable");
const textarea=document.getElementById("myarea");
const button3=document.getElementById("table");
const Table=document.querySelector("tbody");
button.addEventListener("click",() =>{
    const div=document.getElementById("mydiv");
    const image=document.createElement("img");
    image.src="https://i2.wp.com/www.isportsleague.com/wp-content/uploads/2018/01/Chennai-Super-Kings-Logo-CSK.png?fit=1241%2C1024&ssl=1"
    div.append(image);
    })
button1.addEventListener("click",() =>{
    textarea.innerText="This is my text";
})
button2.addEventListener("click",() =>{
    textarea.innerText="";
})
button3.addEventListener("click",() =>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="Asutosh";
    const td2=document.createElement("td");
    td2.innerText="20BECC52";
    const td3=document.createElement("td");
    td3.innerText="09";
    tr.append(td1,td2,td3);
    Table.append(tr);
})
