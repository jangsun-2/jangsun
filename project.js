$(function() {
    var projects = [
        {
            p_code : "p06",
            p_title : "비즈니스피플 모바일 부분개편",
            p_desc : "현재 모바일 부분 개편 UI개발 작업 중..<br>오픈일은 11월 15일 예정",
            p_url_txt : "",
            p_url : "",
            p_murl_txt : "",
            p_murl : ""
        },
        {
            p_code : "p05",
            p_title : "루니파크 런처",
            p_desc : "루니파크는 steam과 같이 유저들이 여러 콘솔게임을 pc에서 할수있도록 제공해주는 게임플랫폼 회사입니다.<br><br>루니파크에서 만든 플랫폼을 루니파크 런처라고 합니다. 루니파크 런처는 루니파크 서비스를 제공하고 있는 PC방에서 제공하고 있습니다. <br><br>루니파크 런처는 게임목록, 게임상세, 로그인, 회원가입, 마이페이지, 토너먼트 등을 이용할수 있으며 모든 UI개발을 리액트로 작업하였습니다. <br>그 중 회원가입과 게임상세 페이지는 직접 Front-end 작업까지 하였습니다. 리액트로 처음 작업해보는 거라 처음에 공부부터 하며 많은 삽질을 하며 작업하였습니다.<br> 안타깝게도 확인할수 있는 url이 따로 없으며 PC방에서만 확인이 가능합니다. 이미지로만 보여드리는 점 양해바랍니다. 아래 이미지가 제가 직접 Front-end까지 작업한 페이지입니다.<br><img src='img/thumb_lunipark_launcher.png' alt=''><img src='img/thumb_lunipark_launcher_02.png' alt=''><img src='img/thumb_lunipark_launcher_03.png' alt=''><img src='img/thumb_lunipark_launcher_04.png' alt=''>",
            p_url_txt : "",
            p_url : "",
            p_murl_txt : "",
            p_murl : ""
        },
        {
            p_code : "p04",
            p_title : "루니파크 웹/모바일 개편",
            p_desc : "루니파크는 steam과 같이 유저들이 여러 콘솔게임을 pc에서 할수있도록 제공해주는 게임플랫폼 회사입니다.<br>루니파크에서 만든 플랫폼을 루니파크 런처라고 합니다. <br>스타트업이라 황량하기 그지 없는 곳이었으나 좋은 개발자분들과 함께 하여 안정적으로 작업할수 있었습니다. css는 sass를 이용하여 작업하였고 jQuery로 UI 인터렉션 작업 하였습니다. PC와 모바일웹 작업 모두 혼자 진행하였습니다. 일정관리와 UI관련 회의 모두 참석하여 커뮤니케이션하며 큰 어려움 없이 작업하였습니다.",
            p_url_txt : "루니파크 사이트",
            p_url : "https://www.lunipark.com/",
            p_murl_txt : "루니파크 모바일 사이트",
            p_murl : "https://m.lunipark.com/"
        },
        {
            p_code : "p01",
            p_title : "투어팁스 웹/모바일 개편",
            p_desc : "투어팁스는 자유여행에 필요한 정보를 주는 웹사이트로 주 타겟층은 자유여행을 하는 여행자들입니다.<br>일정이 빡빡한 관계로 급하게 1차 개편 작업이 시작되어 스피디한 작업을 위해 jQuery Mobile을 사용하여 모웹 작업을 하였습니다.<br><br>2차 개편 작업 시에는 프리랜서 퍼블리셔 1명과 함께 작업하였으며 퍼블리싱 작업 관련하여 홀로 100% 담당하였습니다.<br>기획 단계부터 회의에 참석하여 커뮤니케이션하고 웹개발자와 웹디자이너들과의 커뮤니케이션을  많이 한 편입니다. 웹퍼블리싱 PL역할을 했습니다. 현재는 서비스 종료로 인하여 아쉽게도 사이트가 폐쇄되었습니다.",
            p_url_txt : "",
            p_url : "",
            p_murl_txt : "",
            p_murl : ""
        },
        {
            p_code : "p02",
            p_title : "겟어바웃 웹/모바일 개편",
            p_desc : "겟어바웃은 개성 넘치는 여행 전문 에디터가 소개하는 세상 모든 여행 이야기가 담긴 트래블 웹진 사이트입니다.<br>디바이스에 따라 피씨버전과 모바일웹 버전을 보실 수 있습니다.<br><br>전체적으로 모든 웹퍼블리싱 작업을 도맡아 했습니다. jQuery를 이용하여 작업하였으며 차후 운영 건등을 고려하여 css 분기처리와 js 분기처리에 대해서 많은 생각을 했던 사이트입니다.<br><br>검색기능과 GNB 개선, 필터링 기능, 목록 페이지 내 스크롤 시 페이지 네비게이션 보완작업등을 오픈 후에 진행하였습니다.",
            p_url_txt : "겟어바웃 사이트",
            p_url : "http://getabout.hanatour.com",
            p_murl_txt : "",
            p_murl : ""
        },
        {
            p_code : "p03",
            p_title : "하나투어 여행정보 웹/모바일 개편",
            p_desc : "하나투어 자체 여행정보를 담은 사이트로서 국내 1위 여행사답게 갖고 있는 여러가지 컨텐츠들을 담고 있습니다.<br><br>투어팁스 입사 후 처음 맡았던 작업으로 재미있게 작업한 사이트입니다. 처음으로 js관련하여 전담하여 작업하였던 사이트입니다. 주로 jQuery를 이용하여 작업하였습니다.<br><br>피씨 목록 페이지 내에 있는 썸네일 이미지들을 가운데로 정렬하기 위해 작업했던 스크립트가 잘 작동하지 않아 많이 애먹었던 사이트입니다.",
            p_url_txt : "하나투어 여행정보 웹사이트",
            p_url : "https://info.hanatour.com/",
            p_murl_txt : "하나투어 여행정보 모바일 웹사이트",
            p_murl : "https://minfo.hanatour.com/"
        }
    ];

    var clickr = $(".project-list a")
        modal = $("#modal-frame"),
        m_title = modal.find("h2"),
        m_desc = modal.find(".description"),
        m_url = modal.find(".url"),
        m_mUrl = modal.find(".m-url");

    function modal_size() {
        if($(window).width() > 1000) {
            modal.css("margin-top", -(modal.outerHeight()/2));
        } else {
            modal.css("margin-top", 0);
            $(".common-header").css("opacity", 0);
        }
    }

    clickr.on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            code = $this.attr("data-id");

        modal.removeClass("non-action").addClass("action");

        jQuery.each(projects, function(i, val) {
            if(val.p_code == code) {
                m_title.text(val.p_title);
                m_desc.html(val.p_desc);
                m_url.html(val.p_url_txt);
                //m_url.attr("href", val.p_url);
                val.p_url == '' ? m_url.hide() : (m_url.show(), m_url.attr("href", val.p_url));
                m_mUrl.html(val.p_murl_txt);
                val.p_murl == '' ? m_mUrl.hide() : (m_mUrl.show(), m_mUrl.attr("href", val.p_murl));
            }
        });

        modal_size();
    });

    $(window).resize(function() {
        modal_size();
    });

    $(".close-modal").on("click", function(e) {
        $(".common-header").css("opacity", 1);
        modal.removeClass("action").addClass("non-action");
    })
});