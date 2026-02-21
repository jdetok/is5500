import { jest, describe, test, expect, beforeEach, afterEach } from "@jest/globals";
import { fetchUsers, fetchUserById, createUser, updateUser, deleteUser } from "./apiClient.js";

const testId = 1;
const testNewUser = {
    name: "Test User",
    username: "test",
    email: "test@email.com",
};
const testUpdates = { name: "New Name", username: "newname" };
const mock1 = { id: 1, name: "Mock 1", email: "mock1@email.com" };
const mock2 = { id: 2, name: "Mock 2", email: "mock2@email.com" };
const mockUsers = [mock1, mock2];

beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockUsers,
    });
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("success cases", () => {
    test("fetchUsers returns an array of user objects", async () => {
        const users = await fetchUsers();
        expect(users).toEqual(mockUsers);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
    test("fetchUserById returns a user object", async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mock1,
        });
        const user = await fetchUserById(testId);
        expect(user).toEqual(mock1);
        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/1");
    });

    test("createUser returns a new user object with ID", async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mock1,
        });

        const user = await createUser(testNewUser);

        expect(user).toEqual(mock1);
        expect(global.fetch).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/users",
            expect.objectContaining({
                method: "POST",
            }),
        );
    });

    test("updateUser returns a mofified user object", async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => testUpdates,
        });

        const user = await updateUser(testId, testUpdates);

        expect(user.name).toBe("New Name");
        expect(global.fetch).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/users/1",
            expect.objectContaining({
                method: "PATCH",
            }),
        );
    });

    test("deleteUser returns a truthy success response", async () => {
        global.fetch.mockResolvedValueOnce({ ok: true });
        const result = await deleteUser(testId);
        expect(result).toBe(true);
        expect(global.fetch).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/users/1",
            expect.objectContaining({
                method: "DELETE",
            }),
        );
    });
});

describe("failure cases", () => {
    test("fetchUsers throws on network error", async () => {
        global.fetch.mockRejectedValueOnce(new Error("Network error"));
        await expect(fetchUsers()).rejects.toThrow("failed to fetch users");
    });

    test("fetchUserById throws on network error", async () => {
        global.fetch.mockRejectedValueOnce(new Error("Network error"));
        await expect(fetchUserById(testId)).rejects.toThrow("failed to fetch user with ID 1");
    });

    test("createUser throws on network error", async () => {
        global.fetch.mockRejectedValueOnce(new Error("Network error"));
        await expect(createUser(testNewUser)).rejects.toThrow("failed to create user");
    });

    test("updateUser throws on network error", async () => {
        global.fetch.mockRejectedValueOnce(new Error("Network error"));
        await expect(updateUser(testId, testUpdates)).rejects.toThrow("failed to update user");
    });

    test("deleteUser throws on network error", async () => {
        global.fetch.mockRejectedValueOnce(new Error("Network error"));
        await expect(deleteUser(testId)).rejects.toThrow("failed to delete user");
    });
});
