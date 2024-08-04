import { describe } from 'mocha';
import PageActions from '../pageActions';


describe('Test store workflow', () => {

    
    beforeEach(() => {
        cy.clearLocalStorage = () => null
        PageActions.testStore();
    });

    it('Add Humming Bird Tshirt', () => {
        PageActions.addHummingBirdTshirt();
    });

    it('Add Humming Bird Sweater', () => {
        PageActions.addHummingBirdSweater();
        
    });

    it('Add The Best Photo', () => {
        PageActions.addTheBestPhoto();
        
    });


});