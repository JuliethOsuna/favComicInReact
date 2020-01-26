function getComic(comicId){
  return fetch(`https://xkcd.com/${comicId}/info.0.json`);
}

export {
  getComic
};
