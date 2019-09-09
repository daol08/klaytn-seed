pragma solidity ^0.5.6;


import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract DAOLCard is ERC721 {
    struct Card {
        string name;
        uint256 balance;

    }
    Card[] public cards;
    address public owner;

    constructor()  ERC721Full("DO", "DCARD")public {
        owner = msg.sender;

    }
    function mintCard(string memory name, uint memory balance) public {
        require(owner == msg.sender);
        uint cardId = cards.length;

        Card card = Card(name, balance);
        cards.push(card);

        _mint(address , cardId);

    }
    function getCardCount() public view returns (uint count) {

    }

}