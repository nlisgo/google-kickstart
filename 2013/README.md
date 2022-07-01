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

<!-- stage-end: practice -->
