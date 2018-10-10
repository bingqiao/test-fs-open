const UV_FS_O_EXLOCK_WIN = 0x10000000;
describe('fs.open test', function() {
    it('it should not open a file twice iwth EXLOCK', function() {
        var fs = require('fs')
        fs.open('test.txt', fs.constants.O_RDONLY | UV_FS_O_EXLOCK_WIN, (err, fd)=> {
            if (err) {
                console.log('failed to open file with error: ' + err);
                fail();
            } else {
                console.log('file opened with fd: ' + fd);
                fs.open('test.txt', fs.constants.O_RDONLY | UV_FS_O_EXLOCK_WIN, (err, fd)=> {
                if (err) {
                        console.log('failed to open file again with error: ' + err);
                    } else {
                        console.log('file opened again with fd: ' + fd)
                        fail();
                    }
                })
            }
        })
    })
})