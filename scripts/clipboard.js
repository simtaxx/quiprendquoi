if (navigator.clipboard) {
  document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Copier';
    $clipboardEl.parentNode.append($button);
    $button.addEventListener(
      'click',
      copyToClipboard.bind(this, $clipboardEl, $button)
    );
  });
}

function copyToClipboard($clipboardEl, $button) {
  const idPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  navigator.clipboard
  .writeText($clipboardEl.getAttribute('data-clipboard')+ idPage)
  .then(() => {
    $button.innerHTML = 'Copié !';
    setTimeout(() => ($button.innerHTML = 'Copier'), 2000);
  })
  .catch((err) => console.warn(err))
}