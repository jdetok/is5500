const URL = "https://jsonplaceholder.typicode.com/users";
export async function fetchUsers() {
    try {
        return await fetch(URL).then((r) => r.json());
    } catch(e) { throw new Error(`failed to fetch users: ${e}`) }
}
export async function fetchUserById(id) {
    try {
        const user = await fetch(`${URL}/${id}`).then((r) => r.json());
        return { id: user.id, name: user.name, email: user.email };
    } catch(e) { throw new Error(`failed to fetch user with ID ${id}: ${e}`) }
}
export async function createUser() {
    try {
        return await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                name: 'Justin DeKock', username: 'jdeto', email: 'test'
            }),
            headers: { 'Content-Type': 'application/json: charset=UTF-8' }
        }).then((r) => r.json())
    } catch(e) { throw new Error(`failed to create user: ${e}`) }
}
export async function updateUser(id) {
    try {
        return await fetch(`${URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: 'New Name', username: 'newname',
            }),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }).then((r) => r.json())
    } catch(e) { throw new Error(`failed to update user with ID ${id}: ${e}`) }
}
export async function deleteUser(id) {
    try {
        return await fetch(`${URL}/${id}`, {method: 'DELETE'}).then((r) => r.status);
    } catch(e) { throw new Error(`failed to delete user with ID ${id}: ${e}`) }
}
