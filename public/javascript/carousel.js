function Carousel(selector) {
    this.$el = $(selector);
    this.parent = this.$el.parent();
    this.parentWidth = this.parent.width();
    this.numChildren = this.$el.children().length;
    this.center = null;

    this.makeLinksWork();
}

Carousel.prototype.makeLinksWork = function() {
    var self = this;
    this.$el.delegate('a.right', 'click', function() {
        var idx = self.indexOfCenter();
        if(idx === self.NumChildren - 1) idx = 0;
        else idx++;

        self.centerElement(self.$el.children().eq(idx), true)
    })

    this.$el.delegate('a.left', 'click', function() {
        var idx = self.indexOfCenter();
        if(idx === 0) idx = self.numChildren - 1;
        else idx--;

        self.centerElement(self.$el.children().eq(idx), true)
    })
}

Carousel.prototype.indexOfCenter = function() {
    return this.$el.children().index(this.center);
}

Carousel.prototype.offsetForCentering = function(el) {
    var leftPosition = $(el).position().left;
    var width = $(el).width();
    return -1*(leftPosition + width/2 - this.parentWidth/2);
}

Carousel.prototype.addDuplicatesOnEnd = function() {
    var children = this.$el.children();
    var left = children.clone();
    var right = children.clone();

    this.$el.prepend(left).append(right);
}

Carousel.prototype.removeDuplicatesOnEnd = function() {
    var self = this;
    var centerIdx = this.indexOfCenter();
    var left, right;

    if(this.numChildren % 2 === 0) {
        left = centerIdx - this.numChildren/2 + 1;
        right = centerIdx + this.numChildren/2;
    }
    else {
        left = centerIdx - (this.numChildren - 1)/2;
        right = centerIdx + (this.numChildren - 1)/2;
    }

    this.$el.children().each(function(idx) {
        if(idx < left || idx > right) {
            $(this).remove();
        }
    })
}

Carousel.prototype.removeCenterClass = function() {
    $('.center').each(function() {
        $(this).removeClass('center');
    })
}

Carousel.prototype.distanceFromCenter = function(el) {
    el = $(el).get(0);
    var children = this.$el.children();
    var centerIdx = children.index(this.center);
    var targetIdx = children.index(el);
    var dist = targetIdx - centerIdx;


    if(Math.abs(dist) > this.numChildren/2) {
        if(dist >= 0) dist -= this.numChildren;
        else dist += this.numChildren;
    }
    return dist;
}

Carousel.prototype.centerElement = function(el, scroll) {
    if(scroll && $(el).get(0) === $(this.center).get(0)) return;
    this.removeCenterClass();
    if(scroll) {
        var self = this;
        if(self.scrolling) return;
        self.scrolling = true;

        var dist = self.distanceFromCenter(el);
        self.addDuplicatesOnEnd();
        self.centerElement(self.center)

        var children = this.$el.children();
        var currentCenterIdx = children.index(this.center);
        this.center = children.get(currentCenterIdx + dist);
        var offset = self.offsetForCentering(this.center);

        this.$el.animate({left: offset}, 'slow', function() {
            self.scrolling = false;
            $(self.center).addClass('center');
            self.removeDuplicatesOnEnd();
            self.centerElement(self.center);
        })
    }
    else {
        this.center = el;
        $(this.center).addClass('center');
        var offset = this.offsetForCentering(el);
        this.$el.css('left', offset);
    }
}

Carousel.prototype.hookUp = function(name, liSel) {
    var self = this;
    $(sel).click(function() {
        var el = self.$el.find(liSel)
        self.centerElement(el, true);
    })
}


$(window).load(function() {
    c = new Carousel('ul.slides');
    c.centerElement(c.$el.children().eq(2));
    var links = {
        '.jim': '.one',
        '.craig': '.two',
        '.micah': '.three',
        '.cory': '.four',
        '.doug': '.five',
        '.billy': '.six',
        '.eric': '.seven'
    }
    for(sel in links) {
        c.hookUp(sel, links[sel]);
    }
})