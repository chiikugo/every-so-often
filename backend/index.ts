import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Replace with your frontend's domain
  // other options...
}));

app.get("/api/notes", async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .send("Title and content required");
  }

  try {
    const note = await prisma.note.create({
      data: { title, content }
    });
    res.json(note);
  } catch (error) {
    res.status(500).send("Error creating note");
  }
});

app.put("/api/notes/:id", async (req, res) => {
  const { title, content } = req.body;
  const id = parseInt(req.params.id);

  if (!id || isNaN(id)) {
    return res
      .status(400)
      .send("ID needs to be valid");
  }

  try {
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content }
    });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).send("Error updating note");
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (!id || isNaN(id)) {
    return res
      .status(400)
      .send("ID must be a valid int");
  }

  try {
    await prisma.note.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Error deleting note");
  }
});

app.listen(5003, () => {
  console.log("Server running on http://localhost:5003");
});
