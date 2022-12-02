pageLoad = getParameter("id")
console.log(pageLoad)

function getParameter ( name ) {
  let parameter = new URLSearchParams (window.location.search);
  return parameter.get( name );
}

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
        let carName = obj.name;
        document.getElementById("car-title").innerHTML = carName;
        let carDesc = obj.description;
        document.getElementById("car-desc").innerHTML = carDesc;
        let carPrice = obj.price;
        document.getElementById("car-price").innerHTML = "$"+carPrice.toLocaleString();
        
        let carNamei=obj.name;
        document.getElementById("car-name-i").innerHTML = "Name: "+carNamei;
        let carPricei=obj.price;
        document.getElementById("car-price-i").innerHTML = "Price: $"+carPricei.toLocaleString();
        let carMileagei = obj.mileage;
        document.getElementById("car-mileage-i").innerHTML = "Mileage: "+carMileagei.toLocaleString()+" Miles";
        carExteriori = obj.color;
        document.getElementById("car-exterior-i").innerHTML = "Exterior Color: "+carExteriori;
        carInteriori = obj.interior;
        document.getElementById("car-interior-i").innerHTML = "Interior Color: "+carInteriori;
        let carEnginei = obj.engine;
        document.getElementById("car-engine-i").innerHTML = "Engine: "+carEnginei;
        let carTransmissioni = obj.transmission;
        document.getElementById("car-transmission-i").innerHTML = "Transmission: "+carTransmissioni;
        let carDrivei = obj.drive;
        document.getElementById("car-drive-i").innerHTML = "Drive Type: "+carDrivei;
        let carCityMi = obj.mpg1;
        document.getElementById("car-mpg1-i").innerHTML = "City Miles per Gallon: "+carCityMi;
        let carHighMi = obj.mpg2;
        document.getElementById("car-mpg2-i").innerHTML = "Highway Miles per Gallon: "+carHighMi;

        let carCheckoutid = obj.id;
        document.getElementById("checkout").href = "information.html?id="+carCheckoutid;
      }
    }
})
