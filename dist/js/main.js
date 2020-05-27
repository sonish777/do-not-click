var audio = document.getElementById("hbd");
$(document).ready(function () {
  new WOW().init();

  // console.log($(".hbd-song"));
  // $("#hbd").get(0).play();

  // audio.load();
  var startBtn = document.getElementById("start");
  startBtn.addEventListener("click", function () {
    console.log(audio);
    audio.play();
    $(".backdrop").fadeOut(500);
    $(".modal").fadeOut(500);

    window.setTimeout(() => {
      $(".celeb-1").addClass("show");
    }, 500);
    window.setTimeout(() => {
      $(".celeb-2").addClass("show");
    }, 1500);

    $(".wish-1").addClass("show-left");
    $(".wish-2").addClass("show-right");
    $(".wish-3").addClass("show-left");
    $(".wish-4").addClass("show-right");
    $(".wish-5").addClass("show-left");
    $(".wish-6").addClass("show-right");
  });

  $(document).on("scroll", function () {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() >= 300) {
      $(".celeb-3").addClass("show-2");
      $(".celeb-4").addClass("show-2");
    }
  });

  $(document).on("click", "#light-candle", function () {
    $(".candles").addClass("not-allowed");
    $(".steps").text("LIGHTING THE CANDLES . . . .");
    $(".overlay").fadeIn(500);
    $(".cake-container").addClass("change-background");
    $(".fire").addClass("light-candle");
    window.setTimeout(() => {
      $("#light-candle").attr("disabled", false);
      $(".fire").addClass("fire-wiggle");
      $(".steps").text("Step 2: Blow the candles");
      $(".candles").attr("id", "blow-candles");
      console.log($(".candles").attr("id"));
      $(".candles").text("BLOW THE CANDLES");
      $(".candles").removeClass("not-allowed");
    }, 1500);
  });

  $(document).on("click", "#blow-candles", function () {
    $(".candles").addClass("not-allowed");
    $(".steps").text("BLOWING. . . . .");
    $(".fire").addClass("fire-blowing");
    window.setTimeout(() => {
      $(".fire").removeClass("fire-blowing");
      $(".fire-2").css("opacity", 0);
      $(".fire-4").css("opacity", 0);
      $(".steps").text("Step 3: You need to blow HARDER !");
      $(".candles").attr("id", "blow-harder");
      $(".candles").text("BLOW HARDER");
      $(".candles").removeClass("not-allowed");
    }, 2000);
  });

  $(document).on("click", "#blow-harder", function () {
    $(".candles").addClass("not-allowed");

    var clapAudio2 = document.getElementById("clap2");
    clapAudio2.play();
    var crackerAudio = document.getElementById("cracker-audio");
    crackerAudio.play();
    $(".steps").text("BLOWING. . . . .");
    $(".fire").addClass("fire-blow-harder");
    window.setTimeout(() => {
      $(".overlay").css("display", "none");
      $(".steps").css("color", "black");
      var clapAudio = document.getElementById("clap");
      clapAudio.play();
      crackerAudio.play();
      $(".fires").css("opacity", 0);
      $(".birthday-wish").css("display", "block");
      $(".steps").text("Step 4: Make a wish");
      $(".candles").attr("id", "make-wish");
      $(".candles").text("MAKE YOUR WISH");
      $(".cake").attr("src", "imgs/eaten.png").fadeIn(500);
      $(".cake-container").append(
        "<img src='imgs/celeb-1.png' class='final-celeb' />"
      );
      $(".candles").removeClass("not-allowed");
      $(".final-msg").addClass("show-final-msg");

      window.setTimeout(() => {
        $(".final-celeb").addClass("show-final-celeb");
      }, 100);
    }, 2000);
  });
});

$(document).on("click", "#make-wish", function () {
  var msg = $("#wish-msg").val();
  if (msg.trim().length === 0) {
    alert("Please say something :( :(");
  } else {
    $(".birthday-wish").html("<div class='loader'>Loading..</div>");
    sendEmail(msg);
    window.setTimeout(() => {
      $(".birthday-wish").html("<h1>Your wish my command ! ❤❤❤</h1>");
      $("#make-wish").css("display", "none");
    }, 2000);
  }
});

$(document).on("click", ".final-overlay-toggle", function () {
  $(".final-overlay").slideUp(1000);
  audio.pause();
  var photographsAudio = document.getElementById("photographs");
  photographsAudio.play();
});

function sendEmail(msg) {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "904912e1ac475c",
    Password: "83de4cb260b198",
    To: "recipient@example.com",
    From: "sender@example.com",
    Subject: "Test email",
    Body: msg,
  }).then((message) => alert(message));
}
