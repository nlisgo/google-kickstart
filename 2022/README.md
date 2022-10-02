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
## practice

<!-- stage-start: practice -->

### Sherlock and Watson Gym Secrets

<!-- problem-start: practice:sherlock-and-watson-gym-secrets -->

```
cat ./practice/sherlock-and-watson-gym-secrets/sample.in | docker run -i -v $(pwd):/app -w /app/practice/sherlock-and-watson-gym-secrets node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test practice/sherlock-and-watson-gym-secrets.test.js
```

<!-- problem-end: practice:sherlock-and-watson-gym-secrets -->

<!-- stage-end: practice -->
