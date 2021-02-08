let quotes = ["“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.” — Michael Scott",
              "“I never thought I’d say this, but I think I ate too much bone marrow.” — Dwight Schrute",
              "“Everything I have I owe to this job…this stupid, wonderful, boring, amazing job.” — Jim Halpert",
              "“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.” — Michael Scott",
              "“Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised.” — Michael Scott",
              "“Fool me once, strike one. Fool me twice, strike three.” — Michael Scott",
              "“Stanley just drank OJ out of my mug and didn’t seem to realize that it wasn’t his hot coffee. So the question has to be asked, is there no limit to what he won’t notice?” — Jim Halpert",
              "“Only a life lived for others is a life worthwhile.” - Albert Einstein"];
let keyQuote;
let custom =[];
let ran = "True";

  for(let i = 0; i < localStorage.length; i++){
    keyQuote = "Quotes" + i;
    let value = localStorage.getItem(keyQuote);
    quotes.push(value);
  }

  function load(){
    if(ran ==="True"){
    for(let i = 0; i < localStorage.length; i++){
      keyQuote = "Quotes" + i;
      let value = localStorage.getItem(keyQuote);
      document.getElementById("list-Quotes").innerHTML += `${value} <br/>`;
      ran = "False";
    }
    }

  }



function loadQuote(){
  let randomNum = Math.floor((Math.random() * quotes.length) + 0);
  document.getElementById("quote-print").innerHTML = quotes[randomNum];
  console.log(randomNum);
}

function addQuote(){
  keyQuote = "Quotes" + localStorage.length;

  if(document.getElementById("yourQuote").value != ""){
  localStorage.setItem(keyQuote, document.getElementById("yourQuote").value);
  document.getElementById("yourQuote").value = "";
}
}
