(function () {
    window.onMembershipLogout = function () {
      window.location.assign('/m/logout');
    };
    var onClickApplication = setInterval(function () {
      var membershipSignOut = document.getElementById('membership4684382-membership-sign-out');
      if (membershipSignOut && !membershipSignOut.onclick) {
        membershipSignOut.onclick = window.onMembershipLogout;
      }
    }, 500);
    setTimeout(function () {
      return clearInterval(onClickApplication);
    }, 1000);
    
  var cookieValue = void 0;
  var cookie = "info_c2=";
  var parsedCookies = document.cookie.split(";");
  for (var i = 0; i < parsedCookies.length; i++) {
    var targetCookie = parsedCookies[i];
    while (targetCookie.charAt(0) === " ") {
      targetCookie = targetCookie.substring(1, targetCookie.length);
    }
    if (targetCookie.indexOf(cookie) === 0) {
      var rawCookie = targetCookie.substring(cookie.length, targetCookie.length);
      cookieValue = rawCookie && JSON.parse(decodeURIComponent(rawCookie));
    }
  }
    var membershipEmail = cookieValue && cookieValue.contactEmail;
    var firstName = cookieValue && cookieValue.nameFirst;
    var lastName = cookieValue && cookieValue.nameLast;
    
  var utilitiesMenu = document.getElementById('membership4684382-utility-menu');
  var signedOutDropdown = utilitiesMenu.querySelector(".membership-icon-logged-out");
  var signedInDropdown = utilitiesMenu.querySelector(".membership-icon-logged-in");
  if (cookieValue) {
    signedOutDropdown.style.display = 'none';
    signedInDropdown.style.display = 'block';
    var membershipEmailField = utilitiesMenu.querySelector('#membership4684382-membership-email');
    if (membershipEmailField && membershipEmailField.firstChild) {
      membershipEmailField.firstChild.innerText = membershipEmail;
      membershipEmailField.firstChild.style["text-overflow"] = "ellipsis";
      membershipEmailField.firstChild.style["overflow"] = "hidden";
      membershipEmailField.firstChild.style["white-space"] = "nowrap";
    }
    var membershipHeaderText = utilitiesMenu.querySelector('#membership4684382-membership-header');
    if (membershipHeaderText && membershipHeaderText.firstChild) {
      membershipHeaderText.firstChild.style["font-weight"] = "bold";
    }
  } else {
    signedInDropdown.style.display = 'none';
    signedOutDropdown.style.display = 'block';
  }
  
    
  })();