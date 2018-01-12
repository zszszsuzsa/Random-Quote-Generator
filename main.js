
$("document").ready(function() {
  $.get(
    "https://random-quote-generator.herokuapp.com/api/quotes/random",

    function(data) {
      $(".quote")
        .empty()
        .append('"' + data["quote"] + '"');
      $(".author")
        .empty()
        .append(data["author"]);
    }
  );
});
$("#button1").click(function() {
  $.get(
    "https://random-quote-generator.herokuapp.com/api/quotes/random",

    function(data) {
      $(".quote")
        .empty()
        .append(data["quote"]);
      $(".author")
        .empty()
        .append(data["author"]);
    }
  );
});
$("#btnTweet").click(function(e) {
  var textToTweet =
    '"' + $(".quote").text() + '"' + " /" + $(".author").text() + "/";
  console.log(textToTweet);
  if (textToTweet.length > 140) {
    alert("Tweet should be less than 140 Chars");
  } else {
    var twtLink =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(textToTweet);
    window.open(twtLink, "_blank");
  }
});
