const form = document.querySelector(".form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

const DATA = JSON.parse(localStorage.getItem("data")) || [];

function fn(data) {
  list.innerHTML = "";
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
            ${item.title}
            <button class="delete-btn">O'chirish</button>
        `;
    list.appendChild(li);

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      const index = DATA.findIndex((todo) => todo.id === item.id);
      if (index > -1) {
        DATA.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(DATA));
        fn(DATA);
      }
    });
  });
}
fn(DATA);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (value === "") {
    return;
  }

  let newTodo = {
    id: new Date().getTime(),
    title: value,
  };

  DATA.push(newTodo);
  localStorage.setItem("data", JSON.stringify(DATA));
  fn(DATA);
  input.value = "";
});
