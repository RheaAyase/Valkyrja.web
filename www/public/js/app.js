webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nvar getUrlParameter = function getUrlParameter(sParam) {\n    var sPageURL = decodeURIComponent(window.location.search.substring(1)),\n        sURLVariables = sPageURL.split('&'),\n        sParameterName,\n        i;\n\n    for (i = 0; i < sURLVariables.length; i++) {\n        sParameterName = sURLVariables[i].split('=');\n\n        if (sParameterName[0] === sParam) {\n            return sParameterName[1] === undefined ? true : sParameterName[1];\n        }\n    }\n};\n$(function () {\n    var navSelector = '#toc';\n    var $myNav = $(navSelector);\n    $scope = $('body');\n    $scope.scrollspy({\n        target: navSelector\n    });\n    $myNav.find('a:first').tab('show');\n    $scope.scrollspy('refresh');\n\n    if (window.location.pathname == '/features' || window.location.pathname == '/docs') {\n        setStickySize($myNav);\n        new Sticky('.scrollspy');\n        // Fucking ugly code to fix something removing active class FOR SOME FUCKING REASON. Pls fix\n        // TODO: I'm going to find you, and I'm going to fix you\n        $('header nav.navbar a.nav-link').filter('[href=\"/features\"],[href=\"/docs\"]').addClass('active');\n    }\n});\n$(window).resize(function () {\n    if (window.location.pathname == '/features') {\n        var $toc = $('#toc');\n        setStickySize($toc);\n    }\n});\n\n$(document).scroll(function () {\n    if (window.location.pathname == '/features') {\n        var $toc = $('#toc');\n        setStickySize($toc);\n    }\n});\n\nfunction setStickySize($element) {\n    $element.css('height', $(window).height() - $element.offset().top + $(document).scrollTop());\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBnZXRVcmxQYXJhbWV0ZXIgPSBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gICAgdmFyIHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKSxcbiAgICAgICAgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyksXG4gICAgICAgIHNQYXJhbWV0ZXJOYW1lLFxuICAgICAgICBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgaWYgKHNQYXJhbWV0ZXJOYW1lWzBdID09PSBzUGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBzUGFyYW1ldGVyTmFtZVsxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNQYXJhbWV0ZXJOYW1lWzFdO1xuICAgICAgICB9XG4gICAgfVxufTtcbiQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hdlNlbGVjdG9yID0gJyN0b2MnO1xuICAgIHZhciAkbXlOYXYgPSAkKG5hdlNlbGVjdG9yKTtcbiAgICAkc2NvcGUgPSAkKCdib2R5JylcbiAgICAkc2NvcGUuc2Nyb2xsc3B5KHtcbiAgICAgICAgdGFyZ2V0OiBuYXZTZWxlY3RvclxuICAgIH0pO1xuICAgICRteU5hdi5maW5kKCdhOmZpcnN0JykudGFiKCdzaG93Jyk7XG4gICAgJHNjb3BlLnNjcm9sbHNweSgncmVmcmVzaCcpO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2ZlYXR1cmVzJyB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9kb2NzJyl7XG4gICAgICAgIHNldFN0aWNreVNpemUoJG15TmF2KTtcbiAgICAgICAgbmV3IFN0aWNreSgnLnNjcm9sbHNweScpO1xuICAgICAgICAvLyBGdWNraW5nIHVnbHkgY29kZSB0byBmaXggc29tZXRoaW5nIHJlbW92aW5nIGFjdGl2ZSBjbGFzcyBGT1IgU09NRSBGVUNLSU5HIFJFQVNPTi4gUGxzIGZpeFxuICAgICAgICAvLyBUT0RPOiBJJ20gZ29pbmcgdG8gZmluZCB5b3UsIGFuZCBJJ20gZ29pbmcgdG8gZml4IHlvdVxuICAgICAgICAkKCdoZWFkZXIgbmF2Lm5hdmJhciBhLm5hdi1saW5rJykuZmlsdGVyKCdbaHJlZj1cIi9mZWF0dXJlc1wiXSxbaHJlZj1cIi9kb2NzXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbn0pO1xuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnL2ZlYXR1cmVzJyl7XG4gICAgICAgIHZhciAkdG9jID0gJCgnI3RvYycpO1xuICAgICAgICBzZXRTdGlja3lTaXplKCR0b2MpO1xuICAgIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gJy9mZWF0dXJlcycpe1xuICAgICAgICB2YXIgJHRvYyA9ICQoJyN0b2MnKTtcbiAgICAgICAgc2V0U3RpY2t5U2l6ZSgkdG9jKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc2V0U3RpY2t5U2l6ZSgkZWxlbWVudCkge1xuICAgICRlbGVtZW50LmNzcygnaGVpZ2h0JywgKCQod2luZG93KS5oZWlnaHQoKSAtICRlbGVtZW50Lm9mZnNldCgpLnRvcCArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
]);