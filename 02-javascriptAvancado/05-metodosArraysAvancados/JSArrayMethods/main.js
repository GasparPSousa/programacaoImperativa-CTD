const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // For normal
  console.log("For Normal")
  for(let i = 0; i < companies.length; i++) {
      console.log(companies[i])
  }

  // forEach
  console.log("For Each com Arrow Functions")
  companies.forEach(company => console.log(company))

  // filter
  console.log('For normal')
  
  let canDrink = [];
  for(let i=0; i < ages.length; i++) {
      if(ages[i] >= 21) {
          canDrink.push(ages[i])
      }
  }
  console.log(canDrink)


  console.log("Filter em Array com Arrow Functions")
  const canDrink2 = ages.filter(age => age >= 21)
  console.log(canDrink2)

  // Filter retail companies
  console.log("Filter em Objetos com Arrow Functions - Normal")
  const retailCompanies = companies.filter(company => company.category === 'Retail')
  console.log(retailCompanies)

  console.log("Filter em Objetos com Arrow Functions -Fazendo Destructuring")
  const retailCompanies2 = companies.filter(({ category }) => category === 'Retail')
  console.log(retailCompanies2)

  // Get 80s companies
  console.log("Filter em Objetos com Arrow Functions -Fazendo Destructuring 2")
  const eightiesCompanies = companies.filter(({ start }) => (start > 1980 && start < 1990))
  console.log(eightiesCompanies)

  // Get companies that lasted 10 years or more
  console.log("Filter em Objetos com Arrow Functions -Fazendo Destructuring 3")
  const lastedTenYears = companies.filter(({ start, end }) => (end - start >= 10))
  console.log(lastedTenYears)
  
  // map

  // Create array of company names
  const companyNames = companies.map(({ name }) => name)
  console.log(companyNames)

  const testMap = companies.map(({ name, start, end}) =>  `${name} [${start} - ${end}]`)
  console.log(testMap)


  const agesSquare = ages.map(age => Math.sqrt(age))
  console.log(agesSquare)

  const agesTimesTwo = ages.map(age => age * 2)
  console.log(agesTimesTwo)

  const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
    // .map(age => age / 3)

  console.log(ageMap)


  // sort
  // Sort companies by start year
//   const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//   console.log(sortedCompanies)

  // Sort ages
//   const sortAges = ages.sort((a, b) => a - b)
//   console.log(sortAges)


  // reduce
  console.log('For normal')
  let ageSum = 0;
  for(let i = 0; i < ages.length; i++) {
      ageSum += ages[i]
  }
  console.log(ageSum)

  console.log('Usando o reduce')
  const ageSum2 = ages.reduce((total, age) => total + age, 0)
  console.log(ageSum2)


  // Get total years for all companies

  const totalYears = companies.reduce((total, { start, end }) => total + (end - start), 0)

  console.log(totalYears)


  // Combine Methods

  console.log(ages)

  const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, number) => total + number, 0)

  console.log(combined)