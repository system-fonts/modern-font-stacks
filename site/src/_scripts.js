/**
 * Checks if a font is available to be used on a web page.
 *
 * @param {String} fontName The name of the font to check
 * @return {Boolean}
 * @license MIT
 * @copyright Sam Clarke 2013
 * @author Sam Clarke <sam@samclarke.com>
 * @url https://www.samclarke.com/javascript-is-font-available/
 */
(function (document) {
  var width;
  var body = document.body;

  var container = document.createElement('span');
  container.innerHTML = Array(100).join('wi');
  container.style.cssText = [
    'position:absolute',
    'width:auto',
    'font-size:128px',
    'left:-99999px'
  ].join(' !important;');

  var getWidth = function (fontFamily) {
    container.style.fontFamily = fontFamily;

    body.appendChild(container);
    width = container.clientWidth;
    body.removeChild(container);

    return width;
  };

  // Pre compute the widths of monospace, serif & sans-serif
  // to improve performance.
  var monoWidth  = getWidth('monospace');
  var serifWidth = getWidth('serif');
  var sansWidth  = getWidth('sans-serif');

  window.isFontAvailable = function (font) {
    return monoWidth !== getWidth(font + ',monospace') ||
      sansWidth !== getWidth(font + ',sans-serif') ||
      serifWidth !== getWidth(font + ',serif');
  };
})(document);

var fonts = document.querySelector('#fonts');
var previewText = document.querySelector('#preview-text');
var systemfont = document.querySelectorAll('.font-stack span');

function changeSize(newVal){
  fonts.style.fontSize = newVal + 'em';
}

function changeWeight(newVal){
  fonts.style.fontWeight = newVal;
  fonts.setAttribute('data-weight', newVal);
}

function updateText(newVal){
  var elements = document.querySelectorAll('.font-preview');
    Array.prototype.forEach.call(elements, function(el, i){
      el = el.innerText = newVal;
    });
}

systemfont.forEach(function(el) {
  var font = el.innerText;
  if (isFontAvailable(font)) {
    el.classList.add('yep');
  } else {
    el.classList.add('nope');
  }
});

var article = document.querySelector('article');
var testDriveMenu = document.querySelector('#test-drive details');
var previewButtons = document.querySelectorAll('#test-drive button');

[].forEach.call(previewButtons, function(e){
    e.addEventListener('click', function(){
      article.className = '';
      article.classList.add(this.className);
      testDriveMenu.removeAttribute("open");
      [].forEach.call(previewButtons, function(el) {
         el.dataset.on = false;
      });
      this.dataset.on = true;
      }, false);
    }
);

var menu = document.querySelector('#menu details');
var menuLinks = document.querySelectorAll('#menu nav a');

[].forEach.call(menuLinks, function(e){
    e.addEventListener('click', function(){
      menu.removeAttribute("open");
      }, false);
    }
);

document.addEventListener('click', event => {
  const isClickInside = menu.contains(event.target);
  if (!isClickInside) {
    menu.removeAttribute("open");
  }
})
