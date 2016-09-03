$(document).ready(function() {

  var timerIsOn = false;
  var mySec;
  var myTimer;
  var breakTimer;
  var zeroFront = '0';
  var theSec;
  var timerScale;
  var scaleInc;
  var breakScale;

  initTimer();
  

  function initTimer() {
    theSec = 0;
    if(document.getElementById('timerSelect').value > 0 && document.getElementById('breakSelect').value > 0) {
      myTimer = document.getElementById('timerSelect').value;
      document.getElementById('timer').innerHTML = myTimer;
      document.getElementById('sec').innerHTML = zeroFront + theSec;
      initBreak();
      initInd();
    }else {
      document.getElementById('timerSelect').value = 25;
      document.getElementById('breakSelect').value = 5;
    }
    
    
  };

  function initBreak() {

    breakTimer = document.getElementById('breakSelect').value;

  };
  
  function initInd() {
    timerScale = 0;
    //document.getElementById('rightInd').style.width = timerScale + "%";
  }

  document.getElementById('myButton').onclick = function() {
    checkStatus()
  };

  document.getElementById('decSelect').onclick = function() {
    decTimer()
  };

  document.getElementById('incSelect').onclick = function() {
    incTimer()
  };

  document.getElementById('decBreak').onclick = function() {
    decBreak()
  };

  document.getElementById('incBreak').onclick = function() {
    incBreak()
  };

  document.getElementById('timerSelect').onchange = function() {
    updateTimer()
  };
  document.getElementById('breakSelect').onchange = function() {
    updateBreaker()
  };

  function updateTimer() {
    if (!timerIsOn) {
      document.getElementById('timerStat').innerHTML = "Timer Off";
     
      initTimer();
    }

  };

  function updateBreaker() {
    if (!timerIsOn) {
      document.getElementById('breakStat').innerHTML = "Break Off";
      initTimer();
    }
  };

  function decTimer() {
    if (!timerIsOn && document.getElementById('timerSelect').value > 1) {
      document.getElementById('timerStat').innerHTML = "Timer Off";
      document.getElementById('timerSelect').value -= 1;
      initTimer();
    }

  };

  function incTimer() {
    if (!timerIsOn) {
      document.getElementById('timerStat').innerHTML = "Timer Off";
      document.getElementById('timerSelect').value = +document.getElementById('timerSelect').value + 1;
      initTimer();
    }
  };

  function decBreak() {
    if (!timerIsOn && document.getElementById('breakSelect').value > 1) {
      document.getElementById('breakStat').innerHTML = "Break Off";
      document.getElementById('breakSelect').value -= 1;
      initTimer();
    }
  };

  function incBreak() {
    if (!timerIsOn) {
      document.getElementById('breakStat').innerHTML = "Break Off";
      document.getElementById('breakSelect').value = +document.getElementById('breakSelect').value + 1;
      initTimer();
    }
  };

  function checkStatus() {
    if (timerIsOn) {
      timerOff();
    } else {
      timerOn();
    }
  };

  function timerOn() {

    mySec = setInterval(counter, 1000);
    if(document.getElementById('timerStat').innerHTML == "Timer Off" && document.getElementById('breakStat').innerHTML == "Break Off" ) {
      console.log('Im in');
      calculateScale();
    }
    document.getElementById('myButton').innerHTML = "Pause";

    if (document.getElementById('breakStat').innerHTML != 'Break On') {
      document.getElementById('timerStat').innerHTML = "Timer On";
    }
    timerIsOn = true;
    
    
    

  };

  function calculateScale() {

    var totSec = document.getElementById('timer').innerHTML * 60;
    console.log('This is the total sec '+totSec);
    scaleInc = 100 / totSec;
  };

  function counter() {
    theSec = theSec - 1;
    //console.log('This is the timer scale '+timerScale);
    console.log('This is the scale increment '+scaleInc);
    if (timerScale < 101) {
      document.getElementById('rightInd').style.width = timerScale + "%";
      document.getElementById('leftInd').style.width = timerScale + "%";
      timerScale += scaleInc;
    }

    if (theSec < 10) {
      document.getElementById('sec').innerHTML = zeroFront + theSec;
    } else {
      document.getElementById('sec').innerHTML = theSec;
    }

    if (theSec < 0) {
      theSec = 60;
      document.getElementById('sec').innerHTML = theSec;
      document.getElementById('timer').innerHTML -= 1;
    }

    if (document.getElementById('timer').innerHTML == 0 && theSec == 0) {

      if (document.getElementById('breakStat').innerHTML == "Break Off") {

        document.getElementById('timer').innerHTML = breakTimer;
        timerScale = 0;
        calculateScale();
        setTimeout(function() {
          document.getElementById('rightInd').parentElement.setAttribute('dir', '0');
          document.getElementById('rightInd').parentElement.classList.add('alert');
          document.getElementById('rightInd').parentElement.classList.remove('success');
          document.getElementById('leftInd').parentElement.setAttribute('dir', 'rtl');
          document.getElementById('leftInd').parentElement.classList.add('alert');
          document.getElementById('leftInd').parentElement.classList.remove('success');
        }, 1000);

        document.getElementById('sec').innerHTML = zeroFront + theSec;
        document.getElementById('breakStat').innerHTML = "Break On";
        document.getElementById('timerStat').innerHTML = "Timer Off";

      } else if (document.getElementById('breakStat').innerHTML == "Break On") {
        document.getElementById('breakStat').innerHTML = "Break Off";
        document.getElementById('timerStat').innerHTML = "Timer On";
        timerScale = 0;
        initTimer();
        calculateScale();
        setTimeout(function() {
          document.getElementById('rightInd').parentElement.setAttribute('dir', 'rtl');
          document.getElementById('rightInd').parentElement.classList.add('success');
          document.getElementById('rightInd').parentElement.classList.remove('alert');
          document.getElementById('leftInd').parentElement.setAttribute('dir', '0');
          document.getElementById('leftInd').parentElement.classList.add('success');
          document.getElementById('leftInd').parentElement.classList.remove('alert');
        }, 1000);
      }

    }

  };

  function timerOff() {
    clearInterval(mySec);
    timerIsOn = false;
    document.getElementById('myButton').innerHTML = "Start";

  };

});