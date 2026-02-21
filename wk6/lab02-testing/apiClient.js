export const URL = "https://jsonplaceholder.typicode.com/users";

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
export async function createUser(user) {
    try {
        return await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json: charset=UTF-8' }
        }).then((r) => r.json())
    } catch(e) { throw new Error(`failed to create user: ${e}`) }
}
export async function updateUser(id, updates) {
    try {
        return await fetch(`${URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }).then((r) => r.json())
    } catch(e) { throw new Error(`failed to update user with ID ${id}: ${e}`) }
}
export async function deleteUser(id) {
    try {
        const res = await fetch(`${URL}/${id}`, { method: 'DELETE' });
        return res.ok;
    } catch(e) { throw new Error(`failed to delete user with ID ${id}: ${e}`) }
}
