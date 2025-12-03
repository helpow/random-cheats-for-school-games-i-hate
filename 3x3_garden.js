let gameData = JSON.parse(localStorage.getItem('3x3-garden.UserDataPackage'));
gameData.Coins = 10000000;
gameData.AdditionalGrowthSpeedMultiplier = 100; 

localStorage.setItem('3x3-garden.UserDataPackage', JSON.stringify(gameData));

if (typeof window.location !== 'undefined') {
    window.location.reload();
}
