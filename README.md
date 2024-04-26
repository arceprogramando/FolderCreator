# Folder creator consuming API

## The API is obtained from: https://random-data-api.com.

[![Cover: Felipe Arce](https://github.com/arceprogramando/FolderCreator/blob/main/public/portada.gif)](https://github.com/arceprogramando)

## I'm going to use https://www.conventionalcommits.org/en/v1.0.0/ for the structure of my commits.

## Description

The application utilizes the fs module from Node.js to create folders in the file system. Each folder is created using the name of the person from the array, removing accents and replacing spaces with underscores. Subsequently, the current date and time are added as part of the folder name.

## Installation

1. Make sure you have Node.js installed on your system.
2. Clone this repository.
3. you need node 22 to run this script 

## Usage

1. Run the following command to start the application:

```bash
node --run dev

```
2. The application will create a folder for each name in the array received from the API, with a subfolder for the day and another for the time within the day.

## Dependencias

- Node.js
- fs

## Autor

Felipe Arce

## Licencia

ISC