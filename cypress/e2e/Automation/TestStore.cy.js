import { describe } from 'mocha';
import PageActions from '../pageActions';


describe('Test store workflow', () => {
    it('Go to Test store', () => {
        
        PageActions.testStore();

        PageActions.clothe1();
    });
});