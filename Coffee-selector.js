$lis = $("li");

function sort(cup) {
  $lis.eq(i).data(cup)
}
function sort(atmos) {
  $lis.eq(i).data(atmos)
}
function sort(local) {
  $lis.eq(i).data(local)
}

var $lis = $("li");

function insertionSort(lis) {
    var len = lis.length,
        value,
        i,
        j;
    for (i=0; i < len; i++) {
        value = lis[i];
        for (j=i-1; j > -1 && lis[j] > value; j--) {
            lis[j+1] = lis[j];
        }

        lis[j+1] = value;
    }

    return lis;
}
$("button").on("click", function() {
  var beep = [5, 1, 9, 1, 4, 8];
  insertionSort(beep);
  console.log(beep);
});

// $( "li" ).each(function( index ) {
//   console.log( index + " " + $( this ).text() );
// });
