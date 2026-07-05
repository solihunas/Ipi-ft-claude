/* ─── IPI Digital: language switch (ID/EN) + price formatter ─── */
(function(){
  var LANG_KEY='ipi_lang';
  var RATE=12000; // kurs Rp -> $

  function getLang(){ return localStorage.getItem(LANG_KEY)==='en' ? 'en' : 'id'; }

  function fmtMoney(rp){
    rp=Number(rp)||0;
    if(getLang()==='en'){
      return '$'+Math.round(rp/RATE).toLocaleString('en-US');
    }
    return 'Rp '+rp.toLocaleString('id-ID');
  }

  function applyLang(){
    var lang=getLang();
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key=el.getAttribute('data-i18n');
      var entry=window.I18N && window.I18N[key];
      if(entry && entry[lang]!=null) el.innerHTML=entry[lang];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key=el.getAttribute('data-i18n-placeholder');
      var entry=window.I18N && window.I18N[key];
      if(entry && entry[lang]!=null) el.setAttribute('placeholder', entry[lang]);
    });

    document.querySelectorAll('[data-price-rp]').forEach(function(el){
      el.textContent=fmtMoney(el.getAttribute('data-price-rp'));
    });

    document.querySelectorAll('.lang-switch').forEach(function(sw){
      sw.classList.toggle('is-en', lang==='en');
      sw.setAttribute('aria-checked', lang==='en' ? 'true':'false');
    });

    document.dispatchEvent(new CustomEvent('ipi-lang-change',{detail:{lang:lang}}));
  }

  function setLang(l){
    localStorage.setItem(LANG_KEY, l==='en' ? 'en':'id');
    applyLang();
  }

  function wireSwitches(){
    document.querySelectorAll('.lang-switch').forEach(function(sw){
      if(sw._ipiWired) return;
      sw._ipiWired=true;
      sw.setAttribute('role','switch');
      sw.setAttribute('tabindex','0');
      sw.addEventListener('click', function(){ setLang(getLang()==='en' ? 'id':'en'); });
      sw.addEventListener('keydown', function(e){
        if(e.key==='Enter'||e.key===' '){ e.preventDefault(); setLang(getLang()==='en' ? 'id':'en'); }
      });
    });
  }

  window.ipiLang={ get:getLang, set:setLang };
  window.ipiFmtMoney=fmtMoney;
  window.ipiApplyLang=applyLang;

  document.addEventListener('DOMContentLoaded', function(){
    wireSwitches();
    applyLang();
  });
})();
