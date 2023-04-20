const {Triangle}= require("./shapes");
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
test("description of the test", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

// test("description of the test", () => {
//     const shape = new Circle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// })

// test("description of the test", () => {
//     const shape = new Square();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// })