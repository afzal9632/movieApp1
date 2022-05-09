// let userdata = JSON.parse(localStorage.getItem("userCreds")) || [];

// function data(e, p, n, nu) {
//   this.email = e;
//   this.password = p;
//   this.name = n;
//   this.contact = nu;
// }

// function signupfunc(e) {
//   e.preventdefault();

//   let form = document.getElementById("signup");

//   let email = form.email.value;
//   let password = form.password.value;
//   let name = form.name.value;
//   let contact = form.contact.value;

//   let user = new data(email, password, name, contact);
//   userdata.push(user);
//   localStorage.setItem("userCreds", JSON.stringify(userdata));
// }

let singdata = JSON.parse(localStorage.getItem("userCreds")) || [];

function data(e, p, n, c) {
  this.email = e;
  this.password = p;
  this.name = n;
  this.contact = c;
}

function signupfun(e) {
  e.preventDefault();

  let form = document.getElementById("sin");

  let email = form.email.value;
  let password = form.password.value;
  let name = form.name.value;
  let contact = form.contact.value;

  let p1 = new data(email, password, name, contact);

  singdata.push(p1);
  ///console.log(singdata)

  localStorage.setItem("userCreds", JSON.stringify(singdata));
}
