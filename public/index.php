<?php
include "../part/head.php";



$dbHost = "site13.blog.oa.gg";
$dbPort = 3306;
$dbId = "site13";
$dbPw = "sbs123414";
$dbName = "site13";

$dbConn = mysqli_connect($dbHost, $dbId, $dbPw, $dbName, $dbPort) or die("DB CONNECTION ERROR");



$sql = "
SELECT *
FROM article
ORDER BY id DESC
LIMIT 2
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
<link rel="stylesheet" href="/resource/index.css">







<!-- 이미지 슬라이더 바 -->
<div class=" slider-bar  ">
    <div class="slider-box-1 ">
        <div class="active" style="background-image:url(https://ifh.cc/g/78sMc5.jpg);">
        <div class="btn-txt-bar flex">
        <div class="btn-txt-box flex">
            <div class="btn-txt-1">Welcome D&B 블로그</div>
        </div>
        </div>
    </div>
        <div style="background-image:url(https://ifh.cc/g/xjiI1o.jpg);">
        <div class="btn-txt-bar flex">
        <div class="btn-txt-box flex">
            <div class="btn-txt-1">Welcome D&B 블로그</div>
        </div>
        </div>
    </div>
        <div style="background-image:url(https://ifh.cc/g/TpZJV3.jpg);">
        <div class="btn-txt-bar flex">
        <div class="btn-txt-box flex">
            <div class="btn-txt-1">Welcome D&B 블로그</div>
        </div>
        </div>
    </div>
        <div style="background-image:url(https://ifh.cc/g/j8JzsH.jpg); ">
        <div class="btn-txt-bar flex">
        <div class="btn-txt-box flex">
            <div class="btn-txt-1">Welcome D&B 블로그</div>
        </div>
        </div>
    </div>
    </div>
    <div class="side-bar">
        <div class="flex"><span><i class="fas fa-arrow-left"></i></span></div>
        <div class="flex" style="justify-content: flex-end;"><span><i class="fas fa-arrow-right"></i></span></div>
    </div>
</div>




<div class="recent-list-bar con">
<div class="recent-title con flex">
            <h2 style="padding:10px;">최근개시물 <i class="fas fa-book"></i></h2>
           </div>
        <div class="recent-list-box">
            <div class="recent-list flex">
            <?php foreach($rows as $aa) { ?>
                <ul class="flex">
                    <li class="flex" style="padding-top:20px;"><a href="/detail.php?id=<?=$aa['id']?>"><img src="<?=$aa['thumbImgUrl']?>" alt=""></a></li>
                    <li class="flex" style="font-weight: bold; font-size: 20px;"><a href="/detail.php?id=<?=$aa['id']?>"><?=$aa['title']?></a></li>
                    <li><a href="/detail.php?id=<?=$aa['id']?>"></a></li>
                </ul>
                
            <?php } ?>
            </div>

        </div>
    </div>


    <div class="design-list-box con flex">
        <div class="design-box flex">
            <div class="design-img-box" style="background-image:url(https://milly55.github.io/img1/blog/article/design/summerbanner.png.png);"></div>
        </div>
    </div>

    <?php
include "../part/foot.php";
?> 

                

    

