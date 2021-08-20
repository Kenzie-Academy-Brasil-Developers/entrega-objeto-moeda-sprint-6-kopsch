divResult = document.querySelector(".flip-results");
divImagesResult = document.querySelector(".flip-image-results");
button = document.querySelector(".button");
span = document.createElement("span");
divResult.append(span);

const coin = {
  state: 0,

  flipCoin: function () {
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },

  toString: function () {
      result = this.flipCoin()
    if (result === 0) {
      return "Heads";
    }
    return "Tails";
  },

  toHTML: function (src) {
    const image = document.createElement("img");
    image.classList.add("coin")
    image.src = `./assets/${src}.png`
    return image
  },
};

let coinArr = []
function display20Flips() {
    span.innerHTML = ""
  const results = [];
  for (let i = 1; i <= 20; i++) {
      const coinsResults = coin.toString()
    results.push(`${i}º jogada: ${coinsResults}`);
    coinArr.push(coinsResults)
  }
  span.append(results.join(" | "));
  return coinArr;
}

function display20Images() {
    divImagesResult.textContent = ""
    let results
  for (let i = 0; i < coinArr.length; i++) {
      if(coinArr[i] === "Tails") {
    results = coin.toHTML("tails")
    divImagesResult.append(results)
} else {
    results = coin.toHTML("heads")
    divImagesResult.append(results)
}
  }
  console.log(results)
  return results;
}

button.addEventListener("click", display20Flips)
button.addEventListener("click", display20Images)