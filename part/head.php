<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>블로그</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" href="/resource/common.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   <script src="/resource/common.js"></script>
   <link rel="shortcut icon" href="/resource/img/favicon.png">
</head>
<body>
    <!--모바일 메뉴바-->
<div class="mobile-top-bar flex">
<div class="logo-box flex"><a href="/"><img src="https://ifh.cc/g/OKu0GT.png alt=" style="width: 60px; height: 50px;"></a></div>
        <a href="#" onclick="return false;" class="btn-toggle-mobile-side-bar flex">
            <div></div>
            <div></div>
            <div></div>
        </a>
    </div>
    <div class="mobile-side-menu-bar-bg visible-sm-down">
    </div>
    <div  class="mobile-side-menu-bar visible-sm-down flex">
        <ul class="flex">
            <li class="flex "><a href="/">Home</a></li>
            <li class="flex "><a href="#">list</a>
            <ul class="flex ">
                <li class="flex " style=" border-bottom: 1px solid #afafaf;"><a href="http://localhost:8077/list_cate.php?cateItemId=1"> 일상</a></li>
                <li class="flex " style=" border-bottom: 1px solid #afafaf;"><a href="http://localhost:8077/list_cate.php?cateItemId=2"> 프로그래밍</a></li>
                <li class="flex "><a href="http://localhost:8077/list_cate.php?cateItemId=3">디자인</a> </li>
            </ul>
        </li>
            <li class="flex "><a href="/about me.php">About Me</a></li>
            <li class="flex "><a href="/portfolio.php">Portfolio</a></li>
            <li class="flex "><a href="/daily life.php">Daily Life</a>  </li>
        </ul> 
        </div>
        <!--PC 탑바-->
    <div class="top-bar ">
    <div class="logo-box flex"><a href="/"><img src="https://ifh.cc/g/PIALb8.png" alt="" style="width: 100px; height: 80px;"></a></div>
    <div class="menu-bar ">
    <nav class="menu-box-1 ">
    <ul class="flex flex-1-0-0 ">
        <li class="flex "><a href="/">Home</a></li>
        <li class="flex  "><a href="/about me.php" >About Me</a></li>
        <li class="flex "><a href="/list.php" >List</a></li>
        <li class="flex  "><a href="/portfolio.php" >Portfolio</a></li>
        <li class="flex  "><a href="/daily life.php" >daily life</a></li>
    </ul> 
    </nav>
    </div>
</div>


