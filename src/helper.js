const bgColors = {
  koya: "#44caf5",
  rj: "#f3701f",
  shooky: "#46c1be",
  mang: "#b19ecb",
  chimmy: "#2db569",
  tata: "#ffea0e",
  cooky: "#ef68af",
  van: "#dce4e8",
};

const descriptions = {
  koya:
    "Brilliant, multi-talented KOYA is quite the ‘sleeping cutie’. KOYA naps with a mind heavily filled with thoughts.",
  rj:
    "RJ loves cooking. RJ loves eating. It's usually in that order. The fluffy fur coat and compassionate soul make everyone feel right at home.",
  shooky:
    "Tiny SHOOKY loves pulling pranks, especially ones dropped on friends. The one thing SHOOKY hates most is milk.",
  mang:
    "Dancing runs in MANG’s veins. Wherever there’s music, MANG’s probably there breaking out some cool moves. Veiled under a mask, MANG's true identity remains a secret.",
  chimmy:
    "CHIMMY always sports the signature yellow hoodie and is compelled to work hard on anything that catches CHIMMY’s attention.",
  tata:
    "TATA is a crown prince on Planet BT. Possessor of supernatural powers and a hyper-elastic body that stretches to great lengths.",
  cooky:
    "Don’t let COOKY’s perky appearance fool you. Always full of heart and boundless stamina, COOKY’s that one friend you can always count on.",
  van:
    "The sentient and all-knowing robot VAN seems to be knowledgeable. in just about everything in the galaxy. Acts as protector of BT21, 24/7.",
};

const statusBarStyle = (character) => (character === null ? "light" : "dark");

const fgColor = (character) => (character === null ? "#ffffff" : "#000000");

const bgColor = (character) =>
  character === null ? "#40519c" : bgColors[character];

const setAlpha = (color, alpha) => {
  if (color.charAt(0) === "#") {
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
};

const getDescription = (character) =>
  character === null ? "" : descriptions[character];

export default {
  statusBarStyle,
  fgColor,
  bgColor,
  setAlpha,
  getDescription,
};
