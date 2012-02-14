/* By Arjan Eising, 2012. Licence: MIT. See <https://github.com/arjaneising/TypeSequence> */
;(function(window) {
  if (typeof window.typesequence != 'undefined') return;


  function typesequence(settings) {
    var elm = settings.elm || window,
        once = settings.once || false,
        callback = settings.callback || false,
        sequence = settings.sequence || [],
        executed = false,
        codedSequence = [],
        goingWell = 0;

    if (sequence.length === 0 || !callback) return;


    if (elm.addEventListener) {
      elm.addEventListener('keydown', testForSequence, false);
    }
    else if (window.attachEvent) {
      elm.attachEvent('onkeydown', testForSequence);
    }


    for (var i = 0, l = sequence.length, key, codedKey = null; i < l; ++i) {
      key = sequence[i];
      if (cache[key]) {
        codedKey = cache[key];
      }
      else {
        if (typeof key == 'number') codedKey = key;
        else if (/^[0-9]$/.test(key)) codedKey = parseInt(key, 10) + 48;
        else if (/^F[0-9]{1,2}$/.test(key)) codedKey = parseInt(key.substring(1), 10) + 111;
        else if (/^[a-zA-Z]$/.test(key)) codedKey = parseInt(key, 36) + 55;
        else if (keycodes[key]) codedKey = keycodes[key];
        if (!codedKey) continue;
        cache[key] = codedKey;
      }
      
      if (codedKey) {
        codedSequence.push(codedKey);
        codedKey = null;
      }
    }
    
    if (settings.enter) {
      codedSequence.push(13);
    }


    function testForSequence(e) {
      if (settings.once && executed) {
        return;
      }

      var which = e.which || window.event.keyCode;
      
      if (which == codedSequence[goingWell]) {
        ++goingWell;
      }
      else {
        goingWell = 0;
      }
      
      if (goingWell == codedSequence.length) {
        goingWell = 0;
        
        if (settings.once == 'depends') {
          executed = callback(elm);
        }
        else {
          executed = true;
          callback(elm);
        }
      }
    }
  }


  var cache = {},
      keycodes = {
        'BACKSPACE': 8,
        'TAB': 9,
        'ENTER': 13,
        '↵': 13,
        'SHIFT': 16,
        '⇧': 16,
        'CONTROL': 17,
        'ALT': 18,
        'CAPSLOCK': 20,
        'ESC': 27,
        'SPACE': 32,
        ' ': 32,
        'PAGEUP': 33,
        'PAGEDOWN': 34,
        'END': 35,
        'HOME': 36,
        'LEFT': 37,
        '←': 37,
        '⇐': 37,
        'UP': 38,
        '↑': 38,
        '⇑': 38,
        'RIGHT': 39,
        '→': 39,
        '⇒': 39,
        'DOWN': 40,
        '↓': 40,
        '⇓': 40,
        'INSERT': 45,
        'DELETE': 46,
        'DEL': 46,
        'NUMLOCK': 144
      };
  

  window.typesequence = typesequence;
})(window);