// tests/api.test.js

const chai = require("chai");
const expect = chai.expect;
const supertest = require("supertest");
const server = require("../index"); // Update the path based on your file structure

const request = supertest(server);

describe("API Routes", () => {
  it("should get user data on GET /user", async () => {
    const response = await request.get("/user");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal("user fetched api updated successfully");
  });

  it("should create a user on POST /user", async () => {
    const userData = { username: "testuser", email: "test@example.com" };
    const response = await request.post("/user").send(userData);

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      message: "User created successfully",
      data: userData,
    });
  });

  it("should update a user on PATCH /user:id", async () => {
    const userId = "123";
    const response = await request.put(`/user/${userId}`);
    expect(response.status).to.equal(200);
    expect(response.text).to.equal("User updated successfully");
  });

  it("should delete a user on DELETE /user:id", async () => {
    const userId = "123";
    const response = await request.delete(`/user/${userId}`);

    expect(response.status).to.equal(200);
    expect(response.text).to.equal("User delete successfully");
  });
});
