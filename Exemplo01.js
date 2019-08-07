$(function () {

    //var nome = '';
    $nome = '';
    // $('#cep').on('blur', function(){
    //     buscarCEP();
    // })
    $('#cep').on('keypress', function(evt){
        if(evt.keyCode == 13){
            buscarCEP()
        }
    })

  function buscarCEP(){
    //document.getElementById("cep").value
    $cep = $('#cep').val().replace('-','');

    if($cep.length != 8){
        alert('Tamanho do cep invalido');
        $("#cep").focus();
        return;
    }
    console.log($cep);
    $.ajax({
        url: 'https://viacep.com.br/ws/'+$cep+'/json/',
        method: 'get',
        success: function (data) {
            $localidade = data.localidade;
            $logradouro = data.logradouro;
            $unidadeFederativa = data.uf;

            $("#localidade").val($localidade);
            $("#logradouro").val($logradouro);
            $("#unidade-federativa").val($unidadeFederativa);
            $("#numero").focus();
         },
        error: function (erro) { 
            alert('CEP invalido');
            $("#cep").focus();
        }
    });
  }
});