var background = {}

background.initializer = function () {

    var $this = this;
    
    $this.id = "background_css3";
    $this.style = {bubbles_color: "#fff", stroke_width: 0, stroke_color: "black"};
    $this.bubbles_number = 18;
    $this.speed = [1500, 10000]; //milliseconds
    $this.max_bubbles_height = $this.height;
    $this.shape = false 

    if ($("#" + $this.id).length > 0) {
        $("#" + $this.id).remove();
    }
    $this.object = $("<div style='z-index:-2;margin:0;padding:0; overflow:hidden;position:fixed;bottom:0;width:100%;height:100%; id='" + $this.id + "'></div>'").appendTo("body");

    $this.ww = $(window).width()
    $this.wh = $(document).height()


    $("body").prepend("<style>.shape_background {transform-origin:center; width:70px; height:70px; background: " + $this.style.bubbles_color + "; position: absolute}</style>");


    for (i = 0; i < $this.bubbles_number; i++) {
        $this.generate_bubbles()
    }

}


background.generate_bubbles = function () {
    var $this = this;
    var base = $("<div class='shape_background'></div>");
    var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1, 3));
    if (shape_type === 1) {
        b_shape = base.css({borderRadius: "50%"})
    } else if (shape_type === 2) {
        b_shape = base.css({
            width: 0,
            height: 0,
            "border-style": "solid",
            "border-width": "0 40px 69.3px 40px",
            "border-color": "transparent transparent " + $this.style.bubbles_color + " transparent",
            background: "transparent"
        });
    } else {
        var b_shape = base;
    }
    var rn_size = $this.rn(.8, 1.2);
    b_shape.css({
        "transform": "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",
        top: $this.wh + 100,
        left: $this.rn(-60, $this.ww + 60)
    });
    b_shape.appendTo($this.object);
    b_shape.transit({
        top: $this.rn($this.wh / 2, $this.wh / 2 - 60),
        "transform": "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",
        opacity: 0
    }, $this.rn($this.speed[0], $this.speed[1]), function () {
        $(this).remove();
        $this.generate_bubbles();
    })

}


background.rn = function (from, to, arr) {
    if (arr) {
        return Math.random() * (to - from + 1) + from;
    } else {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
}
background.initializer()