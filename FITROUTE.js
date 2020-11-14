javascript:(function(){
    var cookieItem = document.cookie.split(";");
    for (i = 0; i < cookieItem.length; i++) {
      if (cookieItem[i].match(/FIT/)) {
          alert(cookieItem[i]);
      }
    }
})();