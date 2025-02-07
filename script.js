document.addEventListener("DOMContentLoaded", function () {
    fetch("assignmentData.json")
        .then(response => response.json())
        .then(data => {
            const users = data[0].data; // this extracts the data from the json
            const gridContainer = document.getElementById("userGrid");  // since i decided to use grid container and grid for the css

            users.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("grid-item");

                userDiv.innerHTML = `
                    <img src="${user.avatar}" alt="Avatar">
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                `;

                gridContainer.appendChild(userDiv);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});
