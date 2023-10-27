export const ABI = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, {
    "inputs": [],
    "name": "AccessControlBadConfirmation",
    "type": "error"
  }, {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, {
      "internalType": "bytes32",
      "name": "neededRole",
      "type": "bytes32"
    }], "name": "AccessControlUnauthorizedAccount", "type": "error"
  }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
  }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "numerator",
      "type": "uint256"
    }, { "internalType": "uint256", "name": "denominator", "type": "uint256" }],
    "name": "ERC2981InvalidDefaultRoyalty",
    "type": "error"
  }, {
    "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }],
    "name": "ERC2981InvalidDefaultRoyaltyReceiver",
    "type": "error"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, {
      "internalType": "uint256",
      "name": "numerator",
      "type": "uint256"
    }, { "internalType": "uint256", "name": "denominator", "type": "uint256" }],
    "name": "ERC2981InvalidTokenRoyalty",
    "type": "error"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, {
      "internalType": "address",
      "name": "receiver",
      "type": "address"
    }], "name": "ERC2981InvalidTokenRoyaltyReceiver", "type": "error"
  }, { "inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error" }, {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
  }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, {
    "inputs": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }], "name": "OwnableInvalidOwner", "type": "error"
  }, {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, {
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
  }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, {
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
  }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, {
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
  }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, {
      "indexed": true,
      "internalType": "address",
      "name": "approved",
      "type": "address"
    }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "Approval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, {
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }],
    "name": "ApprovalForAll",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "uint256",
      "name": "fromTokenId",
      "type": "uint256"
    }, { "indexed": false, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }],
    "name": "ConsecutiveTransfer",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "indexed": true,
      "internalType": "bytes32",
      "name": "previousAdminRole",
      "type": "bytes32"
    }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }],
    "name": "RoleAdminChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "indexed": true,
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }],
    "name": "RoleGranted",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "indexed": true,
      "internalType": "address",
      "name": "account",
      "type": "address"
    }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }],
    "name": "RoleRevoked",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "Transfer",
    "type": "event"
  }, {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "MAX_MINT_PER_TX",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "MINT_PRICE",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "OPERATOR_ROLE",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "OWNER",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, {
      "internalType": "uint256",
      "name": "_quantity",
      "type": "uint256"
    }], "name": "airdropMint", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "_quantity", "type": "uint256" }],
    "name": "alMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "allowList",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "allowListSum",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }], "name": "approve", "outputs": [], "stateMutability": "payable", "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "baseURI",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "extension",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "getApproved",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }],
    "name": "getRoleAdmin",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }],
    "name": "hasRole",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "isRevealed",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "notRevealedURI",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "ownerOf",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "phase",
    "outputs": [{ "internalType": "enum Test.Phase", "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "presaleMinted",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "_quantity", "type": "uint256" }],
    "name": "publicMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "internalType": "address",
      "name": "callerConfirmation",
      "type": "address"
    }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, {
      "internalType": "uint256",
      "name": "salePrice",
      "type": "uint256"
    }],
    "name": "royaltyInfo",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function"
  }, {
    "inputs": [{
      "internalType": "address[]",
      "name": "_accounts",
      "type": "address[]"
    }, { "internalType": "uint256[]", "name": "_quantities", "type": "uint256[]" }],
    "name": "setAllowList",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "_receiver", "type": "address" }, {
      "internalType": "uint96",
      "name": "_feeNumerator",
      "type": "uint96"
    }], "name": "setDefaultRoyalty", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [{ "internalType": "string", "name": "_extension", "type": "string" }],
    "name": "setExtension",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "bool", "name": "_status", "type": "bool" }],
    "name": "setIsRevealed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }],
    "name": "setNotRevealedURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "setPhaseALSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "setPhasePaused",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "setPhasePublicSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }],
    "name": "supportsInterface",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "tokenURI",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
]