const reserva = document.getElementById("reserva");
reserva.setAttribute("min", minDate());

function minDate() {
    const crDate = new Date();
    let dd = String(crDate.getDate()).padStart(2, '0');
    let mm = String(crDate.getMonth() + 1).padStart(2, '0');
    let yy = String(crDate.getFullYear());

    return (yy + '-' + mm + '-' + dd);
}