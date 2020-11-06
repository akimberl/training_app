require('dotenv').config();
const mongoose = require('mongoose');
const Wod = require('../models/wod');

// mongoose connection
mongoose.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }).then(()=> console.log('mongoose connected'));

// array of wods
const array = [
  {
  type: 'JYB',
  name: 'BARBARA',
  rx: ' ',
  format: '5 ROUNDS 3 MIN REST',
  wod: ['20 Pull-ups', '30 Push-ups', '40 Sit-ups', '50 Squats'],
},
{
  type: 'JYB',
  name: 'CHELSEA',
  rx: ' ',
  format: 'EMOM FOR 30 MIN',
  wod: ['5 Pull-ups', '10 Push-ups', '15 Squats'],
},
{
  type: 'JYB',
  name: 'MARY',
  rx: ' ',
  format: 'AMRAP IN 20 MIN',
  wod: ['5 Handstand push-ups', '10 Single leg squats', '15 Pull-ups'],
},
{
  type: 'JYB',
  name: 'CINDY',
  rx: ' ',
  format: 'AMRAP IN 20 MIN',
  wod: ['5 Pull-ups', '10 Push-ups', '15 Squats'],
},
{
  type: 'JYB',
  name: 'ANNIE',
  rx: ' ',
  format: '50-40-30-20-10',
  wod: ['Double unders', 'Sit-ups'],
},
{
  type: 'JYB',
  name: 'NICOLE',
  rx: ' ',
  format: 'AMRAP IN 20 MIN',
  wod: ['400m run', 'Max rep pull-ups'],
},
{
  type: 'JYB',
  name: 'ANGIE',
  rx: ' ',
  format: 'AFAP',
  wod: ['100 Pull-ups', '100 Push-ups', '100 Sit-ups', '100 Squats'],
},
{
  type: 'NBH',
  name: 'EVA',
  rx: 'rx = 2 POOD',
  format: '5 ROUNDS',
  wod: ['800m run', '30 kettlebell swings', '30 pull-ups'],
},
{
  type: 'NBH',
  name: 'HELEN',
  rx: 'rx = 1.5 POOD',
  format: '3 ROUNDS',
  wod: ['400m run', '21 Kettlebell swings', '12 Pull-ups'],
},
{
  type: 'NBH',
  name: 'KELLY',
  rx: 'rx = 20 LBS',
  format: '5 ROUNDS',
  wod: ['400m run', '30 Box(24 inches) jumps', '30 Wall balls'],
},
{
  type: 'NBH',
  name: 'KAREN',
  rx: 'rx = 20 LBS',
  format: 'AFAP',
  wod: ['150 Wall balls'],
},
{
  type: 'MIU',
  name: 'AMANDA',
  rx: 'rx = 135 LBS',
  format: '9-7-5',
  wod: ['Muscle-ups', 'Snatch'],
},
{
  type: 'MIU',
  name: 'JACKIE',
  rx: 'rx = 45 LBS',
  format: 'AFAP',
  wod: ['1000M row', '50 thrusters', '30 pull-ups'],
},
{
  type: 'MIU',
  name: 'DIANE',
  rx: 'rx = 225 LBS',
  format: '21-15-9',
  wod: ['Deadlift', 'Handstand push-ups'],
},
{
  type: 'MIU',
  name: 'FRAN',
  rx: 'rx = 95 LBS',
  format: '21-15-9',
  wod: ['Thrusters', 'Pull-ups'],
},
{
  type: 'MIU',
  name: 'ELIZABETH',
  rx: 'rx = 135 LBS',
  format: '21-15-9',
  wod: ['Cleans', 'Ring dips'],
},
{
  type: 'MIU',
  name: 'NANCY',
  rx: 'rx = 95 LBS',
  format: '5 rounds',
  wod: ['400M run', '15 overhead squats'],
},
{
  type: 'MIU',
  name: 'LYNNE',
  rx: ' ',
  format: '5 ROUNDS MAX REPS',
  wod: ['Body weight bench press', 'Pull-ups'],
},
{
  type: 'GH',
  name: 'ISABEL',
  rx: 'rx = 135 LBS',
  format: 'AFAP',
  wod: ['30 Snatches'],
},
{
  type: 'GH',
  name: 'LINDA',
  rx: ' ',
  format: '10/9/8/7/6/5/4/3/2/1',
  wod: ['Deadlift 1.5 body weight', 'Bench body weight', 'Clean 3/4 body weight'],
},
{
  type: 'GH',
  name: 'GRACE',
  rx: 'rx = 135 LBS',
  format: 'AFAP',
  wod: ['30 Clean and jerks'],
},
];

Wod.insertMany(array).then(() => {
  console.log('DB is seeded');
  mongoose.disconnect();
}).catch((err) => {
  console.log('EEEERRRROROOROROR >>>>>>>>>', err);
});
