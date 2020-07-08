
    $(function(){
        $(".tabSet").each(function(){
            var anchors = $(this).find(".tabs a");
            var panelDivs = $(this).find("div.panel");
            var lastAnchor;
            var lastPanel;
            
            anchors.show();//css 수정하는것이 좋으나 배우는 과정이기에 제이쿼리에서 실습함
            lastAnchor = anchors.filter(".on");     //a의 짝지 찾아줌
            lastPanel = $(lastAnchor.attr("href"));   //a의 짝지 찾아줌
            
            //이미지바뀌게! - 답----------------------------------------
            var lastImg = $(this).find('.tabs .on img'); //lastAnchor.find 로 대체가능
            var lastImgsrc = lastImg.attr('src');
            //----------------------------------------------------
            
            panelDivs.hide();
            lastPanel.show();
            
            anchors.click(function(){
                var currentAnchor = $(this); //3-1
                var currentPanel = $(currentAnchor.attr("href")); //3-1
                
                //이미지바뀌게! - 답------------------------------
                var currentImg = $(this).find("img");
                var currentImgsrc = currentImg.attr('src');
                var currentImgsrcOn = currentImgsrc.replace("off","on");
                var lastImgsrcOff = lastImgsrc.replace("on","off");
                //---------------------------------------------------
                
                
                currentAnchor.addClass("on");
                lastAnchor.removeClass("on");
                lastAnchor = currentAnchor; //과거와 현재를 똑같이 만듬 (마지막이여야함!)
                
                //이미지바뀌게! - 답----------------------------------
                currentImg.attr('src',currentImgsrcOn);
                lastImg.attr('src',lastImgsrcOff);
                //현재를 과거로 기억시킴
                lastImg = currentImg;
                lastImgsrc = lastImg.attr("src");
                //--------------------------------------------------
                
                currentPanel.fadeIn();
                lastPanel.hide();
                lastPanel = currentPanel; //과거와 현재를 똑같이 만듬 (마지막이여야함!)
                
            })
            
        })
    })