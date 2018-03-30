    let timer1, timer2, timer3, timer4;

   function timer(){
       let curentTimer;
       return function(status, TimerNum){
           switch (status){
               case'start':
                   curentTimer = setInterval(function() {
                       let presentTime = $('#'+ TimerNum + ' span').html();
                       let timeArray = presentTime.split(/[:]+/);
                       let m = timeArray[0];
                       let s = checkSecond((timeArray[1] - 1));
                       if (s == 59) {
                           m = m - 1
                       }
                       if(m < 0){
                           clearInterval(curentTimer);return
                       }

                       $('#'+ TimerNum + ' span').html(m + ":" + s);
                   }, 1000);
                   break;
               case'reset':
                   clearInterval(curentTimer);
                   $('#'+ TimerNum + ' span').html("20:00");
                   break;
               case'stop':
                   clearInterval(curentTimer);
                   break;
               default:return;

           }
       }
   }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        }
        ; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = "59"
        }
        ;
        return sec;
    }

    $('.stopTimer').click(function () {
        let timerNum = $(this).parent().attr('id');
        switch (timerNum){
            case'buttons1':
                if(timer1){
                    timer1('stop', timerNum);
                };
                break;
            case'buttons2':
                if(timer2){
                    timer2('stop', timerNum);
                };
                break;
            case'buttons3':
                if(timer3){
                    timer3('stop', timerNum);
                };
                break;
            case'buttons4':
                if(timer4){
                    timer4('stop', timerNum);
                };
                break;
            default:return;
        }
    })
    $('.startTimer').click(function () {
        let timerNum = $(this).parent().attr('id');
        switch (timerNum){
            case'buttons1':
                timer1 = timer();
                timer1('start', timerNum);
                break;
            case'buttons2':
                timer2 = timer();
                timer2('start', timerNum);
                break;
            case'buttons3':
                timer3 = timer();
                timer3('start', timerNum);
                break;
            case'buttons4':
                timer4 = timer();
                timer4('start', timerNum);
                break;
            default:return;
        }
   })
   $('.resetTimer').click(function () {
       let timerNum = $(this).parent().attr('id');
       switch (timerNum){
           case'buttons1':
               if(timer1){
                   timer1('reset', timerNum);
               };
               break;
           case'buttons2':
               if(timer2){
                   timer2('reset', timerNum);
               };
               break;
           case'buttons3':
               if(timer3){
                   timer3('reset', timerNum);
               };
               break;
           case'buttons4':
               if(timer4){
                   timer4('reset', timerNum);
               };
               break;
           default:return;
       }
   })


