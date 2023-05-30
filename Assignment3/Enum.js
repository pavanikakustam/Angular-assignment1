var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
console.log(Colour[0]); // Output: 0
console.log(Colour[1]); // Output: 1
console.log(Colour[2]); // Output: 2
