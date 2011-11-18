/* By Arjan Eising, 2011. Licence: MIT. See <https://github.com/arjaneising/TypeSequence> */
;(function($) {
  $.fn.typesequence = function(options) {
    var defaults = {
          enter: false,
          sequence: [],
          callback: null
        },
        elms = $(this),
        codedSequence = [],
        goingWell = 0;
    
    
    $.extend(defaults, options);
    
    elms.keydown(testForSequence);
    
    
    for (var i = 0, l = defaults.sequence.length, key, codedKey = null; i < l; ++i) {
      key = defaults.sequence[i];
      if (typeof key == 'number') codedKey = key;
      else if (key.match(/[0-9]/)) codedKey = parseInt(key, 10) + 48;
      else if (key.match(/F[0-9]{1,2}/)) codedKey = parseInt(key.substring(1), 10) + 111;
      else if (key.match(/[a-zA-Z]/)) codedKey = parseInt(key, 36) + 55;
      else if (key == 'BACKSPACE') codedKey = 8;
      else if (key == 'TAB') codedKey = 9;
      else if (key == 'ENTER' || key == '↵') codedKey = 13;
      else if (key == 'SHIFT' || key == '⇧') codedKey = 16;
      else if (key == 'CONTROL') codedKey = 17;
      else if (key == 'ALT') codedKey = 18;
      else if (key == 'CAPSLOCK') codedKey = 20;
      else if (key == 'ESC') codedKey = 27;
      else if (key == 'SPACE' || key == ' ') codedKey = 32;
      else if (key == 'PAGEUP') codedKey = 33;
      else if (key == 'PAGEDOWN') codedKey = 34;
      else if (key == 'END') codedKey = 35;
      else if (key == 'HOME') codedKey = 36;
      else if (key == 'LEFT' || key == '←' || key == '⇐') codedKey = 37;
      else if (key == 'UP' || key == '↑' || key == '⇑') codedKey = 38;
      else if (key == 'RIGHT' || key == '→' || key == '⇒') codedKey = 39;
      else if (key == 'DOWN' || key == '↓' || key == '⇓') codedKey = 40;
      else if (key == 'INSERT') codedKey = 45;
      else if (key == 'DELETE' || key == 'DEL') codedKey = 46;
      else if (key == 'NUMLOCK') codedKey = 144;
      
      if (codedKey) {
        codedSequence.push(codedKey);
        codedKey = null;
      }
    }
    
    if (defaults.enter) {
      codedSequence.push(13);
    }
    
    
    function testForSequence(e) {
      if (e.which == codedSequence[goingWell]) {
        ++goingWell;
      }
      else {
        goingWell = 0;
      }
      
      if (goingWell == codedSequence.length) {
        goingWell = 0;
        defaults.callback(elms);
      }
    }
    
    
    return elms;
  }
})(jQuery);