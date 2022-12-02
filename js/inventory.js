const carTemplate = document.querySelector("[data-car-card]")
const carContainer = document.querySelector("[data-car-cards-container]")
const searchInput = document.querySelector("[data-search]")

let cars = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  console.log(value)
  cars.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value)
    console.log(isVisible)
    user.element.classList.toggle("hide", !isVisible)
  })
})


function insertCars() {
  fetch("/bpa-website-design-2022/assets/data/cars.json")
  .then(res => res.json())
  .then(data => {
    cars = data.map(user => {
      const card = carTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector('[data-car-name]')
      const price = card.querySelector('[data-car-price]')
      const desc = card.querySelector('[data-car-body]')
      const picture = card.querySelector('[data-car-picture]')
      const view = card.querySelector('[data-car-href]')
      header.textContent = user.name
      price.textContent = "$"+user.price.toLocaleString()
      desc.textContent = user.description 
      picture.src = "/bpa-website-design-2022/assets/cars/"+user.id+"/01.jpg"
      view.href = "view.html?id="+user.id;
      carContainer.append(card)
      return { name: user.name, price: user.price, description: user.description, picture: user.picture, view: user.view, element: card }
      })
  })
}
