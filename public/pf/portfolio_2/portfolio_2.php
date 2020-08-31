<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/pf/portfolio_2/portfolio_2.css">
    <script type="module" src="/pf/portfolio_2/portfolio_2.js"></script>
    <title>B.portfolio</title>
</head>
<body>

<!-- <section class="side-page-box-1">
    <div class="side-box-1"><img src="https://milly55.github.io/img1/pf/portfolio/side-box-1.png" alt="">
        <div class="page-menu-box flex">
            <ul class="flex">
                <li  onclick="fnMove('1')"><a href="">Main</a></li>
                <li  onclick="fnMove('2')"><a href="" >About Me</a></li>
                <li><a href=""  onclick="fnMove('3')">Portfolio</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Media</a></li>
            </ul>
            <div class="side-bottom-img-1 flex">
           <div class="clors-icon"> <img src="https://milly55.github.io/img1/pf/portfolio/clors-1.png" alt=""></div>
                <img src="https://milly55.github.io/img1/pf/portfolio/sgni.png" alt=""></div>
        </div>
    </div>
</section> -->

<section class="page-menu-bar">
    <div class="page-menu-box con flex">
        <ul class="flex">
            <li class="btn-scroll" btn-index="1">Main</li>
            <li class="btn-scroll" btn-index="2">About Me</li>
            <li class="btn-scroll" btn-index="3">Portfolio</li>
            <li  class="btn-scroll" btn-index="4">Design</li>
            <li class="btn-scroll" btn-index="5">Media</li>
        </ul>
    </div>
</section>


<div class="side-page-box-bg"></div>
<section class="section main-box"  id="div1" section-index="1">
    <div class="logo-box flex">
    <img src="https://milly55.github.io/img1/pf/portfolio/logo-1.png" alt="">
    </div>
    <div class="main-txt flex ">
        <div class="item-box-2 btn-scroll" btn-index="2" ><img src="https://milly55.github.io/img1/pf/portfolio/item-2.png" alt=""></div>
        <div class="main-bottom-txt">2020 김보영 포트폴리오</div>
        <div class="txt-1 flex">
            <ul class="btn-txt-1 flex">
                <li>WELCOME</li>
                <li><img src="https://milly55.github.io/img1/pf/portfolio/mainimg1.png" alt=""></li>
            </ul>
            <ul class="btn-txt-2 flex">
                <li>MY</li>
                <li>PORTFOLIO</li>
            </ul>
        </div>
    </div>
</section>

<section class="section about-bar-1 " section-index="2">
    <div class="about-box-1 con">
        <div class="about-title-box  flex">
            <div class="about-title-1 flex"> <img src="https://milly55.github.io/img1/pf/portfolio/sgni.png" alt=""> <span>ABOUT ME</span>  </div>
        </div>
        <div class="profile-box flex">
            <div class="img-box-1">
                <img src="https://milly55.github.io/img1/pf/portfolio/profile.png" alt="">
                <div class="img-box-background"></div>
            </div>
            <div class="profile-txt-box ">
                <div class="profile-title-1 flex"><img src="https://milly55.github.io/img1/pf/portfolio/sgni.png" alt=""> <span>Profile</span></div>
                <nav class="box-1 flex">
                <ul class="profile-txt-1">
                    <li>NAME</li>
                    <li>BIRTH</li>
                    <li>PHONE</li>
                    <li>EMAIL</li>
                    <li>ADDRESS</li>
                    <li>BLOG</li>
                    <li>WIKI</li>
                    <li>EDUCATION</li>
                </ul>
                <ul class="profile-txt-2">
                    <li>김보영</li>
                    <li>1995.09.13</li>
                    <li>010-2965-2600</li>
                    <li>mn02006@naver.com</li>
                    <li>대전광역시 서구</li>
                    <li>https://mwdb5.blog.oa.gg/</li>
                    <li>https://to2.kr/bkU</li>
                    <li>대전 SBS아카데미 컴퓨터아트학원 웹 과정 수료</li>
                </ul>
                </nav>
                <div class="skill-button flex">
                    <span  class="btn-scroll" btn-index="6">Skill</span>
                </div>
            </div>
        </div>
    </div>
    <section class="section skill-box-1 flex"  section-index="6">
    <div class="skill-title-1 flex"> <img src="https://milly55.github.io/img1/pf/portfolio/sgni.png" alt=""> <span>SKILL</span>  </div>
    </section>
</section>

<!-- <script>
    function fnMove(seq) {
        var offset = $("#div" + seq).offset();
        $("html, body").animate({ scrollTop: offset.top }, 400);
    }
</script> -->
</body>
</html>
