const container = document.getElementById("container")
const main = document.querySelector("main")
const configBtn = document.createElement("div")

function clearGrid(){
    container.innerHTML=""
}

function createGrid(size){
    if (container.hasChildNodes()){
        clearGrid()
    }
    
    for (i = 0; i < size; i++){
        const row = document.createElement("div")
        row.classList.add("row")
        container.appendChild(row)
        
        for (j = 0; j < size; j++){
            const grid = document.createElement("div")
            grid.classList.add("grid")
            row.appendChild(grid)
        }
    }
}

configBtn.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side: ")

    if (userInput < 2 || userInput > 100){
        alert("Input cannot be less than 2 and more than 100")
    }else{
        createGrid(userInput)
    }
})

configBtn.classList.add("configBtn")
main.prepend(configBtn)
configBtn.textContent = "Config"

createGrid(16)
console.log(container)
console.log(main)
console.log(window.screen)