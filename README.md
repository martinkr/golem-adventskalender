# GOLEM ADVENTSKALENDER

Herzlich willkommen zum GitHub Repository des GOLEM Adventskalenders 2024. Hier findet ihr den Quellcode zum Hand-on Tutorial! Hier findet ihr zum Beispiel den [Datenbank Export][https://github.com/martinkr/golem-adventskalender/blob/main/database.json].

## Beispielseite

Unter [https://adventskalender-six.vercel.app/](https://adventskalender-six.vercel.app/) könnt Ihr den fertigen Adventskalender, basierend auf dem hier veröffentlichten Quellcode in der Debug-Version (`debug=true`) testen.

## Den Quellcode lokal verwenden

Notwendig sind nur zwei einfache Schritte,

- setzten der Variable `MONGODB_URI` in der Datei `.env.local` (mehr hierzu im Artikel)
- starten von Next.js im Entwicklungsmodus `bash npm run dev`

Und schon könnt Ihr den Adventskalender unter [http://localhost:3000](http://localhost:3000) lokal testen!

## Links

Im folgenden noch ein paar Links zu den verwendeten Technlologien:

- [React](https://react.dev/) ist eine Library für Benutzeroberflächen, sogenannten Komponenten.
- [Next.js](https://nextjs.org/) wird von einigen der weltweit größten Unternehmen verwendet und ermöglicht die Erstellung hochwertiger Webanwendungen mit der Leistung von React-Komponenten.
- [TailwindCSS](https://tailwindcss.com/) ist ein Utility-First-CSS-Framework mit vielen Klassen wie `flex`, `pt-4`, `text-center` und `rotate-90`, die so zusammengesetzt werden können, dass direkt im Markup beliebige Designs erstellt werden.

- [MongoDB](https://www.mongodb.com/) ist eine universelle, dokumentenbasierte, verteilte Datenbank, die für moderne Anwendungsentwickler und das Cloud-Zeitalter entwickelt wurde.

## Über den Autor

[Martin Krause](https://www.linkedin.com/in/mkrause) entwickelt seit über 20 Jahren Webseiten. Er war unter anderem bei Razorfish, Sapient, Publicis und BORN als Engineering Manager, Frontend-Architekt und Mentor tätig und arbeitet zur Zeit als freiberuflicher Solution Architekt und Remote Consultant mit den Schwerpunkten Full Stack, Frontend und Headless. Vor Kurzem veröffentlichte er bei [No Starch Press](https://nostarch.com/complete-developer) das Buch [The Complete Developer – Master the Full Stack with TypeScript, React, Next.js, MongoDB, and Docker](https://www.amazon.de/-/en/Martin-Krause/dp/1718503288/). Als professioneller Taucher verbringt er seine Freizeit vorzugsweise unter Wasser.
