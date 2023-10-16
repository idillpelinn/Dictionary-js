
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.getElementById("sound");
const search_btn = document.getElementById("search");

search_btn.addEventListener("click", ()=>{

    let input_word = document.getElementById("input-word").value;
    fetch(`${url}${input_word}`)
    .then((response)=> response.json)
    .then((data) =>console.log(data))


})

