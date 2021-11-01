import {shallowMount} from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe('Test PokemonPicture component', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1
        }})
    })

    test('Renders a Pokemon image with a given PokemonId', () => {
        expect(wrapper.vm.pokemonImage.endsWith('1.svg')).toBe(true);
        expect(wrapper.find('.image-filter').exists()).toBe(true)
    });

    test('Change reveal props and reveal the Pokemon', async () => {
        await wrapper.setProps({
            reveal: true
        });

        expect(wrapper.find('.fade-in').exists()).toBe(true);
    })

});
