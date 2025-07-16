function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const usersList = document.getElementById('usersList');
      usersList.innerHTML = '';
      data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        `;
        usersList.appendChild(userDiv);
      });
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', fetchUsers);
});