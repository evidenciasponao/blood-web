# BLØØD WEB APP

<img width="1920" height="1080" alt="Blood_banner_rojo_venom" src="https://github.com/user-attachments/assets/d20a1e97-b87b-499a-8b49-fe1bec861e34" />

> Official web platform for **BLØØD | DEATH METAL CO** — E-commerce and band presence built with a modern fullstack architecture.

🌐 **Live:** [blood-fl.shop](https://blood-fl.shop)

---

## 🧱 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Angular](https://angular.dev) | 21.x | Main framework (SPA + SSR) |
| TypeScript | 5.x | Typed language |
| Angular CLI | 21.2.11 | Code scaffolding & build |
| RxJS | 7.x | Reactive HTTP with Observables |
| Angular HttpClient | — | REST API communication |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| [.NET Core](https://dotnet.microsoft.com) | 8.x | REST API |
| Entity Framework Core | 8.x | ORM / database mapping |
| JWT Bearer Auth | — | Authentication & authorization |
| ASP.NET Core Identity | — | User management |

### Database
| Technology | Purpose |
|---|---|
| Azure SQL Server | Cloud relational database |
| EF Core Migrations | Schema versioning |

### Infrastructure & DevOps
| Service | Purpose |
|---|---|
| Azure Static Web Apps | Angular hosting |
| Azure App Service | .NET API hosting |
| Azure SQL Database | Managed cloud database |
| GitHub Actions | CI/CD pipeline (auto deploy on push) |
| Custom Domain | `blood-fl.shop` with DNS on Azure |

---

## 🗂️ Project Structure

```
blood-web/                        # Angular Frontend
└── src/
    └── app/
        └── core/
            ├── models/
            │   └── product.model.ts      # Product interface
            └── services/
                └── product.service.ts    # HTTP calls to the API
        ├── app.routes.ts                 # Route definitions
        ├── app.config.ts                 # App configuration
        ├── app.config.server.ts          # SSR configuration
        └── main.server.ts                # SSR entry point

BloodFl.API/                      # .NET Core Backend
├── Controllers/
│   ├── AuthController.cs         # Login & JWT generation
│   └── ProductsController.cs     # Product CRUD endpoints
├── Models/
│   ├── Product.cs                # Product entity
│   └── User.cs                   # User entity
├── DTOs/
│   ├── LoginDto.cs               # Login request shape
│   ├── ProductDto.cs             # Product creation shape
│   └── ProductResponseDto.cs     # Product response shape
├── Data/
│   └── AppDbContext.cs           # EF Core database context
└── Services/
    └── AuthService.cs            # JWT logic
```

---

## 🔐 Authentication Flow

```
1. POST /api/auth/login  ← { email, password }
2. API validates against SQL Server
3. Returns signed JWT token
4. Angular stores token & sends it in every protected request:
   Authorization: Bearer <token>
5. API validates token and allows or rejects the request
```

---

## 🌐 API Communication

Angular calls the backend via `HttpClient` in `product.service.ts`:

```
[Angular SPA] ──GET /api/products──► [.NET Core API] ──► [Azure SQL Server]
                ◄── JSON response ──
```

Key endpoints:

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/products` | Public | Get all products |
| POST | `/api/products` | 🔒 JWT | Create a product |
| PUT | `/api/products/{id}` | 🔒 JWT | Update a product |
| DELETE | `/api/products/{id}` | 🔒 JWT | Delete a product |
| POST | `/api/auth/login` | Public | Login & get token |

---

## 🚀 CI/CD Pipeline

Every push to `main` triggers the GitHub Actions workflow:

```
git push → GitHub Actions → Build Angular → Deploy to Azure Static Web Apps
                          → Build .NET   → Deploy to Azure App Service
```

---

## 💻 Local Development

### Prerequisites
- Node.js 20+
- Angular CLI: `npm install -g @angular/cli`
- .NET SDK 8+

### Frontend

```bash
# Install dependencies
npm install

# Start dev server
ng serve
# → http://localhost:4200
```

### Backend

```bash
# Restore packages
dotnet restore

# Apply migrations
dotnet ef database update

# Run API
dotnet run
# → https://localhost:5001
```

---

## 🛠️ Angular CLI Commands

```bash
# Generate a new component
ng generate component component-name

# Build for production
ng build

# Run unit tests (Vitest)
ng test

# Run e2e tests
ng e2e

# See all available schematics
ng generate --help
```

---

## 📦 Products (Current Merch)

| Product | Price |
|---|---|
| Blood Black Edition | COP $70,000 |
| Blood Death Edition | COP $70,000 |
| Blood Legacy | COP $70,000 |
| Blood White Edition | COP $70,000 |
| Blood Red Logo | COP $70,000 |
| Gorra Blood Legacy | COP $50,000 |

---

## 📄 License

© 2025 BLØØD | DEATH METAL CO — All rights reserved.