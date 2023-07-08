const breed = document.querySelector(".breed")
const breedimg = document.querySelector(".breed-img")
const select = document.querySelector(".select")
let searchBtn = document.querySelector('btn-search')
function getAll()  {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => {
                breed.innerHTML += `<button class="btn-breed btn btn-warning m-1">${el}</button>`
                select.innerHTML += `<option value="${el}"> ${el}</option>`
            })
        })
        .then(() => btn())
}
getAll()
function btn(){
    const breedBtn = document.querySelectorAll(".btn-breed")
    breedBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            getImg(btn.innerHTML)
        })
    })
}
function getImg(name) {
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((result) => {
            // console.log(result)/
            breedimg.innerHTML = `<img style="object-fit: contain" src="${result.data.message}" width="400" height="200" alt="img">`
        })
}
getImg()
select.addEventListener("change",(e)=>{
    getImg(e.target.value)
})
searchBtn.addEventListener("click", () => { // ошибка  <---------
    const buttons = document.querySelectorAll(".btn-breed")
    buttons.forEach((btn) => {
        if (input.value === btn.innerHTML) {
            getImg(input.value)
        } else {
            btn.remove()
        }
    })
})
