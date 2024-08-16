// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let userNames = await response.json();
//   var div = document.getElementById("navbarNav");
//   userNames.forEach((element) => {
//     // console.log(element.name);
//     div.innerHTML += ` <button class="nav-link user-btn">${element.name}</button>`;
//   });
// }
// getUsers();
function getUsers() {
  let response = fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(response);
  let dataPromise = response.then((res) => res.json());
  //   console.log(dataPromise);
  dataPromise
    .then((userNames) => {
      // console.log(userNames);
      userNames.forEach((element) => {
        let div = document.getElementById("navbarNav");
        let btn = document.createElement("button");
        btn.innerText = element.name;
        btn.classList = "nav-link user-btn";
        div.appendChild(btn);
        btn.addEventListener("click", function () {
          getPosts(element.id);
          let oldClicked = document.getElementsByClassName("clicked")[0];
          btn.classList.add("clicked");
          oldClicked.classList.remove("clicked");
        });
      });
      getPosts(userNames[0].id);
    })
    .catch((e) => console.log(e, "Users Not Found"));
}
getUsers();

async function getPosts(userId) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  let userPosts = await response.json();
  let div = document.getElementsByClassName("container")[0];
  div.innerHTML = "";
  userPosts.forEach((element) => {
    div.innerHTML += `<div class="comment-block"><p class="commentParagraph">${element.title}</p></div>`;
  });
}
var p = new Promise(resolve,reject){
    resolve(res);
    reject("error");
}
p.then(re)