const row = document.querySelector(".row")
const btn = document.querySelector(".btn-search")
const input = document.querySelector(".search")
const select1 = document.querySelector(".select1")
const pop = document.querySelector(".select")

let all = null

function getApi(API) {
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) => {
            all = res.data
            getFlags(res.data)
            console.log(res.data)
        })
}
getApi(`all`)

function getFlags(ars) {
    row.innerHTML = ""
    ars.slice(0,20).map((el) => (
        row.innerHTML += `<div class="card bg-primary col-4 my-2 border border-none" style="width: 18rem" >
<img class="card-img-top" src="${el.flags.svg}" alt="bg"  width="400" height="200px">
<h4>${el.name.common}</h4>
<h4>столица: ${el.capital ? el.capital : "no"}  </h4>
<h4>площадь: ${el.area}<span class="text-danger">km2</span></h4>
<h4>Население: ${el.population}</h4>
<h4>Континенты: ${el.continents}</h4>
</div>`
    ))
}
btn.addEventListener("click", ()  => {
    getApi(`name/${input.value}`)
})

input.addEventListener("input", (e) => {
    getApi(`name/${e.target.value}`)
})

// axios(`https://restcountries.com/v3.1/${API}`)

select1.addEventListener("change", (e)=>{
    let target = e.target.value
    if (target === "asia"){
        const res = all.filter((el)=>{
            return el.region === "Asia"
        })
        getFlags(res)
    }else if (target === "europe"){
        const res = all.filter((el)=>{
            return el.region === "Europe"
        })
        getFlags(res)
    }else if (target === "africa"){
        const res = all.filter((el)=>{
            return el.region === "Africa"
        })
        getFlags(res)
    }
    else if (target === "americas"){
        const res = all.filter((el)=>{
            return el.region === "Americas"
        })
        getFlags(res)
    } else if (target === "oceania"){
        const res = all.filter((el)=>{
            return el.region === "Oceania"
        })
        getFlags(res)
    }
})
pop.addEventListener("change", (e) => {
    let target = e.target.value
    if (target === "area") {
        const res = all.sort((a, b) => {
            return b.area - a.area
        })
    getFlags(res)
  }
})
pop.addEventListener("click", (e) => {
    let target = e.target.value
    if (target === "population") {
        const res = all.sort((a,b) => {
            return b.population - a.population
        })
        getFlags(res)
    } else if (target === "A-Z"){
        const res = all.sort((a,b) => {
            return a.name.common > b.name.common ? 1 : -1
        })
        getFlags(res)
    }  else if (target === "Z-A"){
        const res = all.sort((a,b) => {
            return a.name.common > b.name.common ? -1 : 1
        })
        getFlags(res)
    }
})

// let str = "     motion        "
// console.log(str.trim())
// console.log(str.trimEnd())
// console.log(str.trimStart())
// console.log(str.trimLeft())
// console.log(str.trimRight())
