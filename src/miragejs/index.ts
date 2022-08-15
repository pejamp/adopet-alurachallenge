import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.urlPrefix = 'http://localhost:3000';

    this.get("/pets", () => [
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757993/adopet/Animais_-_Dunga_pavokr.png",
        name: "Dunga",
        age: "2 anos",
        size: "pequeno",
        features: "Calmo e educado",
        city: "Rio de Janeiro (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757993/adopet/Animais_-_Fel%C3%ADcia_jwoomk.png",
        name: "Felícia",
        age: "3 meses",
        size: "pequeno",
        features: "Ativa e carinhosa",
        city: "Nova Iguaçu (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757994/adopet/Animais_-_Sirius_vvcbcl.png",
        name: "Sirius",
        age: "6 meses",
        size: "grande",
        features: "Ativo e educado",
        city: "Duque de Caxias (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757993/adopet/Animais_-_Fiona_bz3fem.png",
        name: "Fiona",
        age: "3 anos",
        size: "pequeno",
        features: "Calma e carinhosa",
        city: "São Gonçalo (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757993/adopet/Animais_-_Sid_tw2aos.png",
        name: "Sid",
        age: "8 meses",
        size: "médio/grande",
        features: "Brincalhão e amável",
        city: "Rio de Janeiro (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757993/adopet/Animais_-_Yoda_yuneay.png",
        name: "Yoda",
        age: "1 ano",
        size: "médio",
        features: "Ativo e carinhoso",
        city: "Nova Iguaçu (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757994/adopet/Animais_-_Lua_ozr1ib.png",
        name: "Lua",
        age: "6 meses",
        size: "médio",
        features: "Ativa e carinhosa",
        city: "Duque de Caxias (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757993/adopet/Animais_-_Amora_pnrudl.png",
        name: "Amora",
        age: "45 dias",
        size: "grande",
        features: "Calma e carinhosa",
        city: "São Gonçalo (RJ)",
        contact: "#"
      },
      {
        image: "https://res.cloudinary.com/dsvcvkys8/image/upload/v1658757994/adopet/Animais_-_Zelda_uxbvyn.png",
        name: "Zelda",
        age: "5 meses",
        size: "médio",
        features: "Ativa e amável",
        city: "Rio de Janeiro (RJ)",
        contact: "#"
      }
    ],
    { timing: 4000 }, 
    )
  }
})