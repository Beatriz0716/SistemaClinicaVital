function clickMenu(){
    if(itens.style.display == 'flex'){ // fechado //
        itens.style.display = 'none';
        logo.style.display = 'block';
        btn.style.display = 'block';
        menu.style.display = 'flex';
    }else{ // aberto //
        itens.style.display = 'flex';
        logo.style.display = 'none';
        btn.style.display = 'none';
        menu.style.display = 'block';
    };
}