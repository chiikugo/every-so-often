import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json())
app.use(cors())



app.get("/api/notes", async (req, res) => {
    
    const notes = await prisma.note.findMany();
    
    res.json(notes);
    


});



app.post("/api/notes", async(req, res) => {
    const {title, content} = req.body;

    if (!title || !content) {
        return res
        .status(400)
        .send("title and content required");
    }
    
    try {
        const note = await prisma.note.create({
            data: {title, content}
        })
        res.json(note);
        
    } catch (error) {
        res.
        status(500)
        .send("error please backtrack");
        
    }


    
});

app.put("/api/notes/:id", async(req, res)=> {
    const {title, content} = req.body;
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        return res
        .status(400)
        .send("ID NEEDS TO BE VALID!!");
    }

    try {
        const updatedNote = await prisma.note.update({
            where: { id },
            data: {title, content}
        })
        
    } catch (error) {
        res
        .status(500)
        .send("Error!");
        
    }
});

app.delete("/api/notes/:id", async (req, res)=> {
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
        res
        .status(500)
        .send("oops, there was an error!");
    }
})
app.listen(5003, ()=> {

    console.log("server running on localhost:5003")

})