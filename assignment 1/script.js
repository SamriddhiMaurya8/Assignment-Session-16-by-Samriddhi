function addTag() {
    const input = document.getElementById("tag-input");
    const container = document.getElementById("input-container");
    const value = input.value.trim();

    if (value === "") {
        alert("Input tag is empty!");
        return;
    }
    
    const item = document.createElement("div");
    item.className = "tag-item";
    item.innerHTML = `${value} <span class="tag-remove">×</span>`;

    item.querySelector(".tag-remove").addEventListener("click", () => {
        container.removeChild(item);
    });

    container.insertBefore(item, input);
    input.value = '';
    input.focus();
}

const addButton = document.getElementById("btn");
addButton.addEventListener("click", addTag);