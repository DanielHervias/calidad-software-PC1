const CasaApuestas = require('./CasaApuestas.js');

jest.mock('./CasaApuestasDB.js', () => require('./CasaApuestasDB.mock.js'));

describe('CasaApuestasClass', () => {
  describe('obtenerJuegosDisponibles Method', () => {
    test('Método obtenerJuegosDisponibles está definido', () => {
      const casaApuestas = new CasaApuestas();
      expect(typeof casaApuestas.obtenerJuegosDisponibles).toBe('function');
    });

    test('Método obtenerJuegosDisponibles devuelve un arreglo', async () => {
      const casaApuestas = new CasaApuestas();
      const response = await casaApuestas.obtenerJuegosDisponibles();
      expect(response.length).toBeGreaterThan(0);
      expect(response[0]).toHaveProperty('gameId');
      expect(response[0]).toHaveProperty('gameName');
      expect(response[0]).toHaveProperty('description');
      expect(response[0]).toHaveProperty('apuestaMin');
      expect(response[0]).toHaveProperty('apuestaMax');
    });
  });
});
