import fs from 'fs/promises';
import obtainCurrentDate from '../utils/date.utils.js';
import removeAccents from '../utils/removeaccents.utils.js';

const createFolderWithComment = async (name) => {
  try {
    const currentDate = obtainCurrentDate();
    const cleanedName = removeAccents(name);
    const folderName = cleanedName.replace(/\s/g, '_');
    const folderPath = `./users/${folderName}/${currentDate.year}_${currentDate.month}_${currentDate.day}/${currentDate.hours}_${currentDate.minutes}_${currentDate.seconds}`;

    await fs.mkdir(folderPath, { recursive: true });

    const comment = `Folder ${folderPath} created successfully. Date and time: ${new Date().toLocaleString()}`;
    console.log(comment);
  } catch (error) {
    console.error(`Error creating folder: ${error.message}`);
  }
};

export default createFolderWithComment;
