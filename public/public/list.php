<?php
include "../part/head.php";



$dbHost = "127.0.0.1";
$dbPort = 3306;
$dbId = "young";
$dbPw = "young123414";
$dbName = "blog";

$dbConn = mysqli_connect($dbHost, $dbId, $dbPw, $dbName, $dbPort) or die("DB CONNECTION ERROR");

if (isset($_GET['cateItemId']) == false) {
    $_GET['cateItemId'] = 1;
}


$cateItemId = $_GET['cateItemId'];

$sql = "
SELECT name
FROM cateItem
WHERE id = '{$cateItemId}'
";
$rs = mysqli_query($dbConn, $sql);
$row = mysqli_fetch_assoc($rs);
$cateItemName = $row['name'];

$sql = "
SELECT *
FROM article
WHERE cateItemId = '{$cateItemId}'
ORDER BY id DESC
";

$rs = mysqli_query($dbConn, $sql);
$rows = [];
while ( true ) {
    $row = mysqli_fetch_assoc($rs);
    if ( $row == null) {
        break;
    }
    $rows[] = $row;
}
?>






<div class="main-list-bar con">
    <h1 style="text-align: center;">List Of Initiators</h1>
    <div class="main-list-box">
    <div class="cate-list-lnke flex">
    <ul class="flex">
        <li class="flex"> 카테고리 리스트</li>
        <li class="flex">-<a href="/list.php?cateItemId=1"> 일상 개시물</a></li>
        <li class="flex">-<a href="/list.php?cateItemId=2"> 프로그래밍 개시물</a></li>
        <li class="flex">-<a href="/list.php?cateItemId=3"> 디자인 개시물</a></li>
    </ul>
    <div class="list-box flex">
        <div class="lists-1 sflex"><?=$cateItemName?>개시물</div>
        
<?php if ( empty($rows) ) { ?>
<div class="list-none con flex">
    게시물이 존재하지 않습니다.
</div>

<?php } else { ?>
<div class="list-bar con">
    <div class="list-box-1 flex">
    <ul class="flex flex-1-0-0">
        <?php foreach ( $rows as $row ) { ?>
        <li class="flex flex-1-0-0">  
            <a class="flex" href="/detail.php?id=<?=$row['id']?>">
            <img src="<?=$row['thumbImgUrl']?>" alt="">
                <div class="list-txt-1 flex">
                <div class="title-box flex"> <?=$row['title']?></div> 
                  <br>
                  <div class="summary-box flex"><?=$row['summary']?></div> 
                  <div class="preparation-date flex">
                      <ul class="flex">
                          <li><?=$row['regDate']?></li>
                          <li><?=$row['updateDate']?></li>
                      </ul>
                  </div>

                </div>
            </a>
        </li>
        <?php } ?>
    </ul>
    </div>
</div>
<?php }
?>
    </div>
    </div>
    </div>
</div>





               




<link rel="stylesheet" href="/resource/list.css">


<link rel="stylesheet" href="/resource/list_cate.css">



<?php
include "../part/foot.php";
?>
