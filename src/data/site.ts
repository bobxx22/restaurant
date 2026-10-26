// Усі дані закладу в одному файлі.
// Для нового клієнта міняємо лише цей файл і фото, решта сайту підлаштується сама.

export type MenuTag = "хіт" | "гостре" | "вегетаріанське" | "новинка";

export type MenuItem = {
  id: string; // латиницею, без пробілів: потрібен для підрахунку обраного
  name: string;
  description?: string;
  weight?: string;
  price: number;
  image?: string; // /images/menu/....webp — якщо фото немає, буде акуратна заглушка
  tags?: MenuTag[];
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type Promo = {
  title: string;
  text: string;
  image: string;
  theme: "light" | "dark"; // light — темний текст на світлому фото, dark — навпаки
};

// функція лише для перевірки типів: помилка в меню одразу підсвітиться
const defineMenu = (menu: MenuCategory[]) => menu;
const dish = (file: string) => `/images/menu/${file}.webp`;

export const site = {
  name: "Вогник",
  url: "https://vognyk.com.ua", // домен клієнта: для гарного прев'ю посилання в месенджерах
  type: "Ресторан української кухні",
  tagline: "Українська кухня з дров'яної печі",
  description:
    "Готуємо так, як готували наші бабусі: у печі, на домашніх продуктах і без поспіху. Затишна зала на 60 гостей, літня тераса та окрема кімната для свят.",

  phone: "+380 67 123 45 67",
  address: "вул. Хрещатик, 15, Київ",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",

  hours: [
    { days: "Пн – Чт", time: "11:00 – 22:00" },
    { days: "Пт – Сб", time: "11:00 – 23:00" },
    { days: "Нд", time: "12:00 – 22:00" },
  ],
  // коротко для першого екрана
  hoursShort: "Щодня з 11:00",

  currency: "₴",

  hero: {
    videoDesktop: "/video/hero-desktop.mp4",
    videoMobile: "/video/hero-mobile.mp4",
    posterDesktop: "/images/hero/hero-desktop.webp",
    posterMobile: "/images/hero/hero-mobile.webp",
  },

  promos: [
    {
      title: "Бізнес-ланч",
      text: "Пн – Пт з 12:00 до 16:00. Перше, друге та узвар — 220 ₴",
      image: "/images/promo/lunch.webp",
      theme: "light",
    },
    {
      title: "Святкуйте з нами",
      text: "Іменинникам −15% на все меню та медовик у подарунок",
      image: "/images/promo/birthday.webp",
      theme: "dark",
    },
    {
      title: "Літня тераса",
      text: "30 місць у затінку каштанів. Бронюйте заздалегідь",
      image: "/images/promo/terrace.webp",
      theme: "dark",
    },
  ] satisfies Promo[],

  about: {
    title: "Готуємо в печі, як удома",
    images: ["/images/about/interior.webp", "/images/about/chef.webp", "/images/about/oven.webp"],
    features: [
      { title: "Своя піч", text: "Хліб, печеня та пироги щодня з дров'яної печі" },
      { title: "Ліпимо вручну", text: "Вареники та голубці — без заморозки" },
      { title: "Банкети", text: "Окрема зала до 25 гостей для свят" },
    ],
  },

  menu: defineMenu([
    {
      id: "salaty",
      title: "Салати",
      items: [
        {
          id: "olivier",
          name: "Олів'є з телятиною",
          description: "Класичний рецепт, домашній майонез, мариновані огірки",
          weight: "250 г",
          price: 185,
          image: dish("olivier"),
        },
        {
          id: "veggie-salad",
          name: "Салат з печеними овочами",
          description: "Перець, баклажан, томати, бринза, ароматна олія",
          weight: "230 г",
          price: 165,
          image: dish("veggie-salad"),
          tags: ["вегетаріанське"],
        },
        {
          id: "shuba",
          name: "Оселедець під шубою",
          description: "Буряк, морква, картопля, яйце, оселедець власного засолу",
          weight: "250 г",
          price: 155,
          image: dish("shuba"),
        },
      ],
    },
    {
      id: "pershi-stravy",
      title: "Перші страви",
      items: [
        {
          id: "borscht",
          name: "Борщ український",
          description: "На яловичому бульйоні, зі сметаною, салом та пампушками",
          weight: "350 / 100 г",
          price: 175,
          image: dish("borscht"),
          tags: ["хіт"],
        },
        {
          id: "mushroom-soup",
          name: "Юшка з білих грибів",
          description: "Карпатські гриби, картопля, свіжа зелень",
          weight: "300 г",
          price: 165,
          image: dish("mushroom-soup"),
          tags: ["вегетаріанське"],
        },
        {
          id: "chicken-broth",
          name: "Курячий бульйон з локшиною",
          description: "Домашня локшина, яйце, зелень",
          weight: "300 г",
          price: 125,
          image: dish("chicken-broth"),
        },
      ],
    },
    {
      id: "varenyky",
      title: "Вареники та деруни",
      items: [
        {
          id: "varenyky-potato",
          name: "Вареники з картоплею",
          description: "Зі смаженою цибулею та шкварками, подаємо зі сметаною",
          weight: "250 г",
          price: 145,
          image: dish("varenyky-potato"),
          tags: ["хіт"],
        },
        {
          id: "varenyky-cherry",
          name: "Вареники з вишнею",
          description: "Ліплені вручну, з вишневим соусом",
          weight: "250 г",
          price: 155,
          image: dish("varenyky-cherry"),
          tags: ["вегетаріанське"],
        },
        {
          id: "deruny",
          name: "Деруни з грибною підливою",
          description: "Хрусткі картопляні деруни, вершковий соус з печериць",
          weight: "300 г",
          price: 165,
          image: dish("deruny"),
        },
      ],
    },
    {
      id: "osnovni-stravy",
      title: "Основні страви",
      items: [
        {
          id: "pechenia",
          name: "Печеня в горщику",
          description: "Свинина, картопля, гриби, томлені в печі",
          weight: "400 г",
          price: 265,
          image: dish("pechenia"),
          tags: ["хіт"],
        },
        {
          id: "kyiv-cutlet",
          name: "Котлета по-київськи",
          description: "З вершковим маслом та зеленню, картопляне пюре",
          weight: "350 г",
          price: 245,
          image: dish("kyiv-cutlet"),
        },
        {
          id: "holubtsi",
          name: "Голубці з м'ясом",
          description: "Свинина та рис у капустяному листі, томатно-сметанний соус",
          weight: "320 г",
          price: 215,
          image: dish("holubtsi"),
        },
        {
          id: "grilled-chicken",
          name: "Курча на мангалі",
          description: "Маринад з часником та паприкою, овочі гриль",
          weight: "450 г",
          price: 295,
          image: dish("grilled-chicken"),
          tags: ["гостре"],
        },
      ],
    },
    {
      id: "deserty",
      title: "Десерти",
      items: [
        {
          id: "syrnyky",
          name: "Сирники зі сметаною",
          description: "Домашній сир, ягідний соус",
          weight: "200 г",
          price: 135,
          // фото ще немає — додати /images/menu/syrnyky.webp
        },
        {
          id: "medovyk",
          name: "Медовик",
          description: "Ніжні медові коржі зі сметанним кремом",
          weight: "150 г",
          price: 115,
          image: dish("medovyk"),
          tags: ["новинка"],
        },
      ],
    },
    {
      id: "napoi",
      title: "Напої",
      items: [
        { id: "uzvar", name: "Узвар домашній", weight: "300 мл", price: 65, image: dish("uzvar") },
        { id: "mors", name: "Морс журавлиний", weight: "300 мл", price: 70, image: dish("mors") },
        {
          id: "herbal-tea",
          name: "Чай трав'яний карпатський",
          description: "М'ята, чебрець, липовий цвіт",
          weight: "500 мл",
          price: 95,
          image: dish("herbal-tea"),
        },
        { id: "americano", name: "Кава американо", weight: "200 мл", price: 60, image: dish("americano") },
        { id: "cappuccino", name: "Капучино", weight: "250 мл", price: 75, image: dish("cappuccino") },
      ],
    },
  ]),
};

export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&hl=uk&query=${encodeURIComponent(site.address)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&hl=uk&output=embed`;

export const formatPrice = (price: number) => `${price.toLocaleString("uk-UA")} ${site.currency}`;
