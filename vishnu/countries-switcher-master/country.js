const countryName = new URLSearchParams(location.search).get(`name`);
const flagImg = document.querySelector('.country-details img')
const countrynameh1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.subRegion')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.topLevelDomain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector(`.border-countries`)
const themechanger = document.querySelector(`.theme-change`)

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then((data)=>{
    console.log(data[0].name.common);
    flagImg.src = data[0].flags.svg
    countrynameh1.innerText = data[0].name.common
        if(data[0].name.nativeName){
           nativeName.innerHTML = Object.values(data[0].name.nativeName)[0].common
        }else{
            nativeName.innerHTML = data[0].name.common
        }
        population.innerHTML = new Intl.NumberFormat('en-IN').format(data[0].population)
        region.innerHTML = data[0].region
        if(data[0].subregion){
            subRegion.innerHTML = data[0].subregion
        }
        if(data[0].subregion){
            capital.innerHTML = data[0].capital?.[0]
        }
        topLevelDomain.innerHTML = data[0].tld.join(', ')
        if(data[0].currencies){
            currencies.innerHTML = Object.values(data[0].currencies).map((currency)=>currency.name).join(', ')
        }
        if(data[0].languages){
            languages.innerHTML = Object.values(data[0].languages).join(', ')
        }
        if(data[0].borders){
            // console.log(data[0])
            data[0].borders.forEach((border) => {
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((resp)=>resp.json())
                .then(([countryborder])=>{
                // console.log(countryborder)
                const borderCountryTag = document.createElement('a')
                borderCountryTag.innerText = countryborder.name.common
                borderCountryTag.href = `country.html?name=${countryborder.name.common}`
                borderCountries.append(borderCountryTag)
                })
            })
        }else{
            // borderCountryTag.innerText = `${data[0].name.common} has No Border Country`
        }
        
    }
)

themechanger.addEventListener(`click`, ()=>{
    document.body.classList.toggle('dark')
})
