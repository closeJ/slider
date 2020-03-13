$(document).ready(function(){
    let sliderContainer = $("#slider-container");
    let sliderUl = $(sliderContainer).find('.slider');
    let arrowPrev = $(sliderContainer).find('.arrow-prev');
    let arrowNext = $(sliderContainer).find('.arrow-next');
    let sliderDot = $(sliderContainer).find('.slider-dot');
    let i = 0;

    const sliderMoving = (i) =>
    {
        $(sliderUl).animate({
            'left': - ($(sliderLi).width() * i)
        });
        $(sliderDot).find('.dot').eq(i).addClass('dot-on');
        $(sliderDot).find('.dot').not(':eq('+ i +')').removeClass('dot-on');
    }

    const sliderImages = [
        {"url": "https://twitch.tv/never_loses","image": "bg_1.jpg"},
        {"url": "https://www.twitch.tv","image": "bg_2.jpg"},
        {"url": "https://www.twitch.tv","image": "bg_3.jpg"},
        {"url": "https://www.twitch.tv","image": "bg_4.jpg"},
    ];

    $(sliderUl).children().remove();
    if (sliderImages.length > 0) {
        $.each(sliderImages,function(i,v){
            let imagePath = 'image/' + v.image;
            let sliderChildDom = "<li><a href='"+v.url+"'>" + "<img src='"+ imagePath +"' width='700' height='500'></a></li>";
            $(sliderChildDom).appendTo($(sliderUl));
        });
    }

    let sliderLi = $(sliderUl).find('li');
    let sliderTotalWidth = $(sliderLi).width() * $(sliderLi).length;

    $(sliderDot).children().remove();
    if ($(sliderLi).length > 0) {
        for (let x = 0; x < $(sliderLi).length; x++) {
            let dotDom = "<li class='dot'></li>";
            $(dotDom).appendTo($(sliderDot));
        }
    }

    $(sliderDot).find('.dot').eq(i).addClass('dot-on');
    $(sliderContainer).css(
        {"width": $(sliderLi).width() + "px",
        "height": $(sliderLi).height() + "px"}
    );
    $(sliderUl).css(
        {"width": sliderTotalWidth + "px",
        "height": $(sliderLi).height() + "px"}
    );

    setInterval(function(){
        i++;
        if (i >= $(sliderLi).length) i = 0;
        sliderMoving(i);
    },5000);

    $(arrowPrev).click(function(e)
    {
        i--;
        if (i < 0) i = $(sliderLi).length - 1;
        e.preventDefault();
        sliderMoving(i);
    });

    $(arrowNext).click(function(e)
    {
        i++;
        if (i >= $(sliderLi).length) i = 0;
        e.preventDefault();
        sliderMoving(i);
    });
});