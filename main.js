const form = document.querySelector("form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

const DATA = JSON.parse(localStorage.getItem("data")) || [];

function fn(data) {
  list.innerHTML = "";
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item.title;
    list.appendChild(li);
  });
}

fn(DATA);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  let newTodo = {
    id: new Date().getTime(),
    title: value,
  };

  DATA.push(newTodo);
  localStorage.setItem("data", JSON.stringify(DATA));
  fn(DATA);
  input.value = "";
});
