var sickBeat = document.getElementById("sick-beat-mp3");
var isStarted = false;

function playSound(id) {
	document.getElementById(id + "-mp3").play();
}

$(".sound-bite-btn").click(function (e) {
	playSound($(e.target).attr("id"));
	return true;
});

// MIX SUM FKEN SICK ASS BEATS YO
$(".start-sick-jam").click(function (e) {
	if (!isStarted) {
		isStarted = true;
		sickBeat.volume = 0.75;
		sickBeat.play();
		$(".sound-bite").each(function (index) {
			// MUSICAL GENIUS
			var randomInterval = Math.floor(Math.random() * (36 - 12)) + 12;
			var that = this;

			setTimeout(function () {
				setInterval(function () {
					if ($(that).attr("id") !== "fuck-you-mp3") {
						that.play();
					}
				}, randomInterval*1000);
			}, index*1000);
		});
	}
});

$(".stop-sick-jam").click(function (e) {
	isStarted = false;
	sickBeat.pause();
	sickBeat.currentTime = 0;
	//Lazy hack
	for (var i = 1; i < 99999; i++) {
        clearInterval(i);
	}
});

// LOOP UNTIL U DIE
sickBeat.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);