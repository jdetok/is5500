const URL = "https://jsonplaceholder.typicode.com/users";
export async function fetchUsers() {
    try {
        res = await fetch(URL)
        console.log(`response status: ${res.status}`);

        users = await res.json();
        console.log(users);
    } catch(e) { throw new Error(`failed to fetch users: ${e}`) }
}
async function fetchUserById(id) {}
async function createUser(id) {}
async function updateUser(id, user) {}
async function deleteUser(id) {}
