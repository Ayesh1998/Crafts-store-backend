import { CraftInterface } from "../controllers/crafts/craft.controller.interfaces";
import app from "../app";
import request from "supertest";

let newCraft: CraftInterface;

let randomNo = Math.floor(Math.random() * (324234234 - 234335)) + 324234234;

describe(`User Tests Suites`, () => {
  test(`Create User failed.`, async () => {
    const userData = {
      email: "user" + randomNo + "@gmail.com",
      password: "12345",
      role: "user",
      first_name: "Ayesh",
      last_name: "Lakshan",
    };
    const res = await request(app).post("/api/user").send(userData);
    expect(res.status).toBe(500);
  },20000);

  test(`Authenticate user failed.`, async () => {
    const userData = {
      email: "0@gmail.com",
      password: "12345",
    };
    const res = await request(app)
      .post("/api/user/authenticate")
      .send(userData);
    expect(res.status).toBe(401);
  }, 20000);
});

describe(`Craft Tests Suites`, () => {
  test(`Get Crafts`, async () => {
    const res = await request(app).get("/api/craft").send();
    expect(res.status).toBe(200);
  });

  test(`Add Craft - All fields have value.`, async () => {
    const craftData = {
      name: "Spoon",
      material: "Husk",
      price: "100",
      description: "Description",
      photo: "http://www.spoon.com",
    };
    const res = await request(app).post("/api/craft").send(craftData);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("_id");
    let tempNewCraft = res.body;
    delete tempNewCraft.__v;
    newCraft = tempNewCraft;
  });

  test(`Add Craft - Required fields missing.`, async () => {
    const craftData = {
      material: "Husk",
      price: "100",
      description: "Description",
      photo: "http://www.spoon.com",
    };
    const res = await request(app).post("/api/craft").send(craftData);
    expect(res.status).toBe(400);
  });

  test(`Update Craft - All fields have value.`, async () => {
    const craftData = {
      ...newCraft,
      name: "Broom",
    };
    const res = await request(app)
      .put(`/api/craft/${newCraft._id}`)
      .send(craftData);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("_id");
  });

  test(`Delete Craft`, async () => {
    const res = await request(app).delete(`/api/craft/${newCraft._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("_id");
  });
});
