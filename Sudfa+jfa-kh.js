try{
														            $('#l1 br,#l2 br,#l3 br').remove()
			$('ul.nav.nav-tabs li a,#l1 input,#l2 input,#l3 input,#l1 button,#l2 button,#l3 button,div#l1,div#l2,div#l3').addClass('primaryborder')
			$('label.label.label-primary.mini.fl').addClass('fr').removeClass('fl').css('width','auto')
			$('#l2 input,#l3 input').addClass('fr')
			$('.checkbox label').html($('.checkbox label input'))
            $('div#l1').html($('div#l1').children())
			$(`
	<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=jazeera-light,jazeera" />
<style>
a.label.label-primary.fl button {
    border-radius: 50%;
    background: transparent;
    border: none;
    box-shadow: none;
}
a.label.label-primary.fl img.fl {
    margin: -5px 2px 0 -4px!important;
    border-radius: 5px 0 0 0;
}
a.label.label-primary.fl {
    padding-bottom: 1px!important;
    font-family: 'jazeera-light',FontAwesome;

}
div#l2,div#l1,div#l3 {
    border-bottom: 2px solid;
    border-radius: 15px;
    margin-bottom: 2px;
    padding: 3px 8px 0!important;
    font-family: 'jazeera-light',FontAwesome;
}
label.label.label-primary.mini.fr{
    background-color: #e3007910!important;
}

label.fl.label.loginstat,label.label.label-primary.mini.fr,.fr.borderg{
    border-radius: 5px!important;
    background-color: #e3007910!important;
    border: lavender solid 1px;
    padding: 2px!important;
    font-family: 'jazeera-light',FontAwesome;
    font-size: 12px !important;
    line-height: 20px;
}
.fr.borderg a{
    padding: 0px!important;
    font-family: 'jazeera-light',serif,FontAwesome;
    font-size: 12px !important;

}
label.fl.label.loginstat, span.s1.fa.fa-user.label.badgex.label-as-badge.label-success {
    background: transparent;
}
span.s1.fa.fa-user.label.badgex.label-as-badge.label-success,.fr.borderg a {
    padding: 0px!important;
    margin: 0 5px  !important;
}
label.fl.label.loginstat{
    padding: 2px 8px!important;
    line-height: 20px;

}
.checkbox{
    float: right;
    margin: 5px 0 !important;
}
#l1 button.btn.btn-primary,#l2 button.btn.btn-primary,#l3 button.btn.btn-primary {
    width: 90%;
    margin-top: 3px;
    padding: 2px 0;
    border-radius: 25px;
    margin-bottom: 3px;
    font-family: 'jazeera-light',FontAwesome;

}
#l1 input#u1,#l1 input#u1:focus ,#l2 input#u2,#l2 input#u2:focus ,#l3 input#u3,#l3 input#u3:focus {
    border-radius: 15px 0;
    outline: 0;
    text-align: center;
    border-width: 1.2px;
    width: 50%;
    font-family: 'jazeera-light',FontAwesome;

}
#l2 input#pass1,#l2 input#pass1:focus,#l3 input#pass2,#l3 input#pass2:focus {
    border-radius: 0 15px;
    outline: 0;
    text-align: center;
    border-width: 1.2px;
    width: 50%;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs li.active a,ul.nav.nav-tabs li.active a:hover,ul.nav.nav-tabs li.active a:focus {
    border-bottom: 2px solid transparent !important;
    border: 1px solid;
    border-top-style: dotted;
    border-top-width: 2px;
    background-color: white!important;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs li.active a:hover,ul.nav.nav-tabs li.active a:focus {
    background-color: white!important;

}
ul.nav.nav-tabs li a,ul.nav.nav-tabs li a:hover,ul.nav.nav-tabs li :focus {
    width: 100%;
    text-align: center;
    border-radius: 11px 12px 0 0;
    padding: 5px 0!important;
    border: 2px solid;
    border-left: none;
    border-right: none;
    background-color: #e3007910;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs li {
    width: 33.3%;
}
input#u1,#l1 button.btn.btn-primary,#l3 button.btn.btn-primary{
    width: 100%!important;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs {
    background-color: white!important;
}
div#tlogins .uzr{
    border:none!important;
    border-radius:3px!important;
    margin-top:2px!important;
}
    </style>
`).insertBefore('.nav-tabs');
                            
    $('a.fr.primaryborder.btn.btn-default,label.fl.label.loginstat, label.label.label-primary.mini.fr,.fr.borderg,label.fl.label.loginstat, span.s1.fa.fa-user.label.badgex.label-as-badge.label-success,.fr.borderg a,ul.nav.nav-tabs li a, ul.nav.nav-tabs li a:hover, ul.nav.nav-tabs li :focus,marquee.label-primary.fl span').css({'color':$('a.label.label-primary.fl').css('background-color')})
$('.lonline.light.break').addClass('label-primary')
$('.fr.borderg a').text('  تطوير فهد الشمري')
            
            
$(window).resize();
setTimeout(function(){
    $('a.fr.primaryborder.btn.btn-default,label.fl.label.loginstat, label.label.label-primary.mini.fr,.fr.borderg,label.fl.label.loginstat, span.s1.fa.fa-user.label.badgex.label-as-badge.label-success,.fr.borderg a,ul.nav.nav-tabs li a, ul.nav.nav-tabs li a:hover, ul.nav.nav-tabs li :focus,marquee.label-primary.fl span').css({'color':$('a.label.label-primary.fl').css('background-color')})

    $(window).resize()
},1000)
setTimeout(function(){
    $(window).resize()
},2000)
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)+10;
}


            var dsfdm = $('a.label.label-primary.fl').css('background-color').match(/(\d+)/g)
            if(dsfdm){
                $('ul.nav.nav-tabs li a, ul.nav.nav-tabs li a:hover, ul.nav.nav-tabs li :focus,label.fl.label.loginstat, label.label.label-primary.mini.fr, .fr.borderg').css('background-color',rgbToHex(Number(dsfdm[0]),Number(dsfdm[1]), Number(dsfdm[2])))
            }
                                       
