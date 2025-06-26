// fungsi logout button dengan sweetalert confirmation
document.addEventListener('DOMContentLoaded', function () {
    let logoutBtn = document.getElementById('logoutButton');

    // kondisi 
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            Swal.fire({
                title: "Are you sure?",
                text: "You're account will log out!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log out!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Logged Out!",
                        text: "You have been logged out",
                        icon: "success"
                    }).then(() => {
                        // redirect ke halaman login setelah konfirmasi log out
                        window.location.href = "./login.html"
                    });
                }
            });
        });
    }
});


// Fungsi confirmasi pembayaran dengan sweetalert
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector("form");
    // kondisi
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            Swal.fire({
                title: "Are you sure to confirm?",
                text: "Please check your detail before confirming",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, confirm it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "confirmed!",
                        text: "youre payment has been confirmed",
                        icon: "success"
                    }).then(() => {
                        // redirect ke halaman success setelah konfirmasi log out
                        window.location.href = "./success.html"
                    });
                } else {
                    swal.fire({
                        title: "cancelled",
                        text: "your payment has not been confirmed",
                        icon: "error",
                    });
                }
            });

        });
    }
});