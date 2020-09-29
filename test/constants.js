module.exports = Object.freeze({
  GANACHE_ACCOUNT_NUM: 20, // defined in .circleci/config.yml

  // DPoS constructor params
  GOVERN_PROPOSAL_DEPOSIT: 100,
  GOVERN_VOTE_TIMEOUT: 20,
  SLASH_TIMEOUT: 50,
  MIN_VALIDATOR_NUM: 1,
  MAX_VALIDATOR_NUM: 11,
  MIN_STAKING_POOL: '4000000000000000000', // need to be larger than CANDIDATE_STAKE for test purpose
  ADVANCE_NOTICE_PERIOD: 100,
  DPOS_GO_LIVE_TIMEOUT: 50,

  TYPE_VALIDATOR_ADD: 0,
  TYPE_VALIDATOR_REMOVAL: 1,

  ZERO_ADDR: '0x0000000000000000000000000000000000000000',
  // value of an indexed null bytes
  HASHED_NULL: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',

  COMMISSION_RATE: 100,
  RATE_LOCK_END_TIME: 2,

  MIN_SELF_STAKE: '2000000000000000000',
  HIGHER_MIN_SELF_STAKE: '3000000000000000000',
  LOWER_MIN_SELF_STAKE: '1000000000000000000',

  ENUM_SLASH_TIMEOUT: 2,
  ENUM_MIGRATION_TIME: 7,
  MIGRATOIN_START_TIME: 10,

  ENUM_VOTE_TYPE_YES: 1,

  DELEGATOR_STAKE: '5000000000000000000',
  DELEGATOR_WITHDRAW: '5000000000000000000',
  CANDIDATE_STAKE: '3000000000000000000',
  CANDIDATE_WITHDRAW_UNDER_MIN: '1000000000000000001', // CANDIDATE_STAKE - CANDIDATE_WITHDRAW_UNDER_MIN < MIN_SELF_STAKE

  SUB_FEE: 100
});
