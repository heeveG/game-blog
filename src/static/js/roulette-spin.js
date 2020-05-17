const nums = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
const LENGTH = 15;
const OFFSET = 90;

$(window).load(function () {
    console.log("Loading window");

    init();

    function init() {
        var $roulette = $('#roulette-boxes-list');
        $roulette.html(generateRouletteImages(120));
        var tl = new TimelineMax({}),
            rouletteImages = $('#roulette-boxes-list');
        tl.to(rouletteImages, 0, {x: getPositionOfWinner(8) * -1});
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getPositionOfWinner(winner) {
        var widthOfBox = $('#roulette-box0').width();
        var minDistanceToEdgeAllowed = 4;

        var desiredBox = $('#roulette-box' + winner.toString());

        var minPos = desiredBox.position().left + minDistanceToEdgeAllowed;
        var maxPos = desiredBox.position().left + widthOfBox - minDistanceToEdgeAllowed;

        return getRandomInt(minPos, maxPos);
    }


    function timelineFinished(destBox) {


        const $previous_list = $('#roulette-previous-list');
        let color = destBox % LENGTH % 2 === 0 ? '#F74B45' : '#282828';
        if (destBox % LENGTH === 0) color = '#32CD32';

        const winner = `<li><div class="roulette-previous-item" style="background-color: ${color}">${nums[destBox]}</div></li>`;

        // console.log($previous_list)
        if ($('#roulette-previous-list li').length > 9) {
            console.log("wow");
            $('#roulette-previous-list li:last-child').remove();
        }
        $previous_list.prepend(winner);
    }

    function rouletteSpin(destBox) {
        if (destBox === -1) destBox = getRandomInt(0, 14);

        var tl = new TimelineMax({
                onComplete: timelineFinished,
                onCompleteParams: [destBox]
            }),
            rouletteImages = $('#roulette-boxes-list');
        tl.to(rouletteImages, 0, {x: getPositionOfWinner(7) * -1}, 0.05)
            .to(rouletteImages, 8, {x: getPositionOfWinner(destBox + OFFSET) * -1, ease: Power4.easeOut})
        ;

    }

    $('#spin').click(function () {
        const winner = $('#winner-text').val();
        rouletteSpin(nums.indexOf(parseInt(winner)));
    });


    function generateRouletteImages(howMany) {
        let color;
        let completedRouletteBoxes = [];
        for (let i = 0; i < howMany; i++) {
            if (i % LENGTH === 0) color = '#32CD32';
            else {
                color = i % LENGTH % 2 === 0 ? '#F74B45' : '#282828';
            }
            const completedTemplate = `<div class="roulette-box" id="roulette-box${i}"  style="background-color: ${color}">${nums[i % LENGTH]}</div>`;
            completedRouletteBoxes.push('<li>' + completedTemplate + '</li>');

        }

        return completedRouletteBoxes;
    }

    // window.setInterval(function () {
    //     // $('.roulette-box').css({
    //     //     width: "70px",
    //     //     height: "70px"
    //     // });
    //     // $('#roulette-winner').html(`<div></div>`);
    //     rouletteSpin(-1);
    //     console.log('Click');
    // }, 15000);

});


