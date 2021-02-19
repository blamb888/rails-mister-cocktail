import Swal from 'sweetalert2';

// var sandwiches = document.querySelectorAll('.sandwich');
// sandwiches.forEach(function (sandwich, index) {
//   console.log(sandwich); // The element
//   console.log(index); // The index in the NodeList
// });
const init_sweetalert = () => {
  const swalButtons = document.querySelectorAll(".delete-tag");
  console.log("hello")
  swalButtons.forEach((button) => {
    console.log(button)
      button.addEventListener('click', (event) => {
        event.preventDefault();
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(button)
            const link = button.nextElementSibling;
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
  });
};

export { init_sweetalert };
