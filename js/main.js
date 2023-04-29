'use strict';

const btn = document.querySelector("#btn");

btn.addEventListener("click", entryFinish);

function entryFinish() {
  btn.textContent = "エントリーが完了しました";
  btn.disabled    = true;
}