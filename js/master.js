$("#question1")
  .next()
  .addClass("answer");

$(".question2")
  .prev()
  .addClass("answer");

$(".question3")
  .children()
  .addClass("answer");

$(".question4")
  .children()
  .addClass("answer");

$(".question5")
  .find("span")
  .addClass("answer");

$(".question6")
  .find("p")
  .addClass("answer");

$(".question7")
  .closest()
  .addClass("answer");
