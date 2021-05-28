$(document).ready(
    function(){

        let number = $('#number').val();
        let month = $('#month').val();
        let day = $('#day').val();

        $('#getFact').click(function(){

            $.get(
                'http://numbersapi.com/'+number,
                function(data){
                $("#factresult").text(data);
});
        });
        
        $('#getMathFact').click(function(){

            $.get(
                'http://numbersapi.com/'+number+'/math',
                function(data){
                $("#mathfactresult").text(data);
});
        });

        $('#getTodayFact').click(function(){
           
            $.get(
                'http://numbersapi.com/'+month+'/'+day+'/date',
                function(data){
                $("#todayresult").text(data);
});
        });
    });

      



    