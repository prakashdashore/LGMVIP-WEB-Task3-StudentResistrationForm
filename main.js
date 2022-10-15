let submit = document.querySelector(".submit");

submit.addEventListener('click', () => {

  var output = document.querySelector(".output");
  console.log(output);




  //storing the data in objects getting from form
  const data = {
    name: document.getElementById("name").value,

    email: document.getElementById("email").value,
    websitelink: document.getElementById("websitelink").value,
    skills: document.getElementById("skills").value
  };
  console.log(data);

  //Card Template
  let newlist = document.createElement('div');
  newlist.classList.add('addData');
  newlist.innerHTML = `

  <div class="photu">
  <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="" class="pro_img">

  </div>
  <div class="txts">
      <div class="NameContainer">${data.name}</div>
      <a href="${data.email}">${data.email}</a><br>
      <a href="${data.websitelink}">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
  </div>
    `
  console.log(newlist);
  //adding the card one after the other
  output.appendChild(newlist);

  //clearing the input fields after submission
  let input = document.querySelectorAll('input');
  input.forEach(input => {
    input.value = '';
  });

})