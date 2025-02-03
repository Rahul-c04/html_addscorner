function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100%';
        searchpanel.style.borderRadius = '0';
    }else{
        console.error('error: search panel not found');
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    }else{
        console.error('error: search panel not found');
    }
}