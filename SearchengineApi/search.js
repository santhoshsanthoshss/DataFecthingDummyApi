let products = [
  {
    id: 1,
    sname: "Redmi 5G",
    price: 13499,
    color: "black",
    imgUrl: "https://m.media-amazon.com/images/I/71tCOhEigtL._SX679_.jpg",
  },
  {
    id: 2,
    sname: "Samsung Galaxy M04 ",
    price: 7499,
    color: "blue",
    imgUrl: "https://m.media-amazon.com/images/I/814ePfNubRL._SX679_.jpg",
  },
  {
    id: 3,
    sname: "Xiaomi Redmi 10 ",
    price: 11248,
    color: "black",
    imgUrl: "https://m.media-amazon.com/images/I/71BiCb7N5YL._SX679_.jpg",
  },
  {
    id: 4,
    sname: "Apple iPhone 14",
    price: 61999,
    color: "blue",
    imgUrl:
      "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    id: 5,
    sname: "Fire-Boltt Gladiator",
    price: 1999,
    color: "white",
    imgUrl: "https://m.media-amazon.com/images/I/71XWJeRo9kL._SX679_.jpg",
  },
];

let studentDetails = document.getElementById("studentDetails");

products.map(({ id, sname, price, color, imgUrl }, index) => {
  studentDetails.innerHTML += `
    <tr>
    <td>${Number(index) + 1}</td>
    <td>${sname}</td>
    <td>${price}</td>
    <td>${color}</td>
    <td>
    <img height="200px" width="200px" src="${imgUrl}" alt="" />

    </td>
  </tr>
    `;
});

function getproducts() {
  studentDetails.innerHTML = "";
  let searchproduct = document.getElementById("searchproduct");
  let searchValue = searchproduct.value;

  let filtered = products.filter(({ sname, color }, index) => {
    // return sname === searchValue;
    return (
      sname.toLowerCase().includes(searchValue.toLowerCase()) ||
      color.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  filtered.map(({ id, sname, price, color, imgUrl }, index) => {
    studentDetails.innerHTML += `
          <tr>
          <td>${Number(index) + 1}</td>
          <td>${sname}</td>
          <td>${price}</td>
          <td>${color}</td>
          <td>
          <img height="200px" width="200px" src="${imgUrl}" alt="" />
      
          </td>
        </tr>
          `;
  });
}
