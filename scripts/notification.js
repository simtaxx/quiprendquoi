function notifyNewElement() {
  if (("Notification" in window)) {
    if (Notification.permission === "granted") {
      var notification = new Notification("Un nouvel élément a été ajouté")
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
        console.log("new element added")
        notifyNewElement()
        window.location.reload()
      } else if (elementCount > data.items.length) {
        console.log("element deleted")
        elementCount = data.items.length
      }
    })
  }, 5000)
})()
