// USAGE:
// abbrState('ny', 'name');
// --> 'New York'
// abbrState('New York', 'abbr');
// --> 'NY'
//console.log(globalCountry);
var totalLenght = 0;
var teste = 0;
var countries = [];
var timelineWorld = [];
var timeline = [];
var listTemp = [];

var historicCountries= [];

console.log('COVID.JS START');

// get data timelinetotal

const request = async () => {
    const response = await fetch('https://api.github.com/repos/dufacc/Covidstats/contents/data/timelinetotal.json', {
        headers: new Headers({
            'User-agent': 'Mozilla/4.0 Custom User Agent'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data = atob(data.content)
        var covid_total_timeline = JSON.parse(data.split("=")[1])
        console.log(covid_total_timeline)
    })
    .catch(err => {
        console.log(err);
    });

    const json = await response.json();
    console.log(covid_total_timeline)
}

// request();

async function wrapperFunc() {
    try {
        let r1 = await request();
        // now process r2
        return someValue;     // this will be the resolved value of the returned promise
    } catch(e) {
        console.log(e);
        throw e;      // let caller know the promise was rejected with this reason
    }
}

wrapperFunc().then(result => {
    // got final result
    console.log("terminou fetch")
}).catch(err => {
    // got error
});


// var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
//     n = 0
//   ) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve({
//           resolvedAfterNSeconds: n
//         });
//       }, n * 1000);
//     });
//   });
//   var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(
//     n = 0
//   ) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         reject({
//           rejectedAfterNSeconds: n
//         });
//       }, n * 1000);
//     });
//   });

// function executingAt() {
//     return (performance.now() - startTime) / 1000;
//   }

//   startTime = performance.now();
//   var sequential = async function() {
//     console.log(executingAt());
//     const resolveAfter3seconds = await promiseTRSANSG(5);
//     console.log("resolveAfter3seconds", resolveAfter3seconds);
//     console.log(executingAt());
//     const resolveAfter4seconds = await promiseTRSANSG(3);
//     console.log("resolveAfter4seconds", resolveAfter4seconds);
//     end = executingAt();
//     console.log(end);
//   }
//   sequential();

console.log('COVID.JS FINISH');


// function abbrState(input, to){
    
//     var states = [
//         ["Afghanistan", "AF"], 
//         ["land Islands", "AX"], 
//         ["Albania", "AL"], 
//         ["Algeria", "DZ"], 
//         ["American Samoa", "AS"], 
//         ["Andorra", "AD"], 
//         ["Angola", "AO"], 
//         ["Anguilla", "AI"], 
//         ["Antarctica", "AQ"], 
//         ["Antigua And Barbuda", "AG"], 
//         ["Argentina", "AR"], 
//         ["Armenia", "AM"], 
//         ["Aruba", "AW"], 
//         ["Australia", "AU"], 
//         ["Austria", "AT"], 
//         ["Azerbaijan", "AZ"], 
//         ["Bahamas", "BS"], 
//         ["Bahrain", "BH"], 
//         ["Bangladesh", "BD"], 
//         ["Barbados", "BB"], 
//         ["Belarus", "BY"], 
//         ["Belgium", "BE"], 
//         ["Belize", "BZ"], 
//         ["Benin", "BJ"], 
//         ["Bermuda", "BM"], 
//         ["Bhutan", "BT"], 
//         ["Bolivia", "BO"], 
//         ["Bosnia And Herzegovina", "BA"], 
//         ["Botswana", "BW"], 
//         ["Bouvet Island", "BV"], 
//         ["Brazil", "BR"], 
//         ["British Indian Ocean Territory", "IO"], 
//         ["Brunei ", "BN"], 
//         ["Bulgaria", "BG"], 
//         ["Burkina Faso", "BF"], 
//         ["Burundi", "BI"], 
//         ["Cambodia", "KH"], 
//         ["Cameroon", "CM"], 
//         ["Canada", "CA"], 
//         ["Cabo Verde", "CV"], 
//         ["Cayman Islands", "KY"], 
//         ["Car", "CF"], 
//         ["Caribbean Netherlands", "BQ"],
//         ["Chad", "TD"], 
//         ["Chile", "CL"], 
//         ["China", "CN"], 
//         ["Christmas Island", "CX"], 
//         ["Cocos (Keeling) Islands", "CC"], 
//         ["Colombia", "CO"], 
//         ["Comoros", "KM"], 
//         ["Congo", "CG"], 
//         ["Drc", "CD"], 
//         ["Cook Islands", "CK"], 
//         ["Costa Rica", "CR"], 
//         ["Ivory Coast", "CI"], 
//         ["Croatia", "HR"], 
//         ["Cuba", "CU"],
//         ["Curaçao", "CW"], 
//         ["Cyprus", "CY"], 
//         ["Czechia", "CZ"], 
//         ["Denmark", "DK"], 
//         ["Djibouti", "DJ"], 
//         ["Dominica", "DM"], 
//         ["Dominican Republic", "DO"], 
//         ["Ecuador", "EC"], 
//         ["Egypt", "EG"], 
//         ["El Salvador", "SV"], 
//         ["Equatorial Guinea", "GQ"], 
//         ["Eritrea", "ER"], 
//         ["Estonia", "EE"], 
//         ["Ethiopia", "ET"], 
//         ["Falkland Islands (Malvinas)", "FK"], 
//         ["Faeroe Islands", "FO"], 
//         ["Fiji", "FJ"], 
//         ["Finland", "FI"], 
//         ["France", "FR"], 
//         ["French Guiana", "GF"], 
//         ["French Polynesia", "PF"], 
//         ["French Southern Territories", "TF"], 
//         ["Gabon", "GA"], 
//         ["Gambia", "GM"], 
//         ["Georgia", "GE"], 
//         ["Germany", "DE"], 
//         ["Ghana", "GH"], 
//         ["Gibraltar", "GI"], 
//         ["Greece", "GR"], 
//         ["Greenland", "GL"], 
//         ["Grenada", "GD"], 
//         ["Guadeloupe", "GP"], 
//         ["Guam", "GU"], 
//         ["Guatemala", "GT"], 
//         ["Guernsey", "GG"], 
//         ["Guinea", "GN"], 
//         ["Guinea Bissau", "GW"], 
//         ["Guyana", "GY"], 
//         ["Haiti", "HT"], 
//         ["Heard Island And Mcdonald Islands", "HM"], 
//         ["Vatican City", "VA"], 
//         ["Honduras", "HN"], 
//         ["Hong Kong", "HK"], 
//         ["Hungary", "HU"], 
//         ["Iceland", "IS"], 
//         ["India", "IN"], 
//         ["Indonesia", "ID"], 
//         ["Iran", "IR"], 
//         ["Iraq", "IQ"], 
//         ["Ireland", "IE"], 
//         ["Isle of Man", "IM"], 
//         ["Israel", "IL"], 
//         ["Italy", "IT"], 
//         ["Jamaica", "JM"], 
//         ["Japan", "JP"], 
//         ["Jersey", "JE"], 
//         ["Jordan", "JO"], 
//         ["Kazakhstan", "KZ"], 
//         ["Kenya", "KE"], 
//         ["Kiribati", "KI"], 
//         ["Korea, Democratic People'S Republic of", "KP"], 
//         ["S. Korea", "KR"], 
//         ["Kuwait", "KW"], 
//         ["Kyrgyzstan", "KG"], 
//         ["Laos", "LA"], 
//         ["Latvia", "LV"], 
//         ["Lebanon", "LB"], 
//         ["Lesotho", "LS"], 
//         ["Liberia", "LR"], 
//         ["Libya", "LY"], 
//         ["Liechtenstein", "LI"], 
//         ["Lithuania", "LT"], 
//         ["Luxembourg", "LU"], 
//         ["Macao", "MO"], 
//         ["North Macedonia", "MK"], 
//         ["Madagascar", "MG"], 
//         ["Malawi", "MW"], 
//         ["Malaysia", "MY"], 
//         ["Maldives", "MV"], 
//         ["Mali", "ML"], 
//         ["Malta", "MT"], 
//         ["Marshall Islands", "MH"], 
//         ["Martinique", "MQ"], 
//         ["Mauritania", "MR"], 
//         ["Mauritius", "MU"], 
//         ["Mayotte", "YT"], 
//         ["Mexico", "MX"], 
//         ["Micronesia, Federated States of", "FM"], 
//         ["Moldova", "MD"], 
//         ["Monaco", "MC"], 
//         ["Mongolia", "MN"], 
//         ["Montenegro", "ME"],
//         ["Montserrat", "MS"],
//         ["Morocco", "MA"], 
//         ["Mozambique", "MZ"], 
//         ["Myanmar", "MM"], 
//         ["Namibia", "NA"], 
//         ["Nauru", "NR"], 
//         ["Nepal", "NP"], 
//         ["Netherlands", "NL"], 
//         ["Netherlands Antilles", "AN"], 
//         ["New Caledonia", "NC"], 
//         ["New Zealand", "NZ"], 
//         ["Nicaragua", "NI"], 
//         ["Niger", "NE"], 
//         ["Nigeria", "NG"], 
//         ["Niue", "NU"], 
//         ["Norfolk Island", "NF"], 
//         ["Northern Mariana Islands", "MP"], 
//         ["Norway", "NO"], 
//         ["Oman", "OM"], 
//         ["Pakistan", "PK"], 
//         ["Palau", "PW"], 
//         ["Palestine", "PS"], 
//         ["Panama", "PA"], 
//         ["Papua New Guinea", "PG"], 
//         ["Paraguay", "PY"], 
//         ["Peru", "PE"], 
//         ["Philippines", "PH"], 
//         ["Pitcairn", "PN"], 
//         ["Poland", "PL"], 
//         ["Portugal", "PT"], 
//         ["Puerto Rico", "PR"], 
//         ["Qatar", "QA"], 
//         ["Reunion", "RE"], 
//         ["Romania", "RO"], 
//         ["Russia", "RU"], 
//         ["Rwanda", "RW"], 
//         ["Saint Helena", "SH"], 
//         ["Saint Kitts And Nevis", "KN"], 
//         ["Saint Lucia", "LC"], 
//         ["Saint Martin", "MF"],
//         ["Sint Maarten", "SX"],
//         ["Saint Maarten", "SX"],
//         ["St. Barth", "BL"], 
//         ["Isle Of Man", "IM"], 
//         ["Saint Pierre And Miquelon", "PM"], 
//         ["St. Vincent Grenadines", "VC"], 
//         ["Samoa", "WS"], 
//         ["San Marino", "SM"], 
//         ["Sao Tome And Principe", "ST"], 
//         ["Saudi Arabia", "SA"], 
//         ["Senegal", "SN"], 
//         ["Serbia", "RS"], 
//         ["Seychelles", "SC"], 
//         ["Sierra Leone", "SL"], 
//         ["Singapore", "SG"], 
//         ["Slovakia", "SK"], 
//         ["Slovenia", "SI"], 
//         ["Solomon Islands", "SB"], 
//         ["Somalia", "SO"], 
//         ["South Africa", "ZA"], 
//         ["South Georgia And the South Sandwich Islands", "GS"], 
//         ["Spain", "ES"], 
//         ["Sri Lanka", "LK"], 
//         ["Sudan", "SD"], 
//         ["Suriname", "SR"], 
//         ["Svalbard And Jan Mayen", "SJ"], 
//         ["Eswatini", "SZ"], 
//         ["Sweden", "SE"], 
//         ["Switzerland", "CH"], 
//         ["Syria", "SY"], 
//         ["Taiwan", "TW"], 
//         ["Tajikistan", "TJ"], 
//         ["Tanzania", "TZ"], 
//         ["Thailand", "TH"], 
//         ["Timor Leste", "TL"], 
//         ["Togo", "TG"], 
//         ["Tokelau", "TK"], 
//         ["Tonga", "TO"], 
//         ["Trinidad And Tobago", "TT"], 
//         ["Tunisia", "TN"], 
//         ["Turkey", "TR"], 
//         ["Turkmenistan", "TM"], 
//         ["Turks And Caicos", "TC"], 
//         ["Tuvalu", "TV"], 
//         ["Uganda", "UG"], 
//         ["Ukraine", "UA"], 
//         ["Uae", "AE"], 
//         ["Uk", "GB"],
//         ['Channel Islands','GB'], 
//         ["Usa", "US"], 
//         ["United States Minor Outlying Islands", "UM"], 
//         ["Uruguay", "UY"], 
//         ["Uzbekistan", "UZ"], 
//         ["Vanuatu", "VU"], 
//         ["Venezuela", "VE"], 
//         ["Vietnam", "VN"], 
//         ["British Virgin Islands", "VG"], 
//         ["U.s. Virgin Islands", "VI"], 
//         ["Wallis And Futuna", "WF"], 
//         ["Western Sahara", "EH"], 
//         ["Yemen", "YE"], 
//         ["Zambia", "ZM"], 
//         ["Zimbabwe", "ZW"]
//     ];

//     if (to == 'abbr'){
//         input = input.replace(/-/g,' ')
//         input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//         //input = $.parseHTML(input)[0];

//         if(teste){
//             console.log(input)
//             teste = 0;
//         }
//         if(input == "R&eacute;union")
//             input = "Reunion";
//         if(input == "Cura&ccedil;ao")
//             input = "Curaçao";
        

//         for(i = 0; i < states.length; i++){
//             if(states[i][0] == input){
//                 return(states[i][1]);
//             }
//         }    
//     } else if (to == 'name'){
//         input = input.toUpperCase();
//         for(i = 0; i < states.length; i++){
//             if(states[i][1] == input){
//                 return(states[i][0]);
//             }
//         }    
//     }
// }

// fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
// 		"x-rapidapi-key": "aaa3061058msha72cad84ec87d15p13783djsn12e726554d6a"
// 	}
// })
// .then(response => {
//     console.log(response);

//     response.json().then(function (data) {
//         // do something with the text response 
//         console.log(data);
//         // This is the JSON from our response

//         $.each( data.affected_countries, function( key, value ) {
//             //console.log( value);
//             countries.push(value);
//             if(typeof abbrState(value, 'abbr') === 'undefined'){
//                // console.log(value)
//                 teste = 1;
//             }
    
                
    
//             //console.log(polygonSeries.data)
//         });
//     //console.log(countries)

// //console.log(countries)
//     //timeline.forEach((date, index, array) => {
        
//        //console.log(date)

//         countries.forEach((value, index, array) => {
//             //date = "2020-03-22"
//            // console.log(date)
//         //$.each( countries, function( key, value ) {
//             //console.log(value)
            
//             fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country="+value+"&date="+today , {
//                 "method": "GET",
//                 "headers": {
//                     "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
//                     "x-rapidapi-key": "aaa3061058msha72cad84ec87d15p13783djsn12e726554d6a"
//                 }
//             })
//             .then(response => {
//                 console.log();
                
//                 response.json().then(function (data) {
//                     console.log(data)
//                     //console.log(data.stat_by_country[data.stat_by_country.length-1])

//                     //console.log(data)
//                     //console.log(data.stat_by_country[data.stat_by_country.length-1].country_name)
//                     //console.log(data.stat_by_country[data.stat_by_country.length-1].record_date.slice(0,10))
//                     /*
//                     if(typeof data.stat_by_country[data.stat_by_country.length-1] == 'undefined'){
//                         listTemp.push({
//                             country_name: data.country,
//                             confirmed: 0,
//                             active: 0,
//                             deaths: 0,
//                             recovered: 0,
//                             serious_critical: 0,
//                             total_per1m: 0,
//                             id: abbrState(data.country, 'abbr')
//                         })
//                     }else{
//                         listTemp.push({
//                             country_name: data.stat_by_country[data.stat_by_country.length-1].country_name,
//                             confirmed: data.stat_by_country[data.stat_by_country.length-1].total_cases,
//                             active: data.stat_by_country[data.stat_by_country.length-1].active_cases,
//                             deaths: data.stat_by_country[data.stat_by_country.length-1].total_deaths,
//                             recovered: data.stat_by_country[data.stat_by_country.length-1].total_recovered,
//                             serious_critical: data.stat_by_country[data.stat_by_country.length-1].serious_critical,
//                             total_per1m: data.stat_by_country[data.stat_by_country.length-1].total_cases_per1m,
//                             id: abbrState(data.stat_by_country[data.stat_by_country.length-1].country_name, 'abbr')
//                         })
//                     }
//                 */
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//         });
//     //});
// x = covid_world_timeline;
// //timelineWorld.push({date: date , list: listTemp});
//       });
// }).then(function (data) {
	
// })
// .catch(err => {
//     console.log(err);
// });
    