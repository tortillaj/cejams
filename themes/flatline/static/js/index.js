!function(t,e){"use strict";var a=t(document);a.ready(function(){var e={},a=t(".post-content"),o=t("header.main-header");t.getJSON("rev-manifest.json",function(t){if(e=t,o.length&&o.attr("data-bg-image").length&&Object.keys(e).length){var a=e[o.attr("data-bg-image")];o.css("background-image",'url("'+a+'")')}}),a.fitVids(),t(".scroll-down").arctic_scroll(),t(".menu-button[href='#'], .nav-cover, .nav-close").on("click",function(e){e.preventDefault(),t("body").toggleClass("nav-opened nav-closed")})}),t.fn.arctic_scroll=function(e){var a={elem:t(this),speed:500},o=t.extend(a,e);o.elem.click(function(e){e.preventDefault();var a,n=t(this),s=t("html, body"),r=n.attr("data-offset")?n.attr("data-offset"):!1,i=n.attr("data-position")?n.attr("data-position"):!1;r?(a=parseInt(r),s.stop(!0,!1).animate({scrollTop:t(this.hash).offset().top+a},o.speed)):i?(a=parseInt(i),s.stop(!0,!1).animate({scrollTop:a},o.speed)):s.stop(!0,!1).animate({scrollTop:t(this.hash).offset().top},o.speed)})}}(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJ1bmRlZmluZWQiLCIkZG9jdW1lbnQiLCJkb2N1bWVudCIsInJlYWR5IiwicmV2IiwiJHBvc3RDb250ZW50IiwiJG1haW5IZWFkZXIiLCJnZXRKU09OIiwiZGF0YSIsImxlbmd0aCIsImF0dHIiLCJPYmplY3QiLCJrZXlzIiwiYmdJbWFnZSIsImNzcyIsImZpdFZpZHMiLCJhcmN0aWNfc2Nyb2xsIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsImZuIiwib3B0aW9ucyIsImRlZmF1bHRzIiwiZWxlbSIsInRoaXMiLCJzcGVlZCIsImFsbE9wdGlvbnMiLCJleHRlbmQiLCJjbGljayIsImV2ZW50IiwidG9Nb3ZlIiwiJHRoaXMiLCIkaHRtbEJvZHkiLCJvZmZzZXQiLCJwb3NpdGlvbiIsInBhcnNlSW50Iiwic3RvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJoYXNoIiwidG9wIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQ0FLQSxTQUFXQSxFQUFHQyxHQUNaLFlBRUEsSUFBSUMsR0FBWUYsRUFBRUcsU0FFbEJELEdBQVVFLE1BQU0sV0FDZCxHQUFJQyxNQUNGQyxFQUFlTixFQUFFLGlCQUNqQk8sRUFBY1AsRUFBRSxxQkFFbEJBLEdBQUVRLFFBQVEsb0JBQXFCLFNBQVVDLEdBRXZDLEdBREFKLEVBQU1JLEVBQ0ZGLEVBQVlHLFFBQ1ZILEVBQVlJLEtBQUssaUJBQWlCRCxRQUFVRSxPQUFPQyxLQUFLUixHQUFLSyxPQUFRLENBQ3ZFLEdBQUlJLEdBQVVULEVBQUlFLEVBQVlJLEtBQUssaUJBQ25DSixHQUFZUSxJQUFJLG1CQUFvQixRQUFVRCxFQUFVLFNBSzlEUixFQUFhVSxVQUViaEIsRUFBRSxnQkFBZ0JpQixnQkFFbEJqQixFQUFFLGtEQUFrRGtCLEdBQUcsUUFBUyxTQUFVQyxHQUN4RUEsRUFBRUMsaUJBQ0ZwQixFQUFFLFFBQVFxQixZQUFZLDZCQU0xQnJCLEVBQUVzQixHQUFHTCxjQUFnQixTQUFVTSxHQUU3QixHQUFJQyxJQUNBQyxLQUFNekIsRUFBRTBCLE1BQ1JDLE1BQU8sS0FHVEMsRUFBYTVCLEVBQUU2QixPQUFPTCxFQUFVRCxFQUVsQ0ssR0FBV0gsS0FBS0ssTUFBTSxTQUFVQyxHQUM5QkEsRUFBTVgsZ0JBQ04sSUFJRVksR0FKRUMsRUFBUWpDLEVBQUUwQixNQUNaUSxFQUFZbEMsRUFBRSxjQUNkbUMsRUFBVUYsRUFBTXRCLEtBQUssZUFBa0JzQixFQUFNdEIsS0FBSyxnQkFBaUIsRUFDbkV5QixFQUFZSCxFQUFNdEIsS0FBSyxpQkFBb0JzQixFQUFNdEIsS0FBSyxrQkFBbUIsQ0FHdkV3QixJQUNGSCxFQUFTSyxTQUFTRixHQUNsQkQsRUFBVUksTUFBSyxHQUFNLEdBQU9DLFNBQVNDLFVBQVl4QyxFQUFFMEIsS0FBS2UsTUFBTU4sU0FBU08sSUFBTVYsR0FBVUosRUFBV0QsUUFDekZTLEdBQ1RKLEVBQVNLLFNBQVNELEdBQ2xCRixFQUFVSSxNQUFLLEdBQU0sR0FBT0MsU0FBU0MsVUFBV1IsR0FBU0osRUFBV0QsUUFFcEVPLEVBQVVJLE1BQUssR0FBTSxHQUFPQyxTQUFTQyxVQUFZeEMsRUFBRTBCLEtBQUtlLE1BQU1OLFNBQVksS0FBSVAsRUFBV0QsV0FLOUZnQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFpbiBKUyBmaWxlIGZvciBDYXNwZXIgYmVoYXZpb3Vyc1xuICovXG5cbi8qIGdsb2JhbHMgalF1ZXJ5LCBkb2N1bWVudCAqL1xuKGZ1bmN0aW9uICgkLCB1bmRlZmluZWQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gICRkb2N1bWVudC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldiA9IHt9LFxuICAgICAgJHBvc3RDb250ZW50ID0gJChcIi5wb3N0LWNvbnRlbnRcIiksXG4gICAgICAkbWFpbkhlYWRlciA9ICQoJ2hlYWRlci5tYWluLWhlYWRlcicpO1xuXG4gICAgJC5nZXRKU09OKCdyZXYtbWFuaWZlc3QuanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXYgPSBkYXRhO1xuICAgICAgaWYgKCRtYWluSGVhZGVyLmxlbmd0aCkge1xuICAgICAgICBpZiAoJG1haW5IZWFkZXIuYXR0cignZGF0YS1iZy1pbWFnZScpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhyZXYpLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBiZ0ltYWdlID0gcmV2WyRtYWluSGVhZGVyLmF0dHIoJ2RhdGEtYmctaW1hZ2UnKV07XG4gICAgICAgICAgJG1haW5IZWFkZXIuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybChcIicgKyBiZ0ltYWdlICsgJ1wiKScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkcG9zdENvbnRlbnQuZml0VmlkcygpO1xuXG4gICAgJChcIi5zY3JvbGwtZG93blwiKS5hcmN0aWNfc2Nyb2xsKCk7XG5cbiAgICAkKFwiLm1lbnUtYnV0dG9uW2hyZWY9JyMnXSwgLm5hdi1jb3ZlciwgLm5hdi1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm5hdi1vcGVuZWQgbmF2LWNsb3NlZFwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQXJjdGljIFNjcm9sbCBieSBQYXVsIEFkYW0gRGF2aXNcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BhdWxBZGFtRGF2aXMvQXJjdGljLVNjcm9sbFxuICAkLmZuLmFyY3RpY19zY3JvbGwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBlbGVtOiAkKHRoaXMpLFxuICAgICAgICBzcGVlZDogNTAwXG4gICAgICB9LFxuXG4gICAgICBhbGxPcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgYWxsT3B0aW9ucy5lbGVtLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICRodG1sQm9keSA9ICQoJ2h0bWwsIGJvZHknKSxcbiAgICAgICAgb2Zmc2V0ID0gKCR0aGlzLmF0dHIoJ2RhdGEtb2Zmc2V0JykpID8gJHRoaXMuYXR0cignZGF0YS1vZmZzZXQnKSA6IGZhbHNlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkdGhpcy5hdHRyKCdkYXRhLXBvc2l0aW9uJykpID8gJHRoaXMuYXR0cignZGF0YS1wb3NpdGlvbicpIDogZmFsc2UsXG4gICAgICAgIHRvTW92ZTtcblxuICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICB0b01vdmUgPSBwYXJzZUludChvZmZzZXQpO1xuICAgICAgICAkaHRtbEJvZHkuc3RvcCh0cnVlLCBmYWxzZSkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAoJCh0aGlzLmhhc2gpLm9mZnNldCgpLnRvcCArIHRvTW92ZSl9LCBhbGxPcHRpb25zLnNwZWVkKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgdG9Nb3ZlID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgICAgICAkaHRtbEJvZHkuc3RvcCh0cnVlLCBmYWxzZSkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b01vdmV9LCBhbGxPcHRpb25zLnNwZWVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRodG1sQm9keS5zdG9wKHRydWUsIGZhbHNlKS5hbmltYXRlKHtzY3JvbGxUb3A6ICgkKHRoaXMuaGFzaCkub2Zmc2V0KCkudG9wKX0sIGFsbE9wdGlvbnMuc3BlZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH07XG59KShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9