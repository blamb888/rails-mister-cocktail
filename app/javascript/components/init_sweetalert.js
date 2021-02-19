import Swal from 'sweetalert2';

// var sandwiches = document.querySelectorAll('.sandwich');
// sandwiches.forEach(function (sandwich, index) {
//   console.log(sandwich); // The element
//   console.log(index); // The index in the NodeList
// });
const init_sweetalert = () => {
  const swalButtons = document.querySelectorAll(".delete-tag");
  swalButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        Swal.fire({
          title: 'Are you sure?',
          text: "Somebody might really love this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: `I don't care, delete it!`
        }).then((result) => {
          if (result.isConfirmed) {
            const link = event.target.nextElementSibling;
            link.click();
            event.target.parentElement.remove();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      });
  })
};

export { init_sweetalert };