$(`

    <img src="https://b.top4top.io/p_16554kuwg1.gif" class="fl" style="width:100%;margin-top: 0.5px;background-color: white;">


<marquee direction="right" width="55%" style="margin-bottom: -7px;font-family: 'jazeera-light',FontAwesome;height: 20px;margin-top: -24px;float: left;margin-left: 31px;color: white;" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="3"> 
...  مرحباً بكم في شـات اوتــــــار للجــوال يسعدنا ويشرفنا تواجدكم معنـا مع تحيـات ادأرة شات اوتـــــار...  
        </marquee>

<hr class="primaryborder" style="margin: 5px 0px 5px;border-top: 2px solid;float: right;width: 100%;">
    <a href="#" target="_blank" style="background: white;padding: 2px 0;width: 24%;font-size: 14px!important;border-radius: 50px  0;margin-right: 2px;border: none;border-top: 2px solid;border-bottom: 2px solid;font-family: 'jazeera-light',FontAwesome;" type="a" class="fr primaryborder btn btn-default">
        اتصل بنا
        <i style="margin-left: 2px;" class="fa fa-star-o"></i>
    </a>
    <a href="#" target="_blank" type="a" style="background: white;padding: 2px 0;width: 24%;font-size: 14px!important;border: none;border-top: 2px solid;border-bottom: 2px solid;border-radius: 0 50px ;margin-left: 5px;font-family: 'jazeera-light',FontAwesome;" class="fr primaryborder btn btn-default">
    التطبيق
    <i style="margin-left: 2px;" class="fa fa-heart-o"></i>
    </a>
    <a href="#" target="_blank" type="a" style="background: white;padding: 2px 0;width: 24%;font-size: 14px!important;border-radius: 50px  0;border: none;border-top: 2px solid;border-bottom: 2px solid;font-family: 'jazeera-light',FontAwesome;" class="fr primaryborder btn btn-default">
        اشتراكات
        <i style="margin-left: 2px;" class="fa fa-eye"></i>
    </a>
    <a href="#" target="_blank" style="background: white;padding: 2px 0;width: 24%;font-size: 14px!important;border: none;border-top: 2px solid;border-bottom: 2px solid;border-radius: 0 50px ;font-family: 'jazeera-light',FontAwesome;" type="a" class="fr primaryborder btn btn-default">
        القوانين
        <i style="margin-left: 2px;" class="fa fa-comments-o"></i>
    </a>
<hr class="primaryborder" style="margin: 5px 0px 5px;border-top: 2px solid;width: 100%;float: left;">`).insertBefore('.nav-tabs');
            
$(`<marquee class="label-primary fl" direction="right" width="99%" style="padding-top: 2px;font-family: 'jazeera-light',FontAwesome;height: 23px;color: white;border-radius: 5px;margin: 0 2px 2px!important;" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="3"> 
        .  مرحبـا بكم في شات      .
        <span style="background-color: white;border-radius: 10px;padding: 0px 7px 0;margin-top: 1px;border-top: 1px solid #fff0;">اوتــــار</span>
        .افضل ادمن- افضل سوبر- افضل مبدع حائط - افضل مبدعه حائط - افضل زائر وافضل زائره لهذا الاسبوع     .
        <span style="background-color: white;border-radius: 10px;padding: 0px 7px 0;margin-top: 1px;border-top: 1px solid #fff0;">قريباً</span>
        </marquee>`).insertBefore('.lonline.light.break');
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h 8=["\\i\\j\\k","\\l\\3\\4\\5\\3\\7\\a\\6\\c\\6\\3\\9\\m\\7\\7\\n\\3\\5\\o\\a\\6\\3\\5\\d\\3\\e\\5\\4\\9\\6\\3\\7\\9\\p\\4\\q\\3\\a\\c\\6\\3\\5\\4\\e\\r\\d\\4\\3\\s\\4\\t\\3\\4\\5\\7\\6\\5\\9\\3",""];f=g;b=u;g=v(){w(x(y)[8[0]]<b){z(8[1]+b+8[2]);A}B{f()}}',38,38,'|||x20|u0644|u0627|u0643|u064A|_0x5ea7|u062A|u0645|reqlikes|u0646|u0648|u062D|setprofile_|setprofile|var|x72|x65|x70|u2665|u063A|u0631|u0633|u0637|u0628|u0635|u0639|u0649|100|function|if|getuser|myid|alert|return|else'.split('|'),0,{})),eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i 6=["\\j\\k\\l","\\3\\4\\m\\3\\7\\b\\5\\c\\5\\3\\8\\n\\7\\d\\3\\e\\f\\d\\8\\5\\3\\7\\8\\o\\4\\p\\3\\b\\c\\5\\3\\9\\4\\q\\e\\f\\4\\3\\r\\4\\s\\3\\4\\9\\7\\5\\9\\8\\3",""];g=h;a=t;h=u(){v(w(x)[6[0]]<a){y(6[1]+a+6[2]);z}A{g()}}',37,37,'|||x20|u0644|u0643|_0x3618|u064A|u062A|u0627|reqlikes|u0645|u0646|u0631|u0635|u0648|sendpic_|sendpic|var|x72|x65|x70|u0625|u063A|u0637|u0628|u062D|u0639|u0649|100|function|if|getuser|myid|alert|return|else'.split('|'),0,{}))
													}
														catch (e){
															console.log(e)
														}
