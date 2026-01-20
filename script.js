const tg = window.Telegram.WebApp;
tg.expand();

function buy(product) {
  tg.sendData(JSON.stringify({
    product: product
  }));
}
