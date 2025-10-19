 console.log("Javascript Connected")
 
 
 var hours = 0;
        var minutes = 0;
        var seconds = 0;
        var timer = null;

        var display = document.getElementById("display");

        function showtime() {
            var h = hours;
            var m = minutes;
            var s = seconds;

            if (h < 10) h = "0" + h;
            if (m < 10) m = "0" + m;
            if (s < 10) s = "0" + s;

            display.textContent = h + ":" + m + ":" + s;
        }

        function starttimer() {
            if (timer !== null)
                return;

            timer = setInterval(function () {
                seconds++;

                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }

                showtime();
            }, 1000);
        }

        function stoptimer() {
            clearInterval(timer);
            timer = null;
        }

        function resetTimer() {
            clearInterval(timer);
            timer = null;
            hours = 0;
            minutes = 0;
            seconds = 0;
            showtime();
        }

        showtime();