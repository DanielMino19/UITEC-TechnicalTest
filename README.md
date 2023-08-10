# Monorepo CRUD with PHP Laravel and Angular Frontend

Description: This repository contains a monorepo that implements a CRUD (Create, Read, Update, Delete) system using PHP Laravel for the backend and Angular for the frontend. The interface utilizes Tailwind CSS for layout and Flowbite for certain modals and interactive components. Additionally, PostgreSQL is integrated as the database. This application demonstrates how to manage records through a modern and appealing interface.

Usage Instructions:

    Clone the Repository:

    bash

git clone https://github.com/your-user/your-repo.git
cd your-repo

Database Configuration:

    Ensure that PostgreSQL is installed and running.
    Create a PostgreSQL database for the application.
    Update the database credentials in the .env file in the backend folder.

Backend (PHP Laravel):

bash

cd backend
composer install
php artisan migrate
php artisan serve

Frontend (Angular):

bash

    cd frontend
    npm install
    ng serve

    Accessing the Application:
    Open your browser and visit: http://localhost:4200

Repository Structure:

bash

your-repo/
|-- backend/               # Backend source code (PHP Laravel)
|-- frontend/              # Frontend source code (Angular)
|-- database/              # Database migrations and seeds
|-- README.md              # Repository information

Additional Notes:

    Ensure you have PHP, Composer, Node.js, and Angular CLI installed on your system.
    For more details on Laravel configuration, refer to the official Laravel documentation.
    For more details on Angular configuration, refer to the official Angular documentation.
    For details on integrating Tailwind CSS, consult the official Tailwind CSS documentation.
    For details on integrating Flowbite, consult the official Flowbite documentation.
