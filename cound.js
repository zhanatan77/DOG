// GET — получение ресурса
// POST — создание ресурса
// PUT — обновление ресурса
// DELETE — удаление ресурса

// Информационные 100 - 199
// Успешные 200 - 299
// Перенаправления 300 - 399
// Клиентские ошибки 400 - 499
// Серверные ошибки 500 - 599

// Promise абалы:
// pending - ожидание
//resolve - успешно

// rejected - выполнение с ошибкой
// const htths = 200
// const promise - new Promise((resoleve, reject ) => {
// console.log("pending...")
// if (https >= 200 && https < 300) {
//     resolve({name:"Bod", id:2})
// }
// })

//
// const row = document.querySelector(".row")
//
// fetch(`https://jsonplaceholder.typicode.com/com`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         data.map((el) => {
//             row.innerHTML += `<div class="col-4">
//  <h1>${el.name}</h1>
//  <h3>${el.username}</h3>
//  </div>`
//         })
//     })
//



const row = document.querySelector(".row")

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=> res.json()).then((data)=>{
    console.log(data)
    data.map((el)=>{
        row.innerHTML += `<div class="col-4 border bortder-primary d-flex align-items-center justify-content-center flex-column">
<img src="./img/user.jfif"  width="300px" alt="img">
 <h1 class="text-danger">${el.username}</h1>
 <h3 class="text-info">${el.username}</h3>
 <h5>${el.address.city}</h5>
 <a href="tel:${el.phone}">${el.phone}</a>
 <p>${el.email}</p>
 <ul>
      <li>Address</li>
      <ul>
          <li> ${el.address.city} </li>
          <li> ${el.address.city} </li>
          <li> ${el.address.city} </li>
          <li> ${el.address.city} </li>
          </ul>
</ul>
 </div>`
    })
})


