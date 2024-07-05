
## Installation

```bash
npm i @oman21/cryptograph-js
```

## Usage

```python
import { Cipher } from '@oman21/cryptograph-js';

const key = 12345;
const text = "Hello World! 4234309?_.";

const encrypted = Cipher(key, text);
console.log("encrypted", encrypted) // result: Igopt Yrvqe! 8746644?_.

const decrypted = Cipher(encrypted, true);
console.log("decrypted", decrypted); // result: Hello World! 4234309?_.
```

## Props

| Prop            | Type    | Default                                                                                                                      | Description                                            |
|-----------------|---------|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| key         | number  |                                                                                                                         | Datetime picker modal visible                          |
| text         | string     | ""                                                                                                                           | Set minimum date (Date or string).                     |
| decrypt         | boolean     | false                                                                                                                           | true for decode                     |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)