/*
 
Written by Andrew Perera
Copyright 2020

*/

function isVisible(elem) {
  var elementTop = elem.offset().top;
  var elementBottom = elementTop + elem.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

function maybeStartNameAnimation() {
  var $elem = $(".name");

  if (isVisible($elem)) {
    $elem.addClass("active");
  }
}

function maybeStartSkillsAnimation() {
  var $elem = $(".skills");

  if (isVisible($elem)) {
    var duration = 250;
    $(".skill-card").each(function (i) {
      var $item = $(this);
      var $text = $(".toolbox-info");
      $text.css({
        opacity: 1,
        transition: "opacity ease 2s",
      });
      setTimeout(function () {
        $item.addClass("active");
      }, duration * i);
    });
  }
}

function maybeStartDatabasesAnimation() {
  var $elem = $(".databases");

  if (isVisible($elem)) {
    $elem.addClass("active");
  }
}

function maybeStartNameAnimation() {
  var $elem = $(".name");

  if (isVisible($elem)) {
    $elem.addClass("active");
  }
}

$(document).ready(function () {
  // If no scroll memory
  maybeStartNameAnimation();

  $(window).scroll(function () {
    maybeStartNameAnimation();
    maybeStartSkillsAnimation();
    maybeStartDatabasesAnimation();
  });

  $("#mobile-menu-trigger").on("click", function () {
    var $trigger = $(this);
    $trigger.addClass("hidden");

    var $close = $("#close-mobile-menu-trigger");
    $close.removeClass("hidden");

    var $elem = $("#menu");
    $elem.addClass("expanded");
  });

  $("#close-mobile-menu-trigger").on("click", function () {
    var $close = $(this);
    $close.addClass("hidden");

    var $trigger = $("#mobile-menu-trigger");
    $trigger.removeClass("hidden");

    var $elem = $("#menu");
    $elem.removeClass("expanded");
  });
});
