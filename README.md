# Micro-Frontend Todo Application

A modern todo application built using micro-frontend architecture with React, Vite, and Module Federation. This project demonstrates how to build scalable applications by breaking them into independent, deployable micro-frontends.

## 🏗️ Architecture

This application consists of four independent micro-frontends:

- **Container App** (Port 5000) - Main host application that orchestrates other micro-frontends
- **Todo List** (Port 5001) - Displays and manages the list of todos
- **Todo Form** (Port 5002) - Handles adding new todos
- **UI Components** (Port 5003) - Shared component library with reusable UI elements

## 🚀 Features

- ✅ Add new todos
- ✅ Delete existing todos
- ✅ Authentication system
- ✅ Shared UI component library
- ✅ CORS configuration for security
- ✅ Module Federation for runtime integration
- ✅ Independent deployment capabilities

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Module Federation**: @originjs/vite-plugin-federation
- **Styling**: CSS3
- **Authentication**: JWT (Mock implementation)

## 📁 Project Structure


## 🔧 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd micro-frontend
```

2. Install dependencies for each micro-frontend:
```bash
# Install UI Components dependencies
cd ui-components
npm install
cd ..

# Install Todo List dependencies
cd todo-list
npm install
cd ..

# Install Todo Form dependencies
cd todo-form
npm install
cd ..

# Install Container dependencies
cd container
npm install
cd ..
```

## 🚀 Running the Application

**Important**: Start the applications in the following order:

1. **Start UI Components** (Terminal 1):
```bash
cd ui-components
npm run build && npm run preview
```

2. **Start Todo List** (Terminal 2):
```bash
cd todo-list
npm run build && npm run preview
```

3. **Start Todo Form** (Terminal 3):
```bash
cd todo-form
npm run build && npm run preview
```

4. **Start Container App** (Terminal 4):
```bash
cd container
npm run dev
```

5. Open your browser and navigate to `http://localhost:5000`

## 🔐 Authentication

The application includes a mock authentication system:

- **Username**: `admin`
- **Password**: `password`

## 🌐 Application URLs

- **Container App**: http://localhost:5000
- **Todo List**: http://localhost:5001
- **Todo Form**: http://localhost:5002
- **UI Components**: http://localhost:5003

## 🔒 Security Features

### CORS Configuration
Each micro-frontend is configured with CORS to whitelist specific domains:
- Prevents unauthorized cross-origin requests
- Allows credentials for authenticated requests
- Configurable for different environments

### Authentication
- JWT-based authentication (mock implementation)
- Protected routes and components
- Session persistence with localStorage

## 🧩 Micro-Frontend Components

### Container App
- Main orchestrator application
- Handles authentication state
- Loads and coordinates other micro-frontends

### Todo List
- Displays list of todos
- Handles todo deletion
- Protected by authentication

### Todo Form
- Form for adding new todos
- Input validation
- Protected by authentication

### UI Components
- **Button**: Reusable button component with variants
- **Card**: Container component with elevation levels
- **Input**: Form input with validation support
- **Login**: Authentication form component

## 🔄 Development Workflow

### For Development Mode:
```bash
# Start all applications in development mode
cd ui-components && npm run dev &
cd todo-list && npm run dev &
cd todo-form && npm run dev &
cd container && npm run dev
```

### For Production Build:
```bash
# Build all applications
cd ui-components && npm run build
cd todo-list && npm run build
cd todo-form && npm run build
cd container && npm run build
```

## 🚀 Deployment

Each micro-frontend can be deployed independently:

1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update the remote URLs in the container's `vite.config.js`

### Environment Configuration

For production deployment, update the remote URLs in `container/vite.config.js`:

```javascript
remotes: {
  todo_list: "https://your-todo-list-domain.com/assets/remoteEntry.js",
  todo_form: "https://your-todo-form-domain.com/assets/remoteEntry.js",
  ui_components: "https://your-ui-components-domain.com/assets/remoteEntry.js"
}
```

## 🛠️ Customization

### Adding New Components
1. Create component in appropriate micro-frontend
2. Export in `vite.config.js` exposes section
3. Import in consuming application

### Styling
- Each component has its own CSS file
- Consistent design system across components
- Easily customizable themes

## 🐛 Troubleshooting

### Common Issues

1. **Module Federation Errors**:
   - Ensure all remote applications are running
   - Check port configurations
   - Verify remote URLs in vite.config.js

2. **CORS Errors**:
   - Check CORS configuration in vite.config.js
   - Ensure all domains are whitelisted

3. **Build Errors**:
   - Clear node_modules and reinstall dependencies
   - Check for missing files or incorrect paths

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using Micro-Frontend Architecture**