/**
 * initial view
 * 
 * @param {*} tableData 
 */
function initView(tableData) {
  let tbody = document.querySelector(".table > tbody");
  
  while (tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }

  for (let i = 0; i < tableData.length; i++) {
    const data = tableData[i];
    let tr = document.createElement("tr");
    // id
    let tdId = document.createElement("td");
    tdId.innerText = data.id;
    tr.appendChild(tdId);
    // image
    let tdImage = document.createElement("td");
    let imgImage = document.createElement("img");
    imgImage.setAttribute("src", data.thumbnailUrl);
    tdImage.appendChild(imgImage);
    tr.appendChild(tdImage);
    // name
    let tdName = document.createElement("td");
    tdName.innerText = data.name;
    tr.appendChild(tdName);
    // price
    let tdPrice = document.createElement("td");
    tdPrice.innerText = data.price;
    tr.appendChild(tdPrice);
  
    tbody.appendChild(tr);
  }
  
  return;
}

/**
 * start random
 */
document.getElementById("start").onclick = () => {
  id = setInterval(() => {
    for(let i = TABLE_DATA.length - 1; i > 0; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = TABLE_DATA[i];
      TABLE_DATA[i] = TABLE_DATA[r];
      TABLE_DATA[r] = tmp;
    }
    initView(TABLE_DATA);
    return;
  },
  1000);

  let message = document.querySelector("#message");
  message.textContent = "ランダム表示中"

  return;
}

/**
 * stop random
 */
document.getElementById("stop").onclick = () => {
  clearInterval(id);

  let message = document.querySelector("#message");
  message.textContent = "ランダム表示を停止しました"

  setTimeout(() => {
    let message = document.querySelector("#message");
    message.textContent = ""
  }, 5000);

  return; 
}

/**
 * sort
 */
document.getElementById("sort").onclick = () => {
  TABLE_DATA.sort((a, b) => {
    if (parseInt(a.price) > parseInt(b.price)){
      return -1;
    } else if(parseInt(a.price) < parseInt(b.price)) {
      return 1;
    }

    if (parseInt(a.id) > parseInt(b.id)) {
      return 1;
    } else if (parseInt(a.id) < parseInt(b.id)) {
      return -1;
    }
  })
  initView(TABLE_DATA);

  return;
};

// グローバル領域にinterval用のidを持つ
let id = null;

// 画面初期表示
initView(TABLE_DATA);
