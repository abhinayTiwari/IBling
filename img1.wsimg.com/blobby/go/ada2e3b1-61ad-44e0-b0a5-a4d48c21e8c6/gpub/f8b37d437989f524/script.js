(function(props,context) {
        Core.utils.renderBootstrap({
          elId:'bs-14',
          componentName:'ActionText',
          props:props,
          context:context,
          contextKey:'context-bs-1',
          radpack:false
        });
      })({"id":"n-42784311-membership-sign-out","text":"Sign out","style":{"dropdown":{"position":"absolute","right":"0px","top":"initial","whiteSpace":"nowrap","maxHeight":300,"overflowY":"auto","display":"none","zIndex":"3","@md-only":{"right":"0px"},"@sm-only":{"right":"0px"},"width":240},"listItem":{"display":"block","textAlign":"left","marginBottom":"0"},"separator":{"marginTop":"small","marginBottom":"small"}},"dataAid":"MEMBERSHIP_SIGNOUT_LINK","script":"(function () {\n    window.onMembershipLogout = function () {\n      window.location.assign('\u002Fm\u002Flogout');\n    };\n    var onClickApplication = setInterval(function () {\n      var membershipSignOut = document.getElementById('n-42784311-membership-sign-out');\n      if (membershipSignOut && !membershipSignOut.onclick) {\n        membershipSignOut.onclick = window.onMembershipLogout;\n      }\n    }, 500);\n    setTimeout(function () {\n      return clearInterval(onClickApplication);\n    }, 1000);\n    \n  var cookieValue = void 0;\n  var cookie = \"info_c2=\";\n  var parsedCookies = document.cookie.split(\";\");\n  for (var i = 0; i \u003C parsedCookies.length; i++) {\n    var targetCookie = parsedCookies[i];\n    while (targetCookie.charAt(0) === \" \") {\n      targetCookie = targetCookie.substring(1, targetCookie.length);\n    }\n    if (targetCookie.indexOf(cookie) === 0) {\n      var rawCookie = targetCookie.substring(cookie.length, targetCookie.length);\n      cookieValue = rawCookie && JSON.parse(decodeURIComponent(rawCookie));\n    }\n  }\n    var membershipEmail = cookieValue && cookieValue.contactEmail;\n    var firstName = cookieValue && cookieValue.nameFirst;\n    var lastName = cookieValue && cookieValue.nameLast;\n    \n  var utilitiesMenu = document.getElementById('n-42784311-utility-menu');\n  var signedOutDropdown = utilitiesMenu.querySelector(\".membership-icon-logged-out\");\n  var signedInDropdown = utilitiesMenu.querySelector(\".membership-icon-logged-in\");\n  if (cookieValue) {\n    signedOutDropdown.style.display = 'none';\n    signedInDropdown.style.display = 'block';\n    var membershipEmailField = utilitiesMenu.querySelector('#n-42784311-membership-email');\n    if (membershipEmailField && membershipEmailField.firstChild) {\n      membershipEmailField.firstChild.innerText = membershipEmail;\n      membershipEmailField.firstChild.style[\"text-overflow\"] = \"ellipsis\";\n      membershipEmailField.firstChild.style[\"overflow\"] = \"hidden\";\n      membershipEmailField.firstChild.style[\"white-space\"] = \"nowrap\";\n    }\n    var membershipHeaderText = utilitiesMenu.querySelector('#n-42784311-membership-header');\n    if (membershipHeaderText && membershipHeaderText.firstChild) {\n      membershipHeaderText.firstChild.style[\"font-weight\"] = \"bold\";\n    }\n  } else {\n    signedInDropdown.style.display = 'none';\n    signedOutDropdown.style.display = 'block';\n  }\n  \n    \n  })()","widgetId":"d40eb72d-bbbe-4ad0-8d41-f338eca2705b","section":"default","category":"accent","locale":"en-US","renderMode":"PUBLISH"},{"widgetId":"d40eb72d-bbbe-4ad0-8d41-f338eca2705b","widgetType":"HEADER","widgetPreset":"header9","section":"default","category":"accent","fontSize":"medium","fontFamily":"alternate","group":"UtilitiesMenu","groupType":"Menu","websiteThemeOverrides":{},"widgetThemeOverrides":{}});