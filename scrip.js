
/*------------------------------------*/
let productList=[];

const toggleModel =()=>{
    const basketmodelEl = document.querySelector(".basket-model");
    basketmodelEl.classList.toggle("active");
};

const getUrun = () =>{
    fetch("./products-list.json")
    .then(res => res.json())
    .then((products) => (productList = products)) ;
};

const createProductItemHtml = () => {
   const productListEl= document.querySelector(".product_List");
   let productListHtml ="";
   productList.forEach(product =>{
    productListHtml += `<section style="border: solid black; " class="product_List col-9">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${product.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${product.image}" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${product.image}" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>`;    

});

};
setTimeout(()=>{
    createProductItemHtml();
},100);