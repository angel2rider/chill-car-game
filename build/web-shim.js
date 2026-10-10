/**
 * web-shim.js — Browser stand-in for the Electron window.api bridge
 * Persist to localStorage instead of disk/Steam. Some calls are no-ops.
 */
(function () {
  'use strict';

  var NS = 'slowroads.';

  function lsGet(key, fallback) {
    try {
      var raw = localStorage.getItem(NS + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(NS + key, JSON.stringify(value));
    } catch (e) {
      console.warn('[web-shim] localStorage quota/error:', e);
    }
  }

  function lsRemove(key) {
    try {
      localStorage.removeItem(NS + key);
    } catch (e) {}
  }

  var shim = {
    // Flags the renderer may check at startup
    isSteamDeck: false,
    hasDemoFile: false,
    isSupporter: false,

    quit: function () {
      // No window.close for security in some sandboxes; try both
      try { window.close(); } catch (e) {}
    },

    openExternal: function (url) {
      // Only allow http(s); open in a new tab
      if (typeof url === 'string' && /^https?:\/\//i.test(url)) {
        window.open(url, '_blank', 'noopener');
      }
    },

    getLanguage: function () {
      return Promise.resolve('english');
    },

    // ---- Profiles: localStorage, one JSON blob per key ----
    saveProfile: function (data) {
      lsSet('profiles.current', data.content !== undefined ? data.content : data);
      return Promise.resolve(true);
    },

    loadProfiles: function () {
      var current = lsGet('profiles.current', null);
      var list = [];
      if (current) list = [current];
      // Allow manually-imported profiles stored under profiles.imported
      var imported = lsGet('profiles.imported', []);
      if (Array.isArray(imported)) list = list.concat(imported);
      return Promise.resolve(list);
    },

    exportProfile: function (data) {
      var content = data && data.content !== undefined ? data.content : data;
      try {
        var blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'profile.roads';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
        return Promise.resolve(true);
      } catch (e) {
        return Promise.resolve(false);
      }
    },

    importProfile: function () {
      return new Promise(function (resolve) {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = '.roads,application/json';
        input.onchange = function () {
          var file = input.files && input.files[0];
          if (!file) { resolve(null); return; }
          var reader = new FileReader();
          reader.onload = function () {
            try {
              var obj = JSON.parse(reader.result);
              var imported = lsGet('profiles.imported', []);
              imported.push(obj);
              lsSet('profiles.imported', imported);
              resolve(obj);
            } catch (e) {
              console.warn('[web-shim] invalid profile file:', e);
              resolve(null);
            }
          };
          reader.onerror = function () { resolve(null); };
          reader.readAsText(file);
        };
        input.oncancel = function () { resolve(null); };
        input.click();
      });
    },

    // ---- Music: no local folder access from a web page; return empty ----
    setMusicDir: function () {
      console.info('[web-shim] local music folder not available in web build');
      return Promise.resolve(null);
    },
    getMusicList: function () {
      return Promise.resolve([]);
    },

    // ---- Radio streams: localStorage-backed ----
    getRadioList: function () {
      return Promise.resolve(lsGet('radio.streams', []));
    },
    setRadioList: function (data) {
      lsSet('radio.streams', data || []);
      return Promise.resolve(true);
    },

    // ---- Achievements: no-ops logged ----
    resetAchievements: function () { return Promise.resolve(undefined); },
    activateAchievement: function (id) {
      console.info('[web-shim] achievement unlock:', id);
      return Promise.resolve(undefined);
    },

    // ---- Stats: localStorage-backed integers ----
    setStat: function (data) {
      if (!data || typeof data.name !== 'string') return Promise.resolve(undefined);
      lsSet('stats.' + data.name, data.value | 0);
      return Promise.resolve(undefined);
    },
    getStat: function (name) {
      return Promise.resolve(lsGet('stats.' + name, 0) || 0);
    },
    storeStats: function () { return Promise.resolve(undefined); },
    resetStats: function () {
      var prefix = NS + 'stats.';
      var doomed = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(prefix) === 0) doomed.push(k);
      }
      doomed.forEach(lsRemove);
      return Promise.resolve(undefined);
    },

    reload: function () {
      location.reload();
    }
  };

  // Never redefine if a real bridge already exists (defensive)
  if (!window.api) {
    window.api = shim;
    console.info('[web-shim] window.api installed (localStorage-backed)');
  }
})();
