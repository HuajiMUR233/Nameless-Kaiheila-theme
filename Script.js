// ==UserScript==
// @name         开黑啦主题
// @updateURL    https://cdn.jsdelivr.net/gh/HuajiMUR233/Nameless-Kaiheila-theme@main/Script.js
// @downloadURL  https://cdn.jsdelivr.net/gh/HuajiMUR233/Nameless-Kaiheila-theme@main/Script.js
// @homepageURL  https://github.com/HuajiMUR233/Nameless-Kaiheila-theme
// @source       https://github.com/HuajiMUR233/Nameless-Kaiheila-theme
// @version      11.45.14
// @description  开黑啦主题
// @author       Huaji_MUR233
// @match        https://www.kaiheila.cn/app/*
// @icon         https://www.kaiheila.cn/app/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type='text/css';
    link.rel = 'stylesheet';
    link.href = "https://cdn.jsdelivr.net/gh/HuajiMUR233/Nameless-Kaiheila-theme@main/Nameless.css";
    head.appendChild(link);
})();
