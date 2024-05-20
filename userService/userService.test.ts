// userService.test.ts
import axios from "axios";
import { UserService } from "./userService";

jest.mock("axios");

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  test("fetches user successfully", async () => {
    const mockUserData = { id: 1, name: "John Doe", email: "john@example.com" };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockUserData });

    const user = await userService.getUser(1);
    expect(user).toEqual(mockUserData);
  });

  test("throws error on failed fetch", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch")
    );

    await expect(userService.getUser(1)).rejects.toThrow(
      "Failed to fetch user"
    );
  });
});
