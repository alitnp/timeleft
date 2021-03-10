<!-- ABOUT THE PROJECT -->

## About The Project

This simple package takes a number in seconds and start to count down.

Functions:

- **ddhhmmss:** returns an array of time left [days, hours, minutes, seconds].
- **ddhhmmssColon:** returns a color separated string like this days : hours : minutes : seconds
- **days:** return string of days left 05
- **dd:** short name for days
- **hours:** return string of hours left 21
- **hh:** short name for hours
- **minutes:** return string of minutes left 51
- **mm:** short name for minutes
- **seconds:** return string of seconds left 22
- **ss:** short name for seconds

<!-- GETTING STARTED -->

## Getting Started

### Installation

Install NPM packages

```sh
npm i timeleft
```

05185320

## Usage

### ddhhmmss

```JS
import {ddhhmmss} from "timeleft";
ddhhmmss(500000);
// [05,18,53,30]
```

### ddhhmmssColon

```JS
import {ddhhmmssColon} from "timeleft";
ddhhmmssColon(500000);
// "05 : 18 : 53 : 30"
```

### days || dd

```JS
import {days} from "timeleft";
days(500000);
// "05"
```

```JS
import {dd} from "timeleft";
dd(500000);
// "05"
```

### hours || hh

```JS
import {hours} from "timeleft";
hours(500000);
// "18"
```

```JS
import {hh} from "timeleft";
hh(500000);
// "18"
```

### minutes || mm

```JS
import {minutes} from "timeleft";
minutes(500000);
// "53"
```

```JS
import {mm} from "timeleft";
mm(500000);
// "53"
```

### seconds || ss

```JS
import {seconds} from "timeleft";
seconds(500000);
// "30"
```

```JS
import {ss} from "timeleft";
ss(500000);
// "30"
```
