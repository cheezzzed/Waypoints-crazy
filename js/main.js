

var waypoint = new Waypoint({
    element: document.querySelector('.row'),
    handler: function() {
        let popUp = document.querySelector('.notify')
        popUp.classList.add('slide')
    },
    offset: -30
  })