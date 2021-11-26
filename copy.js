const pre_elements = document.querySelectorAll("pre");

pre_elements.forEach(pre => {
  if (pre.children.length === 1) {
    const code_element = pre.children.item(0);
    const new_button = create_copy_button(code_element);
    pre.style.position = 'relative';
    pre.appendChild(new_button);
  }
});

function create_copy_button(code_element) {
  const new_button = document.createElement("button");
  new_button.innerHTML = "Copy";
  new_button.classList.add("copy_button");
  new_button.addEventListener("click", function (e) {
    copyStringWithNewLineToClipBoard(code_element.textContent);
  });
  return new_button;
}

function copyStringWithNewLineToClipBoard(code_string){
  const text_area = document.createElement('textarea');
  text_area.innerHTML = code_string;
  const parentElement = document.body;
  parentElement.appendChild(text_area);
  text_area.select();
  document.execCommand('copy');
  parentElement.removeChild(text_area);
}