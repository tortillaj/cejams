!function(t,e){"use strict";var a=t(document);a.ready(function(){var e={},a=t(".post-content"),n=t("header.page__header"),o=n.data("bgImage");t.getJSON("rev-manifest.json",function(t){e=t,n.length&&o.length&&Object.keys(e).length&&n.css("background-image",'url("/'+e[o]+'")')}).fail(function(t){n.length&&o.length&&n.css("background-image",'url("/'+o+'")')}),a.fitVids(),t(".scroll-down").arctic_scroll(),t(".menu-button[href='#'], .nav-cover, .nav-close").on("click",function(e){e.preventDefault(),t("body").toggleClass("nav-opened nav-closed")})}),t.fn.arctic_scroll=function(e){var a={elem:t(this),speed:500},n=t.extend(a,e);n.elem.click(function(e){e.preventDefault();var a,o=t(this),s=t("html, body"),c=o.attr("data-offset")?o.attr("data-offset"):!1,r=o.attr("data-position")?o.attr("data-position"):!1;c?(a=parseInt(c),s.stop(!0,!1).animate({scrollTop:t(this.hash).offset().top+a},n.speed)):r?(a=parseInt(r),s.stop(!0,!1).animate({scrollTop:a},n.speed)):s.stop(!0,!1).animate({scrollTop:t(this.hash).offset().top},n.speed)})}}(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJ1bmRlZmluZWQiLCIkZG9jdW1lbnQiLCJkb2N1bWVudCIsInJlYWR5IiwicmV2IiwiJHBvc3RDb250ZW50IiwiJG1haW5IZWFkZXIiLCIkYmdJbWFnZSIsImRhdGEiLCJnZXRKU09OIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImNzcyIsImZhaWwiLCJlcnJvciIsImZpdFZpZHMiLCJhcmN0aWNfc2Nyb2xsIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsImZuIiwib3B0aW9ucyIsImRlZmF1bHRzIiwiZWxlbSIsInRoaXMiLCJzcGVlZCIsImFsbE9wdGlvbnMiLCJleHRlbmQiLCJjbGljayIsImV2ZW50IiwidG9Nb3ZlIiwiJHRoaXMiLCIkaHRtbEJvZHkiLCJvZmZzZXQiLCJhdHRyIiwicG9zaXRpb24iLCJwYXJzZUludCIsInN0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFzaCIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkNBS0EsU0FBV0EsRUFBR0MsR0FDWixZQUVBLElBQUlDLEdBQVlGLEVBQUVHLFNBRWxCRCxHQUFVRSxNQUFNLFdBQ2QsR0FBSUMsTUFDRkMsRUFBZU4sRUFBRSxpQkFDakJPLEVBQWNQLEVBQUUsdUJBQ2hCUSxFQUFXRCxFQUFZRSxLQUFLLFVBRTlCVCxHQUFFVSxRQUFRLG9CQUFxQixTQUFVRCxHQUN2Q0osRUFBTUksRUFDRkYsRUFBWUksUUFBVUgsRUFBU0csUUFBVUMsT0FBT0MsS0FBS1IsR0FBS00sUUFDNURKLEVBQVlPLElBQUksbUJBQW9CLFNBQVdULEVBQUlHLEdBQVksUUFFaEVPLEtBQUssU0FBU0MsR0FDWFQsRUFBWUksUUFBVUgsRUFBU0csUUFDakNKLEVBQVlPLElBQUksbUJBQW9CLFNBQVdOLEVBQVcsUUFJOURGLEVBQWFXLFVBRWJqQixFQUFFLGdCQUFnQmtCLGdCQUVsQmxCLEVBQUUsa0RBQWtEbUIsR0FBRyxRQUFTLFNBQVVDLEdBQ3hFQSxFQUFFQyxpQkFDRnJCLEVBQUUsUUFBUXNCLFlBQVksNkJBTTFCdEIsRUFBRXVCLEdBQUdMLGNBQWdCLFNBQVVNLEdBRTdCLEdBQUlDLElBQ0FDLEtBQU0xQixFQUFFMkIsTUFDUkMsTUFBTyxLQUdUQyxFQUFhN0IsRUFBRThCLE9BQU9MLEVBQVVELEVBRWxDSyxHQUFXSCxLQUFLSyxNQUFNLFNBQVVDLEdBQzlCQSxFQUFNWCxnQkFDTixJQUlFWSxHQUpFQyxFQUFRbEMsRUFBRTJCLE1BQ1pRLEVBQVluQyxFQUFFLGNBQ2RvQyxFQUFVRixFQUFNRyxLQUFLLGVBQWtCSCxFQUFNRyxLQUFLLGdCQUFpQixFQUNuRUMsRUFBWUosRUFBTUcsS0FBSyxpQkFBb0JILEVBQU1HLEtBQUssa0JBQW1CLENBR3ZFRCxJQUNGSCxFQUFTTSxTQUFTSCxHQUNsQkQsRUFBVUssTUFBSyxHQUFNLEdBQU9DLFNBQVNDLFVBQVkxQyxFQUFFMkIsS0FBS2dCLE1BQU1QLFNBQVNRLElBQU1YLEdBQVVKLEVBQVdELFFBQ3pGVSxHQUNUTCxFQUFTTSxTQUFTRCxHQUNsQkgsRUFBVUssTUFBSyxHQUFNLEdBQU9DLFNBQVNDLFVBQVdULEdBQVNKLEVBQVdELFFBRXBFTyxFQUFVSyxNQUFLLEdBQU0sR0FBT0MsU0FBU0MsVUFBWTFDLEVBQUUyQixLQUFLZ0IsTUFBTVAsU0FBWSxLQUFJUCxFQUFXRCxXQU05RmlCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYWluIEpTIGZpbGUgZm9yIENhc3BlciBiZWhhdmlvdXJzXG4gKi9cblxuLyogZ2xvYmFscyBqUXVlcnksIGRvY3VtZW50ICovXG4oZnVuY3Rpb24gKCQsIHVuZGVmaW5lZCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgJGRvY3VtZW50LnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV2ID0ge30sXG4gICAgICAkcG9zdENvbnRlbnQgPSAkKFwiLnBvc3QtY29udGVudFwiKSxcbiAgICAgICRtYWluSGVhZGVyID0gJCgnaGVhZGVyLnBhZ2VfX2hlYWRlcicpLFxuICAgICAgJGJnSW1hZ2UgPSAkbWFpbkhlYWRlci5kYXRhKCdiZ0ltYWdlJyk7XG5cbiAgICAkLmdldEpTT04oJ3Jldi1tYW5pZmVzdC5qc29uJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldiA9IGRhdGE7XG4gICAgICBpZiAoJG1haW5IZWFkZXIubGVuZ3RoICYmICRiZ0ltYWdlLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhyZXYpLmxlbmd0aCkge1xuICAgICAgICAkbWFpbkhlYWRlci5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiLycgKyByZXZbJGJnSW1hZ2VdICsgJ1wiKScpO1xuICAgICAgfSBcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBpZiAoJG1haW5IZWFkZXIubGVuZ3RoICYmICRiZ0ltYWdlLmxlbmd0aCkge1xuICAgICAgICAkbWFpbkhlYWRlci5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiLycgKyAkYmdJbWFnZSArICdcIiknKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRwb3N0Q29udGVudC5maXRWaWRzKCk7XG5cbiAgICAkKFwiLnNjcm9sbC1kb3duXCIpLmFyY3RpY19zY3JvbGwoKTtcblxuICAgICQoXCIubWVudS1idXR0b25baHJlZj0nIyddLCAubmF2LWNvdmVyLCAubmF2LWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibmF2LW9wZW5lZCBuYXYtY2xvc2VkXCIpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBBcmN0aWMgU2Nyb2xsIGJ5IFBhdWwgQWRhbSBEYXZpc1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vUGF1bEFkYW1EYXZpcy9BcmN0aWMtU2Nyb2xsXG4gICQuZm4uYXJjdGljX3Njcm9sbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGVsZW06ICQodGhpcyksXG4gICAgICAgIHNwZWVkOiA1MDBcbiAgICAgIH0sXG5cbiAgICAgIGFsbE9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBhbGxPcHRpb25zLmVsZW0uY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgJGh0bWxCb2R5ID0gJCgnaHRtbCwgYm9keScpLFxuICAgICAgICBvZmZzZXQgPSAoJHRoaXMuYXR0cignZGF0YS1vZmZzZXQnKSkgPyAkdGhpcy5hdHRyKCdkYXRhLW9mZnNldCcpIDogZmFsc2UsXG4gICAgICAgIHBvc2l0aW9uID0gKCR0aGlzLmF0dHIoJ2RhdGEtcG9zaXRpb24nKSkgPyAkdGhpcy5hdHRyKCdkYXRhLXBvc2l0aW9uJykgOiBmYWxzZSxcbiAgICAgICAgdG9Nb3ZlO1xuXG4gICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgIHRvTW92ZSA9IHBhcnNlSW50KG9mZnNldCk7XG4gICAgICAgICRodG1sQm9keS5zdG9wKHRydWUsIGZhbHNlKS5hbmltYXRlKHtzY3JvbGxUb3A6ICgkKHRoaXMuaGFzaCkub2Zmc2V0KCkudG9wICsgdG9Nb3ZlKX0sIGFsbE9wdGlvbnMuc3BlZWQpO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbikge1xuICAgICAgICB0b01vdmUgPSBwYXJzZUludChwb3NpdGlvbik7XG4gICAgICAgICRodG1sQm9keS5zdG9wKHRydWUsIGZhbHNlKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvTW92ZX0sIGFsbE9wdGlvbnMuc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGh0bWxCb2R5LnN0b3AodHJ1ZSwgZmFsc2UpLmFuaW1hdGUoe3Njcm9sbFRvcDogKCQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3ApfSwgYWxsT3B0aW9ucy5zcGVlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfTtcblxufSkoalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
