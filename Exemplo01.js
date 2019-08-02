$(function () {

    //var nome = '';
    $nome = '';

    $.ajax({
        url: 'https://viacep.com.br/ws/01001000/json/',
        method: 'get',
        success: function (data) {
            $localidade = data.localidade;
            $logradouro = data.logradouro;

            $("#localidade").val($localidade);
            $("#logradouro").val($logradouro);
         },
        error: function (erro) { }
    });
});