**🚀 Blog Management - NestJs REST API**

A complete, modern, and scalable REST API service for blog management, built with the **[NestJS](https://nestjs.com)** framework.

- **🌐 My first REST API project - `#1`**
- **🐈 My first NestJS project - `#1`**

# ✨ Key Features

- Complete blog post management (CRUD operations)
- Modular and maintainable architecture
- Data Validation and Transformation (Pipes and DTOs)
- Using Mapped Types to avoid Code Duplication
- Using Dependency Injection (DI) - declare, connect and inject
  - Intra-Modular DI (Users Service inside Posts Service)
- Using Services to isolate business logic

# 🛠️ Project Setup

```bash
pnpm install
```

# 🔄 Compile and Run the project

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

# 🧪 Running Tests

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```
