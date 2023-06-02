const data=[
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"spiderman",
        rating:5,
    },
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"Dr strange",
        rating:5,
    },
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"spiderman",
        rating:5,
    },
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"spiderman",
        rating:5,
    },
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"spiderman",
        rating:5,
    },
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"spiderman",
        rating:5,
    },
    {
        image:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?pid=ImgDet&rs=1",
        title:"spiderman",
        rating:5,
    },
];
const movieBox=document.getElementById("showmovies");
data.forEach((el)=>{
    const div=document.createElement("div");

    const image=document.createElement("img");
    image.src=el.image;

    const movieTitle= document.createElement("h1");
    movieTitle.innerText=el.title;

    const rating=document.createElement("p"); 
    rating.innerText=el.rating;
    const button=document.createElement("button");
    button.innerText="Click Movie";
    button.addEventListener("click",()=>{
        alert(`You clicked on ${el.title}`);
    });
    div.append(image,movieTitle,rating,button);
    movieBox.append(div);
});

// same thing in a different way we can use both the method
//  });
// const moviebox=document.getElementById("showmovies");

// for(let i=0;i<data.length;i++){
//     const div=document.createElement("div");
//     const image=document.createElement("img");
//     image.src=data[i].image;
//     const movieTitle= document.createElement("h3");
//     movieTitle.innerText=data[i].title;
//     const rating=document.createElement("p");
//     rating.innerText=data[i].rating;
//     div.append(image,movieTitle,rating);
//     moviebox.append(div);
// }