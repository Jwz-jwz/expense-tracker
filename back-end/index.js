import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 8368;
const sql = neon(`${process.env.DATABASE_URL}`);

app.post("/sign-in", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    if (user.length === 0) {
      return response
        .status(400)
        .json({ message: "email or password not match" });
    }

    if (user[0].password !== password) {
      return response.status(401).json({ message: "password not match" });
    }

    response.status(200).json({ message: "Login successfull", user: user[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during login user" });
  }
});

app.post("/sign-up", async (request, response) => {
  const { name, email, password } = request.body;
  //
  try {
    const existedUser = await sql`SELECT * FROM users WHERE email=${email}`;
    if (existedUser.length > 0) {
      return response.json({ message: "User already exist" });
    }
    const newUser = await sql`INSERT INTO users (email, name, password)
                VALUES(${email}, ${name}, ${password} )
                RETURNING id, email`;

    response.json({ message: "User successfully created", user: newUser[0] });
  } catch (error) {
    response.json({ message: "Internal server error during login user" });
  }
});

app.post("/category", async (request, response) => {
  const { categoryName, bgColor, bgIcon } = request.body;

  try {
    const existedCategory =
      await sql`SELECT * FROM category WHERE name=${categoryName}`;
    if (existedCategory.length > 0) {
      return response.status(400).json({ message: "Category already exist" });
    }
    const newCategory =
      await sql`INSERT INTO category (name, category_icon, icon_color)
                VALUES(${categoryName}, ${bgIcon}, ${bgColor} )
                RETURNING *`;

    response.status(201).json(newCategory[0]);
  } catch (error) {
    response.json({ message: "Internal server error during login user" });
  }
});
app.get("/category", async (request, response) => {
  try {
    const allCategory = await sql`SELECT * FROM category `;
    response.status(200).json({ message: "All category", data: allCategory });
  } catch (error) {
    console.log(error);
  }
});

app.post("/record", async (request, response) => {
  const {
    user_id,
    name,
    amount,
    transaction_type,
    description,
    category_id,
    date,
    time,
  } = request.body;

  try {
    const newRecord =
      await sql`INSERT INTO record (user_id, name, amount,transaction_type, description, category_id,date,time)
                VALUES(${user_id}, ${name}, ${amount}, ${transaction_type}, ${description}, ${category_id}, ${date}, ${time} )
                RETURNING *`;

    response.status(201).json(newRecord[0]);
  } catch (error) {
    response.json({ message: "Internal server error during login user" });
  }
});

app.listen(port, () => {
  console.log(`server ajillaj ehelle http://localhost:${port}`);
});
