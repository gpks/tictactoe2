$( document ).ready(function() {
    var matrix; 
    var i = 0;
    
    $('form').on('submit', function(e){
        e.preventDefault();
        resetGame();
        game()
    });
  function game(){
    console.log("gra");
    $("td").on('click', function(e){
        if(checkField($(e.target).attr('class').split(" "))){
            if (i%2==0) {
                $(e.target).text("O");                
                i++;
                changeMatrix($(e.target).attr('class').split(" "),1);
                checkWin();
            }else{
                $(e.target).text("X");
                i++;
                changeMatrix($(e.target).attr('class').split(" "),4);
                checkWin();
            }
        }
    })
    };
    function changeMatrix (array, value) {
        matrix[array[0]][array[1]] = value;
    };
    function checkWin (){
        var arrayOfSum = sumArray();
        if($.inArray(3, arrayOfSum)!== -1 || $.inArray(12, arrayOfSum) !== -1){
            alert("wygrałeś");
            resetGame();
        }else if ($.inArray(null, [].concat.apply([],matrix))===-1){
            alert("remis");
            resetGame(); 
        }
    };
    function sumArray(){
        var sum1 = sum(matrix[0]);
        var sum2 = sum(matrix[1]);
        var sum3 = sum(matrix[2]);
        var sumv1 = matrix[0][0]+matrix[1][0]+matrix[2][0]
        var sumv2 = matrix[0][1]+matrix[1][1]+matrix[2][1]
        var sumv3 = matrix[0][2]+matrix[1][2]+matrix[2][2]
        var sumd1 = matrix[0][0]+matrix[1][1]+matrix[2][2]
        var sumd2 = matrix[0][2]+matrix[1][1]+matrix[2][0]
        return [sum1, sum2, sum3, sumv1, sumv2, sumv3, sumd1, sumd2]
    };
    function resetGame(){
        $("td").text("");
        i = 0;
        matrix = [[null, null, null],[null, null, null],[null, null, null]];
    };

    function sum (array) {
        return array.reduce(function(pv, cv) { return pv + cv; }, 0)
    };
    function checkField(array){
        return matrix[array[0]][array[1]] === null;
    }
  })