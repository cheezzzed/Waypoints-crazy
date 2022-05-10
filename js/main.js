

var waypoint = new Waypoint({
    element: document.getElementsByTagName('.row'),
    handler: function() {
        let popUp = document.querySelector('.notify')
      popUp.classList.add('slide')
    },
    offset: -30
  })