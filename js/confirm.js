pageLoad = getParameter("id")

function getParameter ( name ) {
  let parameter = new URLSearchParams (window.location.search);
  return parameter.get( name );
}

let carCheckoutid = pageLoad;
document.getElementById("next-page").href = "done.html?id="+carCheckoutid;


fetch("/assets/data/cars.json")
  .then(res => res.json())
  .then(data => {
    for(let i = 0; i < data.length; i++) {
      let obj = data[i];
      if (obj.id==pageLoad) {
        let srcLocation = "/assets/cars/"+obj.id+"/";
        console.log(srcLocation)
        let srcLocation1 = srcLocation+"01.jpg";
        document.getElementById("img1").src=srcLocation1;
        let srcLocation2 = srcLocation+"02.jpg";
        document.getElementById("img2").src=srcLocation2;
        let srcLocation3 = srcLocation+"03.jpg";
        document.getElementById("img3").src=srcLocation3;
        let srcLocation4 = srcLocation+"04.jpg";
        document.getElementById("img4").src=srcLocation4;
        let carNamei=obj.name;
        document.getElementById("car-name-i").innerHTML = "Name: "+carNamei;
        let carPricei=obj.price;
        document.getElementById("car-price-i").innerHTML = "Price: $"+carPricei.toLocaleString();
      }
    }
})
