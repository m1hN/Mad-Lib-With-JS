document.getElementById("btn1").addEventListener("click", madLib);

// Event Function
function madLib() {
  let plu = document.getElementById("plural").value;
  let adj = document.getElementById("adjective").value;
  console.log(plu);
  console.log(adj);

  // PROCESS
  let change = `<em>"There are too many ${plu.toLowerCase()} on this ${adj.toLowerCase()} airplane!"</em> I screamed.`;
  console.log(change);

  // OUTPUT
  if (plu != "" && adj != "") {
    document.getElementById("outcome1").innerHTML = change;
  }
}

document.getElementById("btn2").addEventListener("click", madLib2);

// Event Function
function madLib2() {
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  console.log(verb);
  console.log(noun);

  // PROCESS
  let change1 = `<em>"Somebody has to ${verb.toLowerCase()} on the ${noun.toLowerCase()} to solve this problem!"</em>`;
  console.log(change1);

  // OUTPUT
  if (verb != "" && noun != "") {
    document.getElementById("outcome2").innerHTML = change1;
  }
}
