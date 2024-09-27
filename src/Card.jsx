import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
export default function Cards() {
  const [title, setTitle] = useState("Your Title goes here");
  const [words, setWords] = useState("Word for the day");
  const [describe, setDescribe] = useState("Describe your text here");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleWords = (e) => setWords(e.target.value);
  const handleDescribe = (e) => setDescribe(e.target.value);

  let [cards, setCards] = useState([
    {
      id: 1,
      title: "title written",
      words: "A strength is everything",
      describe: "your words is the strength to me ",
    },
  ]);

  const handleCardData = (e) => {
    e.preventDefault();
  };

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      title,
      words,
      describe,
    };
    setCards([...cards, newCard]);
    console.log("New cards have been added", [...cards, newCard]);
  };

  const deleteCard = (id)=>{
    cards = cards.filter((cardId)=> cardId.id === id)
  }

  const editCard = (id, fields) =>{
    const cardID = cards.findIndex((card)=> id=== card.id)
    if(index === -1) return alert("cant find the note")
    cards[cardID] ={
      ...cards[cardID],
      fields
    }
    setCards([...cards])
  }

  const handleSave = () => {
    toast.success("Note Saved Successfully !");
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        position: "fixed",
        my: 2,
      }}
    >
      {cards.map((card) => (
        <Card key={card.id} sx={{ width: "100%", maxWidth: 300, mx: 2 }}>
          <CardContent>
            <Typography variant="h6">{card.id}</Typography>
            <input
              type="text"
              placeholder=" Title here"
              onChange={handleTitle}
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "5px",
                backgroundColor: "black",
                color: "white",
              }}
            />
            <input
              type="text"
              placeholder="Words of the day here"
              onChange={handleWords}
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "3px",
                backgroundColor: "black",
                color: "white",
                fontStyle: "italic",
              }}
            />

            <textarea
              placeholder="Description of the Text here"
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "15px",
                backgroundColor: "black",
                color: "white",
              }}
              onChange={handleDescribe}
            ></textarea>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ py: 1 }} onClick={()=>{
                toast.success("Note Edited Successfully !")
            }}>
              <EditIcon />
            </Button>
            <Button
              size="small"
              sx={{ py: 1 }}
              onClick={() => {
                toast.error("Note Deleted Successfully");
              }}
            >
              <DeleteForeverIcon />
            </Button>
            <Button
              size="small"
              sx={{ py: 1, width: "60%" }}
              onClick={handleSave}
            >
              Save
            </Button>
          </CardActions>
        </Card>
      ))}

      <Button
        variant="contained"
        sx={{
          height: "100%",
          minWidth: "40px",
          mx: 2,
          p: 3,
        }}
        color="secondary"
        onClick={addCard}
      >
        +
      </Button>
    </Box>
  );
}
