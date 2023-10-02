const dates = [
  // ... (previously defined dates from MON SEP 8TH to MON SEP 15TH)

  {_id: '9', text: 'TUE SEP 16TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '10', text: 'WED SEP 17TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '11', text: 'THU SEP 18TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '12', text: 'FRI SEP 19TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '13', text: 'SAT SEP 20TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '14', text: 'SUN SEP 21ST', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '15', text: 'MON SEP 22ND', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '16', text: 'TUE SEP 23RD', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '17', text: 'WED SEP 24TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '18', text: 'THU SEP 25TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '19', text: 'FRI SEP 26TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '20', text: 'SAT SEP 27TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '21', text: 'SUN SEP 28TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '22', text: 'MON SEP 29TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '23', text: 'TUE SEP 30TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '24', text: 'WED OCT 1ST', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '25', text: 'THU OCT 2ND', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '26', text: 'FRI OCT 3RD', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '27', text: 'SAT OCT 4TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '28', text: 'SUN OCT 5TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
  {_id: '29', text: 'MON OCT 6TH', timeSlots: [
    { start: '7:00 AM', end: '8:00 AM' },
    { start: '8:00 AM', end: '9:00 AM' },
    { start: '9:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '1:00 PM' },
    { start: '1:00 PM', end: '2:00 PM' },
    { start: '2:00 PM', end: '3:00 PM' },
    { start: '3:00 PM', end: '4:00 PM' },
    { start: '4:00 PM', end: '5:00 PM' },
    { start: '5:00 PM', end: '6:00 PM' },
    { start: '6:00 PM', end: '7:00 PM' },
  ]},
];

export default dates;