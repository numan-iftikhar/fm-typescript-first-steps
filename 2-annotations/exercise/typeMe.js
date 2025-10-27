"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventDetails = void 0;
var events = [
    {
        id: "1",
        title: "Thanksgiving Potluck",
        date: "2025-11-29",
        image_url: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=500",
        host_id: 1,
        rsvps: [{ user_id: 1 }, { user_id: '5' }, { user_id: 3 }]
    },
    {
        id: 2,
        title: "EventExpo 2026",
        date: '2026-04-01',
        description: "Discover the future of event planning at EventExpo 2026. Network with industry leaders, explore cutting-edge technologies, and attend inspiring workshops.",
        host_id: "3"
    }
];
// Should return an event object, or null if not found
function getEventById(id) {
    return events.filter(function (e) { return e.id === id; })[0];
}
// Should return an object with dateString & isPast 
function getEventDate(event) {
    var eventDate = new Date(event.date);
    var dateString = eventDate.toDateString();
    var isPast = eventDate < new Date();
    return { dateString: dateString, isPast: isPast };
}
// Should return a string like '5 going' or '0 went'
var getEventRsvpCount = function (event) {
    var _a;
    var count = (_a = event.rsvps) === null || _a === void 0 ? void 0 : _a.length;
    var isPast = getEventDate(event).isPast;
    var text = isPast ? 'went' : 'going';
    return [count, text].join(' ');
};
// Should return a string with the event's title, date, and rsvps
// (if the event exists), or the string 'Event not found' (if not)
var getEventDetails = function (eventId) {
    var event = getEventById(eventId);
    if (event) {
        var dateString = getEventDate(event).dateString;
        var eventRsvps = getEventRsvpCount(event);
        return "".concat(event.title, " on ").concat(dateString, ": ").concat(eventRsvps);
    }
    ;
};
exports.getEventDetails = getEventDetails;
function test() {
    var results = [{
            actual: getEventDetails(1),
            expected: 'Thanksgiving Potluck on Fri Nov 28 2025: 3 going',
        },
        {
            actual: getEventDetails(2),
            expected: 'EventExpo 2026 on Tue Mar 31 2026: 0 going',
        },
        {
            actual: getEventDetails(404),
            expected: 'Event not found',
        }];
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        var label = result.expected === result.actual ? '✅' : '❌';
        console.log(label, result.actual);
    }
}
test();
