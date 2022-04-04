const { it, expect } = require("@jest/globals");
const { calculatePrice } = require("./index");

describe("Fundamentos js", () => {
	describe("Los costos de envio deben funcionar correctamente", () => {
		it("CalculatePrice debe ser una funcion", () => {
			expect(typeof calculatePrice).toBe("function");
		});
		it("Si el precio es menor a 2000, el costo de envio debe ser 300", () => {
			expect(calculatePrice("play", 1999)).toMatch(/300/);
			expect(calculatePrice("tv", 50)).toMatch(/300/);
		});
		it("Si el precio es mayor a 2000 y menor a 4000 el costo de envio debe ser 500", () => {
			expect(calculatePrice("xbox", 2500)).toMatch(/500/);
			expect(calculatePrice("smart", 3999)).toMatch(/500/);
		});
		it("Si el precio es mayor a 4000 el costo de envio debe ser 700", () => {
			expect(calculatePrice("xbox", 4500)).toMatch(/700/);
			expect(calculatePrice("smart", 5999)).toMatch(/700/);
			expect(calculatePrice("smart", 999)).not.toMatch(/700/);
		});
	});
	xdescribe("El precio total debe ser la suma del precio del producto y el costo de envio", () => {
		it("Los productos con precio menor a 2000 deben sumar 300 de envio al precio final", () => {
			expect(calculatePrice("PSP", 1500)).toMatch(/1800/);
			expect(calculatePrice("PSP", 700)).toMatch(/1000/);
			expect(calculatePrice("PSP", 200)).toMatch(/500/);
		});
		it("Los productos con precio entre 2000 y 4000 deben sumar 500 de envio al precio final", () => {
			expect(calculatePrice("PSP", 3500)).toMatch(/4000/);
			expect(calculatePrice("PSP", 2700)).toMatch(/3200/);
			expect(calculatePrice("PSP", 2200)).toMatch(/2700/);
		});
		it("Los productos con precio mayor a 4000 deben sumar 700 de envio al precio final", () => {
			expect(calculatePrice("PSP", 4500)).toMatch(/5200/);
			expect(calculatePrice("PSP", 5000)).toMatch(/5700/);
			expect(calculatePrice("PSP", 10000)).toMatch(/10700/);
		});
	});
	xdescribe("Extra", () => {
		it('Si el precio es 0 o un numero negativo, debe retornar el string "Error" ', () => {
			expect(calculatePrice("switch", -5)).toMatch(/Error/i);
			expect(calculatePrice("switch", 0)).toMatch(/Error/i);
		});
		it('Debe retornar el string "ingresar ambos parametros", si falta alguno de los dos parametros', () => {
			expect(calculatePrice("switch")).toMatch(/ingresar ambos parametros/i);
			expect(calculatePrice(200)).toMatch(/ingresar ambos parametros/i);
		});
	});
});
