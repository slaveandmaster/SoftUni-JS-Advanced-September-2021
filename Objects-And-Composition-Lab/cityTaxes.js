function solve(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes()  {  
            this.treasury += this.population * this.taxRate; 
        },
        applyGrowth(percantage) { 
             this.population  = Math.floor(this.population += this.population * percantage / 100); 
            },
        applyRecession(percantage) { this.treasury = Math.ceil(this.treasury - this.treasury * percantage / 100); }
    }
    return city;
}

const result = solve('Tortuga', 7000,  15000);
console.log(result);
result.collectTaxes();
console.log(result);
result.applyGrowth(5);
console.log(result);
