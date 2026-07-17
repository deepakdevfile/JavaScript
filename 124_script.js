let menu_items_position = document.getElementById("menu-items-position");
let menu_items = document.getElementById("menu-items");
let show = document.getElementById("show");

let main_nav_list = document.getElementById("main-nav-list");
let main_nav = document.getElementById("main-nav");

menu_items_position.addEventListener("change", (e) => {
    main_nav_list.css("justify-content", this.find("option:selected").val());
});

menu_items.addEventListener("change", function(e){
    $("#main-nav-list li").css("flex", $(this).find("option:selected").val());
});

show.addEventListener("change", function(e){
    main_nav.removeClass("outlines").addClass($(this).find("option:selected").val());
});