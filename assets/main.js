(function () {
  "use strict";

  // ---------- Theme toggle ----------
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function label() {
    if (!btn) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    btn.textContent = next === "dark" ? "Dark mode" : "Light mode";
    btn.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
    label();
  }

  // ---------- Papers ----------
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function isTodo(v) { return v === "TODO"; }

  function todo(what) { return el("span", "todo", "TODO: " + what); }

  function link(href, text) {
    var a = el("a", null, text);
    a.href = href;
    return a;
  }

  function coauthorLine(list) {
    if (isTodo(list)) { var t = el("p", "coauthors"); t.appendChild(todo("coauthors")); return t; }
    if (!list || !list.length) return null;
    var p = el("p", "coauthors");
    p.appendChild(document.createTextNode("with "));
    list.forEach(function (c, i) {
      if (i > 0) p.appendChild(document.createTextNode(i === list.length - 1 ? (list.length > 2 ? ", and " : " and ") : ", "));
      p.appendChild(c.url ? link(c.url, c.name) : document.createTextNode(c.name));
    });
    return p;
  }

  function paperLinks(p) {
    var wrap = el("p", "paper-links");
    var items = [["pdf", "Draft (PDF)"], ["slides", "Slides"], ["ssrn", "SSRN"]];
    items.forEach(function (it) {
      var v = p[it[0]];
      if (!v) return;
      wrap.appendChild(isTodo(v) ? todo(it[1]) : link(v, it[1]));
    });
    return wrap.childNodes.length ? wrap : null;
  }

  function titleNode(p) {
    var h = el("h3", "paper-title");
    if (isTodo(p.title)) { h.appendChild(todo("paper title")); return h; }
    var href = (p.pdf && !isTodo(p.pdf)) ? p.pdf : (p.ssrn || null);
    h.appendChild(href ? link(href, p.title) : document.createTextNode(p.title));
    if (p.jmp) h.appendChild(el("span", "jmp", "Job Market Paper"));
    return h;
  }

  function renderWorking(list, mount) {
    list.forEach(function (p) {
      var art = el("article", "paper");
      art.appendChild(titleNode(p));
      var co = coauthorLine(p.coauthors); if (co) art.appendChild(co);
      if (p.status) art.appendChild(el("p", "status", p.status));
      if (p.abstract) {
        var d = el("details", "abstract");
        d.appendChild(el("summary", null, "Abstract"));
        var body = el("div", "abstract-body");
        body.appendChild(isTodo(p.abstract) ? todo("abstract") : el("p", null, p.abstract));
        d.appendChild(body);
        art.appendChild(d);
      }
      var l = paperLinks(p); if (l) art.appendChild(l);
      mount.appendChild(art);
    });
  }

  function renderWip(list, mount) {
    list.forEach(function (p) {
      var art = el("article", "paper wip");
      art.appendChild(titleNode(p));
      var co = coauthorLine(p.coauthors); if (co) art.appendChild(co);
      if (p.note) {
        var n = el("p", "status");
        n.appendChild(isTodo(p.note) ? todo("status note") : document.createTextNode(p.note));
        art.appendChild(n);
      }
      var l = paperLinks(p); if (l) art.appendChild(l);
      mount.appendChild(art);
    });
  }

  var wp = document.getElementById("working-papers-list");
  var wip = document.getElementById("wip-list");
  if (wp && window.WORKING_PAPERS) renderWorking(window.WORKING_PAPERS, wp);
  if (wip && window.WORK_IN_PROGRESS) renderWip(window.WORK_IN_PROGRESS, wip);
})();
