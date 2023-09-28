/**
 * Checks if a font is available to be used on a web page.
 *
 * @param {String} fontName The name of the font to check
 * @param {Function} callback A function to handle the boolean result of the font availability check
 * @license MIT
 * @copyright Sam Clarke 2013
 * @author Sam Clarke <sam@samclarke.com>
 * @url https://www.samclarke.com/javascript-is-font-available/
 * 
 * Modified on 02/2023 to execute the font availability check asynchronously 
 * using requestIdleCallback, and to invoke the callback function with the boolean result of the check.
 */
 
((document) => {
  let width;
  const body = document.body;

  const container = document.createElement('span');
  container.innerHTML = 'wi'.repeat(100);
  container.style.cssText = `
    position:absolute;
    width:auto;
    font-size:128px;
    left:-99999px;
  `;

  const getWidth = (fontFamily) => {
    container.style.fontFamily = fontFamily;

    body.appendChild(container);
    width = container.clientWidth;
    body.removeChild(container);

    return width;
  };

  // Pre compute the widths of monospace, serif & sans-serif
  // to improve performance.
  const monoWidth = getWidth('monospace');
  const serifWidth = getWidth('serif');
  const sansWidth = getWidth('sans-serif');
  
  window.isFontAvailable = (font, callback) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        const available =
          monoWidth !== getWidth(`${font},monospace`) ||
          sansWidth !== getWidth(`${font},sans-serif`) ||
          serifWidth !== getWidth(`${font},serif`);
        callback(available);
      });
    } else {
      // Fallback to setTimeout for Safari
      setTimeout(() => {
        const available =
          monoWidth !== getWidth(`${font},monospace`) ||
          sansWidth !== getWidth(`${font},sans-serif`) ||
          serifWidth !== getWidth(`${font},serif`);
        callback(available);
      }, 0);
    }
  };
})(document);


// ----- FONT STACKS ----- //
const fonts = document.querySelector('#fonts');
const previewText = document.querySelector('#preview-text');
const fontWeightRange = document.querySelector('#fontweight');
const fontWeightOutput = document.querySelector('#weightoutput');
const fontWeights = document.querySelectorAll('.font-weights span');
const systemFont = document.querySelectorAll('.font-stack span');
const systemFontWeight = document.querySelectorAll('.font-stack var');
const fontCard = document.querySelectorAll('.font-card');

const changeSize = (newVal) => {
  fonts.style.fontSize = `${newVal}em`;
};

const changeWeight = (newVal) => {
  fonts.style.fontWeight = newVal;
  fonts.setAttribute('data-weight', newVal);
  systemFontWeight.forEach(element => {
    if (newVal === '400'){
      element.innerText = 'normal';
    } else if (newVal === '700') {
      element.innerText = 'bold';
    } else {
      element.innerText = newVal;
    }
  });
};

Array.from(fontWeights).forEach(e => {
  e.addEventListener('click', () => {
    const fontWeightValue = e.innerText;
    fonts.style.fontWeight = fontWeightValue;
    fonts.setAttribute('data-weight', fontWeightValue);
    fontWeightRange.value = fontWeightValue;
    systemFontWeight.forEach(element => {
      if (fontWeightValue === '400'){
        element.innerText = 'normal';
      } else if (fontWeightValue === '700') {
        element.innerText = 'bold';
      } else {
        element.innerText = fontWeightValue;
      }
    });
  });
});

const updateText = (newVal) => {
  const elements = document.querySelectorAll('.font-preview');
  Array.from(elements).forEach((el) => {
    el.innerText = newVal;
  });
};

const enterToBlur = (el) => {
  if (event.key === 'Enter'){
    el.blur();
  }
};

// add event listeners
const fontSizeInput = document.getElementById('fontsize');
fontSizeInput.addEventListener('input', (event) => {
  const newVal = event.target.value;
  document.querySelector('#sizeoutput').innerText = newVal;
  changeSize(newVal);
});
fontSizeInput.addEventListener('change', (event) => {
  const newVal = event.target.value;
  changeSize(newVal);
});

const fontWeightInput = document.getElementById('fontweight');
fontWeightInput.addEventListener('input', (event) => {
  const newVal = event.target.value;
  document.querySelector('#weightoutput').innerText = newVal;
  changeWeight(newVal);
});
fontWeightInput.addEventListener('change', (event) => {
  const newVal = event.target.value;
  changeWeight(newVal);
});

const previewTextInput = document.getElementById('preview-text');
previewTextInput.addEventListener('input', (event) => {
  const newVal = event.target.value;
  updateText(newVal);
});
previewTextInput.addEventListener('change', (event) => {
  const newVal = event.target.value;
  updateText(newVal);
});
previewTextInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.target.blur();
  }
});

Array.from(systemFont).forEach((el) => {
  const font = el.innerText;
  isFontAvailable(font, (available) => {
    if (available) {
      el.classList.add('yep');
    } else {
      el.classList.add('nope');
    }
  });
});


// ----- PREVIEW ----- //
const preview = document.querySelector('#preview');
const previewMenu = document.querySelector('#preview details');
const previewButtons = document.querySelectorAll('#preview button');
const urlParams = new URLSearchParams(window.location.search);
const stackParam = urlParams.get('stack');

const stacksAvail = Array.from(previewButtons, el => el.className);

// If has proper URL param
if (stacksAvail.includes(stackParam)) {
  preview.className = '';
  preview.classList.add(stackParam);
  previewButtons.forEach(el => {
     el.dataset.on = false;
  });
  document.querySelector(`#preview .${CSS.escape(stackParam)}`).dataset.on = true;
  document.querySelector(`#${CSS.escape(stackParam)}`).scrollIntoView();
  document.querySelector(`#${CSS.escape(stackParam)}`).classList.add('highlight');
  
  document.addEventListener('click', e => {
    fontCard.forEach(el => {
       el.classList.remove('highlight');
    });
  }, { once: true });
}

// Font stack buttons
previewButtons.forEach(e => {
  e.addEventListener('click', function(){
    preview.className = '';
    preview.classList.add(this.className);
    previewMenu.removeAttribute("open");
    previewButtons.forEach(el => {
       el.dataset.on = false;
    });
    this.dataset.on = true;
    // urlParams.set('stack', this.className);
    // window.history.replaceState(null, null, '?' + urlParams + '#preview');
    // window.history.replaceState({}, document.title, location.protocol + '//' + location.host + location.pathname);
  });
});


// ----- MENU ACTIONS ----- //
const menu = document.querySelector('#menu details');
const menuLinks = document.querySelectorAll('#menu nav a');

menuLinks.forEach(e => {
  e.addEventListener('click', () => {
    menu.removeAttribute("open");
  });
});

document.addEventListener('click', event => {
  const isClickInside = menu.contains(event.target);
  if (!isClickInside) {
    menu.removeAttribute("open");
  }
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    window.history.replaceState(null, null, anchor.getAttribute('href'));
  });
});