#!/bin/bash

# using the -u, you can unlock any account on the forked chain
# you can impersonate anyone - very cool

private_key='b90710e4e204dce401d3e5401586f7eef75200e3cc0da0f51b80c5a624679c6c'
eth_amt='0x10000000000000000000'

second_acct='6ddc72034339e67ac7edd37c4a913f46a6c7fc27a28f4249deccf4989e0b7481'
eth_amt2='0x10000000000000000000'

# temporary - remember to test without the -l

ganache-cli \
  --fork ws://192.168.1.2:9551 \
  --account "$private_key,$eth_amt" \
  --account "$second_acct,$eth_amt2"
