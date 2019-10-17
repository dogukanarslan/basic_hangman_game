//Oyundaki kelimeleri tanımlar
var words = ['kırmızı', 'mavi', 'yeşil', 'sarı', 'turuncu', 'mor', 'kahverengi', 'siyah', 'gri', 'beyaz', 'pembe', 'lacivert',];

//Rastgele kelime seçer
var word = words[Math.floor(Math.random()*words.length)];

//Kelimenin kaç harfli olduğunu gösteren çizgileri oluşturur
var answerArray = [];
for (var i = 0; i < word.length; i++){
  answerArray[i] = " _ ";
}

//Kalan harf sayısını gösteren değişken tanımlar
var remainingLetters = word.length;

alert(remainingLetters + " harfli bir kelime");
//Tahmin edilecek harf kaldığında
while (remainingLetters > 0){
  alert(answerArray.join(""));
  //Kullanıcının tahmini
  var guess = prompt("Bir harf tahmin edin ya da çıkmak için 'iptal' butonuna tıklayın.");
  if (guess == null){
    //İptal durumu
    break;

  } else if(guess.length !== 1){
  //Birden fazla harf yazılması durumu
    alert("Lütfen tek harf girin");
  } else{
    //Tek hard girildiğinde kontroller
    for (var j = 0; j < word.length; j++){
      //Tahmin edilen harf kelimenin içindeyse olan durumlar
      if (word[j] === guess){
        //Tahmin edilen harfi answerArray içine yerleştirir
        answerArray[j] = guess;
        //Kalan harflerden bir çıkarır, kalan harf sıfır olduğunda oyun biter
        remainingLetters--;
      }
    }
  }
}

if (word == answerArray.join("")){
  alert("Tebrikler! Doğru cevap: " + word);
  alert("Tekrar oynamak için sayfayı yenileyin");
} else{
  alert("Oyundan çıktınız. Kelime: " + word);
  alert("Tekrar oynamak için sayfayı yenileyin");
}
