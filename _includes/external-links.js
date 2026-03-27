/* Open external http(s) links in a new tab; skip same-site, anchors, and mailto */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var host = window.location.hostname;
    document
      .querySelectorAll('.wrapper section a[href], .wrapper header a[href]')
      .forEach(function (a) {
        var href = a.getAttribute('href');
        if (!href || href.charAt(0) === '#') return;
        if (href.indexOf('mailto:') === 0) return;
        try {
          var u = new URL(href, window.location.href);
          if (u.protocol !== 'http:' && u.protocol !== 'https:') return;
          if (u.hostname === host) return;
          if (!a.getAttribute('target')) a.target = '_blank';
          if (a.getAttribute('target') === '_blank' && !a.getAttribute('rel'))
            a.setAttribute('rel', 'noopener noreferrer');
        } catch (e) {}
      });
  });
})();
