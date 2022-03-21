import { MyComponent } from "../../../my-app/src/AppConstants";

describe('App', () => {
    it('should find classes which are taken from the production code', async () => {
        await browser.url('');

        await expect($("." + MyComponent)).toBeExisting();
        await expect($("." + MyComponent)).toHaveTextContaining(
            'This represents a component.');
    });
});


