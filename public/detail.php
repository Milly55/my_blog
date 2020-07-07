<?php
include "../part/head.php";
?>


<?php

$conn = mysqli_connect("site13.blog.oa.gg", "site13", "sbs123414", "site13", 3306); 
mysqli_query($conn, "SET NAMES utf8mb4");


$id =  $_GET['id'];

$qsl1 = "
SELECT *
FROM article
WHERE id = {$id}
";
$rs = mysqli_query($conn, $qsl1);
$row1 = mysqli_fetch_assoc($rs);



$sql2 ="
SELECT *
FROM cateItem
WHERE id = {$row1['cateItemId']}
";

$rs2 = mysqli_query($conn, $sql2);
$row2 = mysqli_fetch_assoc($rs2);




?>
<link rel="stylesheet" href="/list_cate.php">
<link rel="stylesheet" href="/resource/detail.css">
<!-- 하이라이트 라이브러리 추가, 토스트 UI 에디터에서 사용됨 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css">

<!-- 하이라이트 라이브러리, 언어 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/css.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/xml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/php.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/php-template.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/sql.min.js"></script>

<!-- 코드 미러 라이브러리 추가, 토스트 UI 에디터에서 사용됨 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css" />

<!-- 토스트 UI 에디터, 자바스크립트 코어 -->
<script src="https://uicdn.toast.com/editor/latest/toastui-editor-viewer.min.js"></script>

<!-- 토스트 UI 에디터, 신택스 하이라이트 플러그인 추가 -->
<script src="https://uicdn.toast.com/editor-plugin-code-syntax-highlight/latest/toastui-editor-plugin-code-syntax-highlight-all.min.js"></script>

<!-- 토스트 UI 에디터, CSS 코어 -->
<link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />







<div class="list-detail-1 con"> 
  <div class="title-box">
List
  <div class="locar flex">
  카테고리 :
  <a href="/list.php?cateItemId=<?=$row2['id']?>"><?=$row2['name']?></a>
  </div>
  <h1><?=$row1['title']?></h1>
<div class="list-go-box">
<div class="main-list-go flex">
  <a href="/list.php"><i class="fas fa-arrow-left"></i> 리스트로 가기</a>
</div>
</div>
<div class="back-box flex">
  <li><a href="#"  onclick="history.back();"> BACK</a></li>
</div>
<div class="date-box flex">
    <div>
        등록날짜 : <?=$row1['regDate']?>
    </div>
    <div>
        수정날짜 : <?=$row1['updateDate']?>
    </div>
  </div>
    <div class="Writer">
        작성자 : KBY
    </div>
  </div>





<div class="content-box ">
    <div style="display:none;" id="origin1">
    <?=$row1['body']?>
    </div>
    <div id="viewer1"> 
  </div>
</div>

 </div>



<script>
console.clear();

// 유튜브 플러그인 시작
function youtubePlugin() {
  toastui.Editor.codeBlockManager.setReplacer("youtube", function (youtubeId) {
    // Indentify multiple code blocks
    const wrapperId = "yt" + Math.random().toString(36).substr(2, 10);

    // Avoid sanitizing iframe tag
    setTimeout(renderYoutube.bind(null, wrapperId, youtubeId), 0);

    return '<div id="' + wrapperId + '"></div>';
  });
}

function renderYoutube(wrapperId, youtubeId) {
  const el = document.querySelector('#' + wrapperId);
  
  var urlParams = getUrlParams(youtubeId);

  var width = '100%';
  var height = '100%';
  
  if ( urlParams.width ) {
    width = urlParams.width;
  }

  if ( urlParams.height ) {
    height = urlParams.height;
  }
  
  var maxWidth = 500;
  
  if ( urlParams['max-width'] ) {
    maxWidth = urlParams['max-width'];
  }
  
  var ratio = '16-9';
  
  if ( urlParams['ratio'] ) {
    ratio = urlParams['ratio'];
  }
  
  var marginLe
  
  if ( youtubeId.indexOf('?') !== -1 ) {
    var pos = youtubeId.indexOf('?');
    youtubeId = youtubeId.substr(0, pos);
  }
  
  el.innerHTML = '<div style="max-width:' + maxWidth + 'px; margin-left:auto; margin-right:auto;" class="ratio-' + ratio + ' relative"><iframe class="abs-full" width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
}
// 유튜브 플러그인 끝

// repl 플러그인 시작
function replPlugin() {
  toastui.Editor.codeBlockManager.setReplacer("repl", function (replUrl) {
    var postSharp = "";
    if ( replUrl.indexOf('#') !== -1 ) {
      var pos = replUrl.indexOf('#');
      postSharp = replUrl.substr(pos);
      replUrl = replUrl.substr(0, pos);
    }

    if ( replUrl.indexOf('?') === -1 ) {
      replUrl += "?dummy=1";
    }

    replUrl += "&lite=true";
    replUrl += postSharp;

    // Indentify multiple code blocks
    const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;

    // Avoid sanitizing iframe tag
    setTimeout(renderRepl.bind(null, wrapperId, replUrl), 0);

    return "<div id=\"" + wrapperId + "\"></div>";
  });
}

function renderRepl(wrapperId, replUrl) {
  const el = document.querySelector(`#${wrapperId}`);

  var urlParams = getUrlParams(replUrl);

  var height = 400;

  if ( urlParams.height ) {
    height = urlParams.height;
  }

  el.innerHTML = '<iframe height="' + height + 'px" width="100%" src="' + replUrl + '" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>';
}
// repl 플러그인 끝

// codepen 플러그인 시작
function codepenPlugin() {
  toastui.Editor.codeBlockManager.setReplacer("codepen", function (codepenUrl) {
    // Indentify multiple code blocks
    const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;

    // Avoid sanitizing iframe tag
    setTimeout(renderCodepen.bind(null, wrapperId, codepenUrl), 0);

    return '<div id="' + wrapperId + '"></div>';
  });
}

function renderCodepen(wrapperId, codepenUrl) {
  const el = document.querySelector(`#${wrapperId}`);

  var urlParams = getUrlParams(codepenUrl);

  var height = 400;

  if ( urlParams.height ) {
    height = urlParams.height;
  }
  
  var width = '100%';

  if ( urlParams.width ) {
    width = urlParams.width;
  }
  
  if ( !isNaN(width) ) {
    width += 'px';
  }
  
  if ( codepenUrl.indexOf('#') !== -1 ) {
    var pos = codepenUrl.indexOf('#');
    codepenUrl = codepenUrl.substr(0, pos);
  }

  el.innerHTML = '<iframe height="' + height + '" style="width: ' + width + ';" scrolling="no" title="" src="' + codepenUrl + '" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>';
}
// repl 플러그인 끝

// lib 시작
String.prototype.replaceAll = function(org, dest) {
  return this.split(org).join(dest);
}

function getUrlParams(url) {
  url = url.trim();
  url = url.replaceAll('&amp;', '&');
  if ( url.indexOf('#') !== -1 ) {
    var pos = url.indexOf('#');
    url = url.substr(0, pos);
  }
  
  var params = {};
  
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
  return params;
}
// lib 끝

var editor1__initialValue = $('#origin1').html();
var editor1 = new toastui.Editor({
  el: document.querySelector("#viewer1"),
  height: "600px",
  viewer:true,
  initialValue: editor1__initialValue,
  plugins: [toastui.Editor.plugin.codeSyntaxHighlight, youtubePlugin, replPlugin, codepenPlugin]
});
</script>
<?php
include "../part/foot.php";
?>


