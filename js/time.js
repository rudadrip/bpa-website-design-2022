pageLoad = getParameter("id")

function getParameter ( name ) {
  let parameter = new URLSearchParams (window.location.search);
  return parameter.get( name );
}

let carCheckoutid = pageLoad;
document.getElementById("next-page").href = "confirm.html?id="+carCheckoutid;

