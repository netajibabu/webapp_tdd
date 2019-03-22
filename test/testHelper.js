const createTestCafe = require('testcafe');
var path = require('path');
const TEST_PORT = 1337;
var testcafe = null;

createTestCafe('localhost')
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();
        runner.startApp(`PORT=${TEST_PORT} node ./bin/www`)
        return runner
            .src([
                path.join(__dirname, 'acceptance/login_test.js'),
            ])
            .browsers(['chrome'])
            .run({
                skipJsErrors: true,
                speed: 1
            });
    }).catch(error =>{
})
    .finally(()=>{
        testcafe.close();

    });