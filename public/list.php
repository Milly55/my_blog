<?php
include "../part/head.php";
?>
<link rel="stylesheet" href="/resource/list.css">


<div class="list-bar">
    <div class="list-title flex">
    <h1>개시물 리스트</h1>
</div>
    <div class="list-box con flex">
        <ul class="flex">
        <?php for ( $i = 3; $i >= 1; $i-- ){ ?>
        <li class="flex"><a href="/detail.php?id=<?=$i?>"><?=$i?>개시물</a>
        <div class="img-box" style="background-image:url(https://cdn.pixabay.com/photo/2020/04/09/11/42/dogs-5021084_960_720.jpg);"></div>
    </li>
        <?php } ?>
        
        </ul>
    </div>
</div>



<?php
include "../part/foot.php";
?>
