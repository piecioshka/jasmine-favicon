/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Set favicon on page *http://pivotal.github.io/jasmine/*
 */
(function () {
    "use strict";

    /**
     * URL to favicon.
     * @type {string}
     */
    var FAVICON = chrome.extension.getURL("images/jasmine-favicon.png");

    /**
     * Create <link> tag.
     * @returns {HTMLElement}
     */
    function createLinkTag() {
        var tag = document.createElement("link");
        tag.setAttribute("rel", "shortcut icon");
        tag.setAttribute("type", "image/x-icon");
        tag.setAttribute("href", FAVICON);
        return tag;
    }

    /**
     * Append tag <link> with favicon to <head> tag.
     */
    function appendFavicon() {
        var linkTag = createLinkTag();
        document.getElementsByTagName("head")[0].appendChild(linkTag);
    }

    /**
     * Go Go Go!!!
     */
    appendFavicon();

}());

