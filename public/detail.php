<?php
include "../part/head.php";
?>
<?php

$conn = mysqli_connect("127.0.0.1", "root", "", "blog", 3306);
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
  <li><a href="#">BACK</a></li>
  <li> <a href="#">NEXT</a></li>
</div>


<div class="list-detail-1 con"> 
<div class="title-box">
<div class="locar">List</div>
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




<div class="content-box flex">
    <div style="display:none;" id="origin1">
    <?=$row['body']?>
    </div>
    <div id="viewer1"> 
  </div>
</div>

 </div>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse animi placeat eos beatae excepturi dolorem eius accusantium autem ipsum fugit. Optio ad ipsum molestias dolorem doloribus at aperiam iure quibusdam!
Fugit quaerat ipsam unde distinctio vitae ut perspiciatis! Sequi ipsum harum saepe consequatur quasi enim possimus incidunt amet eaque quos numquam at cupiditate quis laboriosam, rem vel repellendus. Fuga, perspiciatis?
Libero eius facilis repellat voluptatem obcaecati, fuga possimus, hic optio repudiandae quam nam vitae pariatur voluptatibus magnam doloribus, deserunt quisquam necessitatibus ratione esse maiores! Dolores eligendi pariatur ipsa itaque tenetur!
Repudiandae autem molestias dolore at possimus vitae voluptatem, esse pariatur amet enim, sapiente unde incidunt, perferendis sunt! Corporis blanditiis natus dolor. Blanditiis voluptatibus quas veritatis alias unde aspernatur atque asperiores.
Consequatur corporis nobis aperiam officiis velit quod sint consequuntur eos omnis illum porro pariatur, doloribus, quas earum ad facere? Sunt mollitia ab quia dolor delectus nisi in adipisci qui quasi?
Consequatur sed maxime perspiciatis consequuntur nulla quis sapiente culpa, illum dolore veniam cum voluptates! Animi numquam obcaecati officiis modi facilis! Sunt cum maxime blanditiis. Incidunt eligendi illum doloribus ipsa voluptas.
Eveniet eligendi sequi voluptas veritatis, quis obcaecati necessitatibus nemo non laborum? Porro a accusantium, fugit corrupti modi, quidem quas architecto sunt dignissimos illum animi tempora, at harum minima cumque beatae.
Eius enim sed delectus, repellat dignissimos ut iste sint alias consequuntur suscipit dolore laborum optio illum aspernatur quis voluptatem omnis hic, atque expedita. Dignissimos eos magni dolorem repudiandae architecto esse.
Doloremque vero dignissimos aliquam vitae veritatis ipsam assumenda molestias placeat sapiente, molestiae deserunt velit vel ipsa. Numquam accusamus sint nemo saepe dolores perferendis voluptate. Aliquid ea veniam perferendis vitae ab.
Consequuntur animi distinctio magni earum? Voluptate veniam hic laudantium harum aut odit culpa nihil totam. Eos placeat qui nemo voluptatum a, eaque laborum ut eveniet neque molestiae quo exercitationem? Fugiat!
Amet, sunt possimus, facere cum incidunt exercitationem atque dolorem quam quod velit, itaque necessitatibus minima fuga id iste ducimus. Officia necessitatibus aliquam ab nisi placeat veniam maiores ducimus, facere laboriosam.
Quod ducimus beatae omnis porro a. Ullam, vel nisi quidem ea veritatis laborum quae ut iusto dicta cupiditate beatae blanditiis tempora tenetur pariatur nihil vitae, reprehenderit, nesciunt mollitia voluptate ducimus?
Dignissimos, a suscipit facilis modi dolor architecto temporibus accusamus placeat vero quasi ipsa, magni delectus distinctio cupiditate molestiae ratione enim similique minus porro, deleniti ab quos! Facilis error natus est?
Quam necessitatibus beatae vel, et itaque quos temporibus vero sint, ipsum quasi, similique atque! Nam quos magnam repellendus rerum distinctio perspiciatis impedit nisi, natus, accusantium sed vero enim. Quidem, voluptatem.
Quia nam quidem quam, delectus impedit ipsa, voluptates autem quo, aspernatur nesciunt deserunt numquam adipisci totam neque commodi! Ab quo modi quidem illum explicabo nesciunt cumque vitae corporis totam! Architecto.
Temporibus, vero eligendi? Et exercitationem, expedita fugiat officiis possimus atque cum amet, minima in, delectus consequatur quos libero. Error dolores excepturi deserunt. Assumenda eligendi consectetur nisi. Est, similique aspernatur. Iste!
Eos natus a odio mollitia et consectetur obcaecati nemo officia optio facere magnam incidunt, ab corrupti assumenda impedit, ducimus delectus voluptas nobis voluptates rerum modi dolorem tenetur ea! Repudiandae, dolores.
Delectus cum odio veniam ab? Temporibus expedita exercitationem amet excepturi quibusdam asperiores reiciendis voluptates! Perferendis assumenda beatae cumque ut, iusto sint maiores et dignissimos impedit voluptatibus consequuntur? Enim, odio ab.
Nulla distinctio dolor officia, maiores tempore eaque. Facere quo quod officia ab magnam maxime ipsa, delectus sit voluptas minima et natus tenetur impedit molestias quaerat officiis doloremque quas vero repudiandae.
Cumque excepturi ipsam ipsa praesentium eligendi nihil repudiandae animi nulla hic illum aliquam earum aperiam perferendis nostrum qui, rem alias molestiae doloremque? Nulla ea ipsum accusamus mollitia cum distinctio itaque!
Perspiciatis accusamus corrupti, aspernatur iure voluptates ex voluptatibus, necessitatibus aliquam ab sint nobis nesciunt, ipsam minus laborum harum ut non officia. Corrupti atque rem non sint ad. Deleniti, dolore suscipit.
Quam fugiat laborum at. Dicta similique, perferendis fugit quos voluptatum, voluptates laboriosam facere doloremque, omnis facilis tenetur sit numquam explicabo maiores ea blanditiis exercitationem eaque esse provident. Sapiente, deleniti culpa.
Totam accusantium veritatis unde. Animi ipsam sit, aliquam eum rem tempora! Praesentium consequuntur ex aperiam quam, sunt tenetur sequi doloribus quos provident voluptatibus doloremque error temporibus obcaecati vel quis laborum.
Veniam id suscipit fugit nihil laborum aut nisi. Officiis at natus ad, fuga odio dolorum tempore illum a illo eaque veritatis tempora mollitia ea eos harum voluptates culpa. Inventore, alias.
Autem magni at fugiat atque ut quasi eaque eos, hic maxime delectus ipsa ullam facere consectetur architecto assumenda cum rerum debitis corporis vel ab voluptatum saepe. Quas nihil fugiat dolor!
Laborum, odit? Temporibus ex et, autem iure inventore maiores, a laudantium necessitatibus pariatur dolorum fuga est voluptatum maxime alias id eaque deleniti. Soluta quos tempora quia, fuga nulla ratione sit.
Quo, adipisci? Reprehenderit explicabo incidunt quo eius corporis error adipisci expedita vel reiciendis aliquid veniam est quaerat accusantium dicta aperiam ullam, dignissimos repudiandae. Magnam, magni asperiores quo inventore minus ab.
Ad sequi enim, veniam vel dolor incidunt, error similique totam, sit vitae unde facilis quae beatae voluptates autem eius numquam commodi facere odit adipisci voluptatum rem explicabo? Ex, rem dolores!
A error temporibus ipsa, tempora natus porro magni possimus laudantium doloremque quis numquam, sit aliquam, odio ab vel. Enim libero fugit sunt cum ad nesciunt sit amet et sequi nam!
Dolorem rerum consectetur eligendi optio porro enim quos quibusdam cumque aut, natus ratione iusto necessitatibus. Magni modi reiciendis consequatur! Quasi autem maxime fugiat voluptatibus eum ea dicta quibusdam quae unde.
Delectus vitae dolorem, eius, pariatur blanditiis neque qui tempora autem numquam quasi molestiae provident unde voluptates? Officiis labore, magnam cumque aliquid, repudiandae earum debitis itaque magni dolore repellendus provident nihil?
Nostrum, mollitia laboriosam, iste velit quae quasi accusamus, id rerum dolorum doloribus explicabo unde sit doloremque in omnis modi? Aspernatur velit molestias voluptatum asperiores, animi nam adipisci rem eaque ad.
Fuga veniam maiores temporibus perferendis voluptas atque aut laudantium omnis modi, possimus quia quasi, necessitatibus doloribus alias fugit, ipsum earum in! Nesciunt ex facilis illo consectetur nobis provident odio culpa?
Eum perferendis reprehenderit harum quisquam veritatis facere mollitia maiores obcaecati corporis inventore consequuntur, illo a sequi eos! Dolore voluptates illum laboriosam minima quae, totam ipsum ducimus recusandae iure magni error?
Molestiae ipsa maxime iure, placeat eveniet voluptatibus ullam nostrum fugit veritatis, aut explicabo accusamus excepturi praesentium incidunt ut culpa repellendus modi non! Ex, sed quisquam. Voluptatibus earum exercitationem totam atque.
Nesciunt repudiandae nam reiciendis in, ipsam rem quam iste tenetur delectus, cupiditate alias voluptatum doloribus dolor, natus officiis adipisci optio culpa quisquam hic corrupti. Ipsa laudantium quibusdam aperiam aliquam quis.
Asperiores cum nesciunt at in vitae! Ratione reiciendis, accusamus exercitationem deleniti in dolores doloremque ipsum itaque quaerat laudantium! Deserunt labore quo harum nisi voluptatum qui inventore velit necessitatibus vitae quos.
Quo minus praesentium excepturi magnam accusamus maxime asperiores, voluptatem dignissimos eveniet quibusdam fugiat, ab harum eius sapiente rerum repellat adipisci eligendi. Sint cupiditate quo itaque ea laudantium excepturi repudiandae aut.
Saepe nesciunt perspiciatis, quia accusamus fugiat aut porro consectetur eos molestias provident molestiae aperiam ratione qui eaque aliquid, quas in dolor libero, debitis exercitationem amet? Perspiciatis mollitia nulla animi atque!
Provident vitae consectetur vero tempore iure similique itaque ad labore. Molestias accusantium temporibus quia corrupti expedita quisquam asperiores labore, voluptas saepe est doloremque laborum! Aspernatur, reiciendis. Dicta quaerat nemo commodi.
Molestiae repudiandae veritatis voluptatum sint, provident ab incidunt nihil consectetur at, voluptatem eius maiores. Eaque blanditiis, expedita, nostrum assumenda laboriosam nulla obcaecati ipsa veritatis harum corrupti voluptas unde perspiciatis ratione!
Vero a aut cumque nobis error voluptatum, vitae fugit est dolor quis nesciunt doloribus possimus hic pariatur porro enim eos ipsum. Soluta accusantium quam dolorum quaerat assumenda commodi quos animi.
Iure, molestias aliquid earum perspiciatis est similique ad voluptatum! Porro dolor illum eum corporis distinctio soluta cum sit, reiciendis assumenda nulla repellendus modi vel magni minus nam labore deserunt voluptate.
Totam doloribus voluptates beatae suscipit deserunt perferendis laborum laboriosam illum id accusamus facere consequuntur libero adipisci assumenda at tenetur, ipsum atque eum. Nobis ipsam impedit mollitia quisquam, blanditiis a temporibus?
Architecto suscipit error quidem a nihil eius facilis ipsa voluptatem eligendi dolorem temporibus facere adipisci corporis nesciunt dicta dolorum vitae et laborum, officia consequuntur aut quae! Atque quisquam placeat nam!
Eligendi, nostrum laborum blanditiis enim ratione quae. Minus eum explicabo alias, ex repudiandae reprehenderit eveniet ratione praesentium quod veniam ut modi voluptatum molestiae odit nisi odio iste qui cum neque.
Quae culpa dolorem vel earum maiores reprehenderit, quo omnis dolor magni id temporibus dolorum, officiis iusto, delectus harum dignissimos? Recusandae, laborum minima vero laboriosam iusto illo ullam cumque veritatis exercitationem?
Perferendis dolorem ut doloremque illo, labore sint laudantium architecto dolor illum delectus exercitationem odit hic similique eveniet, deleniti ipsam aliquid sit est! Ea tempora magni, inventore accusantium voluptatum nesciunt quisquam.
Aut ipsum harum at hic reprehenderit a, obcaecati magnam consequuntur! Delectus excepturi cum suscipit vitae explicabo exercitationem accusantium itaque obcaecati officia facere recusandae nihil, voluptates omnis rerum laboriosam architecto asperiores.
Debitis fugiat, error quasi at beatae odit blanditiis ducimus tenetur magni accusamus quis repellendus aut velit consequatur necessitatibus rerum earum omnis. Voluptatem necessitatibus totam mollitia earum? Hic, veniam asperiores. A.
Itaque ipsum molestias qui maxime, autem perspiciatis voluptatem quam asperiores esse soluta deserunt possimus nam, libero reprehenderit architecto tenetur laudantium. Quis, tenetur doloremque omnis modi molestias totam accusantium dolor neque.
Illum ex nulla nemo, pariatur dolorum incidunt et blanditiis totam ipsam maiores harum? Animi commodi eveniet ex nihil quo dolorem totam similique, sint asperiores inventore aperiam obcaecati labore a. Dicta.
Itaque deserunt corporis illo, pariatur impedit vero nisi. Labore incidunt provident, rem aperiam quidem dolore corporis reiciendis blanditiis aut maiores vel nesciunt laborum porro consectetur, quo magni est dolores nostrum.
Vero animi dolorum cupiditate delectus eos debitis, neque blanditiis nobis accusamus iusto quaerat corrupti, est, quis asperiores. Praesentium iste fugiat doloremque sequi, aspernatur repudiandae sit expedita corrupti vitae earum quaerat?
Aut expedita id eaque ullam provident debitis magni, inventore odit, ex possimus dicta accusantium temporibus libero sapiente vitae et cum delectus laboriosam, rerum dolores rem voluptatum aliquam? Sequi, incidunt aliquam.
Nostrum architecto perferendis pariatur sapiente quaerat magnam sequi, omnis facilis recusandae iste est molestias magni accusamus tempora exercitationem harum cumque repudiandae quod enim, incidunt corporis unde adipisci excepturi! Asperiores, fugiat.
Voluptatum nulla inventore accusantium ex rem deleniti neque repellat est provident quas! Dignissimos possimus modi eius quas facere odit praesentium dicta voluptas inventore, mollitia ullam harum consequatur saepe vero eum!
Debitis corporis nobis odio dolor recusandae accusantium. Quos unde itaque corrupti, adipisci eius, minus cumque aliquam natus quisquam deserunt fugiat pariatur, nisi autem illo laudantium a sit reiciendis reprehenderit sint.
Maxime doloribus qui aperiam quidem? Quasi vitae ipsa eligendi maxime optio, repellat obcaecati velit ipsum delectus quis reiciendis fugiat excepturi quae labore aut eos minima, corrupti error blanditiis sint voluptates?
Qui consequuntur libero rerum possimus cum ducimus vero. Cum dignissimos quisquam, ad nisi necessitatibus fuga, illo officiis repudiandae dicta nesciunt quae obcaecati similique, totam recusandae molestias eaque nemo iusto. Dignissimos?
Nemo voluptatum magnam nulla quia perspiciatis sint quaerat asperiores ratione eius natus quos accusamus qui beatae ipsum nobis, aspernatur sed, necessitatibus odit cumque minus laboriosam? Tempore cupiditate officia molestias aliquam!
Aperiam, minima aut, ducimus, et ratione earum maxime hic recusandae neque quod provident error at? Aliquam eaque doloribus ducimus corrupti itaque, nesciunt animi amet maxime. Illum minus eum maiores eveniet?
Expedita consequatur nostrum facere eaque provident atque autem? Nesciunt atque soluta, perspiciatis laborum nostrum tenetur! Animi, vero repellendus odio, excepturi impedit, veritatis adipisci sapiente est laborum dolorum aliquam minus nam.
Nobis eum porro tempora ullam nemo. Veritatis a tempore blanditiis nesciunt esse, recusandae ex veniam enim quo, iusto, harum odio. Officia temporibus laboriosam illum obcaecati rem quos reiciendis quidem nostrum?
Adipisci itaque expedita incidunt inventore, minus ipsum mollitia, perspiciatis maiores accusantium enim id delectus in officiis possimus blanditiis tempora aut asperiores dicta optio nostrum porro? Assumenda tempore sequi molestiae praesentium.
Beatae doloremque similique aliquid quaerat nobis impedit fugiat mollitia natus dolores? Alias autem distinctio eum accusantium velit quia temporibus molestiae? Sit quae laborum debitis architecto iste tenetur nemo labore hic!
Molestiae ut, at commodi dicta nulla omnis alias est odit accusantium numquam quaerat totam animi ipsam quibusdam facilis possimus quos, voluptates soluta nihil eos tempore cupiditate explicabo harum aspernatur? Iste.
Eum eos cupiditate necessitatibus id illum minima, ea amet possimus, deserunt soluta quidem consequuntur odio. Omnis odio aperiam exercitationem, non nulla dignissimos facere numquam reprehenderit deleniti ab modi, perferendis quod.
Mollitia aliquid magni explicabo laborum dolores eos optio eaque commodi distinctio illum totam repellendus architecto esse, fugit incidunt. Officia et culpa quis quas natus eaque voluptas eius sint nulla placeat!
Atque ratione cum nemo. Ratione cupiditate ad explicabo magnam optio, non vitae laborum iusto ullam id blanditiis? Explicabo optio laboriosam aut amet, rerum, delectus doloremque beatae aliquid earum ullam in?
Nihil neque possimus laborum, sint dicta doloribus temporibus illum rerum rem harum? Adipisci, minus? Quam omnis tempora corrupti repudiandae similique corporis soluta quod, adipisci eaque inventore modi fugit, veniam molestiae?
Aut atque id doloribus consequuntur dolore. Similique provident laborum omnis, natus aut voluptatum enim ipsa sapiente. Exercitationem mollitia quibusdam, magni inventore debitis est adipisci quia! Placeat architecto necessitatibus ea alias.
Fugit vitae nostrum magnam libero dignissimos ex hic eveniet, dolorem voluptatem quam ullam nobis. Mollitia harum vitae architecto sint! Assumenda illo dignissimos dolor odio optio voluptatibus reiciendis voluptatem totam laborum.
Facilis eligendi labore dolor temporibus eveniet praesentium obcaecati aut sit accusantium earum ipsa rerum, distinctio alias eos ducimus cumque. Sint ad similique ipsam ipsum dolores illo veniam aut deleniti doloremque!
Sequi, minus voluptatum. Nulla quos eos dicta molestias numquam autem minus perferendis. Nulla deleniti hic explicabo exercitationem, ad nam possimus saepe ullam ut culpa voluptates aut, corporis consequuntur harum veritatis!
Consequuntur, possimus? Similique incidunt, quasi in cupiditate voluptatum culpa odit neque dolorum architecto sint soluta eum explicabo? Saepe et quasi ex hic quas qui voluptate sunt dolores omnis, sapiente molestiae!
Ea error, numquam suscipit laborum vel totam neque minus incidunt rerum sint placeat quia, repellat velit. Incidunt nesciunt, ad deserunt id et dolores doloremque mollitia aut facilis rerum veniam modi.
Aspernatur magni obcaecati ea dignissimos doloribus quasi quae! Minus quos voluptates sapiente totam architecto magnam ad cum consequuntur veritatis fugiat officiis, sit temporibus aut, cupiditate iure explicabo quaerat ullam. Aperiam!
Facere eveniet labore sapiente ut, molestias velit recusandae totam facilis ducimus? Sapiente temporibus, aperiam eos rerum fugit impedit qui facilis amet culpa recusandae id quam dicta labore, laudantium ad quae!
Doloremque hic adipisci voluptates error possimus totam nihil nobis provident! Sit officia, reprehenderit voluptates omnis magnam dicta repudiandae eveniet illo fugiat, ex dignissimos hic accusantium animi aliquam saepe exercitationem perferendis?
Accusantium repudiandae dolores commodi sunt, eum, perspiciatis, natus molestiae harum aliquid neque inventore quasi laudantium expedita aut perferendis saepe placeat quisquam officiis magni itaque qui! Optio quae voluptates corrupti dolore.
Quis rerum sint laudantium repellat eum repellendus quia, aspernatur veniam autem minima magni dolore, nam libero. Illo et nobis temporibus exercitationem quisquam quas earum, facere unde minima inventore corrupti sed!
Labore, molestias assumenda nesciunt quis doloremque, iste possimus rem, esse reprehenderit nobis ab officia aliquam explicabo. Omnis amet eligendi eos iste optio a itaque in nesciunt odit numquam. Ea, voluptates.
Possimus porro exercitationem, quasi blanditiis impedit accusantium inventore earum magnam ut obcaecati? Tenetur facere omnis, possimus laboriosam deleniti necessitatibus nobis ipsam exercitationem accusantium nam, reiciendis illo, eos repellat adipisci et.
Porro id sequi fuga! Quae repellendus ex similique nostrum eum quaerat corrupti eos recusandae soluta cumque fugit architecto doloribus voluptas praesentium ullam laborum, vero natus nesciunt quisquam iste, minus aliquam.
Rem unde natus minus id tempora ea provident rerum dolores ex deleniti. Ducimus voluptates harum, ad placeat ipsa similique accusamus ex libero eligendi consequuntur, molestiae repellat, cupiditate odit consequatur voluptas.
Labore dicta voluptatum ducimus odio similique, corporis perspiciatis quidem quo! Ad dolorum, adipisci quod dicta quam magnam? Provident rem similique atque, sunt illo eius? Fugiat voluptates illum architecto neque asperiores.
Illo quisquam et tempora facere! Quas inventore, dignissimos temporibus, architecto ipsa explicabo adipisci enim neque obcaecati, id perferendis aut numquam deserunt voluptate cum impedit unde nulla iste assumenda repudiandae amet.
Quam consectetur, iusto atque, voluptatem saepe dolore nam quia officia odio quod tenetur autem minus? Laudantium pariatur ducimus blanditiis, sit molestiae, laboriosam dolorum necessitatibus ab harum consequatur tenetur veniam aperiam.
Suscipit culpa nesciunt minus deserunt laudantium velit nisi explicabo, illo aliquid, ipsa odit temporibus cum fugit amet illum necessitatibus sit placeat doloremque minima in quia laboriosam sunt. Ratione, deserunt consequatur.
Deserunt amet voluptatem et, similique harum fugit inventore temporibus quidem eveniet eos non veniam ratione ducimus ullam nulla eaque minima error sapiente numquam, corrupti reprehenderit. Deleniti, minima voluptas? Nam, laudantium?
Voluptas, dolorem. Sit iure reprehenderit vitae laboriosam impedit ex praesentium! Modi similique minus ipsam quibusdam doloremque delectus, vel cupiditate, voluptatem quas officia harum nesciunt. Praesentium qui nihil ad? Consectetur, optio.
Soluta in ipsum quas vel provident praesentium sequi? Numquam aliquam perspiciatis veniam accusantium inventore illo repellat dolore possimus impedit? Similique consectetur dolorum eum neque excepturi eligendi, reiciendis voluptatum corporis. Optio!
Eveniet doloribus natus veritatis nemo dolor porro, in facilis harum error sequi a quod earum officiis architecto commodi rem, iure deserunt! Ab, et omnis rem ullam nisi distinctio ut ducimus.
Quod qui distinctio totam, quia suscipit dolorum doloribus sapiente fugiat illum odio, dolores nemo vitae ex assumenda impedit facilis repellat quas ad sit quidem. Eos vel autem deleniti aliquid quidem.
Sapiente quos eum similique, repudiandae dicta voluptas magnam error temporibus corporis? Sunt mollitia corrupti quasi iure suscipit labore consectetur veritatis, officia, facilis animi accusantium sapiente laboriosam. Tempore accusantium dolore deserunt?
Officiis veniam aliquam fugiat consequuntur perferendis quam, ex nam, a corrupti praesentium aut at itaque excepturi similique repellendus voluptatibus natus temporibus enim. Odio ipsam iusto, nemo dolores fugit magni totam!
Asperiores incidunt ratione aut? Sunt hic delectus iste unde sapiente quibusdam dolorem ipsam, totam fugit similique alias in culpa iusto illo? Officia temporibus est velit neque doloremque unde sint tempora!
Voluptate tempora perspiciatis reiciendis ex id iste amet aliquid suscipit dolore ipsa nostrum labore expedita quo mollitia voluptates cupiditate ducimus, praesentium nesciunt. Et id non ducimus. Quisquam aperiam in est.
Molestias libero ipsa tempora, eos dolorem facilis eaque itaque qui quod maxime quas delectus! Perferendis quidem sint, voluptatem quos voluptatum repellat, dolores placeat esse non sapiente atque cumque? Ipsam, sunt.


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
