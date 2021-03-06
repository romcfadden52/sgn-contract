// base on https://medium.com/edgefund/time-travelling-truffle-tests-f581c1964687

const advanceTimeAndBlock = async time => {
    await advanceTime(time);
    await advanceOneBlock();

    return Promise.resolve(web3.eth.getBlock('latest'));
};

const advanceTime = time => {
    return new Promise((resolve, reject) => {
        web3.currentProvider.send(
            {
                jsonrpc: '2.0',
                method: 'evm_increaseTime',
                params: [time],
                id: new Date().getTime()
            },
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            }
        );
    });
};

const advanceOneBlock = () => {
    return new Promise((resolve, reject) => {
        web3.currentProvider.send(
            {
                jsonrpc: '2.0',
                method: 'evm_mine',
                id: new Date().getTime()
            },
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                const newBlockHash = web3.eth.getBlock('latest').hash;

                return resolve(newBlockHash);
            }
        );
    });
};

async function advanceBlocks(number) {
    for (let i = 0; i < number; i++) {
        await advanceOneBlock();
    }
}

module.exports = {
    advanceTime,
    advanceOneBlock,
    advanceBlocks,
    advanceTimeAndBlock
};
