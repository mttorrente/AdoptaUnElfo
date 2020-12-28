// Seed Home
const mongoose = require("mongoose");
const Home = require("../models/home.model");

const dbName = "AdoptaUnElfo";
mongoose.connect(`mongodb://localhost/${dbName}`);

const home = [
  {
    name: "Hogwarts",
    image:
      "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/cine.batanga.com/files/Los-fanaticos-de-Harry-Potter-ahora-pueden-estudiar-en-un-colegio-igual-a-Hogwarts.jpg",
    description:
      "Serán tus navidades más mágicas. Cuidado con los dementores al llegar al castillo.",
    street: "Escocia",
    email: "adoptaunelfo@gmail.com",
    diet: "Mediterránea",
    phone: 555-997-323,
    user: []
  },
  {
    name: "Álvarez",
    image:
      "https://img.bekianavidad.com/articulos/portada/49000/49336.jpg",
    description:
      "En casa Álvarez comerás a reventar. Nuestra especialidad es el centollo y las risas.",
    street: "Calle Portela, 53. O Barco de V.",
    email: "loretoavoces@gmail.com",
    diet: "Mediterránea",
    phone: 555-997-323,
    user: []
  },
  {
    name: "Torrente",
    image:
      "https://www.elmueble.com/medio/2014/11/10/salon_rustico_con_nina_decorando_el_abeto_de_navidad_1280x958.jpg",
    description:
      "Si te apasiona la fantasia navideña, este es tu hogar. Te esperamos!",
    street: "Calle del Prado, 4. Madrid.",
    email: "mttorrente.o@gmail.com",
    diet: "Vegetariana",
    phone: 555-997-323,
    user: []
  },
  {
    name: "País de Nunca Jamás",
    image:
      "https://image.winudf.com/v2/image/Y29tLndiLmdvb2cucGFuLmV0bl9zY3JlZW5zaG90c18wXzYxMTJjMzBk/screen-0.jpg?fakeurl=1&type=.jpg",
    description:
      "Viaje en barco volador incluido. Después de cenar nos iremos en busca de sirenas.",
    street: "Segúnda estrella a la dercha y todo recto hasta el amanecer.",
    email: "adoptaunelfo@gmail.com",
    diet: "Orgánica",
    phone: 555-997-383,
    user: []
  },
    {
    name: "González",
    image:
      "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    description:
      "Comida sana y vegana. Contáctanos y pasaremos la mejor de las navidades juntos.",
    street: "Calle Walabi, 123. Madrid.",
    email: "adoptaunelfo@gmail.com",
    diet: "Vegana",
    phone: 555-997-383,
    user: []
  },
    {
    name: "Real",
    image:
      "https://s.yimg.com/ny/api/res/1.2/SPNJUV.PwToAHHpC9Y1JQw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzEz/https://s.yimg.com/os/creatr-uploaded-images/2020-08/73a7cc80-d7c4-11ea-b5ee-35cb475e456f",
    description:
      "Agita la campana para que nuestro servicio te cocine lo que quieras. No te preocupes por el aforo, vamos quedando menos.",
    street: "España",
    email: "adoptaunelfo@gmail.com",
    diet: "Mediterránea",
    phone: 555-997-383,
    user: []
  },
    {
    name: "Fernández",
    image:
      "https://images.unsplash.com/photo-1556025329-d40ee6fcaa94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "¡Hola elfos! Estamos deseando que nos contactes para estas fiestas. Cena segura, sana y riquísima.",
    street: "Calle Ourense, 64, Ourense",
    email: "adoptaunelfo@gmail.com",
    diet: "Keto",
    phone: 555-997-383,
    user: []
  },
    {
    name: "Smith",
    image:
      "https://images.unsplash.com/photo-1572821602854-0093536462fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    description:
      "Siempre hay una familia Smith y aquí estamos nosotros para representarla!!! Esperamos que nos contactes.",
    street: "Calle Palma, 644, Palma",
    email: "adoptaunelfo@gmail.com",
    diet: "Keto",
    phone: 555-997-383,
    user: []
  },
    {
    name: "García",
    image:
      "https://images.unsplash.com/photo-1549934159-af720506e2bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "Somos Carla y Carlos buscamos compañía para pasar estas fiestas. ¡Contáctanos y nos conocemos!",
    street: "Calle Pio, 74, Lugo",
    email: "adoptaunelfo@gmail.com",
    diet: "Vegana",
    phone: 555-997-383,
    user: []
  },
];


// Seed User
const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const salt = bcrypt.genSaltSync(bcryptSalt);


