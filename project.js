$(function() {
    var projects = [{
        p_code : "p01",
        p_title : "투어팁스 웹/모바일 개편",
        p_desc : "투어팁스는 자유여행에 필요한 정보를 주는 웹사이트로 주 타겟층은 자유여행을 하는 여행자들입니다.<br>일정이 빡빡한 관계로 급하게 1차 개편 작업이 시작되어 스피디한 작업을 위해 jQuery Mobile을 사용하여 모웹 작업을 하였습니다.<br><br>2차 개편 작업 시에는 프리랜서 퍼블리셔 1명과 함께 작업하였으며 퍼블리싱 작업 관련하여 홀로 100% 담당하였습니다.<br>기획 단계부터 회의에 참석하여 커뮤니케이션하고 웹개발자와 웹디자이너들과의 커뮤니케이션을  많이 한 편입니다. 웹퍼블리싱 PL역할을 했습니다.",
        p_url_txt : "투어팁스 웹사이트",
        p_url : "http://tourtips.com",
        p_murl_txt : "투어팁스 모바일 웹사이트",
        p_murl : "http://m.tourtips.com"
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
        p_url : "http://info.hanatour.com/",
        p_murl_txt : "하나투어 여행정보 모바일 웹사이트",
        p_murl : "http://minfo.hanatour.com/"
    }];

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
        }
    }

    clickr.on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            code = $this.attr("data-id");

        $("#sub-frame").css("opacity", 0);
        modal.removeClass("non-action").addClass("action");

        jQuery.each(projects, function(i, val) {
            if(val.p_code == code) {
                m_title.text(val.p_title);
                m_desc.html(val.p_desc);
                m_url.html(val.p_url_txt);
                m_url.attr("href", val.p_url);
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
        $("#sub-frame").css("opacity", 1);
        modal.removeClass("action").addClass("non-action");
    })
});