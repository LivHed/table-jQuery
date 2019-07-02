$(document).ready(function() {
    
 /*   $("tr:odd").addClass("odd");
    $("tr:even").addClass("even"); */
    
    $("th").click(function() {
        $("tr").children().removeClass("selection");
        $(this).siblings().addClass("selection");
    });
});