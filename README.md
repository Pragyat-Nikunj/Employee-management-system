# Employee Management System (EMS)

A modern Employee Management System built with **React** and **Vite**. This project provides a responsive web interface for managing employees and their tasks, including adding and viewing their associated tasks. The employees are allowed to mark a task as completed or failed. The application is designed for scalability and maintainability, following best practices in React development.

## Live Demo

Check out the live application here:  
[https://employee-management-system-pragyat-nikunjs-projects.vercel.app/](https://employee-management-system-pragyat-nikunjs-projects.vercel.app/)

## Features

- View a list of all employees and their tasks
- Assign tasks to employees
- Create tasks to specific employees
- Data persistence using browser localStorage
- Responsive and user-friendly UI

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **State & Persistence:** localStorage (browser)
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ems.git
   cd ems
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.



## Project Structure

```
ems/
├── public/             # Static assets
├── src/
│   ├── components/     # React components (EmployeeList, EmployeeForm, etc.)
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── ...             # Other source files
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please open issues and submit pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

