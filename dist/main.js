function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
  var startingY = window.pageYOffset
  var elementY = getElementY(element)

  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  var diff = targetY - startingY
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
// usage:
// doScrolling('#mytarget', 1000)

var _radialGradient = document.querySelector('.radial-gradient')
document.onmousemove = function(e){
  mouseXpercentage = Math.round(e.pageX / window.innerWidth * 100);
  mouseYpercentage = Math.round(e.pageY / window.innerHeight * 100);
  _radialGradient.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, transparent, rgba(39,34,123,.5))'
}

// anchor scroll links
var _anchors = document.querySelectorAll('a[href*="#"]')
for (var i = _anchors.length - 1; i >= 0; i--) {
  _anchors[i].onclick = function(e){
    var section = this.getAttribute('href')
    doScrolling(section, 1000)
    e.preventDefault()
    return false
  }  
}

var _header = document.querySelector('.header-container')
document.querySelector('.menu-open').onclick = function(){
  _header.classList.add('open')
}
document.querySelector('.menu-close').onclick = function(){
  _header.classList.remove('open')
}


// // set height of panel groups
// _panels = document.querySelectorAll('.panel')
// for (var i = _panels.length - 1; i >= 0; i--) {
//   var panelHeight = _panels[i].clientHeight
//   // _panels[i].style.height = panelHeight+'px'
// }