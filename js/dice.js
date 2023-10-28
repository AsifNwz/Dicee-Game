var playerName,
  winner,
  number1 = [],
  number2 = [],
  clickCount = 0,
  maxClicks = 10,
  maxSum1 = 0,
  maxSum2 = 0,
  randomNumber1 = [],
  i =
    1e3 *
    (e = $("#dice__cube"))
      .css("transition-duration")
      .split(",")[0]
      .replace(/[^-\d\.]/g, "");
function n(t) {
  var a = e.attr("class").split(" ")[0],
    n = "show-" + t;
  e.removeClass(),
    a == n
      ? (e.addClass(n + " show-same"),
        setTimeout(function () {
          e.removeClass("show-same");
        }, i))
      : e.addClass(n),
    randomNumber1.push(t);
}
function diceRoll1() {
  var e,
    t = (1, 6, Math.floor(6 * Math.random() + 1));
  1 == t
    ? n("front")
    : 2 == t
    ? n("back")
    : 3 == t
    ? n("right")
    : 4 == t
    ? n("left")
    : 5 == t
    ? n("top")
    : 6 == t && n("bottom"),
    (e = $("#dice__audio")[0]).pause(),
    (e.currentTime = 0),
    e.play(),
    number1.push(t),
    setTimeout(() => {
      $("h1").text("Wait...AI is playing");
    }, 500);

  var txt1 = $("<div></div>").text(t);
  $(".score").append(txt1);
}
var e,
  randomNumber2 = [];
i =
  1e3 *
  (e = $("#dice__cube"))
    .css("transition-duration")
    .split(",")[0]
    .replace(/[^-\d\.]/g, "");
function n(t) {
  var a = e.attr("class").split(" ")[0],
    n = "show-" + t;
  e.removeClass(),
    a == n
      ? (e.addClass(n + " show-same"),
        setTimeout(function () {
          e.removeClass("show-same");
        }, i))
      : e.addClass(n),
    randomNumber2.push(t);
}
function diceRoll2() {
  var e,
    t = (1, 6, Math.floor(6 * Math.random() + 1));
  1 == t
    ? n("front")
    : 2 == t
    ? n("back")
    : 3 == t
    ? n("right")
    : 4 == t
    ? n("left")
    : 5 == t
    ? n("top")
    : 6 == t && n("bottom"),
    (e = $("#dice__audio")[0]).pause(),
    (e.currentTime = 0),
    e.play(),
    number2.push(t),
    setTimeout(() => {
      $("h1").text("Your turn");
    }, 500);

  var txt2 = $("<div></div>").text(t);
  $(".score").append(txt2);
}
function play() {
  if (clickCount < maxClicks)
    diceRoll1(),
      setTimeout(() => {
        diceRoll2();
      }, 1000),
      clickCount++,
      $("#dice__btn").text(maxClicks - clickCount + " / " + maxClicks);
  else {
    var e = number1.reduce((e, t) => e + t, 0),
      t = number2.reduce((e, t) => e + t, 0);
    e > maxSum1 && (maxSum1 = e),
      t > maxSum2 && (maxSum2 = t),
      (winner =
        maxSum1 > maxSum2
          ? "You win ! Score " + maxSum1
          : maxSum2 > maxSum1
          ? "AI wins ! Score " + maxSum2
          : "It's a draw!"),
      $("h1").text("Calculating. . ."),
      setTimeout(() => {
        $("h1").text(winner), new Audio("./sounds/winner.mp3").play();
      }, 1e3);

    // let yourTotal = number1.reduce((x, y) => x + y, 0);
    // let aiTotal = number2.reduce((x, y) => x + y, 0);

    var total1 = $("<div></div>").text("Total " + maxSum1);
    $(".total").append(total1);
    var total2 = $("<div></div>").text("Total " + maxSum2);
    $(".total").append(total2);

    restart();
  }
}
function restart() {
  $("#dice__btn").css("display", "none"),
    $(".restart").css("display", "block"),
    (number1 = []),
    (number2 = []),
    (clickCount = 0),
    (maxSum1 = 0),
    (maxSum2 = 0);
}
$("#dice__btn").click(function () {
  play();
});

$(".restart").click(function () {
  location.reload();
});
