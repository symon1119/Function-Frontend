// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WaterSupply {
    struct WaterSource {
        uint256 id;
        string name;
        uint256 pricePerLiter;
        uint256 availableLiters;
    }

    mapping(uint256 => WaterSource) public waterSources;
    uint256 public totalWaterSources;

    event WaterSourceAdded(uint256 indexed id, string name, uint256 pricePerLiter, uint256 availableLiters);
    event WaterPurchased(uint256 indexed id, uint256 liters);

    function addWaterSource(string memory _name, uint256 _pricePerLiter, uint256 _availableLiters) public {
        totalWaterSources++;
        waterSources[totalWaterSources] = WaterSource(totalWaterSources, _name, _pricePerLiter, _availableLiters);
        emit WaterSourceAdded(totalWaterSources, _name, _pricePerLiter, _availableLiters);
    }

    function buyWater(uint256 _id, uint256 _liters) public payable {
        require(waterSources[_id].availableLiters >= _liters, "Not enough water available");
        uint256 totalPrice = _liters * waterSources[_id].pricePerLiter;
        require(msg.value == totalPrice, "Incorrect price sent");

        waterSources[_id].availableLiters -= _liters;
        emit WaterPurchased(_id, _liters);
    }

    function waterSourceAvailability(uint256 _id) public view returns (uint256) {
        return waterSources[_id].availableLiters;
    }

    function getWaterSource(uint256 _id) public view returns (WaterSource memory) {
        return waterSources[_id];
    }
}