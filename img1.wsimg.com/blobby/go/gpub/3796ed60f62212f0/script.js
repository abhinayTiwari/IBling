(function () {
    window.onMembershipLogout = function () {
      window.location.assign('/m/logout');
    };
    var onClickApplication = setInterval(function () {
      var membershipSignOut = document.getElementById('n-4588-membership-sign-out');
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
    
  var navigationDrawer = document.getElementById('n-4588-navId-mobile');
  var signedOutLinks = navigationDrawer.querySelector(".membership-links-logged-out");
  var signedInLinks = navigationDrawer.querySelector(".membership-links-logged-in");
  var signedInHeaderBlock = navigationDrawer.querySelector(".membership-header-logged-in");

  if (cookieValue) {
    signedInHeaderBlock.style.display = 'block';
    signedOutLinks.style.display = 'none';
    signedInLinks.style.display = 'block';
    var membershipHeader = navigationDrawer.querySelector('#n-4588-membership-header');
    var membershipEmailField = navigationDrawer.querySelector('#n-4588-membership-email');
    if (membershipEmailField && membershipEmailField.firstChild) {
      if (firstName && lastName) {
        membershipHeader.innerText = [firstName, lastName].join(' ');
      }
      membershipEmailField.innerText = membershipEmail;
      membershipEmailField.style["text-overflow"] = "ellipsis";
      membershipEmailField.style["overflow"] = "hidden";
      membershipEmailField.style["white-space"] = "nowrap";
    }
    var membershipHeaderText = navigationDrawer.querySelector('#n-4588-membership-header');
    if (membershipHeaderText && membershipHeaderText.firstChild) {
      membershipHeaderText.style["font-weight"] = "bold";
    }
  } else {
    signedInHeaderBlock.style.display = 'none';
    signedInLinks.style.display = 'none';
    signedOutLinks.style.display = 'block';
  }
  
    
  })();