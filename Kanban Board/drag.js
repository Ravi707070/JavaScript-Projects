const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

droppables.forEach(droppable => {
    droppable.addEventListener("dragover", (e) => {
        e.preventDefault();
    
        const bottomTask = insertAboveTask(droppable, e.clientY);
        const curTask = document.querySelector(".dragging");

        if (!bottomTask) {
            droppable.appendChild(curTask);
        } else {
            droppable.insertBefore(curTask, bottomTask);
        }
    });
});

const insertAboveTask = (zone, mouseY) => { 
    const els = zone.querySelectorAll(".task:not(.dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach(el => {
        const rect = el.getBoundingClientRect();
        const offset = mouseY - rect.top - rect.height / 2;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = el;
        }
    });

    return closestTask;
};