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


// ----- FONT STACKS ----- //

var fonts = document.querySelector('#fonts');
var previewText = document.querySelector('#preview-text');
var fontWeightRange = document.querySelector('#fontweight');
var fontWeightOutput = document.querySelector('#weightoutput');
var fontWeights = document.querySelectorAll('.font-weights span');
var systemfont = document.querySelectorAll('.font-stack span');
var fontCard = document.querySelectorAll('.font-card');

function changeSize(newVal){
  fonts.style.fontSize = newVal + 'em';
}

function changeWeight(newVal){
  fonts.style.fontWeight = newVal;
  fonts.setAttribute('data-weight', newVal);
}

[].forEach.call(fontWeights, function(e){
  e.addEventListener('click', function(){
    fonts.style.fontWeight = e.innerText;
    fonts.setAttribute('data-weight', e.innerText);
    fontWeightRange.value = e.innerText;
    fontWeightOutput.innerText = e.innerText;
  }, false);
});

function updateText(newVal){
  var elements = document.querySelectorAll('.font-preview');
    Array.prototype.forEach.call(elements, function(el, i){
      el = el.innerText = newVal;
    });
}

function enterToBlur(el){
  if (event.key == 'Enter'){
    el.blur();
  }
};

systemfont.forEach(function(el) {
  var font = el.innerText;
  if (isFontAvailable(font)) {
    el.classList.add('yep');
  } else {
    el.classList.add('nope');
  }
});


// ----- PREVIEW ----- //

var preview = document.querySelector('#preview');
var previewMenu = document.querySelector('#preview details');
var previewButtons = document.querySelectorAll('#preview button');
var urlParams = new URLSearchParams(window.location.search);
var stackParam = urlParams.get('stack');

var stacksAvail = Array.prototype.map.call(previewButtons, function(el) {
    return el.className;
});

// If has proper URL param
if (stacksAvail.includes(stackParam)) {
  preview.className = '';
  preview.classList.add(stackParam);
  [].forEach.call(previewButtons, function(el) {
     el.dataset.on = false;
  });
  document.querySelector(`#preview .${CSS.escape(stackParam)}`).dataset.on = true;
  document.querySelector(`#${CSS.escape(stackParam)}`).scrollIntoView();
  document.querySelector(`#${CSS.escape(stackParam)}`).classList.add('highlight');
  
  document.addEventListener('click', function(e) {
    [].forEach.call(fontCard, function(el) {
       el.classList.remove('highlight');
    });
  }, { once: true });
}

// Font stack buttons
[].forEach.call(previewButtons, function(e){
    e.addEventListener('click', function(){
      preview.className = '';
      preview.classList.add(this.className);
      previewMenu.removeAttribute("open");
      [].forEach.call(previewButtons, function(el) {
         el.dataset.on = false;
      });
      this.dataset.on = true;
      // urlParams.set('stack', this.className);
      // window.history.replaceState(null, null, '?' + urlParams + '#preview');
      // window.history.replaceState({}, document.title, location.protocol + '//' + location.host + location.pathname);
      }, false);
    }
);


// ----- MENU ACTIONS ----- //

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
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        window.history.replaceState(null, null, this.getAttribute('href'));
    });
});
