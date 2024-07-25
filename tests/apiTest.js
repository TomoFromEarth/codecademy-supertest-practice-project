const request = require("supertest");
const app = require("../app");

describe("GET /users", () => {
  it("responds with json containing a list of all users", (done) => {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /users/:id", () => {
  it("responds with json containing a single user", (done) => {
    request(app)
      .get("/users/U001")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /users/:id", () => {
  it("responds with json user not found", (done) => {
    request(app)
      .get("/users/idisnonesisting")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, "user not found")
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /users", () => {
  let data = {
    id: "1",
    name: "John Doe",
    contact: "1234567890",
    address: "123 Main Street",
  };
  it("responds with 201 created", (done) => {
    request(app)
      .post("/users")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, "user created")
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /users", () => {
  let data = {
    name: "John Doe",
    contact: "1234567890",
    address: "123 Main Street",
  };
  it("responds with 400 bad request", (done) => {
    request(app)
      .post("/users")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, "user not created")
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
