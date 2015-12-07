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

        // Options
        that.options = $.extend({
            size: 'letter', // A4, Letter, etc
            dpi: 72,
            orientation: 'portrait', // Portrait or Landscape
            showMargin: true,
            margin: { // In inches
                left: 1,
                right: 1,
                top: 1,
                bottom: 1
            },
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
            var scale = 0;
            var scaleWidth = 0;
            var scaleHeight = 0;
            var newWidth = 0;
            var newHeight = 0;
            
            that.obj.append('<div class="papr-' + that.id + '-top"><div class="papr-' + that.id + '-bottom"><div class="papr-' + that.id + '-left"><div class="papr-' + that.id + '-right"><div id="papr-' + that.id + '-child"></div></div></div></div></div>');
            that.objChild = $('#papr-' + that.id + '-child');

            // Initial stylesheet
            // that.objChild.attr('display', 'none');
            that.objChild.css({
                'background-color': that.options.backgroundColor,
                'border': that.options.border
            });

            if (paperList.hasOwnProperty(paperSize)) {
                paper = paperList[paperSize];
            }

            // Calculate pixel (based on DPI)
            pixelWidth = paper.width * that.options.dpi;
            pixelHeight = paper.height * that.options.dpi;

            // Set paper orientation
            switch (that.options.orientation.toLowerCase()) {
                case 'portrait':
                    that.objChild.css({
                        'width': pixelWidth,
                        'height': pixelHeight
                    });
                    break; 
                case 'landscape':
                    that.objChild.css({
                        'width': pixelHeight,
                        'height': pixelWidth
                    });
                    break;
                default:
                    // Portrait as default
                    that.objChild.css({
                        'width': pixelWidth,
                        'height': pixelHeight
                    });
                    break;
            };

            scaleWidth = that.obj.width() / that.objChild.width();
            scaleHeight = that.obj.height() / that.objChild.height();

            scale = Math.min(scaleWidth, scaleHeight);

            newWidth = that.objChild.width() * scale;
            newHeight = that.objChild.height() * scale;

            that.objChild.css({
                'width': newWidth,
                'height': newHeight
            });

            if (that.options.showMargin) {
                marginLeft = (that.options.margin.left * that.options.dpi) * scale;
                marginRight = (that.options.margin.right * that.options.dpi) * scale;
                marginTop = (that.options.margin.top * that.options.dpi) * scale;
                marginBottom = (that.options.margin.bottom * that.options.dpi) * scale;
                marginTopBottom = that.objChild.height() - marginBottom;
                $('head').append("<style>.papr-" + that.id + "-left,.papr-" + that.id + "-right,.papr-" + that.id + "-top,.papr-" + that.id + "-bottom{width:" + newWidth + "px;height:" + newHeight + "px;}.papr-" + that.id + "-left,.papr-" + that.id + "-right,.papr-" + that.id + "-top,.papr-" + that.id + "-bottom{margin:0 auto;position:relative;line-height:20px;background:#fff;}.papr-" + that.id + "-left::before{content:'';position:absolute;width:1px;top:0;left:" + marginLeft +"px;bottom:0;border-left:1px dashed;border-color:transparent #ccc;z-index:9999;}.papr-" + that.id + "-right::before {content:'';position:absolute;width:1px;top:0;right:" + marginRight + "px;bottom:0;border-right:1px dashed;border-color:transparent #ccc;z-index:9999;}.papr-" + that.id + "-top::before {content:'';position:absolute;width:100%;height:1px;top:" + marginTop + "px;left:0;bottom:0;border-color:transparent #ccc;border-bottom:#ccc dashed 1px;z-index:9999;}.papr-" + that.id + "-bottom::before {content:'';position:absolute;width:100%;height:1px;top:" + marginTopBottom + "px;left:0;bottom:" + marginBottom + "px;border-color:transparent #ccc;border-top:#ccc dashed 1px;z-index:9999;}</style>");
            }
            
        },
        
        render: function() {
            var that = this;
            that.objChild.attr('display', 'block');
        }
    };
}(jQuery));
