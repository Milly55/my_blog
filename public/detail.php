<?php
include "../part/head.php";
?>
<?php

$conn = mysqli_connect("site13.blog.oa.gg", "site13", "sbs123414", "site13", 3306);
mysqli_query($conn, "SET NAMES utf8mb4");

$id =  $_GET['id'];
$sql ="
SELECT *
FROM article
WHERE id = {$id}
";

$rs = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($rs);
?>
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

<div class="back-1 flex">
  <a href="/list.php">리스트</a>
</div>

<div class="front-1 flex">
  <li><a href="#"  onclick="history.back();">BACK</a></li>
</div>


<div class="list-detail-1 con"> 
<div class="title-box">
List
<div class="locar">카테고리 :
<a href="/list_cate.php?cateItemId=1">일상</a>
</div>
<h1><?=$row['title']?></h1>
<div class="date-box flex">
    <div>
        등록날짜 : <?=$row['regDate']?>
    </div>
    <div>
        수정날짜 : <?=$row['updateDate']?>
    </div>
  </div>
    <div class="Writer">
        작성자 : KBY
    </div>
</div>




<div class="content-box">
    <div style="display:none;" id="origin1">
    <?=$row['body']?>
    </div>
    <div id="viewer1"> 
  </div>
</div>

 </div>



<script>
var editor1__initialValue = $('#origin1').html();
var editor1 = new toastui.Editor({
  el: document.querySelector('#viewer1'),
  height: '600px',
  initialValue: editor1__initialValue,
  viewer:true,
  plugins: [toastui.Editor.plugin.codeSyntaxHighlight]
});
</script>
<?php
include "../part/foot.php";
?>
