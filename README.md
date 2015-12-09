# Papr.js

Paper placeholder.

## Paper Size

Here's a list of the predefined paper sizes:

American paper sizes:

- Letter
- Legal
- Ledger
- Tabloid
- Executive

ISO A paper sizes:

- A0
- A1
- A2
- A3
- A4
- A5
- A6
- A7
- A8

*You can also create a custom sized paper.*

## Usage

Include  jQuery and Papr.js:

    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="/path/to/papr.min.js"></script>

Create the placeholder element, with specified `width` and `height`.

        <div id="placeholder" style="width: 400px; height: 400px;"></div>

Configure paper attributes and render the paper:

    <script>

        var a4 = new Papr('placeholder', {
            size: 'a4', // Paper size
            orientation: 'portrait', // Or 'landscape'
            dpi: 72, // Resolution e.g. 300 DPI (hi-res)
            margin: { // Optional (Default: 1 inch)
                left: 0.5,
                right: 0.5,
                top: 0.5,
                bottom: 0.5
            }
        });

    </script>

## License

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php)
