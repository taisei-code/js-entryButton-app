'use strict';

{
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", e => {
    e.preventDefault();
    btn.textContent = "エントリーが完了しました";
    btn.disabled    = true;
  })
}