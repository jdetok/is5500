import {fetchUsers, fetchUserById, createUser, updateUser, deleteUser } from "./apiClient.js"

test("apiClient placeholder", () => {
    expect(true).toBe(true);
});

const mockUsers = [
    { id: 1, name: 'Mock 1', email: 'mock1@email.com'},
    { id: 2, name: 'Mock 2', email: 'mock2@email.com'},
];

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: async () => mockUsers,
    });
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('fetchUsers', () => { 
    test('returns array of users', async () => {
        const users = await fetchUsers();
        expect(users).toEqual(mockUsers);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    }); 
});