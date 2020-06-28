(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxDeepAssign = nx.deepAssign || require('@feizheng/next-deep-assign');
  var nxRandomUa = nx.randomUa || require('@feizheng/next-random-ua');
  var DEFAULT_OPTIONS = {
    headers: { 'User-Agent': nxRandomUa }
  };

  nx.fetchWithRandomUa = function (inFetch) {
    return function (inUrl, inOptions) {
      var options = nxDeepAssign(null, DEFAULT_OPTIONS, inOptions);
      return inFetch(inUrl, options);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithRandomUa;
  }
})();