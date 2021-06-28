function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector('input#txtano');
  var res = document.querySelector('p#res');

  //se o valor digitado no ano for vazio, OU, ano for maior que ano atual, irá exibir a mensagem de alerta.
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var gênero = '';

    // //criando uma TAG (igual do HTML) que recebe id com valor foto
    // var img = document.createElement('img');
    // img.setAttribute('id', 'foto');

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;

    if (fsex[0].checked) {
      gênero = 'homem';
      if (idade >= 0 && idade <= 11) {
        //criança
        pessoa('menino.jpg');
        return;
      }
      if (idade >= 12 && idade < 18) {
        // jovem
        pessoa('jovemele.jpg');
        return;
      }
      if (idade >= 18 && idade < 60) {
        // adulto
        pessoa('homem.jpg');
        return;
      }
      // idoso
      pessoa('idoso.jpg');

    } else if (fsex[1].checked) {
      gênero = 'mulher';
      if (idade >= 0 && idade <= 11) {
        //criança
        pessoa('menina.jpg');
        return;
      }
      if (idade >= 12 && idade < 18) {
        // jovem
        pessoa('jovemela.jpg');
        return;
      }
      if (idade >= 18 && idade < 60) {
        // adulto
        pessoa('mulher.jpg');
        return;
      }
      // idoso
      pessoa('idosa.jpg');
    }
    // //adicionar um elemento "filho", para aparecer a imagem
    // res.appendChild(img)
  }
}
function pessoa(imagem) {
  let img = document.querySelector('img');
  img.src = 'assets/img/' + imagem;
}