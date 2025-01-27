const _ = require('lodash');

// Holiday dictionary
const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year", date: "2026-01-01" }
];

// Current date
const currentDate = new Date();

// Iterate and calculate days remaining
holidays.forEach(holiday => {
    const holidayDate = new Date(holiday.date);
    const diffTime = holidayDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(`Holiday: ${holiday.name}, Days until: ${diffDays}`);
});

// Use Lodash for random holiday
const randomHoliday = _.sample(holidays);
console.log(`Random Holiday: ${randomHoliday.name}, Date: ${randomHoliday.date}`);

// Use Lodash to find holiday indexes
const christmasIndex = _.findIndex(holidays, { name: "Christmas" });
const canadaDayIndex = _.findIndex(holidays, { name: "Canada Day" });
console.log(`Christmas Index: ${christmasIndex}, Canada Day Index: ${canadaDayIndex}`);
