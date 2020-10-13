export const navGroupLinksStyle = {
  h: [null, null, '100%'],
  templateColumns: ['repeat(1, 1fr)', null, 'repeat(4, auto)'],
  gap: [2, 4, 6],
  justifyContent: 'end',
  alignItems: [null, null, 'center'],
  style: { listStyle: 'none' },
};

const fontLinks = ['2xl', 'xl'];
const marginLinks = [4, 0];

export const navLinksStyle = {
  mb: marginLinks,
  fontSize: fontLinks,
};

export const navFirstLinkStyle = {
  ...navLinksStyle,
  mt: marginLinks,
};
