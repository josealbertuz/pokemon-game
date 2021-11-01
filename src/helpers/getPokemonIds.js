const getNumberArray = () => {
    return Array.from(Array(650), (_, i) => i + 1);
};

export default (number = 4) => {
    const shufflePokemonIds = getNumberArray().sort(() => Math.random() - 0.5);
    return shufflePokemonIds.slice(0, number);
}