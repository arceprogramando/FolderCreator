# Folder Creator

## This application creates folders based on an array obtained from an https://random-data-api.com.

[![Portada Felipe Arce](https://github.com/arceprogramando/FolderCreator/blob/main/public/portada.gif)](https://github.com/arceprogramando)

### How to Follow Commit Structure in the Future

- 🌈 Change Styles: Use it for commits that mainly affect the appearance or design of the application.
- ✨ New Features: Use it when adding a new feature or functionality to the application.
- ⛔ Critical Changes: Use it when commits contain critical changes that may severely impact the application's functionality.
- 🐛 Error Fix: For commits that address issues or errors in the existing code.
- 🧼 Cleanup: Use this emoji when performing code cleanup tasks without functional changes.
- 🚀 Refactor: Mark commits that improve the application's performance or make functional changes.
- 🚧 Work in Progress: Use it to indicate that the commit contains work in progress that is not ready for implementation.


## Description

The application utilizes the fs module from Node.js to create folders in the file system. Each folder is created using the name of the person from the array, removing accents and replacing spaces with underscores. Subsequently, the current date and time are added as part of the folder name.

## Installation

1. Make sure you have Node.js installed on your system.
2. Clone this repository.

## Usage

1. Run the following command to start the application:

```bash
npm run start

```
2. The application will create a folder for each name in the array received from the API, with a subfolder for the day and another for the time within the day.

## Dependencias

- Node.js
- fs

## Autor

Felipe Arce

## Licencia

ISC