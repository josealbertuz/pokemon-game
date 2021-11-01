import {shallowMount} from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

describe('Test PokemonOptions component', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(PokemonOptions);
    })

    test('Emits click event to the parent when click Reset', async () => {
        await wrapper.find('[data-testid="reset"]').trigger('click');
        expect(wrapper.emitted('resetGame')).toEqual([[]]);
    });

    test('Emits click event to the parent when click Hint', async () => {
        await wrapper.find('[data-testid="hint"]').trigger('click');
        expect(wrapper.emitted('removePossibleAnswers')).toEqual([[]]);
    });

    test('Emits click event to the parent when click Next', async () => {
        await wrapper.find('[data-testid="next"]').trigger('click');
        expect(wrapper.emitted('nextPokemon')).toEqual([[]]);
    });

})