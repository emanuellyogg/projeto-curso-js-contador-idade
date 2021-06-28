function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector('input#txtano');
  var res = document.querySelector('div#res');

  //se o valor digitado no ano for vazio, OU, ano for maior que ano atual, irá exibir a mensagem de alerta.
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var gênero = ''
    //criando uma TAG (igual do HTML) que recebe id com valor foto
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');


    if (fsex[0].checked) {
      gênero = 'homem';
      if (idade >= 0 && idade <= 11) {
        //criança
        img.setAttribute('src', 'assets/img/menino.jpg')
      } else if (idade >= 12 && idade < 18) {
        // jovem
        img.setAttribute('src', 'assets/img/jovemele.jpg')
      } else if (idade >= 18 && idade < 60) {
        // adulto
        img.setAttribute('src', 'assets/img/homem.jpg')
      } else {
        // idoso
        img.setAttribute('src', 'assets/img/idoso.jpg')
      }

    } else if (fsex[1].checked) {
      gênero = 'mulher';
      if (idade >= 0 && idade <= 11) {
        //criança
        img.setAttribute('src', 'assets/img/menina.jpg')
      } else if (idade >= 12 && idade < 18) {
        // jovem
        img.setAttribute('src', 'assets/img/jovemela.jpg')
      } else if (idade >= 18 && idade < 60) {
        // adulto
        img.setAttribute('src', 'assets/img/mulher.jpg')
      } else {
        // idoso
        img.setAttribute('src', 'assets/img/idosa.jpg')
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    //adicionar um elemento "filho", para aparecer a imagem
    res.appendChild(img)
    img.style.width = '200px';
    img.style.height = 'auto';
    img.style.borderRadius = '100%'
    img.style.padding = '15px'
  }
}