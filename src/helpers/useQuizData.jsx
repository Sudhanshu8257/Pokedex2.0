import React from "react";
import { useGetPokemonsQuery } from "../store/useApi";
import { useGetPokemonsDescriptionQuery } from "../store/useApi";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const useQuizData = (score) => {
  const [randomIds, setRandomIds] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [quizOptions, setQuizOptions] = React.useState([]);
  const [replacedFlavorText, setReplacedFlavorText] = React.useState("");
  React.useEffect(() => {
    const generateRandomIds = () => {
      const ids = [];
      while (ids.length < 4) {
        const id = Math.floor(Math.random() * 250) + 1;
        if (!ids.includes(id)) {
          ids.push(id);
        }
      }
      setRandomIds(ids);
    };
    generateRandomIds();
  }, [score]);

  const pokemon1 = useGetPokemonsQuery(randomIds[0] ?? "");
  const pokemon2 = useGetPokemonsQuery(randomIds[1] ?? "");
  const pokemon3 = useGetPokemonsQuery(randomIds[2] ?? "");
  const { data, isFetching } = useGetPokemonsQuery(randomIds[3] ?? "");
  const { data: data1, isFetching: isFetching0 } =
    useGetPokemonsDescriptionQuery(randomIds[3] ?? "");

  React.useEffect(() => {
    if (
      !isFetching &&
      !isFetching0 &&
      pokemon1.data &&
      pokemon2.data &&
      pokemon3.data &&
      data &&
      data1 &&
      randomIds[3] // check if randomIds[3] exists
    ) {
      const quizOptions = [
        { name: data?.name, image: data?.sprites?.other?.home?.front_default },
        {
          name: pokemon1?.data.name,
          image: pokemon1?.data.sprites?.other?.home?.front_default,
        },
        {
          name: pokemon2?.data.name,
          image: pokemon2?.data.sprites?.other?.home?.front_default,
        },
        {
          name: pokemon3?.data.name,
          image: pokemon3?.data.sprites?.other?.home?.front_default,
        },
      ];
      setQuizOptions(shuffleArray(quizOptions));

      const flavourEntries = data1?.flavor_text_entries.filter(
        (entry) => entry.language.name === "en"
      );
      const randomFlavourEntry =
        flavourEntries[Math.floor(Math.random() * flavourEntries?.length)];
      const replacedFlavorText = randomFlavourEntry.flavor_text.replace(
        new RegExp(data1.name, "gi"),
        "_____"
      );
      setReplacedFlavorText(replacedFlavorText);
      setIsLoading(false);
    }
  }, [
    isFetching,
    isFetching0,
    pokemon1.data,
    pokemon2.data,
    pokemon3.data,
    data,
    data1,
    randomIds,
  ]);
  const name = data1?.name;
  let correctIndex = quizOptions.findIndex((ele) => ele.name === name);

  return {
    isLoading,
    quizOptions,
    replacedFlavorText,
    name,
    correctIndex,
    isFetching,
    isFetching0,
  };
};
export default useQuizData;
