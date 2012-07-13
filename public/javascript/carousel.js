$(window).load(function() {
    var $ul = $('ul.slides');
    var $lis = $('li.slide');
    var numLis = $lis.length;
    var $div = $('div#slideshow');

    var divWidth = $div.width();

    function refreshLis() {
        $lis = $('li.slide');
    }

    function removeCenterClass() {
        $('.center').each(function() {
            $(this).removeClass('center')
        })
    };

    function calculateOffsetForImage(img) {
        var leftPosition = $(img).position().left;
        var imgWidth = $(img).width();
        return leftPosition + imgWidth/2 - divWidth/2;
    }

    function centerImg(img, cb) {
        var shift = -1*calculateOffsetForImage(img);
        $ul.animate({left: shift}, 'medium', function() {
            refreshLis();
            removeCenterClass();
            $(img).addClass('center')
            cb();
        });
    }

    function firstToLast() {
        var first = $lis.eq(0);
        var second = $lis.eq(1);
        var secondPosition = second.position().left;
        $ul.append(first);
        $ul.css('left', '+=' + secondPosition)
    } 

    function lastToFirst() {
        var first = $lis.eq(0);
        var last = $lis.eq(-1);

        $ul.prepend(last);
        var dist = first.position().left;
        $ul.css('left', '-=' + dist);
    }





		$('a.right').click(function(event) {
		    refreshLis();

		    event.preventDefault();
		    var li = $(this).closest('li.slide');
		    var idx = $lis.index(li);
		    if(idx === numLis - 1) nextIdx = 0;
		    else nextIdx = idx + 1;

		    var nextImg = $lis.eq(nextIdx);
		    centerImg(nextImg, firstToLast);
		})


		$('a.left').click(function(event) {
		    refreshLis();
		    event.preventDefault();
		    var li = $(this).closest('li.slide');
		    var idx = $lis.index(li);
		    if(idx === 0) nextIdx = numLis - 1;
		    else nextIdx = idx - 1;

		    var nextImg = $lis.eq(nextIdx);
		    centerImg(nextImg, lastToFirst);
		})

		var shift = -1*calculateOffsetForImage($lis.eq(2));
		$ul.css('left', shift);
		$('li.three').addClass('center');
})
