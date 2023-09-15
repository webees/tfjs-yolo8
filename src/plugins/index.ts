import './vant'

window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  let lastTouchEnd = 0
  document.addEventListener(
    'touchend',
    function (event) {
      const now = new Date().getTime()
      if (now - lastTouchEnd <= 200) {
        event.preventDefault()
      }
      lastTouchEnd = now
    },
    false
  )
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}
