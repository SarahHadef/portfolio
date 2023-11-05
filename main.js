function showCard(cardImage) {
    var card = cardImage.parentNode;
    var cardContent = card.querySelector('.card-content');
    cardContent.style.display = "block";
  }
  
  function hideCard(cardImage) {
    var card = cardImage.parentNode;
    var cardContent = card.querySelector('.card-content');
    cardContent.style.display = "none";
  }

  var typed = new Typed('.multiText', {
    strings: ['Coding;','Designer;',' Programmer;'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });
