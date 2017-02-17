$(document).ready(function(){
    $(".interactive-button").on("click", function(){
        alert("Wow");
    });
    $("#block-wrapper div").on("click", function(){
        var animations = ['bumerang', 'rocket','spin','rocket','jump'];
        var $block = $(this);
        var animation = animations[Math.floor(Math.random() * 5)];
        $block.addClass(animation);
        setTimeout(function () {
            $block.removeClass(animation);
        }, 4000);
});
});