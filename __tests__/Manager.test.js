const { describe, it, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

const name = 'Tiana';
const id = 1;
const email = 'email@email.com';
const officeNumber = 41;

describe('Manager class', () =>{
    describe('initialization', () =>{
        const manager = new Manager(name, id, email, officeNumber);
        it('should return an object extending the employee class with name', () =>{
            expect(manager.name).toBe(name);
        })
        it('should return an object extending the employee class with id', () =>{
            expect(manager.id).toBe(id);
        })
        it('should return an object extending the exployee class with email', ()=>{
            expect(manager.email).toBe(email);
        })
        it('should return an object containing office number', () =>{
            expect(manager.officeNumber).toBe(officeNumber);
        })
    })
    describe('getRole function', () => {
        it('should return "Manager"', () =>{
            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.getRole()).toEqual('Manager');
        })
    })
})