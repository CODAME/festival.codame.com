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