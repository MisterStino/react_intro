# Maak een app die:

- een lijst met personen / studenten kan weergeven.
- hier leerlingen aan toe kan voegen
- een leerling kan verwijderen

## Hoe deze les volgen:

- Als eerst wil je de gehele content van de file First kopieren. En plakken in App.js
- Dit wil je ook doen voor Second.js
- En ook voor Third.js
- Note: het een conventie om React componenten met een hoofdletter te beginnen
- De HTML die je in react schrijf is eigenlijk JavaScript en wordt JSX genoemd. Je kan tussendoor

## Wat is State in React?

What Is 'State' in ReactJS? The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders

## First

- in deze file maken we de state aan
- maken we functies om de state te updaten als er op een button geklikt wordt
- en zetten we in de return wat de app nou exact moet renderen, op de plek waar het element met id 'root' in index.html staat.
- hier worden alle elementen stap voor stap uitgeschreven zoals je gewend bent te doen met normale html
- note: in een map moet elk element een key meekrijgen, anders kan react niet weten welk element aangepast is en zal je een error melding krijgen. Probeer maar :)
- ze de comments voor extra uitleg

## Second.js

- Je wilt in React stukken code in React die een eigen, duidelijke deelfunctionaliteit heeft herkennen en in een eigen component stoppen.
- Hier spotten we dat de code op regel 48 - 51 iets specifieks doet, namelijk over de lijst met studenten mappen -> een array van elementen ervan maken en in de render van de App.js component printen.
- We maken er een eigen component van door hier een file voor te maken, hierin een functionele component (een functie) voor aan te maken, en deze te exporteren.
- Vervolgens kunnen we deze importeren in App.js
- En gebruiken alsof we een eigen html element hebben gemaakt! , namelijk: <StudentListing studentList={studentList}/>
- Hier zien we eindelijk ook wat een prop is, namelijk dit deel studentList={studentList}
- Hier kan je informatie zoals de state van een component, doorgeven aan de child component. In de vorm van een prop.
- In StudentList (de component zie) je dat we de prop die we in App.js meegeven, weer van de props afplukken (StudentList)

## Third.js

- Here hebben we het herkennen van specifieke functionaliteit verder genomen.
- We hebben gezien dat zowel de code voor het verwijderen van een student als het toevoegen, bijna precies dezelfde code is!
- We hebben hier een algemene component gemaakt, namelijk InputForm.
- Afhankelijk van welke values je bij de properties meegeeft, doet deze andere dingen.
- Misschien doet dit je ergens denken aan parameters en argumenten bij functies....?
- Als gevolg zie je dat de algemene component: App.js een stuk overzichtelijker is geworden.
- Ook is het bijhouden van de state een stuk makkelijker en overzichtelijker. Ze lopen niet meer allemaal in de hoofdcomponent.
- Maar zijn nu ook opgesplits in deel componenten.
