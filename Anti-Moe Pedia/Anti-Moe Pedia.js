(function($, mw) { 
    $("#p-personal ul").append('<li id="pt-talk"><a href="/Talk:%E8%AE%A8%E8%AE%BA%E7%89%88">讨论版</a></li><li id="pt-recent-changes"><a href="/Special:%E6%9C%80%E8%BF%91%E6%9B%B4%E6%94%B9">最近更改</a></li><li id="pt-special"><a href="/Special:%E7%89%B9%E6%AE%8A%E9%A1%B5%E9%9D%A2">特殊页面</a></li>');
 
    var str = window.location.href;
    str = str.substring(str.indexOf(".org/") + 5);
    $("#footer-info-lastmod").wrap('<a href="/index.php?title='+str+'&action=history"></a>');
    $("#firstHeading").append('<span class="mw-editsection">[<a href="/index.php?title='+str+'&action=edit">编辑</a>]</span>');
    
    var topTitle = document.getElementById("firstHeading");
    topTitle = topTitle.innerText;
    topTitle = topTitle.substring(0, topTitle.lastIndexOf("["));
    $("div#p-personal").prepend('<span class="topTitle">'+topTitle+'</span>');
})(jQuery, mediaWiki);
