function userProgressMoney(currentValue, maxValue){
    var start = 0;
    var progressStructure = currentValue * 100 / maxValue;
    return progressStructure;
}

var maxValue = 1200000;
var currentValue = 100000;

var res = userProgressMoney(currentValue, maxValue);

var progressBar = document.querySelector('#user-progress');
progressBar.value = res.toFixed(1);

var blockCurrentSum = document.querySelector('.blockCurrentSum');
blockCurrentSum.innerHTML = 'Вже зібраьи: ' + currentValue + ' грн.';

var blockMaxSum = document.querySelector('.blockMaxSum');
blockMaxSum.innerHTML ='Наша мета зібрати: ' + maxValue + ' грн.';





