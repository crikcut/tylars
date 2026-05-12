(function () {
  var stage = document.querySelector('.stage');
  if (!stage) return;
  function fit() {
    var sw = 1600, sh = 1000;
    var scale = Math.min(window.innerWidth / sw, window.innerHeight / sh);
    stage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  }
  fit();
  window.addEventListener('resize', fit);
})();
