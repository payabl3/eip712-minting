import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

export const getEIP712Signature = async (
  _domain: any,
  _types: any,
  _value: any,
  _signer: HardhatEthersSigner
) => {
  const signature = await _signer.signTypedData(_domain, _types, _value);
  return signature;
};
