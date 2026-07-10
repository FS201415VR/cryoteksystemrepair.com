console.log("Cryotek System Repair Loaded!");

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
function selectRepair(type) {

    document.getElementById("mailRepair").classList.remove("active");
    document.getElementById("dropRepair").classList.remove("active");

    if (type === "mail") {
        document.getElementById("mailRepair").classList.add("active");
    }

    if (type === "dropoff") {
        document.getElementById("dropRepair").classList.add("active");
    }

}
