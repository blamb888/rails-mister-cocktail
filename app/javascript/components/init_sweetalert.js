import Swal from 'sweetalert2';
const swalButton = document.querySelector("#delete-tag");
swalButton.addEventListener('click', () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Somebody might love this cocktail, you know?",
    icon: "warning",
    button: "Okay then~",
  })
});

export { Swal };
