import Hotel from '../controllers/hotelController'
import logger from 'morgan'

const hotel = new Hotel()

describe('sum function', () => {
    it('should sum numbers', () => {
        expect(sum(3, 4)).toEqual(7);
    })
});

describe('create hotel', () => {
    logger.info('About to test CreateHotel function')
    it('should create an hotel', () => {
        expect(hotel.createHotel(req,res)).toEqual("Hotel created...");
    })
});
