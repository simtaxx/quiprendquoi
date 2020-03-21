function notifyNewElement(message) {
  if (("Notification" in window)) {
    if (Notification.permission === "granted") {
      var notification = new Notification(message)
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
  
        if(!('permission' in Notification)) {
          Notification.permission = permission
        }
      })
    }
  }
}
(function() {
  let elementCount = 0
  let idPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  setInterval(() => {
    fetch(`http://bastiencalou.fr:3000/party/${idPage}`)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(elementCount)
      if (elementCount === 0) {
        elementCount = data.items.length
      } else if (elementCount < data.items.length) {
        notifyNewElement("Un nouvel élément a été ajouté")
        window.location.reload()
      } else if (elementCount > data.items.length) {
        notifyNewElement("Un élément a été supprimé")
        window.location.reload()
      }
    })
  }, 5000)
})()
