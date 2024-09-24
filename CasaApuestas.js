const CasaApuestasDB = require('./CasaApuestasDB')

class CasaApuesta {
  casaApuestasDB = new CasaApuestasDB();

  async obtenerJuegosDisponibles() {
    return this.casaApuestasDB.getJuegos()
  }

  apostar(playerId, gameId, monto, target) {
    return {
      betId: 1,
      playerId,
      gameId,
      monto,
      target
    };
  }

  getMontoApostado(betId) {
    return {
        betId,
        monto: 100
    }
  }

  getHistorialApuestas(playerId) {}

  getWinRatePersonal(playerId) {}

  getLossRatePersonal(playerId) {}

  getSaldoDisponible(playerId) {}

  retirarFondos(playerId, monto) {}

  getJuegosGanados(playerId) {}

  depositarFondos(playerId, monto) {}

  getBonificacionesDisponibles() {}

  consultarTerminosYCondiciones() {}
}

module.exports = CasaApuesta;