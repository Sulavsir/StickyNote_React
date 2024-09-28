import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; 
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cards() {
  const [editingCard, setEditingCard] = useState({
    id: null,
    title: "Title",
    words: "Your words here",
    describe: "Description goes here",
  });

  const handleInputChange = (event) => {
    setEditingCard({
      ...editingCard,
      [event.target.name]: event.target.value,
    });
  };

  let [cards, setCards] = useState([
    {
      id: 1,
      title: "Strength",
      words: "A strength is everything",
      describe: "Your words is the strength to me ",
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: cards.length ? cards.at(-1).id + 1 : 1,
      title: editingCard.title,
      words: editingCard.words,
      describe: editingCard.describe,
    };
    setEditingCard(newCard);
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    if (!id) return toast.error("No note to be found");
    const deletedCards = cards.filter((cardId) => cardId.id !== id);
    if (!deletedCards) return toast.error("No card to be found to delete");
    setCards(deletedCards);
    toast.error("Data Deleted Successfully");
  };

  const editCard = (id) => {
    const card = cards.find((card) => id === card.id);
    if (!card) return toast.error("Can't find the note");
    setEditingCard(card);
    toast.info("You can now Edit your note... !");
  };

  const handleSave = () => {
    if (!editingCard.id) return toast.error("No card selected to save.");

    const updatedCards = cards.map((card) =>
      card.id === editingCard.id
        ? {
            ...card,
            title: editingCard.title,
            words: editingCard.words,
            describe: editingCard.describe,
          }
        : card
    );

    setCards(updatedCards);
    toast.success("Note Saved Successfully !");
    setEditingCard({ id: null, title: "", words: "", describe: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    position: "fixed",
    my: 2,
    overflowY: "auto", 
    maxHeight: "85vh" 
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%" }}> 
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={card.id}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontStyle: "oblique" }}>
                  Note {card.id}
                </Typography>
                {editingCard?.id === card.id ? (
                  <>
                    <input
                      type="text"
                      name="title"
                      value={editingCard?.id === card.id ? editingCard.title : card.title}
                      placeholder="Title here"
                      onChange={handleInputChange}
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
                      name="words"
                      value={editingCard?.id === card.id ? editingCard.words : card.words}
                      placeholder="Words of the day here"
                      onChange={handleInputChange}
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        padding: "3px",
                        backgroundColor: "black",
                        color: "white",
                        fontStyle: "italic",
                        width:"60%"
                      }}
                    />
                      
                    <textarea
                      placeholder="Description of the Text here"
                      name="describe"
                      value={editingCard.id === card.id ? editingCard.describe : card.describe}
                      style={{
                        display: "block",
                        padding: "15px",
                        backgroundColor: "black",
                        color: "white",
                        width: "60%", 
                        height: "50px", 
                      }}
                      onChange={handleInputChange}
                    ></textarea>
                  </>
                ) : (
                  <>
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="body1" sx={{ fontStyle: "italic", fontSize: "13px" }}>
                      {card.words}
                    </Typography>
                    <Typography variant="body2" sx={{py:2}}>{card.describe}</Typography>
                  </>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ py: 1 }} onClick={() => editCard(card.id)}>
                  <EditIcon />
                </Button>
                <Button size="small" sx={{ py: 1 }} onClick={() => deleteCard(card.id)}>
                  <DeleteForeverIcon />
                </Button>
                <Button
                  size="small"
                  sx={{ py: 1, width: "60%" }}
                  onClick={handleSave}
                  disabled={editingCard.id !== card.id}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
  <Button
    variant="contained"
    sx={{
      width: "20%",
      height: "100%",
      minHeight: "150px",
      mx: 2,
      backgroundColor: "purple", 
      color: "white",
      borderRadius: "20px", 
      boxShadow: 3, 
      "&:hover": {
        backgroundColor: "lightblue", 
      },
    }}
    onClick={addCard}
  >
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>+</Typography>
  </Button>
</Grid>
      </Grid>
    </Box>
  );
}
