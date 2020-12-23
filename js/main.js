;(function(){
    var body = document.querySelector("body");
    
    var closesAttr = function(item, attr){
        var node = item;

        while(node){
            var attrValue = node.getAttribute(attr);
            if(attrValue){
                return attrValue;
            }

            node = node.parentElement;
         
        }

        return null;
    }

    var closesItemByClass = function(item, className){
        var node = item;

        while(node){
            if(node.classList.contains(className)){
                return node;
            }

            node = node.parentElement;
         
        }

        return null;
    }

    var showPopup = function(target){
        target.classList.add('is_active');
    }
    var closePopup = function(target){
        target.classList.remove('is_active');
    }

    body.addEventListener('click', function (e){
        var target = e.target;
        var popupClass = closesAttr(target, 'data-popup');

        if(popupClass === null){
            return;
        }

        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);

        if(popup){
            showPopup(popup);
        }

      
    })

    body.addEventListener('keydown', function (e){
        if(e.keyCode !== 27){
            return;
        }
        var popup = document.querySelector('.accpopup.is_active');

        if(popup){
            closePopup(popup);

        }
    })

    body.addEventListener('click', function (e){
       var target = e.target;
       if(target.classList.contains('close')){
        var popup = closesItemByClass(target, 'accpopup');

        closePopup(popup);
        }
    })


})();