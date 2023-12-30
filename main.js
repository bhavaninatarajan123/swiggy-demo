let swiggy=[
    {
        id:1,
        name:"shri gowri",
        cuisine :"Geetham Veg Restaurant,",
        location:"Thuraipakkam (OMR)", 
        imgurl:"image/shri gowri.jpg",
        rating:"4.3",
        preparation:41,
        amount:230,
        units:"for two",
        pureveg:"yes"

    } ,

    {
        id:2,
       name:"biryani",
       cuisine:"Yaa Mohaideen Briyani,",
       location:"Sholinganallur",
        imgurl:"image/biriyani.jpg",
        rating:"4.2",
        preparation:35,
        amount:330,
        units:"for two",
        pureveg:"no"

    } ,


    {
        id:3,
        name :"brownie studio",
        cuisine:"Anbu Sweets & Bakery,",
        location:"Medavakkam",
        imgurl:"image/brownie studio.jpg",
        rating:"3.5",
        preparation:41,
        amount:200,
        units:"for two",
        pureveg:"yes"

    },


    {
        id:4,
       name:"cool biz",
       cuisine :"Cool N Fresh,Beverages",
       location:" Juices,Medavakkam",
        imgurl:"image/cool biz.jpg",
        rating:"4.1",
        preparation:55,
        amount:70,
        units:"for two",
        pureveg:"yes"

    },

    {
        id:5,
        name:"idli",
        cuisine:"Hot Chips,North Indian," ,
        location:"Karapakkam",
        imgurl:"image/hotel palamgrove.jpg",
        rating:"3.9",
        preparation:61,
        amount:50,
        units:"for two",
        pureveg:"yes"


    },


    {
        id:6,
        name:"ibaco",
        cuisine:"New Iyengar Bakery",
        location:"Perumbakkam",
        imgurl:"image/ibaco.jpg",
        rating:"4.4",
        preparation:41,
        amount:150,
        units:"for two",
        pureveg:"yes"


    },

    {
        id:7,
        name:"ice Creams",
        cuisine:"Keventers Ice Cream,",
        location:"Karapakkam",
        imgurl:"image/ice_Creams.jpg",
        rating:"4.3",
        preparation:31,
        amount:350,
        units:"for two",
        pureveg:"yes"

    },

    {
        id:8,
        name:"Gulabsam",
        cuisine:"North Indian ,Mexican",
        location:"Sowcarpet",
        imgurl:"image/kakada rampresad.jpg",
        rating:"3.7",
        preparation:41,
        amount:90,
        units:"for two",
        pureveg:"yes"

    },

    {
        id:9,
        name:"cake",
        cuisine:"The Cake Bakers,",
        location:"Sholinganallur",
        imgurl:"image/mac cake.jpg",
        rating:"2.3",
        preparation:51,
        amount:450,
        units:"for two",
        pureveg:"no"

    },

    {
        id:10,
        name:"Appam",
        cuisine:"Mallu Food Factory,",
        location:"Pallikaranai",
        imgurl:"image/madurai mess.jpg",
        rating:"4.2",
        preparation:55,
        amount:290,
        units:"for two",
        pureveg:"yes"

    },

    {
        id:11,
        name:"poori",
        name:"Venkateshwara Sweets",
        location:"Perumbakkam",
        imgurl:"image/poori.jpg",
        rating:"2.4",
        preparation:71,
        amount:170,
        units:"for two",
        pureveg:"yes"

    },
    {
        id:12,
        name:"north indian meal",
        cuisine:"Indore Zayka,North Indian",
        location:"Rajiv Gandhi IT expy",
        imgurl:"image/North_Indian_4.jpg",
        rating:"3.5",
        preparation:71,
        amount:560,
        units:"for two",
        pureveg:"yes"

    },
     //{
    //     id:13,
    //     name:"sweets",
    //     cuisine:"A2B - Adyar Ananda Bhavan,",
    //     location:"Egattur",
    //     imgurl:"image/sweets.jpg",
    //     rating:"4.1",
    //     preparation:61,
    //     amount:500,
    //     units:"for two",
    //     pureveg:"yes"

    // },
    {
        id:14,
        name:"sallet",
        cuisine:"Shri Anandhaas Veg ,",
        location:"Chennai",
        imgurl:"image/Pure_veg.jpg",
        rating:"2.2",
        preparation:41,
        amount:270,
        units:"for two",
        pureveg:"yes"

    },  
    {
        id:15,
        name:"shawerma",
        cuisine:"Tea Break,Bakery",
        location:"Sholinganallur",
        imgurl:"image/sing wrabb.jpg",
        rating:"2.2",
        preparation:41,
        amount:320,
        units:"for two",
        pureveg:"no"

    },
    {
        id:16,
        name:"south Indian thali",
        cuisine:"Indore Zayka,North Indian",
        location:"Rajiv Gandhi IT expy",
        imgurl:"image/South Indian.jpg",
        rating:"3.1",
        preparation:31,
        amount:560,
        units:"for two",
        pureveg:"yes"

    },

    {
        id:17,
        name:"biriyani",
        cuisine:"Ambur Royal Biriyani,",
        location:"Rajiv Gandhi Salai",
        imgurl:"image/the bvk.jpg",
        rating:"4.2",
        preparation:41,
        amount:550,
        units:"for two",
        pureveg:"no"

    },
    
];