const user = [
  {
    name: "Troy McClure",
    image: "https://elcomercio.pe/resizer/I2-8OtcMIp9sBhYr5MS3zFru0Ss=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MNSBKVUIUZHPVJZJWZZ3D2V2S4.jpg",
    description:
      "Hola! Soy Troy McClure. Tal vez me recuerden de películas como, 'Ya está aquí el error de CORS' o 'La noche del EslintCache muerto viviente'.",
    username: "troy",
    email: "adoptaunelfo@gmail.com",
    phone: 555 - 723 - 982,
    password: bcrypt.hashSync("troy", salt),
    role: "USER",
  },
  {
    name: "Sara", 
    image: "https://images.unsplash.com/photo-1603978923273-14b42f0ee277?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1041&q=80",
    description:
      "Deseando ser adoptada para estas fiestas, conocer gente y pasarlo en grande.",
    username: "sara",
    email: "adoptaunelfo@gmail.com",
    phone: 555 - 883 - 902,
    password: bcrypt.hashSync("teresatorrente", salt),
    role: "USER",
  },
  {
    name: "María",
    image: "https://images.unsplash.com/photo-1585559605151-d4da31836a99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Hola, me llamo María, los últimos meses he estado haciendo un bootcamp, un poco aislada, mi familia se ha olvidado de mi y no tengo donde cenar en navidad. ¿Me adoptas?",
    username: "maria",
    email: "adoptaunelfo@gmail.com",
    phone: 355 - 723 - 972,
    password: bcrypt.hashSync("maria", salt),
    role: "USER",
  },
  {
    name: "Edu", 
    image: "https://images.unsplash.com/photo-1603458056903-e307f12ca8f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "Adoptameee!!! Seré el más protegido de tu cena seguro. Llevo gel desinfectante para todos :)",
    username: "edu",
    email: "adoptaunelfo@gmail.com",
    phone: 777 - 996 - 837,
    password: bcrypt.hashSync("edu", salt),
    role: "USER",
  },
  {
    name: "Alvarez",
    image: "https://img.bekianavidad.com/articulos/portada/49000/49336.jpg",
    description:
      "En casa Álvarez comerás a reventar. Nuestra especialidad es el centollo y las risas.",
    username: "loreto",
    email: "loretoavoces@gmail.com",
    phone: 555 - 673 - 033,
    password: bcrypt.hashSync("loretoalvarez", salt),
    role: "ADMIN",
  },
  {
    name: "El Grinch",
    image: "https://ludiana.com/wp-content/uploads/2019/03/grinch-800x400.jpg",
    description:
      "Posiblemente la lie en tu cena de navidad, pero llevaré Cava.",
    username: "grinch",
    email: "adoptaunelfo@gmail.com",
    phone: 555 - 673 - 033,
    password: bcrypt.hashSync("grinch", salt),
    role: "USER",
  },
  {
    name: "Paca",
    image: "https://images.unsplash.com/photo-1504778995644-77707b624d5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Me llamo Paca, me gustaría conocer gente nueva, mi familia me aburre. Llevaré croquetas.",
    username: "paca",
    email: "adoptaunelfo@gmail.com",
    phone: 555 - 022 - 473,
    password: bcrypt.hashSync("paca", salt),
    role: "USER",
  },
  {
    name: "Elfo",
    image: "https://metro.co.uk/wp-content/uploads/2019/12/PRC_109941458.jpg?quality=90&strip=all",
    description:
      "Holi! Tus navidades no serían lo mismo sin mi a tu mesa. Algunos me acusan de ser demasiado intenso a veces, pero eso es porque exageran.",
    username: "elfo",
    email: "adoptaunelfo@gmail.com",
    phone: 555 - 022 - 473,
    password: bcrypt.hashSync("elfo", salt),
    role: "USER",
  },
  {
    name: "El Jefe",
    image: "https://ca.slack-edge.com/T01A3LV8H19-U01F6NQP750-403f00fe4174-512",
    description:
      "Mis últimas dos semanas han sido realmente duras. Las Lores me han estado quitando la vida, y necesito esta cena de navidad más que nunca.",
    username: "jon",
    email: "adoptaunelfo@gmail.com",
    phone: 555 - 844 - 992,
    password: bcrypt.hashSync("jon", salt),
    role: "USER",
  },
];


const createHomes = Home.create(home)
const createUsers = User.create(user)

Promise
  .all([createHomes, createUsers])
  .then(response => {
    const createdHomes = response[0]
    const createdUsers = response[1]

    const promises = []

    createdHomes.forEach((elm, indx) => {
      promises.push(Home.findByIdAndUpdate(elm._id, {$push: {user: createdUsers[indx]._id}}))
    })
    return Promise.all(promises)
  })
      .then(() => {
        mongoose.connection.close()
    })
  .catch(err => console.log('Hubo un error,', err))
    