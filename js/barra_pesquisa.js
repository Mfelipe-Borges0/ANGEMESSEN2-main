
function expande(){
  var big = document.querySelector('#expande');
  var barra = document.querySelector('#pesquisa');
  console.log(big.clientWidth);

  if(big.clientWidth != '410px'){

    big.style.width = '410px';
    barra.style.display = 'block';

    
    console.log('caiu no if');
    console.log(big.clientWidth);
    
  }else{
    console.log(big.style.width);
    big.style.width = '130px';
    console.log(big.clientWidth);
  }
}

