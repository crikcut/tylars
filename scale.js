(function () {
  var stage = document.querySelector('.stage');
  if (!stage) return;
  function fit() {
    if (window.innerWidth <= 768) {
      stage.style.transform = '';
      return;
    }
    var sw = 1600, sh = 1000;
    var scale = Math.min(window.innerWidth / sw, window.innerHeight / sh);
    stage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  }
  fit();
  window.addEventListener('resize', fit);
})();

(function () {
  var e = 'hello' + '@' + 'tylars.com';
  var link = document.getElementById('email-link');
  var display = document.getElementById('email-display');
  if (link) link.href = 'mailto:' + e;
  if (display) display.textContent = e;
  var linkM = document.getElementById('email-link-mobile');
  var displayM = document.getElementById('email-display-mobile');
  if (linkM) linkM.href = 'mailto:' + e;
  if (displayM) displayM.textContent = e;
})();
