const loadingAreaGray = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loding p');

window.addEventListener('load' , () => {
    // ローディング中（グレースクリーン）
    loadingAreaGray.animate(
        {
            opacity : [1, 0],
            visibility : 'hidden',
        },
        {
            duration : 3000,
            delay : 1200,
            easing : 'ease',
            fill : 'forwards',
        }
    );
    // ローディング中（薄緑スクリーン）
    loadingAreaGreen.animate(
        {
            translate : ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration : 3000,
            delay : 1000,
            easing : 'ease',
            fill : 'forwards',
        }
    );
    // ローディング中テキスト
    loadingText.animate(
        [
            {
                opacity : 1,
                offset : .8
            },
            {
                opacity : 0,
                offset : 1
            },
        ],
        {
            duration : 1200,
            easing : 'ease',
            fill : 'forwards',
        }
    );
});


// const quiz = [
//     {
//         quizNumber : "Q1",
//         guiz : "トヨタ自動車（中国）投資有限会社の略称は？",
//         answers : ["a.TMAP", "b.TMA", "c.TMCI"],
//         correct : "c.TMCI"
//     },
//     {
//         quizNumber : "Q2",
//         guiz : "RHDとは？",
//         answers : ["a.右ハンドル車", "b.リアルハードディスク", "c.右打ちバッター"],
//         correct : "a.右ハンドル車"
//     },
//     {
//         quizNumber : "Q3",
//         guiz : "KPIとは？",
//         answers : ["a.主要業績評価指標", "b.最高経営責任者", "c.仮想プライベートネットワーク"],
//         correct : "a.主要業績評価指標"
//     }
// ]

let score = 0;

function showScore(){
  const totalScore = document.getElementById('score-message');
  const bestBear = document.getElementById('score-img');

  if(score === 3) {
    totalScore.innerHTML = score + "点：満点だ!" ;
    bestBear.innerHTML = '<img src="/Users/ayuayuinjapan/Desktop/pressentation/img/bear.png" alt="全問正解画像" width="500" height="500">';
  } else {
    totalScore.innerHTML = score + "点";
  }
}


function answerQuiz1() {
    const quiz_1 = document.getElementById('quiz-1');
  
    if (quiz_1.answer.value == 'c') {
      score++;
    } else {
      score = score;
    }
}
function answerQuiz2() {
    const quiz_2 = document.getElementById('quiz-2');
  
    if (quiz_2.answer.value == 'a') {
      score++;
    } else {
      score = score;
    }
}
function answerQuiz3() {
    const quiz_3 = document.getElementById('quiz-3');
  
    if (quiz_3.answer.value == 'a') {
      score++;
    } else {
      score = score;
    }
}
