const { describe, it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

const name = 'Brian';
const id = 3;
const email = 'engineer@email.com';
const gitHub = 'lab';

describe('Engineer class', () =>{
    describe('initialization', () =>{
        const engineer = new Engineer(name, id, email, gitHub);
        it('should return an object extending the employee class and containing name', () => {
            expect(engineer.name).toBe(name);
        })
        it('should return an object extending the employee class and containing id', () => {
            expect(engineer.id).toBe(id);
        })
        it('should return an object extending the employee class and containing email', () => {
            expect(engineer.email).toBe(email);
        })
        it('should return an object containing a GitHub username', () =>{
            expect(engineer.gitHub).toBe(gitHub);
        })
    })
    describe('getGithub function', () =>{
        it('should return "lab"', () =>{
            const engineer = new Engineer(name, id, email, gitHub);

            expect(engineer.getGithub()).toEqual('lab');
        })
    })
    describe('getRole function', () =>{
        it('should return "Engineer"', () =>{
            const engineer = new Engineer(name, id, email, gitHub);

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})