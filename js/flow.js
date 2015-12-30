/*
 *  Module: Calendar OAuth2.0 token flow
 *
 *  This script file post the redirect location which containing the OAuth2 access
 *  token back to window opener.
 *
 */
if (typeof window.oauthflow === 'undefined') {
  (function(document) {
    'use strict';
    var APP_ORIGIN = 'appOrigin';

    var OAuthFlow = window.oauthflow = {};

    OAuthFlow.handle = function(service) {
      var msg = document.location.toString();
      console.log('xxxxxxxxxx: ' + msg);

      window.opener.postMessage(msg, oauthflow.params[service][APP_ORIGIN]);
    }
  })(document);
}
