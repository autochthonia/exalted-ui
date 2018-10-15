import { css } from 'emotion';
import { fontFace } from 'polished';

const ENVISION_ROMAN = 'Envision Roman';
const MERCURY_TEXT_G2 = 'Mercury Text G2';
const FUTURA_PT = 'Futura PT';
const DIN_ALTERNATE = 'DIN Alternate';

export const exaltedFontFaces = css(
  fontFace({
    fontFamily: ENVISION_ROMAN,
    fontFilePath: 'https://f002.backblazeb2.com/file/exalted-fonts/EnvisionRoman',
  }),
  fontFace({
    fontFamily: MERCURY_TEXT_G2,
    fontWeight: 'semibold',
    fontFilePath: 'https://f002.backblazeb2.com/file/exalted-fonts/MercuryTextG2-Semibold',
  }),
  fontFace({
    fontFamily: MERCURY_TEXT_G2,
    fontWeight: 'roman',
    fontFilePath: 'https://f002.backblazeb2.com/file/exalted-fonts/MercuryTextG2-Roman',
  }),
  fontFace({
    fontFamily: FUTURA_PT,
    fontFilePath: 'https://f002.backblazeb2.com/file/exalted-fonts/FuturaPT-Book',
  }),
  fontFace({
    fontFamily: DIN_ALTERNATE,
    fontFilePath: 'https://f002.backblazeb2.com/file/exalted-fonts/DINAlternate-Bold',
  }),
);

export const p1 = css({
  fontFamily: ENVISION_ROMAN,
  fontWeight: 'normal',
  fontSize: '18pt',
  lineHeight: '21.6pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.125em',
  color: 'black',
  letterSpacing: 'normal',
});
export const p2 = css({
  fontFamily: ENVISION_ROMAN,
  fontWeight: 'normal',
  fontSize: '14pt',
  lineHeight: '16pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.125em',
  color: 'cmyk(15, 100, 100, 0)',
  letterSpacing: 'normal',
});
export const p3 = css({
  fontFamily: MERCURY_TEXT_G2,
  fontWeight: 'bold', // semibold
  fontSize: '10pt',
  lineHeight: '12pt',
  fontVariant: 'small-caps',
  marginTop: '0em',
  marginBottom: '0.02em',
  color: 'cmyk(15, 100, 100, 0)',
  letterSpacing: 'normal',
});
export const pn = css({
  fontFamily: MERCURY_TEXT_G2,
  fontWeight: 'bold', // roman
  fontSize: '9.5pt',
  lineHeight: '12pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.145em',
  color: 'black',
  letterSpacing: 'normal',
});
export const pb = css({
  fontFamily: MERCURY_TEXT_G2,
  fontWeight: 'bold', // semibold
  fontSize: '9.5pt',
  lineHeight: '12pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.02em',
  color: 'black',
  letterSpacing: 'normal',
});
// Left Indent	Right Indent	First Line Indent	Tabs
// 0.25	0.125	-0.125	0.125 in / 0.25 in
export const bullets = css({
  fontFamily: MERCURY_TEXT_G2,
  fontWeight: 'bold', // roman
  fontSize: '9.5pt',
  lineHeight: '12pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.145em',
  color: 'black',
  letterSpacing: 'normal',
});
// Left Indent	Right Indent	First Line Indent	Tabs
// 0.25	0.125	-0.125	0.125 in / 0.25 in
// Paragraph Shading 15/100/100/0 at 10%
export const bulletsShaded = css({
  fontFamily: MERCURY_TEXT_G2,
  fontWeight: 'bold', // roman
  fontSize: '9.5pt',
  lineHeight: '12pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.145em',
  color: 'black',
  letterSpacing: 'normal',
});
export const s = css({
  fontFamily: MERCURY_TEXT_G2,
  fontWeight: 'bold', // roman
  fontSize: '9.5pt',
  lineHeight: '12pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0em',
  color: 'black',
  // letterSpacing: -10,
});
// Left Indent	Right Indent	First Line Indent	Tabs
// 0.125	0.125	0	0.125
export const stats = css({
  fontFamily: FUTURA_PT,
  fontWeight: 'bold', // book
  fontSize: '10.5pt',
  lineHeight: '11.5pt',
  fontVariant: 'normal',
  marginTop: '0.02em',
  marginBottom: '0.02em',
  color: 'black',
  // letterSpacing: -10,
});
export const sb1b = css({
  fontFamily: DIN_ALTERNATE,
  fontWeight: 'bold',
  fontSize: '11pt',
  lineHeight: '13.2pt',
  fontVariant: 'uppercase',
  marginTop: '0.125em',
  marginBottom: '0.1875em',
  color: 'black', // Body: Paperwhite / Contour: 0.25pt thickness, Black
  // letterSpacing: -30,
});
export const sb2b = css({
  fontFamily: DIN_ALTERNATE,
  fontWeight: 'bold',
  fontSize: '9.5pt',
  lineHeight: '11pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.125em',
  color: 'black', // Body: Paperwhite / Contour: 0.25pt thickness, Black
  letterSpacing: 'normal',
});
export const sb1 = css({
  fontFamily: DIN_ALTERNATE,
  fontWeight: 'bold',
  fontSize: '11pt',
  lineHeight: '13.2pt',
  fontVariant: 'uppercase',
  marginTop: '0.125em',
  marginBottom: '0.1875em',
  color: 'black',
  letterSpacing: 'normal',
});
export const sb2 = css({
  fontFamily: DIN_ALTERNATE,
  fontWeight: 'bold',
  fontSize: '9.5pt',
  lineHeight: '11pt',
  fontVariant: 'normal',
  marginTop: '0em',
  marginBottom: '0.125em',
  color: 'black',
  letterSpacing: 'normal',
});

export default {
  p1,
  p2,
  p3,
  pn,
  pb,
  bullets,
  bulletsShaded,
  s,
  stats,
  sb1b,
  sb2b,
  sb1,
  sb2,
};
