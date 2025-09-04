const members = [
  {
    id: 1,
    name: "Katya Bababekov",
    title: "Proprietária",
    description:
      "Especialista em soluções para cabelos finos, corte e secagem. Ela tem uma abordagem única para encontrar o melhor estilo para os clientes.",
    photo: "https://res.cloudinary.com/dyj6lkekg/image/upload/tete/katya.png",
    link: "https://www.instagram.com/stories/highlights/18162872782046022/",
  },
  {
    id: 2,
    name: "Lilia Kravchuk",
    title: "Estilista sênior e colorista",
    description:
      "Cria cores frescas e naturais usando as melhores técnicas de coloração e produtos de cor.",
    photo:
      "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/lilia.png",
    link: "https://www.instagram.com/stories/highlights/17860344665111292/",
  },
  {
    id: 3,
    name: "Mary B Talbot",
    title: "Estilista sênior e colorista",
    description:
      "Mary tem uma abordagem criativa para cor, corte e estilo. Realiza cortes masculinos e femininos.",
    photo:
      "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/mary.jpg",
    link: "https://www.instagram.com/stories/highlights/17854588970224602/",
  },
  // {
  //   id: 4,
  //   name: "Velma",
  //   title: "Manager", // @TODO
  //   description:
  //     "For over a decade of service at Studio Lonier, Denis has been keeping up with the latest trends and innovations.", // @TODO
  //   photo:
  //     "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/velma.jpg",
  // },
  {
    id: 5,
    name: "Tanya Mitnik",
    title: "Estilista sênior e colorista",
    description:
      "Estilista sênior e colorista especializada em looks naturais duradouros. Áreas de especialização: Coloração orgânica, Balayage, Corte de precisão, Cortes curtos para mulheres.",
    photo:
      "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/tanya.png",
    link: "https://www.instagram.com/stories/highlights/17845925597369862/",
  },
  {
    id: 6,
    name: "Jackie Jordan",
    title: "Estilista",
    description:
      "Apaixonada por fazer balayage e mechas. Extensões de cabelo e relaxante não tóxico. Encontra abordagem pessoal e ouve as necessidades de seus clientes.",
    photo:
      "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/Jackie.png",
    link: "https://instagram.com/hairbyjackiejordan?igshid=YmMyMTA2M2Y=",
  },
  {
    id: 7,
    name: "Victoria Simenkov",
    title: "Esteticista e técnica de unhas",
    description:
      "Técnica de unhas experiente. Tem mais de 35 anos de experiência trabalhando com depilação com cera de abelha.",
    photo:
      "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_2100,w_3100/tete/Vita.png",
    link: "https://www.instagram.com/stories/highlights/17854828001238208/",
  },
  {
    id: 8,
    name: "Svetlana Mirvoda (Lana)",
    title: "Esteticista e especialista em cuidados da pele",
    description:
      "Lana usa uma abordagem única anti-idade exclusiva desta prática com resultados imediatos e duradouros.",
    photo: "https://res.cloudinary.com/dyj6lkekg/image/upload/tete/Lana.png",
    link: "https://www.instagram.com/stories/highlights/18027782548287385/",
  },
  {
    id: 9,
    name: "Sandra",
    title: "Estilista e correção de cor",
    description:
      "Estilista apaixonada e dedicada que mostra excelência em tudo que faz, incluindo queratina e extensões.",
    photo:
      "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/sandra.png",
    link: "https://www.instagram.com/stories/highlights/18018117991839163/",
  },
  // {
  //   id: 10,
  //   name: "Alana",
  //   title: "Stylist",
  //   description:
  //     "Specializes in precise and artistic approach to cutting hair, as well as color, creating shapes, and encouraging movement that works with individual textures.",
  //   photo: "https://res.cloudinary.com/dyj6lkekg/image/upload/tete/alana.jpg",
  //   // link: "https://www.instagram.com/stories/highlights/17984816960297639/",
  // },
  // {
  //   id: 10,
  //   name: "Yari",
  //   title: "Junior Stylist",
  //   description:
  //     "Creative stylist keeping up with today's cutting and styling trends. Shows excellence in blowdrying thick curly hair.",
  //   photo:
  //     "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/yari.png",
  //   link: "https://www.instagram.com/stories/highlights/17984816960297639/",
  // },
  {
    id: 11,
    name: "Julia",
    title: "Estilista",
    description:
      "Com experiência em styling masculino e feminino, Julia pode elevar seu visual—seja para uma renovação sutil ou uma mudança ousada, confie no seu toque mágico.",
    photo: "https://res.cloudinary.com/dyj6lkekg/image/upload/tete/julia.png",
  },
  // {
  //   id: 11,
  //   name: "Anya",
  //   title: "Assistant", // @TODO
  //   description:
  //     "Passionate and dedicated  stylist who shows excellence at everything she does including keratin and extensions.", // @TODO
  //   photo:
  //     "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/anya.png",
  // },
  // {
  //   id: 12,
  //   name: "Kate",
  //   title: "Assistant", // @TODO
  //   description:
  //     "Passionate and dedicated  stylist who shows excellence at everything she does including keratin and extensions.", // @TODO
  //   photo:
  //     "https://res.cloudinary.com/dyj6lkekg/image/upload/c_crop,g_auto,h_500,w_600/tete/kate_2.png",
  // },
];
export default members;
