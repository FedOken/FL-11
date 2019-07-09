const MAX_BASE_RANGE = 8;
const RANGE_STEP = 4;
const BASE_PRIZE = 100;
const TOTAL_PRIZE = 0;

let play_game = confirm('Do you want to play a game?');

if (play_game) {

    //Start round 1
    let round = 1;
    let max_range = MAX_BASE_RANGE;
    let total_prize = TOTAL_PRIZE;

    //Set round loop
    while(play_game === true) {

        //Set by default, that user dont want continue
        play_game = false;

        //Set max range and prize for this loop
        max_range = max_range + RANGE_STEP * (round - 1);
        let valid_number = Math.round(Math.random() * max_range);
        let max_prize = BASE_PRIZE * round;

        //Set 3 attempt
        for (let attempt = 1; attempt <= 3; attempt++) {
            //Set max prize for every attempt
            let max_attempt_prize = max_prize ;
            switch (attempt) {
                case 2:
                    max_attempt_prize = max_prize / 2;
                    break;
                case 3:
                    max_attempt_prize = max_prize / 4;
                    break;
            }

            let input_number = prompt('Choose a roulette pocket number from 0 to ' + max_range + '\n' +
            'Attempt left: ' + (4 - attempt) + '\n' +
            'Total prize: ' + total_prize + '$' + '\n' +
            'Possible prize on current attempt ' + max_attempt_prize + '$');

            //Check user input on null or Esc
            if (input_number) {
                //Convert input value to number
                input_number = Number(input_number);
                //Check
                if (valid_number === input_number) {
                    total_prize += max_attempt_prize;
                    play_game = confirm('Congratulation, you won! Your prize is: ' + total_prize +
                        '$. Do you want to continue?');
                    break;
                }
            } else {
                break;
            }

        }
        round++;

        //If user dont win, skip total prize to 0, show message and ask again
        if (!play_game) {
            total_prize = 0;
            play_game = confirm('Thank you for your participation. Your prize is: ' + total_prize +
                '$. Do you want start again?');
            //If user want play again set default value
            if (play_game) {
                round = 1;
                max_range = MAX_BASE_RANGE;
                total_prize = TOTAL_PRIZE;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}



