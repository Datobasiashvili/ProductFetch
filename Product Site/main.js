// We fetch random object that contains other objects from Dummy json.
fetch('https://dummyjson.com/products')

//We turn it to .json file
.then(res => {
    return res.json();
})

// data in this case is our whole object that contains other objects as children
.then(data => {
    const products = data.products;

    // we then slice this object in 3 different parts (for ids);
    const part1 = products.slice(0, 10);
    const part2 = products.slice(10, 20);
    const part3 = products.slice(20, 30);

    //Then we create a differenct div item for each of these elements.
    // This is a factory function that creates (3 in this example) different divs for each element 
    function createDivsForProducts(productArray, containerId) {
        productArray.forEach(element => {
          const productDiv = `
            <div class='product' id='${(element.id)-1}'>
              <div class='text-container'>
                <h2 class='product-title'>${element.title}</h2>
              </div>
              <img src="${element.images[0]}" alt="${element.title}">
            </div>
          `;
    //Then we apply all this information to #containerId that is a parameter for our function ('cosmetics', 'furniture', 'food' in this case)
          document.querySelector(`#${containerId}`).insertAdjacentHTML('beforeend', productDiv);
        });
      }
    // We invoke our function 3 times with 2 different arguments.
      createDivsForProducts(part1, 'cosmetics')
      createDivsForProducts(part2, 'furniture')
      createDivsForProducts(part3, 'food')

    console.log(data)

    // We get an element with class = 'product' ( each of our child elements has one)
    const productElements = document.querySelectorAll('.product');

    //Then we apply .forEach method to our .product element.
    productElements.forEach(productDetails => {
      
      //We add an event Listener for click for our every object element.
      productDetails.addEventListener('click', function(){

        const productId = this.id;

        //We open a new window (productDetails.html) for each of our objects (when clicked);
        const newWindow = window.open('C:/Users/User/Desktop/dato2/Product Site/productDetails.html');
        
        //Spliting date so  only the common date part will show
        const dateTime = 

        newWindow.document.write(

          `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.products[productId].title}</title>
                <link rel='stylesheet' href='C:/Users/User/Desktop/Product Site/Product Site/productDetails.css'>
              </head>
              <body>
                <header>
                  <div class='main-heading'>
                    <img src='C:/Users/User/Desktop/Product Site/Product Site/cookie3.png' alt='cookie logo' id='cookie-image'>
                    <h1 class='title'><span id='my-name'>Dato's</span> <span>Products</span></h1>
                  </div>

                  <div class='links'>
                    <h1 class='reviews' id='reviews'>Reviews</h1>
                    <h1 class='back-to-main'>Back to Main Page </h1>
                  </div>
                </header>

                
                <div class='review-pop-up' style='display: none'>

                  <div class='review-box'>
                    <div class='comment-pfp'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'></img>
                      <p>${data.products[productId].reviews[0].reviewerName}</p>
                    </div>

                    <div class='rating-date'>
                      <div class='star-rating'></div>
                      <p>${data.products[productId].reviews[0].date.split('T')[0]}</p>
                    </div>

                    <p class='comment'>${data.products[productId].reviews[0].comment}</p>
                  </div>

                  <div class='review-box'>
                    <div class='comment-pfp'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'></img>
                      <p>${data.products[productId].reviews[1].reviewerName}</p>
                    </div>

                    <div class='rating-date'>
                      <div class='star-rating'></div>
                      <p>${data.products[productId].reviews[1].date.split('T')[0]}</}</p>
                    </div>

                    <p class='comment'>${data.products[productId].reviews[1].comment}</p>
                  </div>

                  <div class='review-box'>
                    <div class='comment-pfp'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'></img>
                      <p>${data.products[productId].reviews[2].reviewerName}</p>
                    </div>
                    
                    <div class='rating-date'>
                      <div class='star-rating'></div>
                      <p>${data.products[productId].reviews[2].date.split('T')[0]}</p>
                    </div>

                    <p class='comment'>${data.products[productId].reviews[2].comment}</p>
                  </div>
                </div>

                <div class='container'>

                  <div class='text-description'>
                    <div class='text-container'>
                      <h1 class='product-name'>${data.products[productId].title.split(" ").slice(0, 2).join(" ")}<br><span class="second-line">${data.products[productId].title.split(" ").slice(2).join(" ")}</span></h1>

                      <p>${data.products[productId].description}</p>
                    </div>

                    <div class='under'>
                      <div class='box'>
                        <p class='number'><span>${data.products[productId].price}$</span></p>
                        <p class='name'>Price</p>
                      </div>

                      <div class='box'>
                        <p class='number'><span class='red-color'>${data.products[productId].stock}</span></p>
                        <p class='name'>Stock</p>
                      </div>

                      <div class='box'>
                        <p class='number'><span class='red-color'>${data.products[productId].rating}</span></p>
                        <p class='name'>Rating</p>
                      </div>
                    </div>
                  </div>

                  <img id='product-image' src='${data.products[productId].images[0]}'>

                </div>
              
                <script src='C:/Users/User/Desktop/Product Site/Product Site/details.js'></script>

                <!-- Making a star -->
                
                <script>
                  const ratingNum = [
                    ${data.products[productId].reviews[0].rating},
                    ${data.products[productId].reviews[1].rating},
                    ${data.products[productId].reviews[2].rating}
                  ]

                  const starContainers = document.querySelectorAll('.star-rating')

                  ratingNum.forEach((number, index) => {
                      const starDiv = document.createElement('div');
                      const oneStarContainer = starContainers[index];
                      
                      for(let i = 0; i < 5; i++){
                          const star = document.createElement('span');
                          star.classList.add('star');

                          if (i < number){
                              star.setAttribute('class', 'filled')
                          }

                          star.textContent = '★';
                          starDiv.appendChild(star);
                      }

                      oneStarContainer.appendChild(starDiv);
                  });

                </script>

              </body>
              </html>
          `
        )
        newWindow.document.close();
      })      
    })
})

.then(console.log())
