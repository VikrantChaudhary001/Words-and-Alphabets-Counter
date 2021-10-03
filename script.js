const textArea = document.getElementById("content");
const charactersCount = document.getElementById("cCount");
const wordsCount = document.getElementById("wCount");


textArea.oninput = function(){
    let characters = textArea.value.replace(/\s/g, '').length;
    charactersCount.textContent = characters;

    let words = textArea.value.split(" ").filter(function(item){
         return item != '';
      });

  wordsCount.textContent =   words.length;
};

 