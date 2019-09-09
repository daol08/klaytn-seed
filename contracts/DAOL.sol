pragma solidity ^0.5.6;


import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract DAOLCard is ERC721Full, ERC721Mintable {
    struct Card {
        string name;
        uint256 balance;

    }
    Card[] public cards;
    address public owner;

    constructor() public ERC721Full("DO", "DCARD"){
        owner = msg.sender;

    }

    function mintCard(string memory name, uint256 balance, address account) public {
        require(owner == msg.sender);
        uint cardId = cards.length;

        Card memory card = Card(name, balance);
        cards.push(card);

        _mint(account , cardId);

    }
    function getCardCount() public view returns (uint count) {
        return cards.length;
    }

}