for (let product of products) {
    let card = `
      <div class="card">
          <div class="image-container">
              <image src="${product.image}"></image> 
          </div> 
          <div class="container">
              <div class="info">
              <h5 class="name">${product.title}</h5> 
              </div>
          </div>
      </div>
      `;
    
        document.getElementById("products").innerHTML += card;
}

function SearchEngine() {
    // Lấy giá trị input
    var input, filter, card, name, i, txtValue;
    input = document.getElementById('search-input')
    filter = input.value.toLowerCase();
    card = document.getElementsByClassName('card');

    // Ẩn div ko có trong search
    for (i = 0; i < card.length; i++) {
        name = card[i].getElementsByClassName('name')[0];
        txtValue = name.innerText; // or name.innerHTNL
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }

}

function logOut() {
    window.location.href = '../html/login.html'
}