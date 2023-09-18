import data from './repos.json';

export const getRepos = () => {
  return data;
};

export default (req, res) => {
  const certificates = getRepos();
  res.json(repos);
};
