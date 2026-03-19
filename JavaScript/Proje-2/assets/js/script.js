let tasks = JSON.parse(localStorage.getItem("tasks")) || []

let filter = "all"
let search = ""

const list = document.getElementById("taskList")
const taskInput = document.getElementById("taskInput")

function save(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function toast(type){
    let el = type === "success"
    ? document.getElementById("successToast")
    : document.getElementById("errorToast")

    new bootstrap.Toast(el).show()
}

function render(){
    list.innerHTML = ""
    let data = tasks

    if(filter === "active")
        data = data.filter(t => !t.done)

    if(filter === "done")
        data = data.filter(t => t.done)

    if(search)
        data = data.filter(t =>
            t.title.toLowerCase().includes(search)
        )

    data.forEach(t => {
        const div = document.createElement("div")
        div.className = "task " + (t.done ? "done" : "")

        div.innerHTML = `
            <strong>${t.title}</strong>
            <div class="actions">
                <button class="complete" onclick="toggle(${t.id})">✔</button>
                <button class="delete" onclick="removeTask(${t.id})">🗑</button>
            </div>
        `

        list.appendChild(div)
    })

    document.getElementById("countAll").textContent = tasks.length
    document.getElementById("countActive").textContent = tasks.filter(t => !t.done).length
    document.getElementById("countDone").textContent = tasks.filter(t => t.done).length

    save()
}

function add(){
    const val = taskInput.value.trim()

    if(!val){
        toast("error")
        return
    }

    tasks.push({
        id: Date.now(),
        title: val,
        done: false
    })

    taskInput.value = ""

    toast("success")
    render()
}

function toggle(id){
    tasks = tasks.map(t =>
        t.id === id ? {...t, done: !t.done } : t
    )
    render()
}

function removeTask(id){
    tasks = tasks.filter(t => t.id !== id)
    render()
}

document.getElementById("addBtn").onclick = add

taskInput.addEventListener("keypress", e =>{
    if(e.key === "Enter") add()
})

document.getElementById("search").addEventListener("input", e =>{
    search = e.target.value.toLowerCase()
    render()
})

document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.onclick = () =>{
        document.querySelectorAll(".nav button")
        .forEach(x => x.classList.remove("active"))

        btn.classList.add("active")
        filter = btn.dataset.filter

        render()
    }
})

render()