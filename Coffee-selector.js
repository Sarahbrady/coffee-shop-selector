
function insertionSort(lis) {
// setTimeout(function() {
//    } 2000);

var timeMultiplier = 0;
var $lis = $("li");
for(var i = 0; i < $lis.length; i++) {
  var $current = $lis.eq(i);

  while ($current.data("cup") < $current.prev() .data("cup")) {
    $current.insertBefore($current.prev());
  }
}
}
$("button").on("click", function() {
  var beep = [5, 1, 9, 1, 4, 8];
  insertionSort(beep);
  console.log(beep);
});
// $( "li" ).each(function( index ) {
//   console.log( index + " " + $( this ).text() );
// });

