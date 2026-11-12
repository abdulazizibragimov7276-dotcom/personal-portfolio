# Abdulaziz Portfoliosi

Shaxsiy portfolio veb-sayti. HTML, CSS, JavaScript va Vite yordamida yaratilgan. Loyiha uchta sahifadan iborat: asosiy sahifa, "Men haqimda" va "Kontakt".

## Imkoniyatlar

- Uchta sahifa va ular orasida navigatsiya
- Responsiv dizayn (kompyuter, planshet va telefon uchun)
- **Counter** (asosiy sahifa): qiymatni oshirish, kamaytirish va nolga qaytarish. Qiymat 0 dan pastga tushmaydi.
- **Belgilar sanovchi** ("Men haqimda"): matn yozilganda belgilar soni real vaqtda yangilanadi.
- **Kontakt formasi**: ism, email va xabar maydonlari tekshiriladi (validatsiya).
- Ijtimoiy tarmoqlar havolalari

## Ishlatilgan texnologiyalar

- HTML5 (semantik teglar)
- CSS3 (CSS o'zgaruvchilari, Flexbox, media querylar)
- JavaScript (ES modullari)
- [Vite](https://vite.dev/): ishlab chiqish serveri va build
- [ESLint](https://eslint.org/): kod sifatini tekshirish
- Git va GitHub

## Loyiha tuzilmasi

```
personal-portfolio/
├── images/
│   └── rasim.jpg
├── src/
│   └── main.js
├── index.html
├── about.html
├── contact.html
├── style.css
├── eslint.config.js
├── package.json
└── README.md
```

## Ishga tushirish

1. Repozitoriyni yuklab oling:

   ```bash
   git clone https://github.com/abdulazizibragimov7276-dotcom/personal-portfolio.git
   cd personal-portfolio
   ```

2. Paketlarni o'rnating:

   ```bash
   npm install
   ```

3. Ishlab chiqish serverini ishga tushiring:

   ```bash
   npm run dev
   ```

4. Brauzerda `http://localhost:5173` manzilini oching.

## Buyruqlar

| Buyruq            | Vazifasi                                 |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Ishlab chiqish serverini ishga tushiradi |
| `npm run build`   | Loyihani build qiladi (`dist` papkasi)   |
| `npm run preview` | Build natijasini ko'rsatadi              |
| `npm run lint`    | ESLint bilan kodni tekshiradi            |

## Muallif

**Abdulaziz Ibragimov**
GitHub: [abdulazizibragimov7276-dotcom](https://github.com/abdulazizibragimov7276-dotcom)
