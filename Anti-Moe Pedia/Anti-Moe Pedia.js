(function($, mw) { 
    $("#p-personal ul").append('<li id="pt-talk"><a href="/Talk:讨论版">讨论版</a></li>');
    $("#p-personal ul").append('<li id="pt-recent-changes"><a href="/Special:最近更改">最近更改</a></li>');
    $("#p-personal ul").append('<li id="pt-special"><a href="/Special:特殊页面">特殊页面</a></li>');
    
    var str = window.location.href;
    str = str.substring(str.indexOf(".org/") + 5);
    $("#footer-info-lastmod").wrap('<a href="/index.php?title='+str+'&action=history"></a>');
    $("#firstHeading").append('<span class="mw-editsection">[<a href="/index.php?title='+str+'&action=edit">编辑</a>]</span>');
    
    var topTitle = document.getElementById("firstHeading");
    topTitle = topTitle.innerText;
    topTitle = topTitle.substring(0, topTitle.lastIndexOf("["));
    $("div#p-personal").prepend('<span class="topTitle">'+topTitle+'</span>');
})(jQuery, mediaWiki);
