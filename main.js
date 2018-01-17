// Creating an object that will contain all of the functions
var app = {};

// Requesting data from the url below 
$.get(
	"https://random-quote-generator.herokuapp.com/api/quotes/random",

	function (data) {

		// Filling the html paragraphs with data
		app.giveMeAQuote = function () {
			// Frist emptying the quote paragraph as later this function will be used for asking for a new quote. 
			$(".quote")
				.empty()
				.append('"' + data["quote"] + '"');
			$(".author")
				.empty()
				.append(data["author"]);
		}
	}
);

// This function allows the user to tweet out the current quote. If the quote is longer the character limit of Twitter the function throws an alert
app.tweet = function () {
	// Character limit variable
	var characterLimit = 280;
	// Formatting text 
	var textToTweet =
		$(".quote").text() + " /" + $(".author").text() + "/";
	// if longer than character limit it gives an alert message
	if (textToTweet.length > characterLimit) {
		alert("Tweet should be less than" + characterLimit + "Chars");
	} else {
		// Creating the url to tweet out the quote
		var twtLink =
			"https://twitter.com/intent/tweet?text=" +
			encodeURIComponent(textToTweet);
		// Opening Twitter in  a new window and placing the url
		window.open(twtLink, "_blank");
	}
};

// Calling the quote function as the website loading is done
$("document").ready(app.giveMeAQuote);
//Clicking on "New Quote" button also calls the giveMeAQuote function
$("#btnQuote").click(app.giveMeAQuote);
// Clicking on "Share on Twitter" button calls the tweet function.
$("#btnTweet").click(app.tweet);
