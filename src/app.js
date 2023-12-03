import createFolderWithComment from './service/folder.service.js';
import fetchNames from './dao/fetchUser.dao.js';
import getFirstThreeElements from './utils/firstThreeElements.utils.js';

fetchNames()
  .then((names) => {
    const firstThreeNames = getFirstThreeElements(names);
    firstThreeNames.forEach((name) => createFolderWithComment(name));
  })
  .catch((error) => {
    console.error('Error:', error);
  });
