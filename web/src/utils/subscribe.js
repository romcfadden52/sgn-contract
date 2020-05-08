const POLL_INTERVAL = 1000;

export const subscribeEvent = (account, contracts) => {
  const { Guard, CELRToken } = contracts;

  Guard.events.InitializeCandidate(
    {
      fromBlock: 0
    },
    (err, event) => {
      if (err) {
        console.log(err);
        return;
      }

      const { candidate } = event.returnValues;
      Guard.methods.getCandidateInfo.cacheCall(candidate);
    }
  );

  CELRToken.events.Approval(
    {
      filter: {
        owner: account,
        spender: Guard.address
      }
    },
    (err, event) => {
      if (err) {
        return;
      }

      getCelrAllowance(account, contracts);
    }
  );

  getCelrAllowance(account, contracts);
};

export const subscribeChainInfo = (web3, dispatch) => {
  const account = web3.currentProvider.selectedAddress;
  let blockNumber;

  setInterval(() => {
    if (account !== web3.currentProvider.selectedAddress) {
      window.location.reload();
    }

    return web3.eth.getBlock('latest').then(block => {
      if (block && blockNumber !== block.number) {
        dispatch({
          type: 'network/save',
          payload: { block }
        });
        blockNumber = block.number;
      }
    });
  }, POLL_INTERVAL);
};

const getCelrAllowance = (account, contracts) => {
  const { CELRToken, Guard } = contracts;
  CELRToken.methods.allowance.cacheCall(account, Guard.address);
};