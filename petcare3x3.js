let saveData = JSON.parse(localStorage.getItem('save'));
let moneyData = JSON.parse(saveData.saveObjects[0].json);
moneyData.amount = 1000000;
saveData.saveObjects[0].json = JSON.stringify(moneyData);

localStorage.setItem('save', JSON.stringify(saveData));

if (typeof window !== 'undefined' && window.location) {
    window.location.reload();
}