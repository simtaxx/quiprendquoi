const urlInput = document.getElementById("url")
const idPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
urlInput.value = `https://quiprendquoii.herokuapp.com/party/${idPage}`