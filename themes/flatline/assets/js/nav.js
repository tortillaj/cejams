(function( window ){
  var menu = document.querySelector( ".site-navigation" ),
  toggleMenu = document.querySelector( ".js-toggle-menu-open" ),
  activeNav;

  /* slide menu left */
  toggleMenu.addEventListener( "click", function(e) {
    e.preventDefault();
    classie.add( menu, "menu-open" );
    activeNav = "menu-open";
  } );

  /* hide active menu if close menu button is clicked */
  [].slice.call(document.querySelectorAll( ".js-toggle-menu-close" ))
    .forEach(function(el,i){
      el.addEventListener( "click", function(e) {
        e.preventDefault();
        classie.remove( menu, activeNav );
	activeNav = "";
      });
    });

})( window );
