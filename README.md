
# 🐶 Animal Hotel – Angular Frontend

This is the frontend for the **PetService** application. Built with **Angular 19**, this app allows users to interact with the backend API for managing pet services, bookings, and user information.

---

## 🚀 Features

- 🌐 **Routing with Auth Guard**: Secured routes to main views like dashboard and bookings.
- 💅 **PrimeNG UI Components**: Fast and stylish user interface using [PrimeNG](https://primeng.org/).
- 🧭 **Lazy-loaded Components**: Improves performance and structure.
- 📦 **Modern Build Tools**: Uses Angular CLI, Bootstrap 5, and more.

---

## 📁 Project Structure

```
animal-hotel/
├── src/
│   ├── app/
│   │   ├── auth/               # Authentication guard
│   │   ├── pradzia-hero/       # Home component (dashboard/start)
│   │   ├── uzsakymai/          # Booking/orders component
│   │   ├── path.constants.ts   # Route paths
│   │   └── app.routes.ts       # App routing setup
│   └── assets/
├── angular.json
├── package.json
└── README.md
```

---

## 🧩 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Angular CLI](https://angular.io/cli)

Install Angular CLI globally if not installed:

```bash
npm install -g @angular/cli
```

---

## 🔧 Installation & Running

1. **Clone the repo**:

   ```bash
   git clone https://github.com/Paulius101/animal-hotel.git
   cd animal-hotel
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the app**:

   ```bash
   ng serve
   ```

   Or using npm script:

   ```bash
   npm run start
   ```

4. **Visit in your browser**:

   ```
   http://localhost:4200
   ```

> ⚠️ Make sure the backend (Spring Boot PetService) is running on `http://localhost:8080`

---

## 🔒 Routing & Guards

The application uses an `authGuard` to protect the following routes:

- `/pradzia` – Dashboard/start page
- `/uzsakymai` – View or manage bookings

All unspecified routes redirect to `/pradzia`.

---

## 🧪 Running Tests

Run unit tests using:

```bash
npm test
```

---

## 📦 Build for Production

```bash
ng build --configuration production
```

---

## 📚 Useful Scripts

| Script         | Description                  |
|----------------|------------------------------|
| `npm start`    | Run development server       |
| `npm run build`| Build the app                |
| `npm test`     | Run unit tests               |

---

## 🎯 Technologies

- Angular 19
- PrimeNG
- Bootstrap 5
- TypeScript 5
- RxJS
- Karma + Jasmine for testing

---

## 🐾 Backend API

This frontend is meant to work with the [PetService Spring Boot API](https://github.com/Paulius101/petservice).

---

## 📌 License

This project is open-source and free to use.
