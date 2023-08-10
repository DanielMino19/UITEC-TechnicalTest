# Monorepo CRUD con PHP Laravel y Frontend Angular

 Este repositorio contiene un monorepo que implementa un sistema CRUD (Crear, Leer, Actualizar, Eliminar) utilizando PHP Laravel para el backend y Angular para el frontend. La interfaz utiliza Tailwind CSS para la maquetación y Flowbite para ciertos modales y componentes interactivos. Además, se integra PostgreSQL como base de datos. Esta aplicación muestra cómo gestionar registros a través de una interfaz moderna y atractiva.

Instrucciones de Uso:

    Clonar el Repositorio:
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd  UITEC-TechnicalTest
    

Configuración de la Base de Datos:

    Asegúrate de tener PostgreSQL instalado y en funcionamiento.
    Crea una base de datos en PostgreSQL para la aplicación.
    Actualiza las credenciales de la base de datos en el archivo .env en la carpeta backend.

Backend (PHP Laravel):



cd backend
composer install
php artisan migrate
php artisan serve

Frontend (Angular):

    cd frontend
    npm install
    ng serve

    Acceder a la Aplicación:
    Abre tu navegador y visita: http://localhost:4200

Estructura del Repositorio:

UITEC-TechnicalTest/
|-- backend/                # Código fuente del backend (PHP Laravel)
|-- frontend/               # Código fuente del frontend (Angular)
|-- database/               # Migraciones y semillas de la base de datos
|-- README.md               # Información sobre el repositorio

Notas Adicionales:

    Asegúrate de tener PHP, Composer, Node.js y Angular CLI instalados en tu sistema.
    Para más detalles sobre la configuración de Laravel, consulta la documentación oficial de Laravel.
    Para más detalles sobre la configuración de Angular, consulta la documentación oficial de Angular.
