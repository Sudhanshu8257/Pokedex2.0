export const getDescription = (pokemonDescription) => {
  let description = "";
  const check = pokemonDescription?.flavor_text_entries?.length === 0;
  if (check) {
    description = "No Data In PokeDex";
  } else {
    const index = pokemonDescription?.flavor_text_entries?.findIndex(
      (ele) => ele.language.name === "en"
    );
    description = pokemonDescription?.flavor_text_entries[index]?.flavor_text;
  }
  return description;
};
export function padInteger(number) {
  const originalLength = number?.toString()?.length;
  const paddedNumber =
    originalLength < 4 ? "0".repeat(4 - originalLength) + number : number;
  return paddedNumber;
}
export const capitalize = (string) => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};
export const types = (value) => {
  let color = "";
  switch (value) {
    case "bug":
      color = "#3B994E";
      break;
    case "water":
      color = "#1552E2";
      break;
    case "steel":
      color = "#5F756D";
      break;
    case "rock":
      color = "#48180B";
      break;
    case "psychic":
      color = "#F81C91";
      break;
    case "poison":
      color = "#62318F";
      break;
    case "normal":
      color = "#75515B";
      break;
    case "ice":
      color = "#86D1F5";
      break;
    case "ground":
      color = "#A9702C";
      break;
    case "grass":
      color = "#147B3D";
      break;
    case "ghost":
      color = "#33336B";
      break;
    case "flying":
      color = "#4A677D";
      break;
    case "fire":
      color = "#FD4C5A";
      break;
    case "fighting":
      color = "#EC6338";
      break;
    case "fairy":
      color = "#EA1369";
      break;
    case "electric":
      color = "#E3E32B";
      break;
    case "dragon":
      color = "#448B95";
      break;
    case "dark":
      color = "#595978";
      break;
    default:
      break;
  }
  return color;
};
