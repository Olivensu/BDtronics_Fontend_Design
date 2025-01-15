import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

function FilterCard() {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <FilterListIcon className="text-gray-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-800">Filter By</h2>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Price</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>BDT 0.00 - BDT 9,999.99</span>
            <span>(4)</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>BDT 30,000.00 and above</span>
            <span>(1)</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-2">Brand</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Creality</span>
            <span>(1)</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>LiitoKala</span>
            <span>(3)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
