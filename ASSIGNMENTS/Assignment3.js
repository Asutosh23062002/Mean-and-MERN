const data=[
    {
        image:"https://th.bing.com/th/id/OIP.EWBvs8PETAzStjoNfff7sAHaFj?w=264&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"samosa raja",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.QP9ciTlra_oViR2S0wEjEwHaE6?w=281&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"damana samosa",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.jBHGNTQ8TlYMYwB8vqSUzgHaFS?w=275&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"kalia samosa",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.QP9ciTlra_oViR2S0wEjEwHaE6?w=281&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"samosa singh",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.A4oyc1V3Ozyk3_VtaJ-A9QHaFj?w=248&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"Royal samosa",
        ingredients:"",
    },
    {
        image:"https://th.bing.com/th/id/OIP.QP9ciTlra_oViR2S0wEjEwHaE6?w=281&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name:"samosa house",
        ingredients:"",
    }
];
const hotel1=document.getElementById("hotel");
data.forEach((el)=>{
    const div=document.createElement("div");

    const image=document.createElement("img");
    image.src=el.image;

    const name= document.createElement("h1");
    name.innerText=el.name;

    const ingredients=document.createElement("p"); 
    ingredients.innerText=el.ingredients;
    const button1=document.createElement("button");
    button1.innerText="Show more";
    const button2=document.createElement("button");
    button2.innerText="Show less";
    button1.addEventListener("click",() =>{
        ingredients.innerText="A samosa or sambosa is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas, meat or fish. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region. Samosas are often accompanied by chutney, and have origins in medieval times or earlier. Sweet versions are also made. Samosas are a popular entrée, appetizer, or snack in the cuisines of South Asia, the Middle East, Central Asia, East Africa and their South Asian diasporas.";
    })
    button2.addEventListener("click",() =>{
        ingredients.innerText="";
    })
    div.append(image,name,ingredients,button1,button2);
    hotel1.append(div);
});