var cards=document.getElementById("swiggy-cards");
//console.log(cards);
itemReader(swiggy);
function itemReader(input){
    input.forEach(function(e){
        console.log(e);


        let div=document.createElement("div");
        div.classList.add("col");
        cards.appendChild(div);

        let div2=document.createElement("div");
        div2.classList.add("col-card");
        cards.appendChild(div2);

        let img=document.createElement("img");
        img.src=e.imgurl
        div2.appendChild(img);

        let head=document.createElement("h4");
        head.innerHTML=e.name
        div2.appendChild(head);


        let para=document.createElement("p");
        para.innerHTML=e.cuisine
        div2.appendChild(para);


        let para2=document.createElement("p");
        para2.innerHTML=e.location
        div2.appendChild(para2);

        let innerDiv=document.createElement("div");
        innerDiv.classList.add("inner-row");
        div2.appendChild(innerDiv);

        let iconDiv=document.createElement("div");
        iconDiv.classList.add("icon-Div");
        innerDiv.appendChild(iconDiv);

        let icon=document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add("fa-star");
        iconDiv.appendChild(icon);

        let atag=document.createElement("p");
        atag.innerHTML=e.rating;
        iconDiv.appendChild(atag);

         let amo=document.createElement("p");
         amo.classList.add("amount1");
         div2.appendChild(amo);
         amo.innerHTML="Rs "+e.amount


    rating()

    function rating(){
        if(e.rating>=4.0){
            icon.classList.add("icon-div-green");
        }

        else if(e.rating>=2.5 && e.rating<=3.9){
            icon.classList.add("icon-div-orange");
        }
        else if(e.rating<=2.5){
            icon.classList.add("icon-div-red");
        }
    }

    })


}

function sortRatings(){
    let colsRemove=document.querySelectorAll(".col-card");
    colsRemove.forEach(function(e){
        e.remove()
    })
    let sortRatingcards=swiggy.slice().sort(function(a,b){
        return b.rating-a.rating 
    })
  // console.log(sortRatingcards);
    itemReader(sortRatingcards);
}



function amount300(){
    let rupees=swiggy.filter(function(e){
        return e.amount>=300
    })
    let colsRemove=document.querySelectorAll(".col-card");
    colsRemove.forEach(function(e){
        e.remove()
    })
 itemReader(rupees)
}


function pureveg(){
    let veg=swiggy.filter(function(e){
        return e.pureveg=="yes"
    })
    let colsRemove=document.querySelectorAll(".col-card");
    colsRemove.forEach(function(e){
        e.remove()
    })
 itemReader(veg)
}


function offers(){
    let offers=swiggy.slice().sort(function(a,b){
        return a.preparation-b.preparation
    })
    let colsRemove=document.querySelectorAll(".col-card");
    colsRemove.forEach(function(e){
        e.remove()
    })
 itemReader(offers)
}

function lessthan300(){
    let less=swiggy.filter(function(e){
        return  e.amount<=300
    })
    let colsRemove=document.querySelectorAll(".col-card");
    colsRemove.forEach(function(e){
        e.remove()
    })
 itemReader(less)
}


function filtering(){
    let filter=swiggy.filter(function(e){
        return e
    })
    let colsRemove=document.querySelectorAll(".col-card");
    colsRemove.forEach(function(e){
        e.remove()
    })
    itemReader(filter)
}



