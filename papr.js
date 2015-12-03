/**
 * Papr.js - Paper placeholder
 *
 * Copyright (c) 2015 Ryan Yonzon, http://www.ryanyonzon.com/
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    Papr = function(id, options) {
        var that = this;
        that.id = id;
        that.obj = $('#' + id);
        that.objParent = that.obj.parent();

        // Options
        that.options = $.extend({
            size: 'letter', // A4, Letter, etc
            ppi: 72,
            autoScale: false,
            orientation: 'portrait', // Portrait or Landscape
            border: '#ccc dashed 1px',
            backgroundColor: '#eee'
        }, options);

        // Paper sizes (in inches)
        that.papers = {
            /**
             * American paper sizes
             */
            'letter': {
                width: 8.5,
                height: 11
            },
            'legal': {
                width: 8.5,
                height: 14
            },
            'ledger': {
                width: 11,
                height: 17
            },
            'tabloid': {
                width: 17,
                height: 11
            },
            'executive': {
                width: 7.25,
                height: 10.55
            },
            /**
             * ISO A paper sizes
             */
            'a0': {
                width: 33.11,
                height: 46.81
            },
            'a1': {
                width: 23.39,
                height: 33.11
            },
            'a2': {
                width: 16.54,
                height: 23.39
            },
            'a3': {
                width: 11.69,
                height: 16.54
            },
            'a4': {
                width: 8.27,
                height: 11.69
            },
            'a5': {
                width: 5.83,
                height: 8.27
            },
            'a6': {
                width: 4.13,
                height: 5.83
            },
            'a7': {
                width: 2.91,
                height: 4.13
            },
            'a8': {
                width: 2.05,
                height: 2.91
            }
        };
        
        // Initialize
        that.init();
    };

    Papr.prototype = {
        init: function() {
            var that = this;
            var paperSize = that.options.size.toLowerCase();
            var paperList = that.papers;
            var paper = paperList['letter'];
            var ration = 0;
            var newWidth = 0;
            var newHeight = 0;
            
            // Initial stylesheet
            that.obj.attr('display', 'none');
            that.obj.css({
                'background-color': that.options.backgroundColor,
                'border': that.options.border
            });

            if (paperList.hasOwnProperty(paperSize)) {
                paper = paperList[paperSize];
            }

            // Calculate pixel (based on PPI)
            pixelWidth = paper.width * that.options.ppi;
            pixelHeight = paper.height * that.options.ppi;

            // Set paper orientation
            switch (that.options.orientation.toLowerCase()) {
                case 'portrait':
                    that.obj.css({
                        'width': pixelWidth,
                        'height': pixelHeight
                    });
                    break; 
                case 'landscape':
                    that.obj.css({
                        'width': pixelHeight,
                        'height': pixelWidth
                    });
                    break;
                default:
                    // Portrait as default
                    that.obj.css({
                        'width': pixelWidth,
                        'height': pixelHeight
                    });
                    break;
            };

            if (that.options.autoScale === true) {
                ratio = that.obj.width() / that.obj.height();
                newWidth = that.obj.width() - 1;
                while (newWidth > that.objParent.width() || newHeight > that.objParent.height()) {
                    newWidth = newWidth - 1;
                    newHeight = newWidth / ratio;
                }
                that.obj.css({
                    'width': newWidth,
                    'height': newHeight
                });
            }
        },
        render: function() {
            var that = this;
            that.obj.attr('display', 'block');
        }
    };
}(jQuery));
