# TypeSequence

A small script / plugin to fire a callback after a sequence of characters is typed.

License is MIT, do with it what you want. (See the file LICENSE.)

## Versions

* jQuery
* Vanilla / plain old JavaScript (no external dependencies)

## jQuery plugin

### Options

Accepts three options:

* `sequence` [ARRAY] an array with either key codes or a string with special keys such as ENTER;
* `enter` [BOOL] if the enter key needs to be pressed at the end. Default: false;
* `callback` [FUNCTION] the JS function that needs to be called when the sequence is completed.
* `once` [BOOL OR STRING] `true` if only one time the sequence can be typed; `false` for multiple times (default); `'depends'` looks at the return of the callback function: if true, the sequence can't be typed again.

### Example

        $(window).typesequence({
          sequence: ['p', 'a', 's', 's', 'w', 'o', 'r', 'd'],
          enter: true,
          callback: function(){
            alert('Foo');
          }
        });

See also the source of `demo-jquery.html`.

## Vanilla / plain old JavaScript

### Options

Accepts three options:

* `elm` [HTML Element Object] the element for binding the event to. Defaults to `window`;
* `sequence` [ARRAY] an array with either key codes or a string with special keys such as ENTER;
* `enter` [BOOL] if the enter key needs to be pressed at the end. Default: false;
* `callback` [FUNCTION] the JS function that needs to be called when the sequence is completed.
* `once` [BOOL OR STRING] `true` if only one time the sequence can be typed; `false` for multiple times (default); `'depends'` looks at the return of the callback function: if true, the sequence can't be typed again.

### Example

        typesequence({
          sequence: ['p', 'a', 's', 's', 'w', 'o', 'r', 'd'],
          enter: true,
          callback: function(){
            alert('Foo');
          }
        });

See also the source of `demo-vanilla.html`.