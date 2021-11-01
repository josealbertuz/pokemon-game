import {shallowMount} from "@vue/test-utils";
import PokemonPossibleAnswers from "@/components/PokemonPossibleAnswers";

describe('Test PokemonPossibleAnswers component', () => {

    const pokemons = [
        {
            id: 1,
            name: 'Bulbasaur'
        },
        {
            id: 4,
            name: 'Charmander'
        },
        {
            id: 7,
            name: 'Squirtle'
        },
        {
            id: 25,
            name: 'Pikachu'
        }

    ];

    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(PokemonPossibleAnswers, {
            props: {
                pokemons
            }
        });
    })

    test('Render buttons passed by props', () => {
        const possibleAnswers = wrapper.findAll('li');
        expect(possibleAnswers.length).toBe(4);
        possibleAnswers.forEach((pokemonButton, index) => {
            expect(pokemonButton.text()).toBe(pokemons[index].name);
        });
    });

    test('Emits click event to the parent', async () => {
        await wrapper.find('li').trigger('click');
        expect(wrapper.emitted().pokemonSelected[0]).toEqual([1]);
    });

})