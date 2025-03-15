import fs from 'fs/promises';
import obtainCurrentDate from '../utils/date.utils.js';
import removeAccents from '../utils/removeaccents.utils.js';
import createFantasyHistory from '../utils/createFantasyHistory.js';

const createFolderWithComment = async (name) => {
  try {
    const currentDate = obtainCurrentDate();
    const cleanedName = removeAccents(name);
    const folderName = cleanedName.replace(/\s/g, '_');
    const folderPath = `./users/${folderName}/${currentDate.year}_${currentDate.month}_${currentDate.day}/${currentDate.hours}_${currentDate.minutes}_${currentDate.seconds}`;
    const hour = +currentDate.hours;
    const year = +currentDate.year;

    const fantasyHistory = createFantasyHistory(cleanedName, year, hour);
    await fs.mkdir(folderPath, { recursive: true });

    await fs.writeFile(
      `./users/${folderName}/${cleanedName}.txt`,
      fantasyHistory,
      (err) => {
        if (err) throw err;
      },
    );

    const comment = `Folder ${folderPath} created successfully. Date and time: ${new Date().toLocaleString()}`;
    return comment;
  } catch (error) {
    return error;
  }
};

export default createFolderWithComment;
