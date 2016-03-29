$(document).ready(function() {
  console.log("Page loaded");
  $("#sentence").submit(function(event) {
    event.preventDefault();
    $(".result").text("");
    var sentenceString = $("#form1").val();
    var arraySplitString = sentenceString.split('');

    for (var index = 0; index <= arraySplitString.length; index +=1) {
      if (arraySplitString [index] === 'a','e','i','o','u') {
        arraySplitString[index] = arraySplitString[index].replace(/a/gi, '-').replace(/e/gi, '-').replace(/i/gi, '-').replace(/o/gi, '-').replace(/u/gi, '-')

        var together = arraySplitString.join('')
        $('.result').text(together);
      }
    }
  });


});
