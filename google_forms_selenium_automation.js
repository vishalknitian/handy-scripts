require('chromedriver');
const selenium = require('selenium-webdriver');
const driver = new selenium.Builder().forBrowser("chrome").build();
const By = selenium.By;
const url = "https://goo.gl/forms/yfPrYGY7fupwu4sq1";

driver.get(url);
var count = 0;

function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

var promiseAnswers = driver.findElements(By.css(".quantumWizTogglePaperradioOffRadio"));
promiseAnswers.then(function(elems) {
  for (var i = 0; i < 30; i++) {
    elems[count + generateRandomNumber(4) + 1].click();
    count = count + 5;
  }
  elems[count + generateRandomNumber(2)].click();
  count = count + 2;
  elems[count + generateRandomNumber(4)].click();
  count = count + 4;
  elems[count + generateRandomNumber(4)].click();
  count = count + 4;
  elems[count + generateRandomNumber(3)].click();
  count = count + 3;
  elems[count + generateRandomNumber(3)].click();
  count = count + 3;

  var promiseSubmitButton = driver.findElements(By.css(".quantumWizButtonPaperbuttonLabel"));
  promiseSubmitButton.then(function(elems) {
    elems[0].click();
  });
});
