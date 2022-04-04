export default () => ({
  currentName: window.localStorage.getItem('page') || '',
});
