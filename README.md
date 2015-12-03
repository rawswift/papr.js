# Papr.js

Paper placeholder.

## Paper Size

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

## Usage

Include  jQuery and Papr.js:

    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="/path/to/papr.min.js"></script>

Create the placeholder element and wrap it with a `DIV` with specified `width` and `height`. __(Please note that you must provide width and height of the parent container)__:

    <div style="width: 400px; height: 400px;">
        <div id="placeholder"></div>
    </div>

Configure paper attributes and render the paper:

    <script>

        var a4 = new Papr('placeholder', {
            size: 'a4', // Paper size
            autoScale: true, // Auto scale based on parent's width and height
            orientation: 'portrait', // Or 'landscape'
            ppi: 72 // Resolution e.g. 300 PPI (hi-res)
        });

        // Render A4 paper
        a4.render();

    </script>

## License

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php)
