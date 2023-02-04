
const productDiv=document.getElementById("all-product");
// const productPrice=document.getElementById("product-price");
fetch("product.json")
.then(function(res){
    return res.json();
})
.then(function(data){
  
    for(let i=0;i<data.length;i++){
      productDiv.innerHTML +=`
      <div class="col-lg-4 py-5 g-2">
      <div class="single-product">
          <img src="${data[i].image}" alt="">
          <h5>$ <span id="product-price">${data[i].price}</span></h5>
          <h3>${data[i].name}</h3>
          <p>${data[i].text}.</p>
          <button>Add To Card</button>
      </div>
      `
    }
})
// fetch("product.json")
// .then(res=>res.json())
// .then(data=>console.log(data))
