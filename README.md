TypeSequence jQuery plugin
==========================

Options
-------
Accepts three options:

* `sequence` [ARRAY] an array with either key codes or a string with special keys such as ENTER;
* `enter` [BOOL] if the enter key needs to be pressed at the end. Default: false;
* `callback` [FUNCTION] the JS function that needs to be called when the sequence is completed.
* `once` [BOOL OR STRING] `true` if only one time the sequence can be typed; `false` for multiple times (default); `'depends'` looks at the return of the callback function: if true, the sequence can't be typed again.

Example
-------

        $(window).typesequence({
          sequence: ['p', 'a', 's', 's', 'w', 'o', 'r', 'd'],
          enter: true,
          callback: function(){
            alert('Foo');
          }
        });

See also the source of `demo.html`.