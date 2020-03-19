if(navigator.share) {
  console.log("work share")
  document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Partager';
    $shareEl.parentNode.append($button);
    $button.addEventListener(
      'click',
      shareInfo.bind(this, $shareEl, $button)
    );
  });
} else {
  console.log("share doesnt work")
}

function shareInfo($shareEl) {
  navigator
  .share({
    url: $shareEl.getAttribute('data-share-url'),
    title: $shareEl.getAttribute('data-share-title'),
    text: `${$shareEl.getAttribute('data-share-text')} vous invite à rejoindre un évènement`
  })
}