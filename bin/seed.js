const mongoose = require('mongoose');
const League = require('../models/league');

mongoose.connect(process.env.MONGODB_URI);


const league = [
  {
    name: 'Liga Santander',
    leagueLogo: '',
    country: 'Spain',
    teams: [
      {
        name: 'Alavés',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/alaves.svg',
      },
      {
        name: 'Athletic de Bilbao',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/atletico-bilbao.svg',
      },
      {
        name: 'Atlético de Madrid',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/atletico-madrid.svg',
      },
      {
        name: 'Barcelona',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/barcelona.svg',
      },
      {
        name: 'Celta de Vigo',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/celta.svg',
      },
      {
        name: 'Deportivo de la Coruña',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/deportivo-coruna.svg',
      },
      {
        name: 'Eibar',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/eibar.svg',
      },
      {
        name: 'Espanyol',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/espanyol.svg',
      },
      {
        name: 'Granada',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/granada.svg',
      },
      {
        name: 'Las Palmas',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/palmas.svg',
      },
      {
        name: 'Leganés',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/leganes.png',
      },
      {
        name: 'Málaga',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/malaga.svg',
      },
      {
        name: 'Osasuna',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/osasuna.svg',
      },
      {
        name: 'Real Betis',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/betis.svg',
      },
      {
        name: 'Real Madrid',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/real-madrid.svg',
      },
      {
        name: 'Real Sociedad',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/real-sociedad.svg',
      },
      {
        name: 'Sevilla',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/sevilla.png',
      },
      {
        name: 'Sporting de Gijón',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/sporting-gijon.svg',
      },
      {
        name: 'Valencia',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/valencia.svg',
      },
      {
        name: 'Villarreal',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/villarreal.svg',
      }
    ]
  },
  {
    name: 'Premier League',
    leagueLogo: '',
    country: 'England',
    teams: [
      {
        name: 'Arsenal',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/arsenal.png',
      },
      {
        name: 'Bournemouth',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/bournemouth.png',
      },
      {
        name: 'Burnley',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/burnley.png',
      },
      {
        name: 'Chelsea',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/chelsea.png',
      },
      {
        name: 'Crystal Palace',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/cristal-palace.png',
      },
      {
        name: 'Everton',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/everton.png',
      },
      {
        name: 'Hull City',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/hull-city.png',
      },
      {
        name: 'Leicester',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/leicester.png',
      },
      {
        name: 'Liverpool',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/liverpool.png',
      },
      {
        name: 'Manchester City',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/manchester-city.png',
      },
      {
        name: 'Manchester United',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/manchester-united.png',
      },
      {
        name: 'Middlesbrough',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/middlesbrough.png',
      },
      {
        name: 'Southampton',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/southampton.png',
      },
      {
        name: 'Stoke City',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/stoke-city.png',
      },
      {
        name: 'Sunderland',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/sunderland.png',
      },
      {
        name: 'Swansea City',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/swansea.svg',
      },
      {
        name: 'Tottenham',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/tottenham.svg',
      },
      {
        name: 'Watford',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/watford.png',
      },
      {
        name: 'West Bromwich Albion',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/west-bromwich.svg',
      },
      {
        name: 'West Ham',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/west-ham.svg',
      }
    ]
  },
  {
    name: 'Serie A',
    leagueLogo: '',
    country: 'Italy',
    teams: [
      {
        name: 'Atalanta',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/atalanta.svg',
      },
      {
        name: 'Bolonia',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/bologna.svg',
      },
      {
        name: 'Cagliari',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/cagliari.svg',
      },
      {
        name: 'Chievo',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/chievo-verona.svg',
      },
      {
        name: 'Crotone',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/crotone.svg',
      },
      {
        name: 'Empoli',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/empoli.svg',
      },
      {
        name: 'Fiorentina',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/fiorentina.png',
      },
      {
        name: 'Genoa',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/genoa.svg',
      },
      {
        name: 'Inter Milan',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/inter-milano.png',
      },
      {
        name: 'Juventus',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/juventus.svg',
      },
      {
        name: 'Lazio',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/lazio.png',
      },
      {
        name: 'AC Milan',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/milano.svg',
      },
      {
        name: 'Napoli',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/napoli.svg',
      },
      {
        name: 'Palermo',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/palermo.svg',
      },
      {
        name: 'Pescara',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/pescara.svg',
      },
      {
        name: 'Roma',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/roma.svg',
      },
      {
        name: 'Sampdoria',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/sampdoria.svg',
      },
      {
        name: 'Sassuolo',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/sassuolo.svg',
      },
      {
        name: 'Torino',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/torino.svg',
      },
      {
        name: 'Udinese',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/udinese.svg',
      }
    ]
  },
  {
    name: 'Bundesliga',
    leagueLogo: '',
    country: 'Germany',
    teams: [
      {
        name: 'Augsburg',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/augsburg.svg',
      },
      {
        name: 'Borussia Dortmund',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/borussia-dortmund.svg',
      },
      {
        name: 'Borussia Mönchengladbach',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/borussia-monchengladbach.svg',
      },
      {
        name: 'Bayer Leverkusen',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/bayer-leverkusen.png',
      },
      {
        name: 'Bayern München',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/bayern-munchen.svg',
      },
      {
        name: 'Darmstadt 98',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/darmstadt.svg',
      },
      {
        name: 'Eintracht',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/eintracht.png',
      },
      {
        name: 'Freiburg',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/freiburg.svg',
      },
      {
        name: 'Hamburguer SV',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/hamburg.svg',
      },
      {
        name: 'Hertha Berlin',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/hertha-berlin.svg',
      },
      {
        name: 'Hoffenheim',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/hoffenheim.png',
      },
      {
        name: 'Ingolstadt 04',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/ingolstadt.svg',
      },
      {
        name: 'Köln',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/koln.png',
      },
      {
        name: 'Mainz 05',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/mainz.svg',
      },
      {
        name: 'RB Leipzig',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/leipzig.png',
      },
      {
        name: 'Schalke 04',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/schalke.png',
      },
      {
        name: 'Werder Bremen',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/werder-bremen.svg',
      },
      {
        name: 'Wolfsburgo',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/wolfsburg.svg',
      }
    ]
  },
  {
    name: 'Eredivise',
    leagueLogo: '',
    country: 'Holland',
    teams: [
      {
        name: 'Ajax',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/ajax.svg',
      },
      {
        name: 'AZ Alkmaar',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/az-alkmar.png',
      },
      {
        name: 'Den Haag',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/den-haag.svg',
      },
      {
        name: 'Excelsior',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/excelsior.png',
      },
      {
        name: 'Feyenoord',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/feyenoord.svg',
      },
      {
        name: 'G.A.Eagles',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/deventer.svg',
      },
      {
        name: 'Groningen',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/groningen.svg',
      },
      {
        name: 'Heerenveen',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/heerenveen.svg',
      },
      {
        name: 'Heracles',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/heracles.svg',
      },
      {
        name: 'Nijmegen',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/nijmegen.svg',
      },
      {
        name: 'PSV Eindhoven',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/psv-eindhoven.svg',
      },
      {
        name: 'Roda',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/roda.svg',
      },
      {
        name: 'Sparta Rotterdam',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/rotterdam.png',
      },
      {
        name: 'Twente',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/twente.svg',
      },
      {
        name: 'Utrecht',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/utrecht.svg',
      },
      {
        name: 'Vitesse',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/vitesse.svg',
      },
      {
        name: 'Willem II',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/willem-2.svg',
      },
      {
        name: 'Zwolle',
        teamLogo: 'https://s3.eu-west-2.amazonaws.com/footballwatcherimages/zwolle.svg',
      }
    ]
  }

];




League.create(league, (err, docs)=>{
  if (err) { throw err };
    docs.forEach( (league) => {
      console.log(league.name)
    })
    mongoose.connection.close();
});
