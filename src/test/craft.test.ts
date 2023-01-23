import request from "supertest";
import app from "../app";
import { CraftInterface } from "../controllers/craft.controller.interfaces";

let newCraft: CraftInterface;

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
