// tests/api.test.js
const request = require("supertest");
const app = require("../src/app");

describe("API Tests", () => {
  it("GET /api/health should return status ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("POST /api/user should create a user", async () => {
    const res = await request(app).post("/api/user").send({ name: "John" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("John");
  });

  it("POST /api/user without name should return 400", async () => {
    const res = await request(app).post("/api/user").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Name required");
  });
});
