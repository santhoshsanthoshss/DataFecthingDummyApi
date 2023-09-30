let students = [
  {
    id: 1,
    sname: "walterWhite",
    age: 23,
    imgurl:
      "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/members/member-1.jpg",
  },
  {
    id: 2,
    sname: "Niall Katz",
    age: 28,
    imgurl:
      "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/members/member-2.jpg",
  },
  {
    id: 3,
    sname: "Demi Lewis",
    age: 18,
    imgurl:
      "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/members/member-3.jpg",
  },
  {
    id: 4,
    sname: "James 6th Birthday",
    age: 15,
    imgurl:
      "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/events-2.jpg",
  },
];

let studentDetails = document.getElementById("studentDetails");
// & map method
// students.map(({ sname, age, imgurl }, index) => {
//   studentDetails.innerHTML += `
//     <tr>
//     <td>${Number(index) + 1}</td>
//     <td>${sname}</td>
//     <td>${age}</td>
//     <td>
//     <img height="200px" width="200px" src="${imgurl}" alt="">
//     </td>
//   </tr>
//     `;
// });

// & forof method
// for (const { id, sname, age, imgurl } of students) {
//   studentDetails.innerHTML += `
//   <tr>
//           <td>${id}</td>
//           <td>${sname}</td>
//           <td>${age}</td>
//           <td>
//       <img height="200px" width="200px" src="${imgurl}" alt="">

//           </td>
//         </tr>
//   `;
// }

// & for in method

for (const index in students) {
  studentDetails.innerHTML += `
  <tr>
  <td>${Number(index) + 1}</td>
  <td>${students[index].sname}</td>
  <td>${students[index].age}</td>
  <td>
       <img height="200px" width="200px" src="${students[index].imgurl}" alt="">
  
  </td>
</tr>
  `;
}
