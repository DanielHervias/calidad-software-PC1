const CasaApuestasDBMock = require('./__mocks__/CasaApuestasDB.json')

class CasaApuestasDB {
    async getJuegos() {
        return CasaApuestasDBMock.getJuegos
    }
  
    async getUserById(userId) {
        return {
            userId,
            ...CasaApuestasDBMock.getUserById
        }
    } 
  
    async save(entity, body) {
        return {
            msg: `Successfuly saved in ${entity}`
        }
    }
  
    async getById(entity, id) {
        return {
            id
        }
    }

    async deleteById(entity, id) {
        return {
            msg: `Successfuly deleted by id: ${id}` 
        }
    }

    async updateById(entity, id) {
        return {
            msg: `Successfuly updated by id: ${id}`
        }
    }
  }
  
  module.exports = CasaApuestasDB;
  