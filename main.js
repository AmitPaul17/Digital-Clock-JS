
        function Time(){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var next = "AM";
            if(h == 0){
                h = 12;
            }
            if(h > 12){
                h = h - 12;
                next = "PM";
            }

            h = (h < 10)? "0" + h : h;
            m = (m < 10)? "0" + m : m;
            s = (s < 10)? "0" + s : s;

            var time = h + ":" + m + ":" + s + " " + next;
            document.getElementById("cd").innerText = time;
            document.getElementById("cd").textContent = time;

            setTimeout(Time, 1000);
        }

        Time();