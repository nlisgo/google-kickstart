## Prerequisites

- [Docker Desktop]([http://](https://docs.docker.com/get-docker/))

## Testing

### Setup

```
docker run -v $(pwd):/app -w /app/test node npm install
```

### Run all tests

```
docker run -it -v $(pwd):/app -w /app/test node npm test
```

<!-- intro-end -->
## Practice Round

<!-- stage-start: practice -->

### Moist

<!-- problem-start: practice:moist -->

```
cat ./practice/moist/sample.in | docker run -i -v $(pwd):/app -w /app/practice/moist node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test practice/moist.test.js
```

<!-- problem-end: practice:moist -->

### Captain Hammer

<!-- problem-start: practice:captain-hammer -->

```
cat ./practice/captain-hammer/sample.in | docker run -i -v $(pwd):/app -w /app/practice/captain-hammer node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test practice/captain-hammer.test.js
```

<!-- problem-end: practice:captain-hammer -->

### Bad Horse

<!-- problem-start: practice:bad-horse -->

```
cat ./practice/bad-horse/sample.in | docker run -i -v $(pwd):/app -w /app/practice/bad-horse node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test practice/bad-horse.test.js
```

<!-- problem-end: practice:bad-horse -->

<!-- stage-end: practice -->
## Round A

<!-- stage-start: round-a -->

### Sorting

<!-- problem-start: round-a:sorting -->

```
cat ./round-a/sorting/sample.in | docker run -i -v $(pwd):/app -w /app/round-a/sorting node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-a/sorting.test.js
```

<!-- problem-end: round-a:sorting -->

### Read Phone Number

<!-- problem-start: round-a:read-phone-number -->

```
cat ./round-a/read-phone-number/sample.in | docker run -i -v $(pwd):/app -w /app/round-a/read-phone-number node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-a/read-phone-number.test.js
```

<!-- problem-end: round-a:read-phone-number -->

<!-- stage-end: round-a -->
