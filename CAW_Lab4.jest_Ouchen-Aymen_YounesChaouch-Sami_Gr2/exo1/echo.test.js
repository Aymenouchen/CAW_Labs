const { echo } = require('./echo'); 

describe('echo function', () => {
    it('should log "ssss" 5 times', () => {
       
        const spy = jest.spyOn(console, 'log');
        const a = 'ssss';
        const s = 5;

   
        echo(a, s);

  
        expect(spy).toHaveBeenCalledTimes(s);
        expect(spy).toHaveBeenCalledWith(a);
    });

    
});
