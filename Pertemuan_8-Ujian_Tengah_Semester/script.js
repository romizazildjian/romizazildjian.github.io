// CARA PENGAMBILAN 1

const konten1 = document.getElementById("aaa");
const konten2 = document.getElementById("bbb");
const konten3 = document.getElementById("ccc");
const konten4 = document.getElementById("ddd");


$(document).ready(function(){
    // e.preventDefault(); 
    fetch('./stats.json')
    .then(res => res.json())
    .then (res =>{
        konten1.innerHTML = `${res.name}`;
        konten2.innerHTML = `${res.numbers.recovered}`;
        konten3.innerHTML = `${res.numbers.infected}`;
        konten4.innerHTML = `${res.numbers.fatal}`;
        // console.log(res)
    })
})

// CARA PENGAMBILAN 2 (TRIAL)

// const loadDataCovid = async () => {
//     const res = await fetch('https://dekontaminasi.com/api/id/covid19/stats');
//     const data = await res.json();
//     console.log(data)
// }

// loadDataCovid()
