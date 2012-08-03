$(function(){
    var sections = {},
        _height  = $(window).height(),
        i        = 0;

    $('.section_link').each(function(){
        sections[this.name] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();

        for(i in sections){
            if(sections[i] > pos && sections[i] < pos + _height){
                $('a').removeClass('active');
                $('#' + i).addClass('active');
            }
        }
    });

    // Add scroll to effects for links
    $(".links a").each(function(){
        $(this).click(function(){
            $_this = $(this);
            var scrollToElement = $_this.attr("id");
            $("a[name="+ scrollToElement +"]").ScrollTo();
        });
    });

    // Change image on rollover
    $("div.home > img").hover(function(){
        if( $(this).attr("src") === "/images/thandazile_circle_bw.png" ){
            $(this).attr("src", "/images/thandazile_circle.png");
        }else{
            $(this).attr("src", "/images/thandazile_circle_bw.png");
        }
    });
});

