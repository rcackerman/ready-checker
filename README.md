# Ready Checker

Ready Checker makes it easier to keep track of Certificates of Readiness and whether the People were ready at the ensuing court date.

## Background

In New York State, criminal defendants are protected by [Speedy Trial rights](https://www.avvo.com/legal-guides/ugc/speedy-trial-in-new-york-state), laid out in CPL 30.30. In general, the 30.30 statute requires that "a prosecutor has to be ready for trial from the time of arraignment, as follows: (a) six months for a Felony; (b) ninety days for a Class A Misdemeanor; (c) sixty days for a Class B Misdemeanor; and (d) thirty days for a violation". After the prosecutor has used up their 30.30 time, the defense can move to dismiss the case. This is to protect defendants from being up for [3 years without a trial](https://en.wikipedia.org/wiki/Kalief_Browder). 

However, 30.30 should be thought of more like a stopwatch: different actions by the prosecutor and the defense attorney start and stop the countdown until 30.30 time is up. One major way that the prosecutor can stop the 30.30 watch is by filing a Certificate of Readiness (COR), which says that they are ready for trial. Because it stops the clock, filing CORs right after a court date means that the time between court dates does not count toward the defendant's speedy trial rights. This can buy prosecutors a lot of time, and can keep cases open indefinitely.

The ability to stop time is tempting for prosecutors, so the court allows defense attorneys to ask to count that time if they can show that the CORs filed are illusory; that is, that the prosecutor filed them knowing full well that they would not actually be ready for trial. In New York City, CORs are on paper, making it hard to keep track of when they have been filed, and whether the People were actually ready. This app, designed and built by staff at [New York County Defender Services](http://nycds.org/), aims to make clear if the People are filing illusory CORs.

## Deploy this App Yourself

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation

* `git clone <repository-url>` this repository
* `cd ready-checker`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Contributing

Contributions are welcome! Anything that doesn't work as intended is a bug, so feel free to add an issue or submit a pull request.
