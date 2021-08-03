const assert = require('assert');
const ContactForm = require('./contact-form');
const expect = require('chai').expect;

describe('ContactForm', () => {

    let pageObject;

    before(() => {
        pageObject = new ContactForm();

    })

    describe('#emailField', () => {
        ['example@example.com', 'yd@mail.ru'].forEach(email => {
            it(`should set value ${email}`, () => {
                pageObject.typeInEmailField(email);
                assert.equal(pageObject.emailField, email);
            });
        });




        it('should be clear after form sending', () => {
            pageObject.sendForm()
            expect(pageObject.emailField).is.empty;
        });
    });

    describe('#isSent', () => {
        it('should be true', () => {
            pageObject.sendForm()
            expect(pageObject.isSent).is.true;
        });
    });

});

// 2
//
// describe('ContactForm', () => {
//
//     let pageObject;
//
//     before(() => {
//         pageObject = new ContactForm();
//         pageObject.typeInEmailField('example@example.com');
//     })
//
//     describe('#emailField', () => {
//         it('should set value', () => {
//             assert.equal(pageObject.emailField, 'example@example.com');
//         });
//
//         it('should be clear after form sending', () => {
//             pageObject.sendForm()
//             expect(pageObject.emailField).is.empty;
//         });
//     });
//
// });

// 1
//
// describe('ContactForm', () => {
//     describe('#emailField', () => {
//         it('should set value', () => {
//             const pageObject = new ContactForm();
//
//             pageObject.typeInEmailField('example@example.com')
//
//             assert.equal(pageObject.emailField, 'example@example.com');
//         });
//
//         it('should be clear after form sending', () => {
//             // arrange
//             const pageObject = new ContactForm();
//
//             // act
//             pageObject.typeInEmailField('example@example.com')
//             pageObject.sendForm()
//
//             //assert
//             expect(pageObject.emailField).is.empty;
//         });
//     });
// });