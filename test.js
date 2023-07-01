const imgElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const userElement = document.querySelector(".username");

const testimonials = [
  {
    name: "Tiler A",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    text: "Graduating from university is worth much more than I paid.Thanks guyskeep up the good work I don't know what else to say. Graduating from university is great.",
  },
  {
    name: "Edward Newgate",
    photoUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    text: "I would be lost without Graduating from university. Just what I was looking for. I will refer everyone I know. I love your system",
  },
  {
    name: "Jack MehoF",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    text: "Thanks Graduating from university! Definitely worth the investment. Graduating from university did exactly what you said it does. The very best",
  },

  {
    name: "Gold D Roger",
    photoUrl:
      "https://cdn.shopify.com/s/files/1/0254/7574/3778/articles/ENhUPBFWkAE7Hmf_1400x.progressive.jpg?v=1628614545",
    text: "Dropped out of University to go find the One piece, Now Sengoku and Monkey D Garp wont let me breath. Rayleigh where's my shoe? ",
  },
];

let index = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[index];
  imgElement.src = photoUrl;
  textElement.innerText = text;
  userElement.innerText = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
