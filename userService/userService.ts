// userService.ts
import axios from "axios";

export class UserService {
  async getUser(id: number): Promise<any> {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }
}
