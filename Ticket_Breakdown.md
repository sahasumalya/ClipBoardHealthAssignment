# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here



Ticket-1:- a.A spike story investigating regarding the data storage in databases.How the data is stored in defferent tables.
           b.Which table will be suitable to add the custom agent id column?
           c.What backend apis are used to make agent entries by facilities?
           d.What UI interface is used to generate and submit forms by facilities to add agents and where facilties will add custom agentid.
           e.Need to understand how 'getShiftsByFacility' function is fetching data from DB and have to return custom agent id with the results.

Ticket-2:- .Make the database schema changes.Add the column in agents table may be.


Ticket-3:-. Make the backend api change to store custom agentid in db.


Ticket-4:-  Make the UI changes in the form to be submiited by facility to add agents to consume the custom agentID and use the new api version for submitting the form.


Ticket-5:- Make changes in the getShiftsByFacility function to get the custom agentID and change the column  name of the agentId in report generation if required.


Ticket-6:- Add instrumentation logs to monitor the analytics and failures, also add feature flag to roll out the feature by throttling(first 10%, 20% so on) with the help of running experiments.


Ticket-7:- Performance testing.
